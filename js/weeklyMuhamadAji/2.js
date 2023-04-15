
function sumDigit(n) {
    try {
        if(isNaN(n)){//jika parameter n isNaN (bukan integer) maka ada error "Must be a number"
            throw new Error(`${n} Must be a number`)
        }else if(n >= 10000){//jika parameter n lebih dari 10000 maka ada error "lebih dari 10000"
            throw new Error(`${n} lebih dari 10000`)
        } 
        let sum = 0 //declarasi varible sum untuk menampung hasil
        let str = n.toString()//variable str mengubah parameter n ke stirng agar dapat di jumlahkan
        for (let i = 0; i < str.length; i++) {//looping varible str ke dalam i
          sum += +str[i]//masukan varible str berdasarkan i(hasil looping) dan ubah menjadi interger karna sudah di loop
        }
        return sum//return varible sum
    } catch (error) {
        return error.message//return error
    }
}

console.log(sumDigit("234"))
console.log(sumDigit(1234))
console.log(sumDigit(10000))
console.log(sumDigit("a234"))
