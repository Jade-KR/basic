FROM node:16-alpine3.12

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY index.js .

ENTRYPOINT [ "node", "index.js" ]