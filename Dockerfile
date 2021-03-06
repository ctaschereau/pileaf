FROM arm32v7/node:10
COPY qemu-arm-static /usr/bin

RUN apt-get update
RUN apt-get install -y git

# Create app directory
WORKDIR /usr/src/pileaf

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

###########apt install qemu-user-static
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]

