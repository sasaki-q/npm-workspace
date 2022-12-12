FROM --platform=arm64 node:16-alpine3.15 AS builder

WORKDIR /app

RUN apk update && \
    npm i -g npm@7.18.1	&& \
    npm i -g @nestjs/cli

COPY *.json .
COPY ./packages/api/*.json ./packages/api/
COPY ./packages/domains ./packages/domains
COPY ./packages/infrastructure ./packages/infrastructure
RUN npm ci && \
    npm run compile:domains && \
    npm run compile:infra && \
    npm run build && \
    npm cache clean --force

FROM --platform=linux/x86_64 node:16-alpine3.15 AS production

WORKDIR /app

COPY --chown=node:node --from=builder /app/node_modules ./node_modules
COPY --chown=node:node --from=builder /app/packages/api/dist ./packages/api/dist
COPY --chown=node:node --from=builder /app/packages/domains/dist ./packages/domains/dist
COPY --chown=node:node --from=builder /app/packages/infrastructure/dist ./packages/infrastructure/dist

ENV PORT=3001
ENV NODE_ENV=production
EXPOSE 3001

CMD [ "node", "packages/api/dist/main" ]