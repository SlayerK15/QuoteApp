# Stage 1: Development dependencies and build
FROM node:18 AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies, including devDependencies
RUN npm install

# Copy source code
COPY . .

# Stage 2: Production image
FROM node:18-slim

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Copy source code from builder
COPY --from=builder /app ./

# Create a non-root user
RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 --ingroup nodejs nodeuser \
    && chown -R nodeuser:nodejs /app

# Switch to non-root user
USER nodeuser

# Expose API port
EXPOSE 5000

# Set environment variables
ENV NODE_ENV=production \
    PORT=5000

# Start the server
CMD ["node", "server.js"]