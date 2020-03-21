# Use alpine as base image
FROM alpine

# Install node.js in the system
RUN apk add --update nodejs

# Copy the index.js from local build context and add them to the Docker image’s current working directory
COPY index.js .

# Set default command to execute when a container is made out of this image.
CMD [ "node", "index.js" ]