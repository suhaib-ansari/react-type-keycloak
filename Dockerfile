# Use a Node.js base image
FROM node:alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json .

# Install dependencies
RUN npm i

# Copy the built application files to the container
COPY . .

# Expose the port your application is listening on (if applicable)
EXPOSE 3000

# Start the application
CMD ["npm", "start"]

