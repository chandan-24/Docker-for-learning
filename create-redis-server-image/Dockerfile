# Specifing the base image
FROM alpine

# Adding/installing dependencies
RUN apk add --update redis

# what to do when a container is made of this image
CMD [ "redis-server" ]