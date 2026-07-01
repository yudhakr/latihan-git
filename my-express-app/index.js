const express = require('express');
const app = express();
const port = 3000;


let mahasiswa = [ "Budi", "Siti", "Joko", "Rina", "Sari", "Dedi" ];
let  obmahasiswa = [
  {nim:11244,
    nama:"Yuliati"
  },
  {nim:11245,
    nama:"Desta Gredy"
  },
  {
    nim:11246,
    nama:"Andra Ramadani"
  },
  {
    nim:11247,
    nama:"Dimas Wijaya"
  }
]

// const dagangan = (req, res) => {
//   res.send('Saya menjual berbagai buah-buahan segar');
// }

// app.get('/', (req, res) => {
//   res.send('Bandung Lautan Api');
// });

const getobmahasiswa = (req, res) => {
  let result = ""
  obmahasiswa.forEach((item, index) => {
    result += `<H3>${index + 1}. ${item.nama} NIM : ${item.nim}.</H3>`
  })
  res.send(result);
}



const getmahasiswa = (req, res) => {
  let result = ""

  mahasiswa.forEach(function(item,index){
    result += `<h2>${index + 1}. ${item}</h2> <p>`; 
  })
 
  res.send(result);
}

app.get('/mahasiswa', getmahasiswa);
app.get('/obmahasiswa', getobmahasiswa);

// app.get('/dagangan', dagangan);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});