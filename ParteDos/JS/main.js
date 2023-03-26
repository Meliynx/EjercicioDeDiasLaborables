let DiaAnio = document.getElementById("DiaAnio"); /*Obtener elementos por medio
del Id para alojar en la variable DiaAnio*/
let DiaEnero = document.getElementById("DiaEnero"); /*Obtener elementos por
medio del Id para alojar en la variable DiaEnero*/
let btnCalcular = document.getElementById("btnCalcular") /*Obtener elementos por
medio del Id para alojar en la variable btnCalcular*/
let resultado = document.getElementById("resultado"); /*Obtener elementos por
medio del Id para alojar en la variable resultado*/

btnCalcular.addEventListener ("click", function (event) /*función anónima*/{
    event.preventDefault(); //para evitar que se realice el comportamiento por defecto
    let msg="";
    let a = getDayNumber (DiaEnero.value, DiaAnio.value)
    msg='<div class="alert alert-success" role="alert"> '+a+'</div> ';
    
    resultado.innerHTML = msg;
});

function getDayNumber(janFirstDayNumber, yearDayNumber) {
    let DiaSemana = ((Number(yearDayNumber)) - 1 + Number(janFirstDayNumber)) % 7;
    return (DiaSemana)
}