#!/bin/bash

sudo su -

# Setup Consul
mkdir -p /etc/consul.d
cp /build/ops/data/one/consul.conf /etc/init/
start consul

wait

# Setup Consul-Template
cp /build/ops/data/one/consul-template.conf /etc/init/
start consul-template

# Restart Docker with new Configuration
cp /build/ops/data/one/docker.conf /etc/default/docker
service docker restart

wait 

# Setup Registrator
cp /build/ops/data/one/registrator.conf /etc/init/
start registrator

# Setup Swarm Node
cp /build/ops/data/one/swarm.conf /etc/init/
start swarm

# Setup Swarm Manager
cp /build/ops/data/one/swarm-manager.conf /etc/init/
start swarm-manager

# Pulling The Images...
cd /build/ && docker-compose pull
