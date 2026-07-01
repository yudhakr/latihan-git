//  console.log("==== Deklarasi Object ====");
//  var car = {
//      brand: "Toyota",
//      type: "Avanza",
//      price: 50000000,
//      "house power": 986
//  };
//  console.log(car);

// var orang = {
//     nama: "Ayudha Kusuma Rahmadhani",
//     jenisKelamin: "Laki-laki",
//     tinggibadan: 170,
//     berat: 60,
//     usia: 25,
// }
// console.log(orang);
// console.log(orang.nama);
// console.log(orang.jenisKelamin);
 

// console.log("==== Array Object ====");
// var orang2 = [ {
//     nama: "Ayudha Kusuma Rahmadhani",
//     jenisKelamin: "Laki-laki",
//     tinggibadan: 170,
//     berat: 60,
//     usia: 25
// },
// {
//     nama: "Budi Setiawan",
//     jenisKelamin: "Laki-laki",
//     tinggibadan: 175,
//     berat: 70,
//     usia: 30
// },
// {
//     nama: "Citra Dewi",
//     jenisKelamin: "Perempuan",
//     tinggibadan: 165,
//     berat: 55,
//     usia: 28
// }
// ];
// // console.log(orang2);
// // console.log(orang2[1].nama);
// // console.log(orang2[2].nama);


//  console.log("==== Penggunaan foreach ====");
//  orang2.forEach(function(orang) {
//      console.log(orang.tinggibadan);
//  });


//   console.log("==== Penggunaan Map ====");
//  var tinggiBadan = orang2.map(function(orang) {
//      return orang.tinggibadan + " cm";
//  });
//  console.log(tinggiBadan);


console.log("==== Penggunaan Filter ====");
// var mo0bil = [ 
//     {merk: "Toyota",warna: "Merah",tipe: sedan,},
//     {merk: "Honda",warna: "Biru",tipe: hatchback},
//     {merk: "Suzuki",warna: "Hitam",tipe: MPV},

// ]
// var arraymobilFilter = mo0bil.filter(function(item) {
//     return item.tipe != " sedan"
// })

// console.log(arraymobilFilter)



var orang3 = [ {
    nama: "Ayudha Kusuma Rahmadhani",
    jenisKelamin: "Laki-laki",
    tinggibadan: 170,
    berat: 60,
    usia: 25
},
{
    nama: "Budi Setiawan",
    jenisKelamin: "Laki-laki",
    tinggibadan: 175,
    berat: 70,
    usia: 30
},
{
    nama: "Citra Dewi",
    jenisKelamin: "Perempuan",
    tinggibadan: 165,
    berat: 55,
    usia: 28
}
];

var arrayumur = orang3.filter(function(umur){
    return umur.usia < 28;
})

console.log(arrayumur)
