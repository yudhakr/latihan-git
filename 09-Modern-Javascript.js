// const isMomHappy = false;

// // Promise
// const willIGetNewPhone = new Promise(
//   function (resolve, reject) {
//     if (isMomHappy) {
//       const phone = {
//         brand: 'Samsung',
//         color: 'black'
//       };
//       resolve(phone); // fulfilled atau janji dipenuhi
//     } else {
//       const reason = new Error('Ibu Tidak Senang');
//       reject(reason); // reject (ingkar)
//     }
//   }
// );

// function askMom() {
//   willIGetNewPhone
//     .then(function (fulfilled) {
//       console.log(fulfilled);
//     })
//     .catch(function (error) {
//       console.log(error.message);
//     });
// }

// askMom();

//Contoh Promise lainnya
function periksaDataPasien(nomorIdPasien) {
  var dataPasien = [
    {id: 1, nama: "John", jenisKelamin: "Laki-laki"},
    {id: 2, nama: "Michael", jenisKelamin: "Laki-laki"},
    {id: 3, nama: "Sarah", jenisKelamin: "Perempuan"},
    {id: 4, nama: "Frank", jenisKelamin: "Laki-laki"}
  ]
  return new Promise( function (resolve, reject){
    var pasien = dataPasien.find(x=> x.id === nomorIdPasien)
    if (pasien === undefined){
      reject("data pasien tidak ada")
    }else{
      resolve(pasien)
    }
  })
}
periksaDataPasien(1).then(function(data){
    console.log(data)
}).catch(function(err){
    console.log(err)
})