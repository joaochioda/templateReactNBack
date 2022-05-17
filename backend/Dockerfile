FROM node:15-alpine

WORKDIR /usr/app

COPY package.json /

RUN npm install

RUN npm i sequelize-cli -g

COPY . .

CMD npm run start