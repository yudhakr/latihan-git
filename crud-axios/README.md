# CRUD Axios

Fullstack CRUD application dengan Express.js (Backend) dan React + Vite (Frontend).

## Tech Stack

- **Backend:** Express.js, MySQL2, Swagger UI, JWT, Bcrypt
- **Frontend:** React 19, Vite, Axios

## Prerequisites

- Node.js
- MySQL

## Cara Menjalankan

### 1. Setup Database

Buat database di MySQL, lalu buat file `.env` di folder `backend`:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=your_database
DB_PORT=3306
```

### 2. Jalankan Backend

```bash
cd backend
npm install
npm start
```

Backend berjalan di `http://localhost:3000`

### 3. Jalankan Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend berjalan di `http://localhost:5173`

## API Endpoints

| Method | Endpoint           | Deskripsi           |
| ------ | ------------------ | ------------------- |
| POST   | `/register`        | Register user       |
| POST   | `/login`           | Login user          |
| GET    | `/api/film`        | Get all movies      |
| GET    | `/api/film/:id`    | Get movie by ID     |
| POST   | `/api/film`        | Create movie        |
| PUT    | `/api/film/:id`    | Update movie        |
| DELETE | `/api/film/:id`    | Delete movie        |

## Swagger Docs

Buka `http://localhost:3000/doc` untuk melihat API documentation.
