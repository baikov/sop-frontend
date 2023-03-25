# Build
FROM node:18-alpine as builder

# ENV NODE_ENV production
WORKDIR /app

COPY package*.json ./
COPY ./yarn.lock ./

RUN yarn install --prefer-offline --pure-lockfile --non-interactive --production=false

COPY . .

RUN yarn build

# Run
FROM node:18-alpine as prod

ENV NODE_ENV production
WORKDIR /app

COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/yarn.lock ./yarn.lock

COPY --from=builder /app/.output ./.output

ENV HOST 0.0.0.0

# EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
