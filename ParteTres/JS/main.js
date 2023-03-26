let DiaAnio = document.getElementById("DiaAnio"); /Obtencion de datos por medio del Id para la variable DiaAnio/
let Hora = document.getElementById("Hora"); /*Obtencion de datos por medio del
Id para la variable Hora*/
let Anio = document.getElementById("Anio"); /Obtencion de datos por medio del Id para la variable Anio/

let btnCalcular = document.getElementById("btnCalcular")

let resultado = document.getElementById("resultado"); /*Obtencion de datos por
medio del Id para la variable Resultado*/

btnCalcular.addEventListener("click", function (event) /*función anónima*/{
    
    event.preventDefault();// para evitar que se realice el comportamiento por defecto
    let msg="";
    let a = EsLaboral(DiaAnio.value, Hora.value, Anio.value)
    
    
    if(a==true){
        msg='<div class="alert alert-success" role="alert">    Horario Laboral  </div> ';
    }else{
        msg='<div class="alert alert-danger" role="alert">    Horario No Laboral  </div> ';        
    }
    resultado.innerHTML = msg;
});



function businessHours(dayNumber, hourNumber) {
    if (dayNumber == 0 || dayNumber == 6) {
        return (false)
    } else {
        if (hourNumber >= 9 && hourNumber < 18) {
            return (true)
        } else {
            return (false)
        }
    }
}


function getDayNumber(janFirstDayNumber, yearDayNumber) {
    let DiaSemana = ((Number(yearDayNumber)) - 1 + Number(janFirstDayNumber)) % 7;
    return (DiaSemana)
}


function EsLaboral(yearDayNumber1, hourNumber1, anio) {
    let date1 = new Date('January 1, ' + anio + ' 00:00:00')
    let dia = getDayNumber(date1.getDay(), yearDayNumber1);
    return (businessHours(dia, hourNumber1))
}