FROM node:8-slim

RUN mkdir /src

RUN npm install -g create-razzle-app

WORKDIR /src

ADD ./ /src/

RUN npm install

RUN npm run build

EXPOSE 3000

CMD npm run start:prod