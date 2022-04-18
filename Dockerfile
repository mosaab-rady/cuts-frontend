FROM node:14-alpine

COPY ./app /home/app/frontend

WORKDIR /home/app/frontend

RUN npm install

# RUN npm run build


COPY ./server /home/app/server

WORKDIR /home/app/server

RUN npm install


WORKDIR /home/app

COPY script.sh /home/app



CMD ["sh", "./script.sh"]