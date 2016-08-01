[![Gitter](https://badges.gitter.im/thanhson1085/bean-seed.svg)](https://gitter.im/thanhson1085/bean-seed?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
![CodeShip](https://codeship.com/projects/e11c9da0-e9c1-0133-a811-5a99213623df/status?branch=master)

If you are planning to build a project with Microservices pattern and DevOps culture, you can use this source code.

In this source code, I built two services, one for Frontend [AngularJS and Bootstrap](https://github.com/thanhson1085/bean-seed/tree/master/site-seed), one for Backend [ExpressJS and Mongoose](https://github.com/thanhson1085/bean-seed/tree/master/api-seed). All services in this project is dockerized and pushed to Docker Hub. You can read Dockerfile in each service for further details. To create a new service, you just create a new directory, writing source code for that service and update docker-compose.yml file.

### Run
The Orchestration of Project is written in [docker-compose.yml](https://github.com/thanhson1085/bean-seed/blob/master/docker-compose.yml) file. So it is so easily to understand and run the project.
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

### System Architecture
After running `docker-compose up` we will have a system as below:

![Starting a Miroservices Project with NodeJS and Docker](https://sonnguyen.ws/wp-content/uploads/2016/07/docker-compose-orchestration.png)


### Contents

| Part | Title                       | Git Tag |
|------|-----------------------------|---------|
| 1    | Starting with ExpressJS     |  [1.0](https://github.com/thanhson1085/bean-seed/tree/1.0)|
| 2    | Logger with Winston     |  [1.1](https://github.com/thanhson1085/bean-seed/tree/1.1)|
| 4    | Config Management with Node-Config     |  [1.2](https://github.com/thanhson1085/bean-seed/tree/1.2)|
| 5    | ExpressJS and Mongoose     |  [2.0](https://github.com/thanhson1085/bean-seed/tree/2.0)|
| 6    | Building Create User API     |  [2.1](https://github.com/thanhson1085/bean-seed/tree/2.1)|
| 7    | Adding Swagger Documents     |  [2.2](https://github.com/thanhson1085/bean-seed/tree/2.2)|
| 8    | Building Login API    |  [2.3](https://github.com/thanhson1085/bean-seed/tree/2.3)|
| 9    | Building Get User List/Detail API     |  [2.4](https://github.com/thanhson1085/bean-seed/tree/2.4)|
| 10    | Authorization all APIs     |  [2.5](https://github.com/thanhson1085/bean-seed/tree/2.5)|
| 11    | Unit Test     |  [2.6](https://github.com/thanhson1085/bean-seed/tree/2.6)|
| 12    | Building Config API     |  [3.0](https://github.com/thanhson1085/bean-seed/tree/3.0)|
| 13    | Using Cache     |  [3.1](https://github.com/thanhson1085/bean-seed/tree/3.1)|
| 14    | Using Queue     |  [3.2](https://github.com/thanhson1085/bean-seed/tree/3.2)|
| 15    | Starting AngularJS with Yeoman     |  [4.0](https://github.com/thanhson1085/bean-seed/tree/4.0)|
| 16    | Config Management for AngularJS     |  [4.1](https://github.com/thanhson1085/bean-seed/tree/4.1)|
| 17    | Building Login Page     |  [4.2](https://github.com/thanhson1085/bean-seed/tree/4.2)|
| 18    | Building Register Page     |  [4.3](https://github.com/thanhson1085/bean-seed/tree/4.3)|
| 19    | Building List User Page     |  [4.4](https://github.com/thanhson1085/bean-seed/tree/4.4)|
| 20    | Pagination with AngularJS and Bootstrap     |  [4.5](https://github.com/thanhson1085/bean-seed/tree/4.5)|
| 21    | Multiple Languages     |  [4.6](https://github.com/thanhson1085/bean-seed/tree/4.6)|
| 22    | AngularJS Unit Test     |  [4.7](https://github.com/thanhson1085/bean-seed/tree/4.7)|
| 23    | Building User Detail Page     |  [4.8](https://github.com/thanhson1085/bean-seed/tree/4.8)|
| 24    | Dockerize Aplication     |  [5.0](https://github.com/thanhson1085/bean-seed/tree/5.0)|
| 25    | Orchestration with Docker Compose     |  [5.1](https://github.com/thanhson1085/bean-seed/tree/5.1)|

### Documents

#### Tiếng Việt
1. [Tạo một API đầu tiên với NodeJS](https://sonnguyen.ws/vi/tao-mot-service-dau-tien-voi-nodejs/)
2. [Quản lý Logs trong dự án NodeJS](https://sonnguyen.ws/vi/quan-ly-logs-trong-du-nodejs/)
3. [Quản lý Config trong dự án NodeJS](https://sonnguyen.ws/vi/quan-ly-config-trong-du-nodejs/)

