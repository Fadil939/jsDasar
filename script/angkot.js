//fitur angkot
//tambah penumpang/
// menerima 2 parameter
//!nama penumpang ,array penumpang
// ! rules
// jika angkot kosong maka penumpang duduk di kursi pertama
// penumpang selanjut nya akan duduk secara berurutan
//jika kursi kosong maka .penumpang yang naik berikutnya duduk di kursi kosong terlebih dahulu
//nama penumpang tidk boleh sama ,untuk mengihindari kebigungan ketika penumpang turun

//hapus penumpang
let penumpang = ["fadil", undefined, "dika"];
let tambahPenumpang = function (namaPenumpang, penumpang) {
  //jika angkot kosong
  if (penumpang.length == 0) {
    //tambah penumpang di awal array
    penumpang.push(namaPenumpang);
    return penumpang;
  } else {
    //telusuri kursi dari awal
    for (let i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == undefined) {
        penumpang[i] = namaPenumpang;
        return penumpang;
      }
      //jika sudah ada nama yang sama
      else if (penumpang[i] == namaPenumpang) {
        //tampilkan pesan kesalahan
        console.log("Nama yang ada masukan sudah ada di dalam angkot");
        //kembalikan isi array &keluar dari functionnya
        return penumpang;
      }
      //jika seluruh kursi penuh
      else if (i == penumpang.length - 1) {
        //tambah penumpang di akhir array
        penumpang.push(namaPenumpang);
        //kembalikan isi array dan keluar dari function
        return penumpang;
      }
    }
  }
};
