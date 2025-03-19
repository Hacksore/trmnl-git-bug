FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy the data directory
COPY data ./data

# Install http-server globally
RUN npm install -g local-web-server

# Expose port 8080
EXPOSE 8080

# Start the http-server
CMD ws -d data -p 8080
