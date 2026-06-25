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
  
  // Fungsi untuk persegi (sisi = r)
  

  console.log("Luas Lingkaran:", luas(radius));
  console.log("Keliling Lingkaran:", keliling(radius));
 
}
function Persegi(sisi)
{
  function luaspersegi(s) { return s * s; } 
  function kelilingpersegi(s) { return 4 * s; }

  console.log("Luas Persegi :", luaspersegi(sisi));
  console.log("Keliling Persegi :", kelilingpersegi(sisi));
  }

HitungLingkaran(7);
HitungPersegi(5);

// console.log ("=== Currying Function ===")

// function HitungLingkaran(radius) {
//   var pi = 22/7

//   function luas (r){return pi * r * r}
//   function keliling (r){return 2 * pi * r }
//   console.log("Luas:", luas(radius))
//   console.log("Keliling:",keliling(radius))
// }

// HitungLingkaran(8)


