//menangkap pilihan users
let p = prompt("Masukan 1.Gajah 2.manusia 3.semut");

//menangkap pilihan computer
// membangkitkan pilihan random
let comp = Math.random();

if (comp < 0.34) {
  comp = "gajah ";
} else if (comp >= 0.45 && comp < 0.65) {
  comp = "manusia";
} else {
  comp = "semut";
}
let hasil = "";
//menentukan rules
if (p == comp) {
  hasil = "Seri";
} else if (p == "gajah") {
  hasil = comp == "orang" ? "menang" : "kalah";
} else if (p == "manusia") {
  hasil = comp == "gajah" ? "menang" : "kalah";
} else if (p == "semut") {
  hasil = comp == "gajah" ? "kalah" : "menang";
} else {
  hasil = "memasukan kondisi yang salah";
}

//tampilkan hasilnya
alert("Player memilih : " + p + " dan Computer memilih : " + comp + "  hasilnya kamu  : " + hasil);
// ?
