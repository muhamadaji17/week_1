// function funny(s){
// let arrASCII = s.split('').map(a=>a.charCodeAt())
//     let arrReversedASCII = [...arrASCII].reverse()
//     let adjA = []
//     // let copySliced = copy1.slice(1,4)
//     let adjB = []
    
//     for(let i in arrASCII){
//         adjA.push(Math.abs(arrASCII[i-1]-arrASCII[i]));
//     }
//     for(let j in arrReversedASCII){
//         adjB.push(Math.abs(arrReversedASCII[j-1]-arrReversedASCII[j]))
//     }
//     console.log(adjA)
//     let copy1 = [...adjA].slice(1,adjA.length)
//     console.log(copy1)
//     let copy2 = [...adjB].slice(1,adjB.length)
//     // return [...adjA,...adjB]
//     let isMatch = true;
//     for(let i = 0;i < copy1.length; i++){
//         if(copy1[i] !== copy2[i]){
//             isMatch = false
//             break
//         }
//     }
//     if(isMatch){
//         return 'Funny'
//     }else{
//         return 'Not Funny'
//     }
// }

// console.log(funny('level'))


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


// function funnyString(s) {
//     let result = 'Funny';
//     const asciiCodes = s.split('').map(char => char.charCodeAt());
//     const reversed = [...asciiCodes].reverse();

//     for (let index = 0; index < asciiCodes.length; index++) {
//         if (asciiCodes[index+1]) {
//             const difference =
//                 Math.abs(asciiCodes[index] - asciiCodes[index+1]);
//             const reversedDiff =
//             Math.abs(reversed[index] - reversed[index+1]);
            
//             if (difference !== reversedDiff) {
//                 result = 'Not Funny'
//                 break;
//             }
//         }
//     }
//     return result;

// }
// console.log(funnyString('level'))


let jam = new Date().getHours()
let menit = new Date().getMinutes()
let detik = new Date().getSeconds()
let zona = new Date().getUTCHours()

// if(jam >= 12)
// const d = new Date();
// d.setHours(13, 30, 0, 0); // mengatur waktu menjadi 13:30:00
// console.log(d.getHours(), d.getMinutes()); // akan mencetak 13

console.log(`${jam}:${menit}:${detik}:${zona}`)