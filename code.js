function radioPercent(){

    let section = document.querySelectorAll('input[type="radio"]')
    let Total = 0
    let Question = 0
    let Res = document.querySelector('.section-results')
    let porcentaje = 0
    let result1 = ''

    //Chequeo de radio buttons
    section.forEach(function(radio, index) {
      if (radio.checked) {
        Question++
        Total += +radio.value
      }
    })

    porcentaje = ((Total / (Question)) * 100).toFixed(2)

    //Validación
    if(Question < 14){
        $('#resultado').modal('show');
        $('#btn-continuar').hide();
        Res.innerHTML = "Favor de completar la encuesta para continuar."

    }
    else{   //Muestra de resultado en modal
    
        $('#resultado').modal('show');
        $('#btn-continuar').show();

        if(porcentaje >= 57){
            result1 += "<b style='color:red'>¡Abusas del uso de Inteligencia artificial!</b><br><br>"
        }else if(porcentaje < 57 && porcentaje > 35){
            result1 += "<b style='color:yellow;text-shadow:  1px 1px 4px #000000;'>Abusas un poco de la Inteligencia artificial, ¡cuidado!</b><br><br>"
        }else{
            result1 += "<b style='color:green'>Utilizas la Inteligencia artificial adecuadamente, ¡Muy bien!</b><br><br>"
        }
         
        //Código que muestra el porcentaje 
        result1 += "Total: " + Total + "<br>"
        result1 += "Porcentaje: " + porcentaje + "%"
        Res.innerHTML = result1

    }
}