const getAreaCircle = (luas => {
    try {
        if(isNaN(luas) ){
            throw new Error("harus Angka")
        }else if(luas <= 0){
            throw new Error(`return radius must greeting then ${luas}, try higher`)
        }
        const n = 3.14159
        let res = n * luas * luas
        return res       
    } catch (error) {
        return error.message
    }
})

// console.log(getAreaCircle("-1"))

const jarak = ((a,b) => {
    try {
        if(typeof a !== "number" || typeof b !== "number" ){
            throw new Error("harus Angka")
        }
        if(a <= 0 || b <= 0){
            throw new Error(`acceleration and time must be greeter than >= 0`)
        }
        const s = 0.5*a*b*b
        return s
    } catch (error) {
        return error.message
    }
})

// console.log(jarak(-1,-1))

const FtoK = (suhu => {
    
    try {
        if(isNaN(suhu) ){
            throw new Error("Farenheit must be a number")
        } 
        const kelvin = Math.floor((suhu + 459.67)/1.8)
        return kelvin
        
    } catch (error) {
        return error.message
    }
})

// console.log(FtoK('as'))

const getSalesTax = ((price, tax) => {
    try {
        if(typeof price !== "number" || typeof tax !== "number"){
            throw new Error(`tax must be number`)
        }else if(typeof price !== "number"){
            throw new Error("Price must be a number")
        }else if(typeof tax !== "number"){
            throw new Error("tax must be a number")
        } 

        const total =  price +(price * tax /100)
        return `
        Total Price : ${price}
        pajak       : ${tax}%
        Total Harga : ${total}
        `    
    } catch (error) {
        return error.message
    }
})

// console.log(getSalesTax(4500,5))

const getSaleDiscount = ((price, tax, discount) => {
    try {
        if(typeof price !== "number" && typeof tax !== "number" && typeof discount !== "number"){
           throw new Error("price, tax, and discount must be number")
        } else if(typeof price !== "number"){
          throw new Error("Price must be a number")
        } else if(typeof tax !== "number"){
           throw new Error("tax must ber a number")
        } 
        let totalPrice = price
        let totalDiscount = totalPrice * discount / 100
        
        const oldpayment = totalPrice - totalDiscount
        let totalTax = oldpayment * tax / 100
        const payment = oldpayment + totalTax 
        return `
        Total Price          : ${totalPrice}
        Discount(${discount}%)         : ${totalDiscount}
        Price After Discount : ${oldpayment}
        tax (${tax}%)            : ${totalTax}
        -----------------------------------------------------
        Total Payment        : ${payment}
        `
    } catch (error) {
        return error.message
    }
})

console.log(getSaleDiscount(4500,10,5))