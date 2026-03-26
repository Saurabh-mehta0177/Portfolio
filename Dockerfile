# Use lightweight NGINX image
FROM nginx:alpine

# Copy website files to NGINX html folder
COPY . /usr/share/nginx/html

# Expose default NGINX port
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
