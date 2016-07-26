[![Gitter](https://badges.gitter.im/thanhson1085/bean-seed.svg)](https://gitter.im/thanhson1085/bean-seed?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
![CodeShip](https://codeship.com/projects/e11c9da0-e9c1-0133-a811-5a99213623df/status?branch=master)

If you are planning to build a project with Microservices pattern and DevOps culture, you can use this source code.

In this source code, I built two services, one for Frontend [AngularJS and Bootstrap](https://github.com/thanhson1085/bean-seed/tree/master/site-seed), one for Backend [ExpressJS and Mongoose](https://github.com/thanhson1085/bean-seed/tree/master/api-seed). All services in this project is dockerized and pushed to Docker Hub. You can read Dockerfile in each service for futher details.

### Run
The Orchestration of Project is written in docker-compose.yml file. So it is so easily to understand and run the project.
```
docker-compose up
```

### Using Vagrant and Virtualbox
We also start from Virtual Machine layer with Vagrant.
```
vagrant up
```
After that, you can access the application via link: http://172.20.20.20

You can read [Vagrantfile](https://github.com/thanhson1085/bean-seed/blob/master/Vagrantfile) to understand what we need to prepare for VMs.
