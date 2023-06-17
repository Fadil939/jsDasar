//!expression
//! inget tampilnama tidak boleh sama dengan parameter nanti js tidak tau kita panggil apa
//*? fungsi expression adalah fungsi yang di simpan dalam sebuah variabel,maka variabel bisa
//* digunakan sebagai fungsi
// let tampilNama = function (nama) {
//   alert("Halo " + nama);
// };
// tampilNama("fadil");

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let nama = ["fadhlur", "rahman", "fadil"];
// let angka = function (e) {
//   console.log(e);
// };
// arr.forEach(angka);

// nama.forEach(function (e, i) {
//   console.log("Mahaswiswa ke-" + (i + 1) + " adalah : " + e);
// });

//!keren ya keren abis ternya si function expression ini

//1.map
//?mengolah setiap element di array/object dan kemudian menghasilkan array/object baru.
// let angka = [1, 3, 4, 7, 89, 3];
// let angka2 = angka.map(function (e) {
//   return e * 3;
// });
// console.log(angka2.join(" - "));

//2. sort
//?mengurutkan element dengan rapih ciesss
// let angka = [1, 3, 10, 20, 4, 7, 89, 3];
// angka.sort(function (a, b) {
//   return a - b;
// });
// console.log(angka.join(" - "));

//3.filter mencari nilai pada array dan mengembalikan pada bentuk array
//4.find itu untuk menemukan 1 nilai
let angka = [1, 3, 2, 10, 20, 4, 7, 89];
var angka1 = angka.find(function (e) {
  return e > 3;
});
console.log(angka1);
