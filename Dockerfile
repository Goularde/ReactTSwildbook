FROM node:lts-alpine


WORKDIR /app
COPY package*.json ./
RUN npm i

COPY tsconfig.json tsconfig.json
COPY public public
COPY src src

CMD npm start