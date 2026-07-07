const express = require('express');
const app = express();
const port = 3000;

let mahasiswa = ["Budi", "Siti", "Joko", "Rina", "Sari", "Dedi"];
let obmahasiswa = [
  { nim: 11244, nama: "Yuliati" },
  { nim: 11245, nama: "Desta Gredy" },
  { nim: 11246, nama: "Andra Ramadani" },
  { nim: 11247, nama: "Dimas Wijaya" },
  { nim: 11248, nama: "Andra Wijaya" },
  { nim: 11249, nama: "Siti Maimunah" }
];

// const getmahasiswa = (req, res) => {
//   let result = "";
//   mahasiswa.forEach((item, index) => {
//     result += `<h2>${index + 1}. ${item}</h2>`;
//   });
//   res.send(result);
// };

const getobmahasiswa = (req, res) => {
  let { nama } = req.query;
  let result = "";

  console.log(nama)
  if (nama == undefined){
    result = ""
  }
  
  obmahasiswa.forEach((item, index) => {
    if (!nama || item.nama.toLowerCase().includes(nama.toLowerCase())) {
      result += `<h3>${index + 1}. ${item.nama} NIM : ${item.nim}.</h3>`;
    }
  });
  
  // PERBAIKAN: Jika result kosong, otomatis kirimkan teks Error
  res.send(result || "<h3>Error: Data mahasiswa tidak ditemukan.</h3>");
};

// const getobmahasiswaid = (req, res) => {
//   let { nim } = req.params;
//   let hasil = obmahasiswa.find((item) => item.nim === Number(nim));
//   if (!hasil) {
//     res.status(404).send(`Mahasiswa dengan NIM ${nim} tidak ditemukan`);
//     return;
//   }
//   res.send(`Nama Mahasiswa ${hasil.nama} NIM : ${hasil.nim}`);
// };

// app.get('/mahasiswa', getmahasiswa);
app.get('/obmahasiswa', getobmahasiswa);
// app.get('/obmahasiswa/:nim', getobmahasiswaid);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
