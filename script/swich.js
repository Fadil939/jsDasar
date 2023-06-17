//perulangan swich
//ketika memasukan data melalui prompt ingat data yang kita masukan yaitu string
//kalau kita ingin datanya int kita harus menambahkan data parseInt(promp());

let item = prompt("Masukan nama makanan/minuman : \n (cth : nasi ,daging ,susu ,hamburger ,softDrink)");

switch (item) {
  case "susu":
  case "nasi":
  case "daging":
    alert("makanan/minuman sehat");
    break;
  case "hamburger":
  case "softDrink":
    alert("makanan/minuman tidak sehat");
    break;
  default:
    alert("anda masukan nama makanan yang salah");
}
