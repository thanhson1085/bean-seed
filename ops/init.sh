#!/bin/bash

sudo su -

COMPOSE_VERSION=1.7.1

echo Cloning Source Code...
git clone https://github.com/thanhson1085/bean-seed.git /build

wait 

echo Installing Docker ...
wget -qO- https://get.docker.com/ | sh

echo Installing Docker Compose
curl -L https://github.com/docker/compose/releases/download/${COMPOSE_VERSION}/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
