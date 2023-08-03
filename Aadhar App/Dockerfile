# Use the official Node.js image as the base image
FROM node:latest AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all the application files to the container
COPY . .

# Build the Angular app
RUN npm run build --prod

# Use a lightweight web server to serve the Angular app
FROM nginx:alpine
COPY --from=build /app/dist/your-angular-app-name /usr/share/nginx/html
