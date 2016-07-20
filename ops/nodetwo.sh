#!/bin/bash

sudo su -

# Setup Consul
mkdir -p /etc/consul.d
cp /build/ops/two/consul.conf /etc/init/
start consul

wait

# Setup Consul-Template
cp /build/ops/two/consul-template.conf /etc/init/
start consul-template

# Restart Docker with new Configuration
cp /build/ops/two/docker.conf /etc/default/docker
service docker restart

wait

# Setup Registrator
cp /build/ops/two/registrator.conf /etc/init/
start registrator

# Setup Swarm Node
cp /build/ops/two/swarm.conf /etc/init/
start swarm
