# Guide: Push Project ke Docker Hub

## Prerequisite
Pastikan Anda sudah install:
1. **Docker Desktop** - Download dari [docker.com](https://www.docker.com/products/docker-desktop)
2. **Docker Hub Account** - Daftar di [hub.docker.com](https://hub.docker.com)

## Step 1: Login ke Docker Hub

```bash
docker login
```

Masukkan username dan password Docker Hub Anda.

## Step 2: Build Docker Image

Build image dari Dockerfile dengan format: `username/repository-name:tag`

```bash
docker build -t nttdata/advance-learn-angular:latest .
```

**Ganti `nttdata` dengan username Docker Hub Anda**

## Step 3: Verifikasi Image (Opsional)

Cek apakah image berhasil dibuat:

```bash
docker images
```

Atau jalankan image untuk testing:

```bash
docker run -p 8080:80 nttdata/advance-learn-angular:latest
```

Buka browser dan akses `http://localhost:8080`

## Step 4: Push ke Docker Hub

```bash
docker push nttdata/advance-learn-angular:latest
```

**Tunggu hingga selesai.** File akan di-upload ke Docker Hub Anda.

## Step 5: Verifikasi di Docker Hub

Buka browser dan pergi ke `https://hub.docker.com/r/username/advance-learn-angular`
Anda seharusnya melihat image Anda di repository.

---

## Jalankan Image dari Docker Hub di Server Lain

Di server atau komputer lain, cukup jalankan:

```bash
docker run -d -p 80:80 nttdata/advance-learn-angular:latest
```

Docker akan otomatis download image dari Docker Hub dan menjalankannya.

### Opsi tambahan:
- `-d` = Jalankan di background (detached mode)
- `-p 80:80` = Port mapping (host:container)
- `--name myapp` = Beri nama container
- `-e API_URL=http://api.example.com` = Set environment variable

**Contoh dengan nama dan port custom:**
```bash
docker run -d -p 3000:80 --name my-angular-app nttdata/advance-learn-angular:latest
```

---

## Versioning Best Practice

Gunakan semantic versioning untuk tag image:

```bash
# Build dengan version
docker build -t nttdata/advance-learn-angular:1.0.0 .
docker build -t nttdata/advance-learn-angular:latest .

# Push semua tag
docker push nttdata/advance-learn-angular:1.0.0
docker push nttdata/advance-learn-angular:latest
```

---

## Troubleshooting

### 1. Error: "no such file or directory: nginx.conf"
Pastikan file `nginx.conf` ada di root project directory

### 2. Error: "unauthorized: authentication required"
Login ulang:
```bash
docker logout
docker login
```

### 3. Error: "denied: requested access to the resource is denied"
Repository belum public atau credentials salah. Cek di Docker Hub dashboard.

### 4. Image terlalu besar
Pastikan file `.dockerignore` sudah benar untuk exclude `node_modules`, `dist`, dll.

---

## Docker Compose (Opsional untuk development)

Buat file `docker-compose.yml`:

```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "80:80"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

Jalankan dengan:
```bash
docker-compose up -d
```

---

## Summary Command

```bash
# 1. Build
docker build -t nttdata/advance-learn-angular:latest .

# 2. Login
docker login

# 3. Push
docker push nttdata/advance-learn-angular:latest

# 4. Run di server lain
docker run -d -p 80:80 nttdata/advance-learn-angular:latest
```

Selesai! Project Anda sekarang bisa dijalankan di mana saja dengan Docker.
