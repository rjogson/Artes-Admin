# We'll use the Node slim image as a base cos it's light and nice
FROM node:lts-buster

WORKDIR /usr/src/api-server

# Create an .env file by copying the .env.example file
# COPY .env.local .env

# Add node_modules to the envionmental path variable so we can run binaries easily
ENV PATH /usr/src/api-server/node_modules/.bin:$PATH

USER root

# COPY package.json package-lock.json ./
# # COPY package.json ./

# # Install the good ol' NPM modules and get Adonis CLI in the game
# RUN npm install --no-optional

# # Copy everything to the root of the API service docker volume, and expose port to the outside world
# COPY --chown=node:node . .

# Let all incoming connections use the port below
EXPOSE 1379

CMD npm run start