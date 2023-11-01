# ------------------------------
# -------- Build Stage ---------
# ------------------------------
FROM node:18 as builder

WORKDIR /app

# Install dependencies
COPY package*.json /app/
RUN npm ci

# Build angular application
COPY . /app/
RUN npm run build -- --configuration=production --output-path=dist/

# ------------------------------
# -------- RUN Stage ---------
# ------------------------------
FROM nginx:alpine

# Copy build output to nginx
COPY --from=builder /app/dist/ /usr/share/nginx/html

# Expose nginx
EXPOSE 80

# Declare volume for configuration
RUN mkdir -p /usr/share/nginx/html/assets
VOLUME ["/usr/share/nginx/html/assets/config.json"]

# Start nginx
CMD ["nginx", "-g", "daemon off;"]



