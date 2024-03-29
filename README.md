I : Docker CLI commands

    A.  Command Prefix: docker

    B. Command Suffixes:

    run looks for image on local if not found grabs image from server and then runs it

    ps - prints all container processes of docker

    ps -all -displays all processes run on docker even old ones

    system prune - clean out all images and cached info on local

    stop :id - stops docker container with passed in id if container is not stopped in 10 secs it is then killed

    kill :id - kills docker container without finishing any processes within the container

    logs - logs out output from docker container

    create - creates a docker container , can include a command to execute within the container

    exec -it :id :command - executes a command on a docker container, -it is or -i -t, i is for Stdin, t is stdout, use the input and print the output

    exec -it :id sh -allows you to open shell within docker container (linux env) and the shell allows you to run commands within the container...super powerful
    To exit shell use ctrl d or cmd d or exit

    build . - builds a docker image based on which docker file is in directory
    
    build -f <filename> . - builds the image using the file name that is passed in after -f
    
    docker attach <filename/id>  -attachs your terminal's standard input, output, and error 
    (or any combination of the three) to a running container using the container's ID or name.

    C. port mapping
        processes running on ports such as a server need to be mapped in order for requests to be hanlded by the port

        docker run -p <port_num>  : <port_num_container> <image_id>

        this command routes the incoming request from localhost to the container port

II: Create and build docker images

    A. How to create a Docker Image:

    Make Docker file which is a plain text file

    specify base image

    run commands to install additional programs

    specify command to run upon start of container

    B. Docker Build Cache

    if you build another image based on the docker file that has not been changed docker will use the
    cache to build the image

    if a command is changed in the file the cache will be used up until that command
    any command after that command will not use the cache to build

    in order to use the cache more often you can try to make all the changes towards the end of the file

    C. Tagging a Docker Image

    to give a name to the created container you can do

    docker build -t name .

    the convention is docker build -t *your_docker_id*/*repo/project_name*:*version* .

    D. Customizing images

    When you make a custom image you can find a pre existing image
    for example the alpine version of the node image is an image that has the min
    requirements needed for running node

    alpine versions of containers are the light weight/compact verison of the container

III: Docker file syntax

    A. WORKDIR
    addresses the issue when copying folders/file over current files maybe overwritten

    B. COPY
    command: COPY ./ ./
    copies from specified path (the first ./) to destination
    Used to take files from your current directory and copy them into the docker
    image file system

    COPY can be used more than once in a docker file to take advantage of the cache
    for example if a file is changed the entire container needs to be rebuilt
    if the container is rebuilt you should not have to install all dependicies using
    a package manager because re installing dependicies can take a long time with large
    projects

    use COPY once on the pipfile or package json
    then run npm install

    then copy the rest of the file system
    this allows you to re use the npm/pip install from cache

IV Docker Compose

    A. use
    docker compose allows us to run several commands instead of having to write out
    each command using docker cli
    see docker-compose.yml inside of visit_app

    when using this to make more than on container this allows for the containers to
    have access to one another

    this file is simliar to xml and json

    there are key value pairs and arrays , only the format is different

    B. Commands

    docker-compose up :  docker run <myimage>

    docker-compose up --build : docker build then docker run <myimage>

    docker-compose up -d : launch containers in background inorder to have terminal avaible

    docker-compose down : stop containers (instead of having to docker stop each by id)

    docker-compose ps : looks for docker-compose.yml file in directory
    if found it shows which containers are running for that file if applicable
    similar to docker ps

    C. Restart policies

    restart policies allow a container to restart if it crashed, sort of removes the need
    for nodemon

    "no" - never attempt to restart container if it stops or crashes, has to be quotes
    because of yml file treats no as false

    always - always attempt to restart container if it stops or crashes

    on-failure - restart container if it stops with an error code

    unless-stopped - restart container unless the developer stops it

V Docker Volumes:
    
    A. volumes are similar to port mapping in the sense that it allows you to link local files/folders
    to do the containers files/folders, this allows you to make changes in real time to the container
    without having to rebuild the container, similar to hot reloading
    
    B. Syntax:
    
    docker run <some other commands like port mapping> -v $(pwd):/<folder-name> <image id/name>
    
    -v $(pwd):/app -> this maps the directory to the specified directory named app
    
    -v /app/node_modules  -> makes docker bookmark the specified folder and do not map this folder, useful for
    node_modules or pip packages

VI Advanced Commands/Command Chaining

    docker build -f Dockerfile.dev -t ozkhan/react_test .  
        -build container with specified file and name it ozkhan/react_test

    docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/app ozkhan/react_test
        -port map local port 3000 to container port 3000, bookmark node_modules and use existing node modules
        inside of container (node modules created by running npm install in container)
        the second -v maps the current directory in local to app directory in the container
        any changes in the local will update the container's files
