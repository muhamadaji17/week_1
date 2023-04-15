
const getKursConversi = ((value, type) => {
    try {
        if(type == ''){//jika parameter type kosong maka mucul error "Not Match Type Currency"
            throw new Error('Not Match Type Currency')
        }
        let result = ''//deklarasi variable result unutk menampung hasilnya 
        if(type === 'usd'){
            result = value * 14382.5 //jika parameter type === 'usd' maka variable result menampung hasil dari parameter value * dengan 14382.5
        }else if(type === 'yen'){
            result = value * 130.12 //jika parameter type === 'yen' maka variable result menampung hasil dari parameter value * dengan 130.12
        }else if(type === 'euro'){ 
            result = value * 16000 //jika parameter type === 'euro' maka variable result menampung hasil dari parameter value * dengan 16000
        }
        return `Rp. ${result.toLocaleString()}`//return result dan convert dengan localestring agar ada koma nya         
    } catch (error) {
        return error.message//return message
    }
})
// console.log(getKursConversi(1000, 'yen'))
// console.log(getKursConversi(100, 'usd'))
// console.log(getKursConversi(100, 'euro'))
// console.log(getKursConversi(100, ''))
