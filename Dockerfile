from node:18

COPY src src
COPY start.sh start.sh
COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

ENTRYPOINT ["./start.sh"]