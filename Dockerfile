FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# must be the same indicated in server.js
EXPOSE 3030

CMD ["npm", "run", "dev"]