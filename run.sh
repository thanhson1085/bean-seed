#!/bin/bash

workdir=${PWD} 

cd $workdir/api-seed && nodemon index.js &
cd $workdir/site-seed && grunt serve
