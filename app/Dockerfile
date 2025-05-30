# Stage 1: Build the Angular application
FROM node:20-alpine as build-stage

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY .. .

# Build for production
# Consider passing environment variables at build time if needed
# e.g., ng build --configuration=production --base-href=/
RUN npm run build -- --configuration=production

# Stage 2: Serve the Angular application with Nginx
FROM nginx:alpine as production-stage

# Copy the built Angular application from the build-stage
COPY --from=build-stage /app/dist/salus-healthcare/browser /usr/share/nginx/html

# Copy custom Nginx configuration (optional, but recommended for SPA routing)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
