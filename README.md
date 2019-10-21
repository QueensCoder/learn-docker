I : Docker CLI commands

    Command Prefix: docker

    Command Suffixes:

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

III : Docker Image Syntax
A. COPY ./ ./
copies from specified path (the first ./) to destination
Used to take files from your current directory and copy them into the docker
image file system
