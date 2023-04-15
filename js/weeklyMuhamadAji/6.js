
const getHeavingmax = ((w1,w2,w3) => {
    try {
        if(isNaN(w1) || isNaN(w2) || isNaN(w3)){//validasi bukan angka
            throw new Error(`${w1} or ${w2} or ${w3} Harus Angka`)
        }
        let arr = [w1,w2,w3]//jadikan parameter menjadi array kedalam variable arr
        let max = ''//deklarasi variable untuk menampung array
        for (let i = 0; i < arr.length; i++) {//loop array berdasarkan arr
            if(arr[i] > max){
                max = arr[i] //jika arr[index loop] lebih besar dari varible max makan varible max akan menampung arr[index loop]
            }
        }
        return max//return max
    } catch (error) {
        return error.message//return erro
    }
})

// console.log(getHeavingmax(12,45,70))
// console.log(getHeavingmax("12","a",70))
