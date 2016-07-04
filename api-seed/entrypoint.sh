#!/bin/sh
cd /build
pm2 start -x --no-daemon index.js
