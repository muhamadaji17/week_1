const buah = ['mangga','jeruk','mengkudu','duku']
// buah.push('apel')//tambah data di belakang
// buah.pop()//hapus data di belakang
// buah.unshift('duren')//tambah data di depan
// buah.shift()//hapus data di depan
// buah.splice(1,0,'apel')//tambah data di tengah (naro di index keberapa, mulai dari mana, data)
//console.log(buah)
// let b =buah.slice(1,2)//ambil buah berdasarkan(mulai dari index berapa, berapa buah)
// console.log(b)

// console.log(buah.join(','))
// console.log(buah.toString())

// const people = [
//     {
//         nama : 'aji',
//         umur : "11"
//     },
//     {
//         nama : 'oji',
//         umur : "12"
//     }
// ]
// people.push({nama : 'ojan', umur : '10'})//tambah data di belakang
// people.pop()//hapus data di belakang
// people.unshift({nama : 'ojan', umur : '10'})//tambah data di depan
// people.shift()//hapus data di depan
// const p = people.join(',')
// console.log(people)
// const peopleFilter = people.filter(person => {
//     return person.nama != 'aji'
// })
// console.log(peopleFilter)
// const peopleFilter2 = people.filter(person => {
//     return person.nama == 'aji'
// })
// console.log(peopleFilter2)
// console.log(person)
// people.forEach( (person, i)=> {
//     console.log(i+1, person.nama)
// });

// const p= people.map((person, i) => {
//     return `${i+1}. ${person.nama}`
// })
// console.log(p)
// const p= people.map((person, i) => {
//     return `${i+1}. ${person.nama}`
// })
// console.log(p)


//function array
// const outArray = ()=>{
//     let arrStr = ['aji','ganteng']
//     return arrStr
// }
// console.log(outArray())
// const strArr = outArray()
// console.log(strArr)

// const outObject = () =>{
//     let res = {
//         nama : 'aji',
//         umur : "12"
//     }
//     return res
// }
// console.log(outObject())
// const strArr = outObject()
// console.log(strArr)
// let {status, msg} = outObject()
// console.log({status,msg}) 

//date
// const date = new Date()
// const getHari = ['minggu','senin', 'selasa','rabu','kami','jumat','sabtu']
// const hariAngka = date.getDay()
// const tanggal = date.getDate()
// const hari = getHari[tanggal]
// const bulan = date.getMonth().toString().padStart(2,0)
// const tahun = date.getFullYear()
// const jam = date.getHours().toString().padStart(2,0)
// const menit = date.getMinutes().toString().padStart(2,0)
// const detik = date.getSeconds().toString().padStart(2,0)

// // console.log(hariAngka)
// console.log(`${hari} ${tanggal}-${bulan}-${tahun} : ${jam}:${menit}:${detik}`)

//async and sync
// const start = ()=> {
//     console.log("engine start")   
// }

// const changeGear = (gear)=>{
//     console.log(`Masukan gigi ${gear} untuk jalan`)
//     return gear;
// }

// const goCar = () => {
//     console.log("jalan")
// }

// const stopCar = () => {
//     console.log("Berhenti")
// }

// const matiMesin = () => {
//     console.log("selesai")    
// }

// const driver = (gear)=>{
//     setTimeout(() => {
//         start()
//         setTimeout(() => {
//             changeGear(gear)
//             setTimeout(() => {
//                 goCar()
//                 setTimeout(() => {
//                     stopCar()
//                     setTimeout(() => {
//                         matiMesin()
//                     }, 1000);
//                 }, 3500);
//             }, 4000);
//         }, 4500);
//     }, 5000);
// }

// driver(2)

// const getAntri = (nomor) => {
//     setTimeout(() => {
//         return nomor
//     }, 1000);
// }
// const getPaket = (nomor, paket) => {
//     setTimeout(() => {
//         try {
//             if(nomor <= 0 || isNaN(nomor)){
//                 throw 'Antri'
//             }
//             if(paket === 'A'){
//                 return "Paket Ayam"
//             }else if(paket === 'B'){
//                 return "Paket Kendor"
//             }else{
//                 return 'Belom ada paket'
//             }
//         } catch (error) {
//             return error
//         }
//     }, 2000);
// }
// const getTagihan = (paket) => {
//     setTimeout(() => {
//         if(paket === 'Paket Ayam'){
//             return 25000
//         }else if(paket === 'Paket Kendor'){
//             return 15000
//         }else{
//             return 'pesanan tidak di temukan'
//         }
//     }, 3000);
// }

// let antri = getAntri(10)
// console.log(antri)
// let paket = getPaket(antri, 'A')
// console.log(paket)
// let tagihan = getTagihan(paket)
// console.log(tagihan)


// const getNomorAntri = (nomor, cb) => {
//     setTimeout(() => {
//       setTimeout(() => {
//         console.log(nomor);
//         let paket = cb(nomor, "A");
//         console.log(paket);
//         setTimeout(() => {
//           let bill = tagihan(paket);
//           console.log(bill);
//         }, 2000);
//       }, 1000);
//     }, 3000);
//   };
  
//   const pilihPaket = (nomor, paket) => {
//     try {
//       if (nomor <= 0 || isNaN(nomor)) {
//         throw "Silahkan Antri";
//       }
//       if (paket === "A") {
//         return "KFC Paket A";
//       } else {
//         return "KFC Paket B";
//       }
//     } catch (e) {
//       return e;
//     }
//   };
  
//   const getTagihan = (paket) => {
//     if (paket === "KFC Paket A") {
//       return 25000;
//     } else if (paket === "KFC Paket B") {
//       return 24000;
//     } else {
//       return "Belum ada Pemesanan";
//     }
//   };
  

// let antri = getNomorAntri(10)
// console.log(antri)
// let paket = pilihPaket(antri, 'A')
// console.log(paket)
// let tagihan = getTagihan(paket)
// console.log(tagihan)

//promise
// function getNomorAntriChaining(nomor){
//     const result = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(nomor)
//         }, 5000);
//     })
//     return result
// }

// function pilihPaketChaining (nomor, paket){
//     const result = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (nomor <= 0 || isNaN(nomor)) {
//                   throw "Silahkan Antri";
//                    }
//             if (paket === "A") {
//                   resolve("KFC Paket A");
//                 } else {
//                    resolve("KFC Paket B");
//                 }
//         }, 2000);
//     })
//     return result
// }

// function tagihanChaining (paket){
//     const result = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(paket === "KFC Paket A"){
//                 resolve(25000)
//             }else if("KFC Paket B"){
//                 resolve(20000)
//             }else{
//                 resolve("Paket tidak di temukan")
//             }
//         }, 1000);
        
//     }) 
//     return result
// }

// const res = getNomorAntriChaining(10)
// res
// .then(nomor => {
//     console.log(nomor)
//     return pilihPaketChaining(nomor,'B')
// })
// .then(paket => {
//     console.log(paket)
//     return tagihanChaining(paket)
// })
// .then(bill => {
//     console.log(bill)
// })
// .catch(error => {
//     console.error(error.name, error.message);
// })

//cara panggil dengan async
// async function orderKFC(nomor){
//     try {
//         const no = await getNomorAntriChaining(nomor)
//         console.log(no)
//         const paket = await pilihPaketChaining(no, 'A')
//         console.log(paket)
//         const bill = await tagihanChaining(paket)
//         console.log(bill)
//     } catch (error) {
//         console.error(error.toString());
//     }
// }

// orderKFC(20)


const start = ()=> {
    const result = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("Mesin Nyala")
        }, 3000);
    })
    return result   
}

const changeGear = (gear)=>{
    const result = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Masukan perseneling ${gear}`)
        }, 2800);
    })
    return result
}

const goCar = () => {
    const result = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Jalan")
        }, 2500);
    })
    return result
}

const stopCar = () => {
    const result = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Berhenti")
        }, 2200);
    })
    return result
}

const matiMesin = () => {
    const result = new Promise((resolve, reject) => {
        setTimeout(() => {
            
            resolve("Mesin mati")
        }, 2000);
    })
    return result
}

// const driver = start()
// driver
// .then(thenStart => {
//     console.log(thenStart)
//     return changeGear(2)
// })
// .then(thenChangeGear => {
//     console.log(thenChangeGear)
//     return goCar()
// })
// .then(thenGoCar => {
//     console.log(thenGoCar)
//     return stopCar()
// })
// .then(thenStopCar => {
//     console.log(thenStopCar)
//     return matiMesin()
// })
// .then(thenMatiMesin =>{
//     console.log(thenMatiMesin)
// })
// .catch(error => {
//     console.error(error.name, error.message);
// })

//dengan async await

const  driver = async () => {
    try {
        const awaitStart = await start()
        console.log(awaitStart)
        const awaitChangeGear = await changeGear(2)
        console.log(awaitChangeGear)
        const awaiGoCar = await goCar()
        console.log(awaiGoCar)
        const awaitStopCar = await stopCar()
        console.log(awaitStopCar)
        const awaitMatiMesin = await matiMesin()
        console.log(awaitMatiMesin)
    } catch (error) {
        console.error(error.name);
    }
}

driver()