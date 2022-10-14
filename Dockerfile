FROM node:lts-alpine
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm i
COPY . .
CMD [ "node", "server.js" ]