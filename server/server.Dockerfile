FROM golang:1.23

WORKDIR /server

COPY . .

RUN go mod download
