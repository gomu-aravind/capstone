# Use a base image with Java and a version you need (e.g., OpenJDK 11)
FROM openjdk:11-jre-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the Spring Boot application JAR file to the container
ADD target/*.jar app.jar

# Expose the port your Spring Boot application is listening on
EXPOSE 8080

# Command to run your Spring Boot application when the container starts
CMD ["java", "-jar", "app.jar"]
