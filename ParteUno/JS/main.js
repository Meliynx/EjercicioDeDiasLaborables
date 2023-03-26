let DiaDeLaSemana = document.getElementById("DiaDeLaSemana"); //Obtiene elementos del campo de HTML por medio del Id para el Dia de la semana
let Hora = document.getElementById("Hora"); //Obtiene elementos del campo de HTML por medio del Id para la hora del dia
let btnCalcular = document.getElementById("btnCalcular");//Obtiene elementos del campo de HTML por medio del Id para las funciones del boton
let resultado = document.getElementById("resultado");//Obtiene elementos del campo de HTML por medio del Id para arroja el resultado

btnCalcular.addEventListener("click", function(event){//Al hacer click se accionara una funcion especifica, para este caso, arrojara el resultado correcto
    event.preventDefault(); //Evita que se realice el comportamiento por defecto del EventListener
    let msg=""; //Variable para alojar un mensaje
    let a = businessHours(DiaDeLaSemana.value, Hora.value); //Variable de nombre aleatorio para alojar valores para el dia de la semana y la hora del dia
    
    
    if (a==true){
        msg = '<div class="alert alert-succes" role="alert"> Hoy se Trabaja </div>'; //Si la condicion es verdadera, arrojara el mensaje de afirmacion
    } else{
        msg = '<div class="alert alert-danger" role="alert"> Hoy NO se trabaja </div>'; //Si la condicion es falsa, arrojara el mensaje de negacion
    }
    resultado.innerHTML = msg; //Se mostrara el mensaje segun sea el resultado de la variablle (Verdadero o falso)
}); //Fin de la condicional IF
    
function businessHours(dayNumber, hourNumber){
    if (dayNumber == 0 || dayNumber == 6){
        return (false); //Proceso de comparacion para la variable hora, esta seccion aplicara si la afirmacion es falsa
    } else{
        if (hourNumber >= 9 && hourNumber < 18) {
            return (true) //Proceso de comparacion para la variable hora, esta seccion aplicara si la afirmacion es verdadera
        } else{
            return (false)
        }
    }
}