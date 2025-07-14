# 🧾 Inventory Management System

A full-stack, Dockerized Inventory Management Dashboard application built with:

- **Frontend**: Next.js, Tailwind CSS, Material UI, Redux Toolkit (with RTK Query)
- **Backend**: Node.js, Express, Prisma ORM
- **Database**: PostgreSQL (via Docker)
- **DevOps**: Docker, GitHub Actions (CI/CD), AWS (EC2, RDS, S3, Amplify)

---

## 🚀 Features

- Authentication & Authorization
- Inventory CRUD with advanced filtering
- Sales, Purchases, and Expenses tracking
- Interactive Dashboard (charts, tables)
- PostgreSQL database via Docker
- CI/CD with GitHub Actions & AWS deployment

---

## 🐳 Local Development with Docker

### 1️⃣ Configure Prisma 
Update .env in the server/ folder:
```
DATABASE_URL="postgresql://admin:password@localhost:5432/inventoryManagement"
```


### 2️⃣ Start PostgreSQL with Docker Compose

```bash
docker-compose up -d
```

### 3️⃣ Run Backend Setup
cd server
npx prisma generate
npx prisma migrate dev --name init
npx prisma db seed
npm run dev


4️⃣ Run Frontend
cd client
npm install
npm run dev


## 🚢 Deployment (CI/CD)

- Dockerized backend and frontend

- CI/CD with GitHub Actions

- AWS services used:

 1. RDS: PostgreSQL

 2. EC2: Node.js API

 3. Amplify: Frontend hosting

 4. S3: Asset storage

## 🛠 Technologies

- Frontend: Next.js, Tailwind CSS, Material UI, Redux Toolkit

- Backend: Node.js, Express, Prisma

- Database: PostgreSQL

- DevOps: Docker, GitHub Actions, AWS

- Auth: JWT