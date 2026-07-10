# Express.js Movie API

## Prerequisites

- Node.js
- MySQL server berjalan

## Setup Database

Buat database dan tabel di MySQL:

```sql
CREATE DATABASE db_movie;
USE db_movie;

CREATE TABLE tb_movie (
  id_tb_movie INT AUTO_INCREMENT PRIMARY KEY,
  title_tb_movie VARCHAR(255) NOT NULL,
  year_tb_movie INT NOT NULL
);

INSERT INTO tb_movie (title_tb_movie, year_tb_movie) VALUES
  ('Spider-Man', 2002),
  ('John Wick', 2014),
  ('The Avengers', 2012),
  ('Logan', 2017),
  ('Para Kiai', 2026),
  ('Para Pencari Tuhan', 2023),
  ('Dragon Ball', 2024),
  ('Lupin', 2025);
```

Sesuaikan kredensial MySQL di `src/config/db.js` jika berbeda.

## Cara Menjalankan

```bash
npm install
npm start
```

Server berjalan di `http://localhost:3000`.

## Endpoints

### GET /api/film
Mengambil semua film dari database.

**Contoh:**
```
GET http://localhost:3000/api/film
```

### GET /api/film/:id
Mengambil film berdasarkan ID.

**Contoh:**
```
GET http://localhost:3000/api/film/1
```

### POST /api/film
Menambahkan film baru. Body (JSON): `{ "title": "Judul", "year": 2024 }`

**Contoh:**
```
POST http://localhost:3000/api/film
Content-Type: application/json

{ "title": "Film Baru", "year": 2024 }
```

### PUT /api/film/:id
Mengupdate film berdasarkan ID. Body (JSON): `{ "title": "Judul", "year": 2024 }`

**Contoh:**
```
PUT http://localhost:3000/api/film/1
Content-Type: application/json

{ "title": "Judul Baru", "year": 2025 }
```

### DELETE /api/film/:id
Menghapus film berdasarkan ID.

**Contoh:**
```
DELETE http://localhost:3000/api/film/1
```
