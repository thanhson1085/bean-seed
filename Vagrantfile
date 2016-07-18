Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.provision :shell, path: "./ops/init.sh"

  config.vm.provider "virtualbox" do |vb|
    vb.gui = false
    vb.memory = 1024
    vb.cpus = 2
  end

  config.vm.define "nodeone" do |n1|
    n1.vm.hostname = "gateway"
    n1.vm.network "private_network", ip: "172.20.20.20"
    n1.vm.synced_folder "./ops/data/one/", "/build"
    n1.vm.provision :shell, path: "./ops/nodeone.sh"
  end

  config.vm.define "nodetwo" do |n2|
    n2.vm.hostname = "nodetwo"
    n2.vm.network "private_network", ip: "172.20.20.21"
    n2.vm.synced_folder "./ops/data/two/", "/build"
    n2.vm.provision :shell, path: "./ops/nodetwo.sh"
  end
end
