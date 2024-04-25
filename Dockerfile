# 基于官方的Nginx镜像
# FROM nginx AS frontend
# 将项目下的 ./configs 文件夹放置在镜像中的 /home/nginx/configs 文件夹
# ADD ./configs /home/nginx/configs
# CMD ["nginx","-c","/home/nginx/configs/nginx.conf","-g", "daemon off;"]
# COPY nginx.conf /etc/nginx/
# 将dist文件中的内容复制到 /usr/share/nginx/html/ 这个目录下面
# COPY /dist/ /usr/share/nginx/html

# 暴露端口
# EXPOSE 80 9527
FROM node:latest AS backend      

# 创建文件
RUN mkdir -p /usr/src/app

# 指定容器工作目录
WORKDIR /usr/src/app           

# 把当前文件复制到容器工作目录 . 指的是所有文件
COPY . /usr/src/app            
ENV YT_HOME /path/to/java
# 安装依赖包
RUN npm install                                 

# 执行启动命令，一个dockerfile只能有一个CMD，如果多个则执行最后一个
CMD ["npm", "start"]

