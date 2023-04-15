
const isPalindrome = (angka => {
    try {
        if(isNaN(angka)){//validasi bukan angka
            throw new Error(`${angka} is not number`)
        }
        let result //deklarasi varible result untuk menampung hasil
        let reserve = angka.toString().split('').reverse().join('')//parameter angka dijadikan string agar bila di bedah satu-satu dan di split('') atau di pisahkan lalu di balik menggunakan reserve() dan kemudian disatukan lagi dengan join('')
        if(angka == reserve){
         result = `${angka} is palindrom`//jika parameter angka sama dengan variable reserve maka itu palindrom dan akan di tampung ke dalam variable result
        } else{
         result = `${angka} is not palindrom`//jika buka nmaka itu bukan palindrom dan akan di tampung ke dalam variable result
        }
         return result//return result
    } catch (error) {
        return error.message//return error
    }
}) 

// console.log(isPalindrome("abcd"))
// console.log(isPalindrome("123a"))
// console.log(isPalindrome("1234"))
// console.log(isPalindrome(1221))
// console.log(isPalindrome("888"))
