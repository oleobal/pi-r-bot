FROM node:21

RUN mkdir /pi-r-bot
WORKDIR /pi-r-bot
COPY src src
COPY start.sh .
COPY package.json .
COPY package-lock.json .

RUN npm install

ENV PORT=80

ENTRYPOINT ["./start.sh"]