Based on https://github.com/discord/discord-example-app

## Running

You can test commands by running the server in dev mode:
```sh
DEV_MODE=true node src/app.js
```

.. and POSTing requests to it:
```sh
curl http://localhost:3000/interactions -X POST -H "Content-Type: application/json" --data '{"type": 2, "id": 0, "data": {"name": "skill", "options":[{"value": "normandie"}]}}'
```


To run the full discord app:
```sh
printf 'APP_ID=%s\nDISCORD_TOKEN=%s\nPUBLIC_KEY%s' YOUR_APP_ID YOUR_DISCORD_TOKEN YOUR_PUBLIC_KEY > .env
npm run register
node src/app.js
```
(for commands to actually work discord needs to be able to contact your server, which isn't all that easy)

## Building

Just run `docker build . -t pi-r-bot` to get a docker image you can for instance run in docker-compose:

```yaml
services:
  pi-r-bot:
    image: "pi-r-bot"
    environment:
      - 'DISCORD_TOKEN=...'
      - 'APP_ID=...'
      - 'PUBLIC_KEY=...'
```