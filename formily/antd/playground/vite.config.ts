import { Alias, defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { GlobSync } from 'glob'
import { resolve } from 'path'
import fs from 'fs-extra'
// import basicSsl from '@vitejs/plugin-basic-ssl'

const getWorkspaceAlias = () => {
  const basePath = resolve(__dirname, '../../../')
  const pkg = fs.readJSONSync(resolve(basePath, 'package.json')) || {}
  const alias: Alias[] = []
  const workspaces = pkg.workspaces
  if (Array.isArray(workspaces)) {
    workspaces.forEach((pattern) => {
      const { found } = new GlobSync(pattern, { cwd: basePath })
      found.forEach((name) => {
        try {
          const pkg = fs.readJSONSync(resolve(basePath, name, './package.json'))
          alias.push({
            find: pkg.name,
            replacement: resolve(basePath, name, './src'),
          })
        } catch (error) {}
      })
    })
  }
  return alias
}

// https://vitejs.dev/config/
export default defineConfig({
  root: '.',
  plugins: [
    react(),
    // basicSsl(),
    // splitVendorChunkPlugin(),
  ],
  resolve: {
    alias: [
      { find: /^~/, replacement: '' },
      { find: '@', replacement: resolve(__dirname, 'src') },
      ...getWorkspaceAlias(),
    ],
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        charset: false,
      },
      scss: {
        javascriptEnabled: true,
        charset: false,
      },
    },
  },
  server: {},
  base: process.env.NODE_ENV === 'development' ? '' : '/designable2',
  build: {
    sourcemap: false,
    outDir: './build',
    rollupOptions: {
      output: {
        // manualChunks 拆包后，很容易出现产物脚本间循环引用的问题。参考：https://juejin.cn/book/7050063811973218341/section/7066601785166659620#heading-3
        manualChunks(id: any) {
          if (id.includes('node_modules')) {
            // ! /@formily 规则必须在 /lodash、/dayjs 规则之前
            if (id.includes('/@formily')) {
              return '@formily'
            }

            if (id.includes('/lodash')) {
              return 'lodash'
            }

            if (id.includes('/dayjs')) {
              return 'dayjs'
            }

            if (id.includes('/@ant-design/icons')) {
              return '@ant-design/icons'
            }

            if (id.includes('/antd')) {
              return 'antd'
            }

            if (['react', 'react-dom'].some((i) => id.includes(i))) {
              return 'react-vendor'
            }

            // 除以上之外的其他第三方库
            return 'vendor'
          }
        },
      },
    },
  },
})
