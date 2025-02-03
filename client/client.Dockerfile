FROM oven/bun:1

WORKDIR /client

COPY package.json ./
COPY bun.lockb ./

RUN bun i

COPY . .
