// try {
//     let hasil = penambahan(10,10)
//     console.log(hasil)
// } catch (error) {
//     console.log(error.name, error.message)
// }

// const erroeCustom = (nama,msg)=>{
//     return (name:nama, message:msg)
// }
// let angka = 'asass'
// try {
//     if(angka === '')
//         throw new Error("ga bole kosong");
//         if(typeof angka != 'number')
//             throw new Error('Harus angka')
        
//         console.log(angka)
    
// } catch (error) {
//     console.log(error.name, error.message)

// }

// const errorHandling = (nama,msg)=>{return (name=nama, message=msg)}

// let nilai = ''
// let grade = ''

// try {
//     if(nilai === ''){
//         throw new Error('Harus di isi')
//     }
//     if(nilai >= 90 ) {
    //         grade = "A";
    //     }else if(nilai >= 80 && nilai <= 89){
//         grade = "B+";
//     }else if(nilai >= 75 && nilai <= 79){
//         grade = "B";
//     }else if(nilai >= 70 && nilai <= 74){
//         grade = "C+";
//     }else if(nilai >= 60 && nilai <= 69){
    //         grade = "C";
    //     }else if(nilai >= 50 && nilai <= 59){
        //         grade = "D";
//     }else{
//         grade = "E";
//     }
// } catch (error) {
    //     console.log(error.name, error.message)
    // }

// console.log(grade)

//for
// const ranks = ('A','B');

// for(let i in ranks){
//     console.log(ranks[i]);
// }

// for(let i of ranks){
//     console.log(i)
// }

// ranks.forEach(rank => {
    //     console.log(rank)
    // });
    
    
    // let person = [
        //     {
            //         firstName : 'Aji',
//         age : '11'
//     },
//     {
//     firstName : 'Oji',
//     age : '12'
//     }
// ]

// for(let i in person){
    //     console.log(person[i])
// }

// for(let i of person){
    //     console.log(i)
// }

// person.forEach(orang => {
    //     console.log(orang)
// });

// person.map(orang => {
    // return orang
    // })
    
//while and do
// let count = 1
// while (count < 10){
//     console.log(count)
//     if(count === 5 )
//         continue;
//         count += 2
// }

//function
// function tambah(a,b){//reguler function
//     return a*b
// }
// console.log(tambah(12,2))

// const tambah = ((a,b) => {//arrow function
//     return a*b
// })
// console.log(tambah(12,2))

// const start = ()=> {
//     console.log("engine start")   
// }
// console.log(start()) 

const changeGear = (gear)=>{
    console.log(`Masukan gigi ${gear} untuk jalan`)
}
// console.log(changeGear(2))

const driveCar = (cb) => {
    setTimeout(() => {
        cb()
    }, 1000);
    setTimeout(() => {
        changeGear(2)
    }, 2000);
}
driveCar(start)


// const peringkat = (nilai) => {

// const errorHandling = (nama,msg)=>{return (name=nama, message=msg)}
    
//     let grade = ''
    
//     try {
//         if(nilai === '')
//         throw new Error('Harus di isi')
//         if(typeof nilai != "number")
//         throw new Error('Harus Angka')
    
//     if(nilai >= 90 ) {
//         grade = "A";
//     }else if(nilai >= 80 && nilai <= 89){
//         grade = "B+";
//     }else if(nilai >= 75 && nilai <= 79){
//         grade = "B";
//     }else if(nilai >= 70 && nilai <= 74){
//         grade = "C+";
//     }else if(nilai >= 60 && nilai <= 69){
//         grade = "C";
//     }else if(nilai >= 50 && nilai <= 59){
//         grade = "D";
//     }else{
//         grade = "E";
//     }
// } catch (error) {
//     console.log(error.name, error.message)
// }
// return grade
// }

// console.log(peringkat(12))

//default params
// const sayhello = (message='Hello') =>{
//     console.log(message)
// }
// sayhello() 

// const sayhello2 = (message) => {
//     message=message!=undefined?message:"Hai"
//     console.log(message)
// }
// sayhello2("hhhhhh")

// let price = 300
// function applyCount(price, discount = 0.05){
//     return price * (1 - discount)
// }

// console.log(applyCount(price))


//rest params
// const findarr = (y,z,...arr) => {
//     let str = ''
//     for (let x of arr) {
//         str += x+ ''
//     }
//     console.log(y,z,str)
// }

// // findarr('rest','params')
// findarr('rest', 'params',12,12,1,21,'saya ','hebat')

// const findarr2 = (...arr) => {
//     let str = ''
//     for (let x of arr) {
//         str += x+ ''
//     }
//     console.log(arr.toString())
//     console.log(arr)
// }
// findarr2()
// findarr2('jlkajs',12,12,1,2,'as')