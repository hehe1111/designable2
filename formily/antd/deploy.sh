#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
pnpm build:playground

# 进入生成的文件夹
cd build/

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
# 同一台电脑同时存在多个 git 账号时，每一个仓库都需要各自声明 user.name 和 user.email，不能带上 --global 参数
git config user.name 'hehe1111'
git config user.email '2908749709@qq.com'

git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
git push -f git@github.com:hehe1111/designable2.git master:gh-pages

cd -

rm -rf build/
