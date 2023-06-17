let penumpang = ["fadil", undefined, "andi"];
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
//!hapus penumpang
let hapusPenumpang = function (namaPenumpang, penumpang) {
  //jika angkot kosong
  if (penumpang.length == 0) {
    console.log("angkot tidak ada penumpang");
    return penumpang;
  } else {
    for (let i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == namaPenumpang) {
        penumpang[i] = undefined;
        return penumpang;
      } else if (i == penumpang.length - 1) {
        console.log(namaPenumpang + " tidak ada di dalam angkot");
        return penumpang;
      }
    }
  }
};
