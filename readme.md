Based on https://github.com/discord/discord-example-app

## Running

```sh
printf 'APP_ID=%s\nDISCORD_TOKEN=%s\nPUBLIC_KEY%s' YOUR_APP_ID YOUR_DISCORD_TOKEN YOUR_PUBLIC_KEY > .env
npm run register
node src/app.js
```

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