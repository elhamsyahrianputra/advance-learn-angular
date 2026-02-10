# Use Node.js v20 with Alpine Linux Based
FROM node:20-alpine AS builder

# Change Working Directory to /app
# Command after this will run in /app folder
WORKDIR /app

# Copy package.json (with middle wildcard) to container (/app)
COPY package*.json ./

# Similiar with 'npm install' but with clean install, good for production
RUN npm ci

# Copy all soure code to contaner
COPY . .

# Run to build angular project, result can contain /dist in workdir
RUN npm run build -- --configuration production

# Debug: List what's in dist folder
RUN ls -la /app/dist/

# ============================================
# TAHAP 2: Runtime Stage (Nginx)
# ============================================
FROM nginx:alpine

# Copy custom nginx config (untuk SPA routing)
COPY nginx.conf /etc/nginx/nginx.conf

# Copy hasil build dari tahap builder ke Nginx
COPY --from=builder /app/dist/advance-learn-angular/browser /usr/share/nginx/html

# Port yang akan di-expose
EXPOSE 80

# Jalankan Nginx
CMD ["nginx", "-g", "daemon off;"]
