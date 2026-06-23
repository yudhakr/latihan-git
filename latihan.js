var hari = "Senin";
var quota = 10;

console.log("Pengembangan Web Lanjutan - Latihan JavaScript");
console.log("Hari: " + hari);
console.log("Kuota: " + quota);

//kode Kondisi
var open = false;
if (open == true) {
    console.log("Buka");
}
else {    console.log("Tutup");
}

//Operasi Aritmatika
var a = 10;
var b = 5;
var penjumlahan = a + b;
var pengurangan = a - b;
var perkalian = a * b;
var pembagian = a / b;
var modulus = a % b;
console.log(" Hasil Penjumlahan: " + penjumlahan);
console.log(" Hasil Pengurangan: " + pengurangan);
console.log(" Hasil Perkalian: " + perkalian);
console.log(" Hasil Pembagian: " + pembagian);
console.log(" Hasil Modulus: " + modulus);

//Operasi Perbandingan
var x = 1;
var z = 1;
var y = 2;
console.log("x > y: " + (x > y));
console.log("x < y: " + (x < y));
console.log("x == z: " + (x == z));
console.log("x === z: " + (x === z));
console.log("x != z: " + (x != z));

//Operator Kondisional
console.log("Operator Kondisional");  
console.log(true && true);   // true
console.log(true || false);  // true

var status = "Lulus";
var Nilai = 50;

console.log(status == "Lulus" && Nilai >= 75); // false
console.log(status == "Lulus" || Nilai >= 75); // true

var nama = " belajar web pemrograman";
var word = "web";
var word2 = "pemrograman";

console.log(nama.length); // Menghitung jumlah karakter
console.log(nama.toUpperCase()); // Mengubah menjadi huruf besar
console.log(nama.charAt(1)); // Mengambil karakter pertama

console.log(`${word} ${word2}`); // Menggabungkan string
console.log( word + " " + word2); // Menggabungkan string dengan operator +