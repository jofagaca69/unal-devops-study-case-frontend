# Use official Node.js image as a base
FROM node:alpine

# Set the working directory in the container
WORKDIR /app

# Copy app directory
COPY . .

# Install angular CLI globally
RUN npm install -g @angular/cli

# Install app dependencies
RUN npm install

CMD ["ng", "serve", "--host", "0.0.0.0"]
