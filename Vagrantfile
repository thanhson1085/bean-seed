Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.provision "shell", inline: <<-SHELL
    sudo apt-get update
    sudo apt-get install -y whois git unzip wget curl
    sudo useradd -m -p `mkpasswd password` -s /bin/bash dev
    sudo usermod -a -G sudo dev
  SHELL
  config.vm.provision :shell, path: "./ops/init.sh"

  config.vm.provider "virtualbox" do |vb|
    vb.gui = false
    vb.memory = 1024
    vb.cpus = 2
  end

  config.vm.define "nodeone" do |n1|
    n1.vm.hostname = "nodeone"
    n1.vm.network "private_network", ip: "172.20.20.20"
    n1.vm.provision :shell, path: "./ops/nodeone.sh"
  end
end
