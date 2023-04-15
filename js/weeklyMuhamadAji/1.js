const getCoordinat = ((x1, y1, x2, y2) => {
    try {
    
        if(isNaN(x1) || isNaN(x2) || isNaN(y1) || isNaN(y2)){//jika salah satu dari mereka isNaN (bukan integer) maka ada error "Harus Angka"
            throw new Error("Harus Angka")
        }
        let d = Math.sqrt(Math.pow(x1 - x2 , 2) + Math.pow(y1 - y2, 2))//variable d menampung parameter x1 dan x2 dikurang mengunakan math.sqrt dan math.pow dan di tambah dengan parameter y1 dan y2 menggunakan math.pow juga 
        return d//kemudian return variable d 
    } catch (error) {
        return error.message//return error
    }
    })
    console.log(getCoordinat(3.2, 4.5, -4.4, 5))
    // console.log(getCoordinat(3,4,-4,-5))
    // console.log(getCoordinat("asa","asa","-asa","-asa"))
    