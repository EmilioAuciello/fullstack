function validaDatos(op1,op2){

let mensaje=""
if (isNaN(op1)){
    mensaje =+ `La variable1 <b>{op1}</b> no es numerica \n`

}
else if (isNaN(op1)){
    mensaje =+ `La variable2 <b>{op2}</b> no es numerica`
   
    
}
else {
    return true
}
if (mensaje.lenght>1){
    alert(mensaje)
    return false
}

}

function suma(){
    let op1 = document.getElementById("operador1_id").value
        let op2 =document.getElementById("operador2_id").value
        console.log(validaDatos(op1))
    if(validaDatos(op1,op2)){
        
        
        document.getElementById("resultado_id").value= parseFloat(op1,2)+parseFloat(op2,2)

    }


}