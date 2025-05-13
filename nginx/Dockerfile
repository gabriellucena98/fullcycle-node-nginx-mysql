FROM nginx:alpine

ENV DOCKERIZE_VERSION v0.6.1

# Instala curl e dockerize
RUN apk add --no-cache curl \
    && curl -sSL https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    | tar -C /usr/local/bin -xzv

COPY nginx.conf /etc/nginx/nginx.conf