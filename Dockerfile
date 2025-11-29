# ----------------------------
# Stage 1: Build the React App
# ----------------------------
FROM node:18-alpine AS build

WORKDIR /app

# Install dependencies first (better caching)
COPY package.json package-lock.json ./
RUN npm install

# Copy source code and build
COPY . .
RUN npm run build

# ----------------------------
# Stage 2: Serve with Nginx
# ----------------------------
FROM nginx:alpine

# Copy the custom config we created
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the build output ("dist" folder) from Stage 1 to Nginx
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]