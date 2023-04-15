console.log('aji <br>' )

// // // Membuat objek Date dengan tanggal tertentu
// let tanggal = new Date('2023-04-02');

// // Membuat array yang berisi nama-nama hari dalam bahasa Inggris
// let namaHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

// // Mengambil nilai hari dari objek Date
// let dayIndex = tanggal.getDay();

// // Mengambil nama hari dari array namaHari dengan menggunakan index dayIndex
// let hari = namaHari[dayIndex];

// console.log(hari); // output: Selasa

function hari1(angka){
    let tanggal = new Date(angka)

    let day = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

    let newHari = tanggal.getDay()

    return res = day[newHari]
}

console.log(hari1('2023-04-03'))



function gage (angka){
    if(angka % 2 == 0 ){
        return 'genap'
    }else if (angka % 2 == 1 ){
        return 'ganjil'  
  }
}
console.log(gage(1))


const d = new Date();
let text = d.toDateString();

console.log(text)


const arr = ['aji','oji','ojan']
const hallo = "hallo"
const numbers = [1,2,3,4,12,6,7,8,9]

const number= Math.min.apply(null, numbers) 
console.log(number)
console.log(hallo.toUpperCase())