#!/bin/bash

sudo su -

# Setup Consul
mkdir -p /etc/consul.d
cp /build/consul.conf /etc/init/
start consul

wait

# Setup Consul-Template
cp /build/consul-template.conf /etc/init/
start consul-template

# Restart Docker with new Configuration
cp /build/docker.conf /etc/default/docker
service docker restart

wait 

# Setup Registrator
cp /build/registrator.conf /etc/init/
start registrator

# Setup Swarm Node
cp /build/swarm.conf /etc/init/
start swarm

# Setup Swarm Manager
cp /build/swarm-manager.conf /etc/init/
start swarm-manager
