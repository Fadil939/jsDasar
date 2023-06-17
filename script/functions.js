//fuction parameter
//! variabel yang di tulis di dalam kurung pada saat function dibuat,
//!digunakan untuk menampung nilai yang dikirim saat function dipanggil
function jumlahPersegi(a, b) {
  //() itu di sebut parameter
  let hasil;
  let volumeA;
  let volumeB;

  volumeA = a * a * a;
  volumeB = b * b * b;

  hasil = volumeA + volumeB;

  return hasil;
}
console.log(jumlahPersegi(10, 5));
//? refactoring konsep penulisan code yang lebih 'baik' tanpa merubah functionalitasnya
//!code di bawah ini sudah di refactoring
function jumlahPersegi1(a, b) {
  return a * a * a + b * b * b;
}
console.log(jumlahPersegi1(10, 5));

//? function argument
//? nilai yang dikirimkan oleh parameter saat fungsi di panggil
function tambah(a, b) {
  return a + b;
}
console.log(tambah(2, 3));
//? function array /sudo variabel argument
function tambah1() {
  let hasil = 0;
  for (let i = 0; i < arguments.length; i++) {
    hasil += arguments[i];
  }
  return hasil;
}
let coba = tambah1(1, 2, 3, 10, 4);
console.log(coba);
