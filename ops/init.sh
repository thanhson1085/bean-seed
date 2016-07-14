#!/bin/bash

sudo su -

COMPOSE_VERSION=1.7.1
CONSUL_VERSION=0.6.4
CONSUL_TEMPLATE_VERSION=0.15.0

echo Installing dependencies...
apt-get update && \
    apt-get install -y unzip curl wget

echo Fetching Consul...
cd /tmp/
wget https://releases.hashicorp.com/consul/${CONSUL_VERSION}/consul_${CONSUL_VERSION}_linux_amd64.zip -O consul.zip

echo Installing Consul...
unzip consul.zip
chmod +x consul
mv consul /usr/bin/consul

echo Fetching Consul UI...
cd /opt
mkdir consul
cd /opt/consul
wget https://releases.hashicorp.com/consul/${CONSUL_VERSION}/consul_${CONSUL_VERSION}_web_ui.zip -O consul_web_ui.zip
unzip consul_web_ui.zip

echo Fetching Consul Template...
cd /tmp/
wget https://releases.hashicorp.com/consul-template/${CONSUL_TEMPLATE_VERSION}/consul-template_${CONSUL_TEMPLATE_VERSION}_linux_amd64.zip -O consul-template.zip
echo Installing Consul Template...
unzip consul-template.zip
chmod +x consul-template
mv consul-template /usr/bin/consul-template

echo Installing Docker ...
apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D
echo "deb https://apt.dockerproject.org/repo ubuntu-trusty main" \
    > /etc/apt/sources.list.d/docker.list

apt-get update && \
    apt-get install -y linux-image-extra-$(uname -r)

apt-get update && \
    apt-get install -y docker-engine

echo Installing Docker Compose
curl -L https://github.com/docker/compose/releases/download/${COMPOSE_VERSION}/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose

echo Installing Docker Swarm/Registrator/cAdvisor...
docker pull swarm
docker pull registrator
docker pull cadvisor
