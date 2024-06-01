# 选择Node.js 18的基础镜像
FROM node:18

LABEL maintainer="thawingx@gmail.com"

# 设置容器内的工作目录
WORKDIR /usr/src/app

# 复制package.json和pnpm-lock.yaml到工作目录
COPY package.json pnpm-lock.yaml ./

# 使用pnpm安装依赖
RUN npm install -g pnpm  && pnpm install

# 复制项目文件到工作目录
COPY . .

# 设置容器启动时执行的命令
CMD ["pnpm", "dev"]