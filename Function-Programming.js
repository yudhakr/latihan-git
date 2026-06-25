// function countDown (number){
//      console.log(number);


// var newNumber = number - 1;

// if (newNumber > 0){
//     countDown(newNumber);
// }

// }

// countDown(4);
console.log( "=== first-class function ===" );

function HitungLingkaran(radius) {
  var pi = 3.14;

  // Fungsi untuk lingkaran
  function luas(r) { return pi * r * r; }
  function keliling(r) { return 2 * pi * r; }
  
  console.log("Luas Lingkaran:", luas(radius));
  console.log("Keliling Lingkaran:", keliling(radius));
}

// Nama fungsi diubah dari Persegi menjadi HitungPersegi
function HitungPersegi(sisi) {
  // Fungsi untuk persegi
  function luaspersegi(s) { return s * s; } 
  function kelilingpersegi(s) { return 4 * s; }

  console.log("Luas Persegi :", luaspersegi(sisi));
  console.log("Keliling Persegi :", kelilingpersegi(sisi));
}

HitungLingkaran(7);
HitungPersegi(5); // Sekarang pemanggilan ini akan berhasil


// console.log ("=== Currying Function ===")

// function HitungLingkaran(radius) {
//   var pi = 22/7

//   function luas (r){return pi * r * r}
//   function keliling (r){return 2 * pi * r }
//   console.log("Luas:", luas(radius))
//   console.log("Keliling:",keliling(radius))
// }

// HitungLingkaran(8)


