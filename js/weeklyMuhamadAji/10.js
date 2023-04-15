
const totalGaji = ((gaji1,gaji2,gaji3) => {
    try {
        if(isNaN(gaji1) ||isNaN(gaji2) ||isNaN(gaji3) ){//validasi jika bukan angka
            throw new Error('Harus Angka')
        }
        let gajiKe1 = gaji1 + (gaji1 * 2 / 100)//variable gajike1 didapat dari parameter gaji1 + dengan (gaji1 *2 / 100) untuk mendapat kan pajak sebesar 2%
        let gajiKe2 = gaji2 + (gaji2 * 5 / 100)//variable gajike2 didapat dari parameter gaji2 + dengan (gaji2 *5 / 100) untuk mendapat kan pajak sebesar 5%
        let gajiKe3 = gaji3 + (gaji3 * 10 / 100)//variable gajike3 didapat dari parameter gaji3 + dengan (gaji3 *2 / 100) untuk mendapat kan pajak sebesar 10%
        let total = gajiKe1 + gajiKe2 + gajiKe3//variable total digunakan untuk hasil dari gajike1 + gajike2 + gajike3
        return total.toLocaleString()//return total menggunakan toLocaleString() agar hasilnya ada koma
    } catch (error) {
        return error.message//return error
    }
})
// console.log(totalGaji(500,2000,12000))
// console.log(totalGaji(500,"a",12000)) 