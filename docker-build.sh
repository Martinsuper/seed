#!/usr/bin/env bash
containId=$(docker ps -aq --no-trunc --filter name=^seed$)
# 如果运行的该容器不为空，则停止正在执行的容器
if [ -n "$containId" ]; then
  echo "停止运行：" + "$contanId"
  docker stop "$containId"
  docker rm "$containId"
fi
# 查询镜像id
imageId=$(docker images -q --filter reference=mrtduan/seed)
# 删除镜像
if [ -n "$imageId" ]; then
  echo "删除镜像：" + "$imageId"
  docker rmi "$imageId"
fi
yarn build
docker build -t mrtduan/seed:latest $(
  cd $(dirname $0)
  pwd
)
#docker run --name conch -d mrtduan/conch:latest
docker run --name seed -d -p 80:80 mrtduan/seed:latest

