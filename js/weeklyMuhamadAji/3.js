const elapsedTime = (seconds => {
    try {
        if(isNaN(seconds)){//jika parameter n isNaN (bukan integer) maka ada error "is not number"
            throw new Error(`${seconds} is not number`)
        }
        const detikKeMenit = 60 //deklarasi varible detikKeMenit berdasarkan 1 menit ada 60 detik
        const detikKeJam = detikKeMenit * 60//deklarasi varible detikKeJam dan nilainya berdasarkan satu jam ada 60 menit
        const detikKeHari = detikKeJam * 24//deklarasi varible detikKeHari dan nilainya berdasarkan satu hari ada 24 jam
    
        const hari = Math.floor(seconds / detikKeHari)//varible hari didapat dari parameter seconds / variable detikKeHari menggunakan math.floor
        const sisaDetik1 = seconds % detikKeHari//varible sisaDetik1 digunakan untuk mengambil sisa detik dari parameter seconds modulus dengan detikKeHari
        const jam = Math.floor(sisaDetik1 / detikKeJam)//varible jam didapat dari variable sisaDetik1 / variable detikKeJam menggunakan math.floor
        const sisaDetik2 = seconds % detikKeJam//variable sisaDetik2 digunakan untuk mengambil sisa detik dari parameter seconds modulus dengan detikKeJam
        const menit = Math.floor(sisaDetik2 / detikKeMenit)//variable menit didapat dari sisaDetik2 / variable detikKeMenit menggunakan math.floor
        const detik = sisaDetik2 % detikKeMenit//variable detik didapat dari sisa varible sisaDetik2 modules dengan detikKeMenit
    
        return `${hari} Hari ${jam} Jam ${menit} Menit ${detik} Detik`//return hasil
    } catch (error) {
        return error.message//return message
    }
}) 

// console.log(elapsedTime("70a005"))
// console.log(elapsedTime( 700005))
