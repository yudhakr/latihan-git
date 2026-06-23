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
console.log("==== Operasi Aritmatika ===");
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
console.log("==== Operasi Perbandingan ===");
var x = 1;
var z = 1;
var y = 2;
console.log("x > y: " + (x > y));
console.log("x < y: " + (x < y));
console.log("x == z: " + (x == z));
console.log("x === z: " + (x === z));
console.log("x != z: " + (x != z));

//Operator Kondisional
console.log("==== Operator Kondisional ====");
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
console.log( word + " " + word2);

var word3 = "javascript";
console.log(word.substring(0, 3));
console.log(word2.toUpperCase()); // Mengambil substring dari indeks 0 hingga 3


//Mengubah menjadi string
console.log("==== Mengubah menjadi string ===");

var angka = 123;
var angkaString = "sepuluh";
var angkaString = angka.toString();
console.log(angkaString);
// .toString() digunakan untuk mengubah tipe data menjadi string.
console.log(typeof angkaString); // Output: string
// String(namaVariable) digunakan untuk mengubah tipe data menjadi string.
console.log(String(angka)); // Output: "123"
// String(namaVariable) digunakan untuk mengubah tipe data menjadi string.
console.log(typeof String(angka)); // Output: string
// Strring(namaVariable)
console.log(String(angka)); // Output: "123"
// Mengubah menjadi angka/Number
console.log(Number(angkaString)); // Output: 123
// parseInt(namaVariable).
console.log(parseInt(angkaString)); // Output: 123

