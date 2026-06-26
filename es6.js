// const pi = 3.14
// pi = 22/7

// console.log(pi)

// const HitungLingkaran = (radius) => {
//   const pi = 3.14;

//   // Arrow function untuk lingkaran (bisa dibuat sangat ringkas / satu baris)
//   const luas = (r) => pi * r * r;
//   const keliling = (r) => 2 * pi * r;
  
//   console.log("Luas Lingkaran:", luas(radius));
//   console.log("Keliling Lingkaran:", keliling(radius));
// };

// const HitungPersegi = (sisi) => {
//   // Arrow function untuk persegi
//   const luaspersegi = (s) => s * s; 
//   const kelilingpersegi = (s) => 4 * s;

//   console.log("Luas Persegi :", luaspersegi(sisi));
//   console.log("Keliling Persegi :", kelilingpersegi(sisi));
// };

// // const  Hitungpersegipanjang = (panjang,lebar) =>{

// //     const luaspersegipanjang = (p,l) => p * l; 
// //     const kelilingpersegipanjang = (p,l) => 2*(p + l);

// // }

// const HitungPersegiPanjang = (p, l) => {
//   // Nested arrow function untuk perhitungan
//   const luas = (panjang, lebar) => panjang * lebar;   
//   const keliling = (panjang, lebar) => 2 * (panjang + lebar);  

//   console.log("Luas Persegi Panjang:", luas(p, l));
//   console.log("Keliling Persegi Panjang:", keliling(p, l));
// };

// // Memanggil fungsi dengan panjang 10 dan lebar 5
// console.log(" === Hasil Persegi Panjang ===")
// HitungPersegiPanjang(10, 5);
// console.log(" === Hasil Persegi Lingkaran ===")
// HitungLingkaran(7);
// console.log(" === Hasil Persegi ===")
// HitungPersegi(5);
// // HitungPersegipanjang(10);


// let nama =" Asep Purnomo Abadi"
// let person = {
//   nama : nama,
//   umur : 23,
//   tinggi : 150
// }
// console.log(person)

// let numb = [1,2,8,9,6]
let [num1, , , , lastnum] = [4,2,8,9,6]

let football =["messi","ronaldo","mebbe","halland","nymar"]
let [ foot1,foot2, , ,restfoot] = football

console.log(foot1)
console.log(foot2)