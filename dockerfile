# 使用Node.js官方提供的镜像作为基础镜像
FROM node:14

# 设置工作目录
WORKDIR /usr/src/app

# 将package.json和package-lock.json复制到工作目录
COPY package*.json ./

# 安装应用依赖
RUN npm install

# 将应用源代码复制到工作目录
COPY . .

# 暴露容器的端口
EXPOSE 3000

# 定义容器启动命令
CMD ["node", "server.js"]
