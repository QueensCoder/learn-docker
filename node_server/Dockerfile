FROM node:alpine

WORKDIR /usr/app


# now when you change the server file or another file it does 
# interfere with the cached npm installs 
# this is done because the npm installs can take a while if they are removed from the cache

COPY ./package.json ./

RUN npm install

# if a change is made to any of the files except packagejson
# from this line onwards the cache is no longer used
# using the cache allows you to perform a semi hot reload of the container if changes 
# are made, only the bare minimum is required in each rebuild because we use the cache
COPY ./ ./

CMD ["npm", "start"]