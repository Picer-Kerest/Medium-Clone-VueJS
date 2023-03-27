# Medium Clone Vue.js
To launch a project from Docker, go to the directory with docker-compose.yml file and run Docker Desktop.

## Launch time
Primary build: 190 seconds

Up: 25 seconds

Running: 60 seconds

Startup time on my computer.

For about five minutes for the first launch of the project. Subsequent container launches take about two minutes.

## Docker start
While in the directory, enter the following commands into the terminal
```
docker-compose up -d --build
```
If after the entered commands you see «This Site Can’t Be Reached» this mean that the services are being started. The startup speed depends on the power of the computer. It takes me about 60 seconds.

To view the launch status of the services, you can enter the command
```
docker-compose logs -f
```

Upon successful launch, the following should be
```
myapp  | > mediumclone_vue@0.1.0 serve
myapp  |   App running at:
myapp  |   - Local:   http://localhost:8080/
myapp  |   - Network: http://172.23.0.2:8080/
myapp  |   Note that the development build is not optimized.
myapp  |   To create a production build, run npm run build.
```

After that, go to http://localhost:8888/

###  Project Information
This application is a clone of this site https://medium.com/. Backend data from the website https://demo.realworld.io /. User registration, user settings. Creating a new article, displaying articles by tag. Displaying all articles, displaying your articles. Subscriptions to users. 