# --- Stage 1: Build ---
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci # 'ci' is faster and more reliable for builds than 'install'

COPY . .
RUN npm run build

# --- Stage 2: Serve ---
FROM nginx:alpine

# Copy the build output from Stage 1 to Nginx html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]