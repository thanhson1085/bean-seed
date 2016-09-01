#!/bin/bash
_interupt() { 
    echo "Shutdown $child_proc"
    kill -TERM "$child_proc" 2>/dev/null
    exit
}

trap _interupt INT TERM

workdir=${PWD} 

cd $workdir/api-seed && nodemon index.js &
child_proc=$! 
cd $workdir/site-seed && grunt serve
child_proc="$child_proc $!"
