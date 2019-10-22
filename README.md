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
