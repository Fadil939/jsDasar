//angkot 2
//fitur bisa cek penumpang  dan menghapus dan bayar
//nama penumpang , ruteAngkot ,
//!object
function Angkot(sopir, ruteAngkot, penumpang, kas) {
  this.sopir = sopir;
  this.ruteAngkot = ruteAngkot;
  this.penumpang = penumpang;
  this.kas = kas;

  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  };
  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang.length === 0) {
      console.log("angkot kosong");
      return false;
    }

    for (let i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] == namaPenumpang) {
        this.penumpang[i] = undefined;
        this.kas += bayar;
        return this.penumpang;
      } else if (i == this.penumpang.length - 1) {
        console.log(namaPenumpang + " nama tidak ada dalam angkot");
        return this.penumpang;
      }
    }
  };
}

let angkot1 = new Angkot("andre", ["setu", "tambun"], [], 0);
