<p align="center">
<img width="600" src="https://img.alicdn.com/imgextra/i1/O1CN01bg1tTN1p5ZOPmhKV0_!!6000000005309-55-tps-2200-981.svg">
</p>

---

## Introduction

If you are worrying about something builder, Such as form builder/table builder/chart builder/app builder etc.
Designable is your perfect choice.

## Screenshot

<img src="https://img.alicdn.com/imgextra/i1/O1CN01UYmA8f1apczHZRygt_!!6000000003379-2-tps-3040-1802.png" style="box-shadow:0px 0px 20px #aaa;border:1px solid #ddd"/>

## Features

- 🚀 High performance, Smooth and beautiful drag and drop experience
- 💡 Full scene coverage
- 🎨 Support Low Code and No Code
- 🏅 Strong scalability

## Website

[playground](https://designable.netlify.app)

## Contributors

This project exists thanks to all the people who contribute.

<p>
<a href="https://github.com/pindjs/designable/graphs/contributors"><img src="https://contrib.rocks/image?repo=alibaba/designable" /></a>
</p>

## 启动

**pnpm 必须升级到 8.x.x 版本**

使用其他版本如 pnpm@6 安装依赖会导致 `pnpm-lock.yaml` 的 `lockfileVersion` 被修改为 5.3，也就是使用 pnpm@6 安装依赖会修改 `pnpm-lock.yaml` 文件。最终导致运行 `pnpm start` 时报奇怪的错误。

```bash
# 方便执行 pnpm clean：一键移除各个包下面的 node_modules
pnpm i lerna@6 -g
pnpm i
cd formily/antd
pnpm start

# ======== 以下命令可以不用看了 ========

# 以下命令没用
pnpm bootstrap
pnpm start

# 拖一个输入框后，会报错
pnpm start:playground
```
