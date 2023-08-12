# Use an official Node.js LTS version as the base image
FROM node:lts

# Set the working directory in the container
WORKDIR /app

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install --force

# Copy the entire application to the working directory
COPY . .

# Build the Angular app
RUN ng build

# Expose the default Angular port (change if necessary)
EXPOSE 4200

# Start the Angular development server
CMD ng serve --host 0.0.0.0 --port 4200