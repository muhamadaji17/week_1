const cordinat = ((x1, y1, x2, y2) => {
    let total = Math.sqrt(Math.pow(x1-x2, 2)+Math.pow(y1-y2, 2))
    return total  
})

// console.log(cordinat(3.2,4.5,-4,-5))

const sum = (n => {
    let str = n.toString()
    let res =0
    for (let i = 0; i < str.length; i++) {
        res +=parseInt(str[i])
    }
    return res
})

// console.log(sum(1234))

const periode = (seconds => {
    const detikKeMenit = 60
    const menitKeJam = detikKeMenit * 60
    const jamKeHari = menitKeJam * 24
    
    const hari = Math.floor(seconds / jamKeHari)
    const sisaDetik1 = seconds % jamKeHari
    const jam = Math.floor(sisaDetik1 / menitKeJam)
    const sisaDetik2 = seconds % menitKeJam
    const menit = Math.floor(sisaDetik2 / detikKeMenit)
    const detik = sisaDetik2 % detikKeMenit
    
    return `${hari} Hari ${jam} Jam ${menit} Menit ${detik} Detik`
})

// console.log(periode(700005))








// const getDays = ((month, year) => {
//     const date = new Date().getDate().setDate(2)
// console.log(date)
// return date
    
// })
// console.log(getDays(1,2023))

