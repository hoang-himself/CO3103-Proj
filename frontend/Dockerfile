FROM node:16.10.0-bullseye
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package*.json .
RUN npm install

COPY . .
CMD ["npm", "start"]
