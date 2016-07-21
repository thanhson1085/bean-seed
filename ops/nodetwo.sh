#!/bin/bash

sudo su -

# Setup Consul
mkdir -p /etc/consul.d
cp /build/ops/data/two/consul.conf /etc/init/
start consul

wait

# Setup Consul-Template
cp /build/ops/data/two/consul-template.conf /etc/init/
start consul-template

# Restart Docker with new Configuration
cp /build/ops/data/two/docker.conf /etc/default/docker
service docker restart

wait

# Setup Registrator
cp /build/ops/data/two/registrator.conf /etc/init/
start registrator

# Setup Swarm Node
cp /build/ops/data/two/swarm.conf /etc/init/
start swarm
