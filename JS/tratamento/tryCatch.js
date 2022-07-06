function validaArray(arr, num){
    try{
        if(!arr && !num) throw new ReferenceError("Verifique a entrada, parâmetros faltando.");
        if(typeof arr !== 'object') throw new TypeError('Array precisa ser do tipo object');
        if(typeof num !== 'number') throw new TypeError('Num precisa ser do tipo number');
        if(arr.length !== num) throw new RangeError('Verifique a entrada do parâmetro number, entrada não condiz com o tamanho do object');
        return arr;
    }
    catch(e){
        if(e instanceof ReferenceError){
            console.log("Esse erro é um ReferenceError!")
            console.log(e.message)
            // console.log(e.name)
            // console.log(e.stack)
        }else if(e instanceof TypeError){
            console.log("Esse erro é um TypeError!")
            console.log(e.message)
        }else if(e instanceof RangeError){
            console.log("Esse erro é um RangeError!")
            console.log(e.message)
        }else{
            console.log("Erro inesperado"+ e)
        }
    }
}
console.log(validaArray([1,2,3], 3))