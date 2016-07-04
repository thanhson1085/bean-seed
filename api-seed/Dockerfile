FROM mhart/alpine-node:4.4
MAINTAINER Nguyen Sy Thanh Son

RUN npm install -g pm2

WORKDIR /build
COPY ./ /build

EXPOSE 3000

RUN chmod +x /build/entrypoint.sh
RUN cp /build/config/default.json /build/config/local.json
ENTRYPOINT ["/build/entrypoint.sh"]
