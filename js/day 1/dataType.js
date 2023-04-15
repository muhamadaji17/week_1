// //number
// let counter = 1213487
// console.log(typeof(counter))

// //string
// counter = 'Javascript';
// console.log(typeof counter);

// //boolean
// counter = true;
// console.log(typeof counter);
// let str = "aji"
// let newStr = ""
// if(newStr){
//     console.log("true, ada")
// }else{
//     console.log("false, kosong")
// }

// // undefined type
// console.log(typeof(undi))

//null
// let nul = null
// console.log(typeof(nul))

//kutip
// console.log('jum\'at')
// console.log("jum'at")
// console.log(`jum'at`)

// let nama = 'aji'
// console.log('hai '+nama+' salam kenal')
// console.log("hai nama saya "+nama)
// console.log(`hai nama saya ${nama}`)

// nama =  'ganteng'
// nama = nama + 'ganteng'
// nama += 'ganteng'
// console.log(nama)

// console.log(nama.length)//hitung bnyak karakter
// console.log(nama.charAt(0))//cara lama ambil karakter
// console.log(nama[1])//cara baru ambil karakter
// console.log(nama[nama.length -1])//cara ambil karter terakhir

//substr
// let str = 'aji ganteng'
// let subStr = str.substring(0,3)
// let newSubStr = str.substring(4,11)
// console.log(subStr)
// console.log(newSubStr)

//trim
// let nama = ' aji ganteng '
// let nama1 = nama.trim()
// console.log(nama)
// console.log(nama1)

//replace
// let nama = 'aji ganteng'
// let newNama = nama.replace(/a/, "o")//mengganti huruf a pada huruf yang pertama di temukan dengan o
// let newNama1 = nama.replace(/a/g, "o")//mengganti huruf a pada seluruh string(global) dengan o
// console.log(newNama1)

//search
// let nama = 'aji ganteng'
// let newNama = nama.search(/g/)//mencari index dalam string
// console.log(newNama)

//object
// let contact = {
//     nama : "aji",
//     umur : "12",
//     hobi : {
//         olahraga : "bulu tangkis",
//         game : "moba"
//     }
// }
// console.log(contact)
// console.log(contact.hobi.game)

// let address = {
//     "jalan rumah" : "tanah sereal",
//     kelurahan : "tanah sereal"
// }
// console.log(address["jalan rumah"])


//reference
// let contact = {
//         nama : "aji",
//         umur : "12",
//         hobi : {
//             olahraga : "bulu tangkis",
//             game : "moba"
//         }
//     } 
// // contact.nama = 'wawan'
// console.log(contact.nama)
// contact.nama = 'oji'
// console.log(contact.nama)

// block
// let kata = "hai"
// function hallo(){
//     let kata = 'hallo'
//     return kata
// }

// console.log(hallo())
// console.log(kata)

// let greeting = 'hey hello'
// let time = 4
// if( time > 3 ){
//     let hello = "Say hello"
//     console.log(hello)
// }
// console.log(hello)

//operator
// let x = 1
// console.log(-x)//mengubah number menjadi mines

// let f = false, t = true

// console.log(+f)//mengubah string menjadi number
// console.log(+t)

// let age = 25
// age = age + 1
// console.log(age)

// let weight = 90
// weight = ++weight + 5
// weight1 = weight++ + 5
// // weight = weight + 5
// // weight = weight++ * 5
// console.log(weight)
// console.log(weight1)

// let nama1 = 'aji', nama2 = 'oji'

// let result = nama1 < nama2
// console.log(result)

//pengkondisian
// let weight = 70
// let height = 1.72
// let bml = weight / (height * height)
// let weightStatus = ''

// if(bml < 18.5){
//     weightStatus = 'under weight'
// }else if(bml >= 18.5 && bml <= 24.9){
//     weightStatus = 'healty weight'
// }else if(bml >= 25 && bml <= 29.9){
//     weightStatus = 'over weight'
// }else{
//     weightStatus = 'obesitas'
// }

// console.log(weightStatus)

// let nilai = 70
// let grade = ''

// if(nilai >= 90 ) {
//     grade = "A";
// }else if(nilai >= 80 && nilai <= 89){
//     grade = "B+";
// }else if(nilai >= 75 && nilai <= 79){
//     grade = "B";
// }else if(nilai >= 70 && nilai <= 74){
//     grade = "C+";
// }else if(nilai >= 60 && nilai <= 69){
//     grade = "C";
// }else if(nilai >= 50 && nilai <= 59){
//     grade = "D";
// }else{
//     grade = "E";
// }

// console.log(grade)

//ternari
// let umur = 10
// let pesan = umur >= 10 ? "you can drive" : "no you cannot drive anymore!" 
// console.log(pesan)

//switch case
// let weight = 150
// let height = 1.72
// let bml = weight / (height * height)
// let weightStatus = ''

// switch(true){
//     case(bml < 18.5):
//     weightStatus = 'under weight'
//     break;

//     case(bml >= 18.5 && bml <= 24.9):
//     weightStatus = 'healty weight'
//     break;
    
//     case(bml >= 25 && bml <= 29.9):
//     weightStatus = 'over weight'
//     break;
    
//     default:
//     weightStatus = 'obesitas'
// }

// console.log(weightStatus)

// let nilai = 30
// let grade = ''

// switch(true){
//     case(nilai >= 90):
//         grade = "A"
//         break;
//     case(nilai >= 80 && nilai <= 89):
//         grade = "B+"
//         break;
//     case(nilai >= 75 && nilai <= 79):
//         grade = "B"
//         break;
//     case(nilai >= 70 && nilai <= 74):
//         grade = "C+"
//         break;
//     case(nilai >= 60 && nilai <= 69):
//         grade = "C"
//         break;
//     case(nilai >= 50 && nilai <= 59):
//         grade = "D"
//         break;
//     default:
//         grade = "E"
// }

// console.log(grade)

//regex
// let input = '12121212'
// let regexNumber = /[0-9]+$/

// if(input.match(regexNumber)){
//     console.log("boleh")
//    return true
// }else{
//     console.log("ga boleh")
//     return false
// }

// let input = 'asass'
// let regex = /[^0-9]/

// if(input.match(regex)){
//         console.log("boleh")
//        return true
//     }else{
//         console.log("ga boleh")
//         return false
//     }

// const regex = /[^0-9\D]/g;
// const str1 = "abcde";
// const str2 = "abcde12345";
// const str3 = "121212";
// if(str3.match(regex)){
//     console.log("boleh")
//     return true
// }else{
//     console.log("ga boleh")
//     return false
// }

// console.log(str1.match(regex)); // output: ["a", "b", "c", "d", "e"]
// console.log(str2.match(regex)); // output: ["a", "b", "c", "d", "e"]

// let message = "im aji"
// console.log(message.repeat(3))
// console.log(message.indexOf('ji'))

// function reverse(text){
// let textReserve = text.split('').reverse().join('')

// if(textReserve){
//     console.log(textReserve)
//     return "funny"
// }else{
//     console.log(textReserve)
//     return "not funny"
// }
// }
// console.log(reverse('ayam'))

// function funnyString(s){
//     const asciiCodes = s.split('').map(char => char.charCodeAt());
//     const reversed = [...asciiCodes].reverse();

//     for (let index = 0; index < asciiCodes.length; index++) {

//         if (asciiCodes[index+1]) {
//             const difference =
//                 Math.abs(asciiCodes[index] - asciiCodes[index+1]);
//             const reversedDiff =
//                 Math.abs(reversed[index] - reversed[index+1]);

//                 if(difference == reversedDiff){
//                     return "funny"
//                 }else{
//                     return 'Not Funny'
//                 }
//             }
//         }
//     }

//     console.log(funnyString('ayam'))

// console.log(funnyString('ayam'))

// const kata = 'haji'
// const asci = kata.charCodeAt()
// console.log(asci)


// function funnyString(s) {
//     // Write your code here
//      const acii = []
//      let arr = []
//      const acii2 = []
//      for(let i = 0; i < s.length; i++){
//          acii.push(s.charCodeAt(i))
//          }

  
//       for(let i = 0; i < acii.length-1; i++){
//        arr.push(Math.abs(acii[i]-acii[i+1]))
//       }
      
//        for(let i = arr.length-1; i >= 0; i--){
//               acii2.push(arr[i])
//        }
     
//      return arr.join("") === acii2.join("") ? "Funny" : "Not Funny"
    
// }

console.log(funnyString('level'))