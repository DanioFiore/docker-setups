FROM node:23-alpine as development

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

# create a second container where to copy only the js files and not the unnecessary ts files
FROM node:23-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json .

# install all dependencies that are NOT in devDependencies
RUN npm install --only=production

# copy the file from the first container into the production container, only files into the dist dir
COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/index.js"]
