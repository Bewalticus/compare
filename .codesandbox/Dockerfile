FROM ubuntu

ARG NODE_VERSION=20
# install required packages
RUN apt update -y && apt -y install curl software-properties-common
RUN add-apt-repository ppa:longsleep/golang-backports && apt-get -y update
# prepare NodeJS installation
RUN curl -sL https://deb.nodesource.com/setup_${NODE_VERSION}.x | bash -
# install NodeJS and Go language
RUN apt-get -y install nodejs golang
# install modd
RUN go install github.com/cortesi/modd/cmd/modd@latest && ln -s ~/go/bin/modd /usr/bin/modd
