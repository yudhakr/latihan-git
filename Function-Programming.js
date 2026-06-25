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
  var pi = 22/7

  function luas (r){return pi * r * r}
  function keliling (r){return 2 * pi * r }
  console.log("Luas:", luas(radius))
  console.log("Keliling:",keliling(radius))
}

HitungLingkaran(7)

console.log ("")