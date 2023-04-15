const getRandomPassword = (s => {     
    try {
        let regex = /[a-zA-Z]{5}/ //regex untuk hanya angka dan kurang dari 5 karakter
        // let req = "ajjasas"
        if(s.match(regex)){
            return `${s}`//jika benar maka return 
        }else{
            throw new Error('value must be character')//jika salah maka throw error 
        }
    } catch (error) {
        return error.message//return error
    }           
})
console.log(getRandomPassword('ash'))
