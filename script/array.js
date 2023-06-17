//array adalah variabel yang lebih sakti
/*
  kunaon kang ko array bisa sakti kie?
  karena array bisa menampung banyak variabel dan juga bisa banyak menampung beberapa 
  jenis karakter seperti String, int ,bo'ol
  oiya..hitungan array itu dimulai dari angka 0 kawan kawan jadi 0,1,2,3,4,5 dan seterusnya 

  fungsi array ada banyak contoh
  lenght =mengihitung panjang array 
  unshift = menyisipkan array di awal/depan 
  shift = menghapus isi dan array di awal/paling depan
  join = menampilkan  semua isi array 
  pop = menghapus semua data array yang ada di akhir
  push() = menambahkan array di akhir
  slice(awal ,akhir) = MENGIRIS dan hanya mengambil yang di target
  contoh kode saya tulis di bawah soalnya unik
  
  let arr = [1, 2, 3, "kuda", "sapi", "kerbau", "kambing"];
  let arr2 = arr.slice(1, 3);
  console.log(arr2.join(" - "));
  
  splice(indexawal ,mauDihapus berapa ,element baru1,element baru 2) =
  
  map
  
  
  */
let arr = [1, 2, 3, "kuda", "sapi", "kerbau", "kambing"];
let arr2 = arr.slice(1, 3);
console.log(arr2.join(" - "));

console.log("====BINATANG===");
//dari pada kita panggil satu satu yah ribet mending kita pake perulangan/for
let binatang = ["rusa", "beruang", "buaya", "singga"];
for (let i = 0; i < binatang.length; i++) {
  console.log(binatang[i]);
}
