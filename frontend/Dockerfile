# Stage 1: Build the React application
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the application
FROM nginx:alpine

# Copy custom nginx config if you have any
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built application from previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Add nginx configuration to handle React Router
RUN echo '                                                       \
server {                                                        \
    listen 80;                                                  \
    location / {                                               \
        root /usr/share/nginx/html;                            \
        index index.html;                                      \
        try_files $uri $uri/ /index.html;                      \
    }                                                          \
}' > /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]