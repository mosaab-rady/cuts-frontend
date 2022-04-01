FROM node:14-alpine

COPY ./app /home/app

WORKDIR /home/app 

RUN npm install

RUN npm run build


COPY ./server /home/app/server

WORKDIR /home/app/server

RUN npm install

CMD [ "node","server.js" ]