//percabangan
// let s = "";
// for (let i = 10; i > 0; i--) {
//   for (let j = 0; j < i; j++) {
//     s += "*";
//   }
//   s += "\n";
// }
// console.log(s);

//sederhana cuman di tambah prompt agar bisa/mudah  di input oleh user
// let item = "";
// let i = parseInt(prompt("Masukan jumlah"));
// let samping = parseInt(prompt("Masukan jumlah Bintang perbaris"));

// for (let u = 0; u < 10; u++) {
//   for (let sam = 0; sam < samping; sam++) {
//     item += "*";
//   }
//   item += "\n";
// }
// console.log(item);

//contoh membuat segtiga siku siku{}
function segitgaSiku(siku) {
  let hasil = "";
  for (let i = siku; i > 0; i--) {
    for (let j = siku; j > 0; j--) {
      if (j > i) {
        hasil += " ";
      } else {
        hasil += "#";
      }
    }
    hasil += "\n";
  }
  return hasil;
}
console.log(segitgaSiku(10));
