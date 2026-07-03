# Express.js Movie API

## Middleware

| Middleware | Route | Fungsi |
|------------|-------|--------|
| `loggerMiddleware` | `/api/movies`, `/api/movies/:id` | Mencatat method dan URL request |
| `tokenMiddleware` | `/api/movies`, `/api/movies/:id` | Validasi query `token` (harus `1200`) |
| `yearMiddleware` | `/api/movies` | Validasi query `year` (harus angka) |
| `timeMiddleware` | `/api/movies/:id` | Mencatat waktu request |
| `checkMovieIdMiddleware` | `/api/movies/:id` | Memvalidasi apakah ID movie ada |

## Endpoints

### GET /api/movies
Filter movie berdasarkan `title` dan/atau `year`.

**Contoh Thunder Client:**

1. **Semua movie**
   ```
   GET http://localhost:3000/api/movies?token=1200
   ```

2. **Filter by title**
   ```
   GET http://localhost:3000/api/movies?token=1200&title=spider
   ```

3. **Filter by year**
   ```
   GET http://localhost:3000/api/movies?token=1200&year=2014
   ```

4. **Filter by title + year**
   ```
   GET http://localhost:3000/api/movies?token=1200&title=a&year=2012
   ```

5. **Year bukan angka (error)**
   ```
   GET http://localhost:3000/api/movies?token=1200&year=abc
   ```

### GET /api/movies/:id
Cari movie berdasarkan ID. Middleware `timeMiddleware` mencatat waktu request.

**Contoh Thunder Client:**

1. **Movie ditemukan**
   ```
   GET http://localhost:3000/api/movies/1?token=1200
   ```

2. **Movie tidak ditemukan**
   ```
   GET http://localhost:3000/api/movies/99?token=1200
   ```

3. **Token salah**
   ```
   GET http://localhost:3000/api/movies/1?token=wrong
   ```

### GET /movies/:id
Endpoints HTML (tanpa middleware, tanpa token).

**Contoh Thunder Client:**
```
GET http://localhost:3000/movies/1
```

## Cara Menjalankan

```bash
npm install
node index.js
```

Server berjalan di `http://localhost:3000`.
