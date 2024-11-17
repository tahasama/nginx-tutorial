FROM node:14-alpine3.17

WORKDIR /app

COPY server.js .
COPY index.html .
COPY images ./images
COPY styles ./styles
COPY package.json .

RUN npm i

EXPOSE 3000

# always use "" niever ''
CMD [ "node", "server.js" ]