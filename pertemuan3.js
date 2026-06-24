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


// var minimarketStatus = "open"
// var telur = "soldout"
// var buah = "soldout"
// if ( minimarketStatus == "open" ) {
//     console.log("saya akan membeli telur dan buah")
//     if(telur == "soldout" || buah == "soldout" ) {
//         console.log("belanjaan saya tidak lengkap")
//     } else if( telur == "soldout") {
//         console.log("telur habis")
//     } else if ( buah == "soldout" ) {
//         console.log("buah habis")
//     }
// } else {
//     console.log("minimarket tutup, saya pulang lagi")
// }

// console.log("---- Conditional Statement contoh umur ----");

// var umur = 25;
// if(umur >= 17) {
//     console.log("sudah bisa membuat KTP");
// }  if(umur > 20) {
//         console.log("umur sama dengan 20");
//     } else if(umur > 30) {
//         console.log("umur lebih dari 20 -30");
//     } else if(umur > 40) {
//         console.log("umur lebih dari 30 - 40");
//     }else{
//     console.log("sudah berumur");
// }

// console.log("---- Conditional Statement switch case ----");
//  var warna = "merah";
// switch(warna) {
//     case "kuning": {
//         console.log("warna kuning");
//         break;}
//     case "merah": {
//         console.log("warna merah");
//         break; }
//     case "hijau":{
//         console.log("warna hijau");
//         break;}
//     default:{
//         console.log("warna tidak diketahui");}
// }

// console.log("---- Conditional Statement For loop ----");
// for(var angka = 0; angka < 10; angka++) {
//     console.log("angka ke - " + angka);
// }

// var jumlah = 0;
// for( var deret = 5; deret <= 10; deret++) {
//     jumlah += deret;
//     console.log("jumlah saat ini - " + deret + " adalah " + jumlah);
// }

// console.log('Jumlah terakhir adalah ' + jumlah);

// var flag2 =1;
// while(flag2 < 10) {
//     console.log("literasi ke - " + flag2);
//     flag2++;
// } while(flag2 > 0);


// console.log("---- Conditional Statement Do While loop ----");
// var flag =9;
// do{
//     console.log("literasi ke - " + ( 10 - flag));
//     flag--;
// } while(flag >0);

 for(let i = 2; i <= 10; i += 2) {
    console.log("literasi for ke : " + i);

 }

 let j = 2;
 while(j <= 10) {
    console.log("literasi while ke : " + j);
    j += 2;
 }