# Use Node:alpine as base image
FROM node:alpine

# Setting the working directory for the container
WORKDIR /usr/app

# Copy the file to the WorkDir
COPY package.json ./

# Install the node app dependencies
RUN ["npm", "install"]

# Copy entire files and directories from local workDir to the container workDir context
# Two different COPY: So that if there is no change in package.json then npm install snapshot should be 
# fetched from cache else any change results in change in FS snapshot, results in new FS.
COPY ./ ./

# This will start a application.
CMD ["npm", "start"]


# docker build -t <dockerId>/<repository>:<version> .
# First build the image and then run a container with port forwarding so that request to the host system
# can be redirected to running container.
# docker run -p <host_port_no>:<container_port_no> -it <image_id>