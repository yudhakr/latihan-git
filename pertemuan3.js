// console.log("---- Fundamental JavaScript ----");
// var negara ="indonesia";
// if (negara == "jepang") {
//     console.log("negara ini adalah indonesia");
// }
// else {
//     console.log("negara ini bukan indonesia");
// }

// console.log("---- Conditional Statement ----");
// if(true) {
//     console.log("Kode program dijalankan");

// }
// if(false) {
//     console.log("Kode program tidak dijalankan");
// }
// var angka = 10;
// if(angka == "10") {
//     console.log("angka sama dengan 10");
// }

// console.log("---- Conditional Statement (if else) ----");
// var mobil = "pajero";
// if(mobil == "honda") {
//     console.log("mobil ini adalah honda");
// }
// else if(mobil == "suzuki") {
//     console.log("mobil ini bukan honda");
// }
// else {
//     console.log("mobil tidak diketahui");
// }


var minimarketStatus = "open"
var telur = "soldout"
var buah = "soldout"
if ( minimarketStatus == "open" ) {
    console.log("saya akan membeli telur dan buah")
    if(telur == "soldout" || buah == "soldout" ) {
        console.log("belanjaan saya tidak lengkap")
    } else if( telur == "soldout") {
        console.log("telur habis")
    } else if ( buah == "soldout" ) {
        console.log("buah habis")
    }
} else {
    console.log("minimarket tutup, saya pulang lagi")
}