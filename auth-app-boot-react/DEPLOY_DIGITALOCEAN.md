# DigitalOcean Deployment Guide for AuthX App

## Prerequisites

- DigitalOcean account
- Docker and Docker Compose installed locally (for testing)
- Git installed

## Option 1: Deploy Using DigitalOcean App Platform (Recommended - Easiest)

### Step 1: Push to GitHub

```bash
git add .
git commit -m "Initial commit for AuthX app"
git remote add origin https://github.com/YOUR_USERNAME/auth-app-boot-react.git
git branch -M main
git push -u origin main
```

### Step 2: Create App on DigitalOcean

1. Go to [DigitalOcean Dashboard](https://cloud.digitalocean.com)
2. Click **Apps** in the sidebar
3. Click **Create Apps**
4. Connect your GitHub account
5. Select the `auth-app-boot-react` repository
6. DigitalOcean will auto-detect the docker-compose.yml

### Step 3: Configure Services

- **Backend Service**: Port 8080
- **Frontend Service**: Port 3000
- Set environment variables as needed

### Step 4: Deploy

Click **Deploy** and wait for the deployment to complete. Your app will be available at the provided URL.

---

## Option 2: Deploy Using Docker & Droplet

### Step 1: Create a Droplet

1. Click **Droplets** → **Create Droplet**
2. Choose: Ubuntu 22.04 (LTS)
3. Size: 2GB RAM minimum (Basic plan)
4. Add SSH key for security
5. Create Droplet

### Step 2: SSH into Droplet

```bash
ssh root@your_droplet_ip
```

### Step 3: Install Docker

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
usermod -aG docker root
```

### Step 4: Clone Repository

```bash
cd /opt
git clone https://github.com/YOUR_USERNAME/auth-app-boot-react.git
cd auth-app-boot-react
```

### Step 5: Build and Run

```bash
docker-compose up -d
```

### Step 6: Setup Reverse Proxy (Nginx)

```bash
apt-get update
apt-get install -y nginx

# Create nginx config
cat > /etc/nginx/sites-available/default << 'EOF'
upstream backend {
    server localhost:8080;
}

upstream frontend {
    server localhost:3000;
}

server {
    listen 80 default_server;
    listen [::]:80 default_server;

    server_name _;

    location /api {
        proxy_pass http://backend;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }

    location / {
        proxy_pass http://frontend;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
EOF

systemctl restart nginx
```

Your app will be available at `http://your_droplet_ip`

---

## Option 3: Deploy Using DigitalOcean Container Registry

### Step 1: Create Container Registry

1. Click **Container Registry** in sidebar
2. Create a new registry

### Step 2: Push Images

```bash
# Login to registry
docker login registry.digitalocean.com

# Build and push backend
docker build -t registry.digitalocean.com/your-registry/auth-backend ./auth-backend
docker push registry.digitalocean.com/your-registry/auth-backend

# Build and push frontend
docker build -t registry.digitalocean.com/your-registry/auth-frontend ./auth-front
docker push registry.digitalocean.com/your-registry/auth-frontend
```

### Step 3: Use in Kubernetes (if needed)

Deploy using DigitalOcean Kubernetes Service (DOKS) with the pushed images.

---

## Environment Variables to Set

### Backend (Spring Boot)

- `SPRING_PROFILES_ACTIVE=prod`
- `SPRING_DATASOURCE_URL` (if using external DB)
- `SPRING_DATASOURCE_USERNAME`
- `SPRING_DATASOURCE_PASSWORD`
- `JWT_SECRET` (set a strong secret)
- `OAUTH2_GITHUB_CLIENT_ID`
- `OAUTH2_GITHUB_CLIENT_SECRET`

### Frontend

- `VITE_API_URL=https://your-domain.com/api` (production backend URL)

---

## Testing Locally Before Deployment

```bash
# Build and run locally
docker-compose up

# Access the app
# Frontend: http://localhost:3000
# Backend: http://localhost:8080
```

---

## Monitoring & Logs

### View logs

```bash
docker-compose logs -f
docker-compose logs -f backend
docker-compose logs -f frontend
```

### Stop the app

```bash
docker-compose down
```

---

## SSL/TLS Certificate

For production, use DigitalOcean's free SSL certificates or Let's Encrypt:

```bash
apt-get install -y certbot python3-certbot-nginx
certbot certonly --nginx -d your-domain.com
```

Then update nginx configuration to use HTTPS.

---

## Troubleshooting

**Containers not starting?**

- Check logs: `docker-compose logs`
- Ensure ports 3000 and 8080 are available

**Can't connect to backend from frontend?**

- Verify `VITE_API_URL` environment variable
- Check Docker network connectivity: `docker network ls`

**Database connection issues?**

- Verify database credentials
- Ensure database is running and accessible

---

For more help, visit: https://docs.digitalocean.com/products/app-platform/
