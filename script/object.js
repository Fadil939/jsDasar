//!object literal
let dataDiri = {
  nama: "fadhlur rahman",
  umur: 20,
  alamat: {
    jalan: "kp.abcde rt.01 rw.6",
    kota: "babelan",
  },
};

//!function declaration
function buatBiodata(nama, umur, Jkelamin, jurusan) {
  let data = {};
  data.nama = nama;
  data.umur = umur;
  data.Jkelamin = Jkelamin;
  data.jurusan = jurusan;
  return data;
}
let dataDiri2 = buatBiodata("fadil", 18, "laki-laki", "Teknik Mesin");

//!constructor
//function yang khusus membuat object
function Biodata(nama, umur, jurusan, email) {
  this.nama = nama;
  this.umur = umur;
  this.jurusan = jurusan;
  this.email = email;
}
let dataDiri3 = new Biodata("rahman", 19, "Teknik Komputer Jaringan", "rahman929@gmail.com");
