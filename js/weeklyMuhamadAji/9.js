const getProsentase = ((income1, income2) => {
    try {
        if(isNaN(income1) || isNaN(income2)){//validasi jika bukan angka
            throw new Error(`${income1} or ${income2} harus angka`)
        }
        const total = (income2) - (income1) //variable total di dapat dari parameter income1 - parameter income2
        const persen = total / income1 * 100 //lalu variable total / dengan income1 dan * 100 dan menjadi variable persen
        let res = ''//deklarasi variable res untuk menampung hasil
        if(income2 < income1){
            res = `Total Penurunan income anda ${Math.floor(persen)}%`//jika income2 > dari income1 maka akan menghasilkan pesan penurunan income dan di masukan kedalam variable res
        }else {
            res = `Total Kenaikan income anda ${Math.floor(persen)}%`//jika bukan maka akan menghasilkan pesan Kenaikan income dan di masukan kedalam variable res
        }
        return res //return res
    } catch (error) {
        return error.message//return error
    }
})

// console.log(getProsentase("abc","bca"))
// console.log(getProsentase(600000,750000))
// console.log(getProsentase(750000, 650000))
