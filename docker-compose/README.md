## A multi server containerised node webApp
- The purpose of building this app is to learn how to deploy a web app using **docker-compose**
- It's little complex to do networking among the containers. but **docker-compose** comes for the rescue. We need to write a docker-compose.yml file and docker does the rest from image creation to deployment[(refer documentation)](https://docs.docker.com/compose/).

**How to use it**
* Clone the repo, open the terminal in the context of repo/docker-compose Directory.
* **docker-compose up --build** will start the deployment, will create a redis container and a node container listening at port 8081 with port forwading at 4001.

**WebApp url pattern**
* localhost:4001/ --> visit the url will prints the no of time the webapp has been visited.
* redis cache, an in-memory database, used to store the visit count, redis-server is deployed in different container.