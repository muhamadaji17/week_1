
// for(let i = 2; i < 10; i+=2){
//     let row = ''
//     for(let j= 2; j<= i; j+=2){
//             row += i        
//     }
//     console.log(row)
// }

// function segitigaPrima(n){
//     for(let i = 2 ; i < n; i+=2){
//         let row = ''
//         for(let j= 2; j<= i; j+=2){
//                 row += i        
//         }
//         console.log(row)
//     }
// }

// segitigaPrima(10)

// function latihanPrima(n) {
//     let prima = [ ];
  
//     for (let i = 2; i <= n; i++) {
//       let prima1 = true;
//       for (let j = 2; j <= Math.sqrt(i); j++) {
//         switch(true){
//             case(i % j == 0):
//             prima1 = false
//             break;
//         }
//       }
//       prima1 ? prima.push(i):null
//     }
//     for(let b=0;b < prima.length; b++){
//         let row = ` `
//         for(let t=0; t<=b;t++){
//             row += prima[t]
//         }
//         console.log( row )
        
//     }
    
//   }
//   latihanPrima(10)
    
function whiling (n){
    let row = 1
    while (row < n) {
        let col = '1'
        let result = ''
        while (col <= row) {
            result += row
            col += 2
        }
        console.log(result)
        row += 2
    }
}
whiling(10)
// console.log(whiling(10))


// function getPrimes(num) {
//     let primes = '';
  
//     for (let i = 2; i <= num; i++) {
//       let isPrime = true;
//       for (let j = 2; j <= Math.sqrt(i); j++) {
//         if (i % j === 0) {
//           isPrime = false;
//           break;
//         }
//       }
//       if (isPrime) {
//         primes += i
//       }
//     }
  
//     return primes;
//   }

//   console.log(getPrimes(10))


// for(let i = 1; i <= 10; i++){
//     let row=''
//     for(let j=1;j <=i;j++){
//         row += j
//     }
//     console.log(row)
// }


// const sikuprima = (n) => {
//     let primes = [];
  
//     for (let i = 2; i <= 100; i++) {
//       let isPrime = true;
//       for (let j = 2; j <= Math.sqrt(i); j++) {
//         if (i % j === 0) {
//           isPrime = false;
//           break;
//         }
//       }
//       if (isPrime) {
//         primes.push(i);
//         // let i_string = i.toString();
//         // console.log(i_string.repeat(i));
//         // console.log("*".repeat(i));
//       }
//     }
//     //console.log(primes);
  
//     for (let k = 0; k < n; k++) {
//       k_string = primes[k].toString();
//       console.log(k_string.repeat(k + 1));
//     }
//     //return primes;
//   };

//   sikuprima(10)


