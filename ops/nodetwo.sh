#!/bin/bash

sudo su -

# Setup Consul
mkdir -p /etc/consul.d
cp /build/consul.conf /etc/init/
start consul

# Setup Consul-Template
cp /build/consul-template.conf /etc/init/
start consul-template

# Setup Swarm Node
cp /build/swarm.conf /etc/init/
start swarm
