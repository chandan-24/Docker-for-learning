## A Simple Node Web App running inside container.

**How to use it**
* Clone the repo, open the terminal in the context of repo/a-simple-web-app Directory.
* Build image using the [Dockerfile](Dockerfile), use below command
* docker build -t <yourDockerID>/myApp:v1 . 
* Now final step is to create a container with port forwarding so that request to the host system can be redirected to running container.
* docker run -p 3000:8080 -it <yourDockerID>/myApp:v1
* Congratulaions! you are done.

**WebApp url pattern**
1. localhost:3000/ : greets you with - Welcome Guest!
2. localhost:3000/:name :- needs a path param(your name), each time you hits the url with your name, you will be greeted with different greeting message.