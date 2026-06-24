let angka = [2, 5, 1, 3, 4];



console.log(angka[0]); // 2
console.log(angka[2]); // 1

console.log("==== Array Method ====");

// panjang array
console.log(angka.length);

// push() - tambah di akhir
angka.push(6);
console.log(angka);

// pop() - hapus elemen terakhir
angka.pop();
console.log(angka);

// unshift() - tambah di awal
angka.unshift(0);
console.log(angka);

// shift() - hapus elemen pertama
angka.shift();
console.log(angka);

// join() - array menjadi string
let gabung = angka.join(", ");
console.log(gabung);

// split() - string menjadi array
let pisah = gabung.split(", ");
console.log(pisah);

// sort() - urutkan angka
angka.sort((a, b) => a - b);
console.log(angka);

// slice() - ambil sebagian array
console.log(angka.slice(1, 4));

// splice() - tambah/hapus elemen
angka.splice(2, 1, 10); // index 2, hapus 1 elemen, ganti dengan 10
console.log(angka);

var arr =['apel', 'jeruk', 'mangga', 'pisang'];
//join
console.log(arr.join(' buah'));
