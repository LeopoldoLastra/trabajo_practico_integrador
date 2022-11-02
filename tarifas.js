let monto 
//Valor Tocket

const valorTicket = 200


//Descuentos

let descuentoEstudiante = 0.2
let descuentoTrainee = 0.5
let descuentoJunior = 0.8


//Asigno Variables

let nombre =document.getElementById("nombre")
let apellido =document.getElementById("apellido")
let mail =document.getElementById("mail")
let cantidadTickets =document.getElementById("cantidadTickets")
let categoriasnombre =document.getElementById("categorias")

//Funciones

function total_a_pagar (){

    if (nombre.value===""){
        nombre.classList.add("is_invalid");
        alert("Por favor, escribí tu nombre");
        nombre.focus();
        return;
    }

    if (apellido.value===""){
        apellido.classList.add("is_invalid");
        alert("Por favor, escribí tu apellido");
        nombre.focus();
        return;
    }
    
    if (mail.value===""){
        mail.classList.add("is_invalid");
        alert("Por favor, escribí tu email");
        nombre.focus();
        return;
    }

    const emailValid = mail =>{
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
    }

    if(!emailValid(mail.value)){
        mail.classList.add("is_invalid");
        alert("El email es inválido");
        nombre.focus();
        return;
    }

    if (cantidadTickets.value===""){
        cantidadTickets.classList.add("is_invalid");
        alert("Por favor, indicá la cantidad de tickets");
        nombre.focus();
        return;
    }

    calcular_monto ()
}


function calcular_monto(){
    let tarifa
    let descuento 

    if(categoriasnombre.value==="Estudiante"){
        descuento = 0.2
    }

    else if (categoriasnombre.value==="Trainee"){
        descuento = 0.5
    }

    else if (categoriasnombre.value==="Junior"){
        descuento = 0.85
    }

    else {
        descuento = 1
    }

    tarifa = cantidadTickets.value * (valorTicket * descuento)
 
    valorTotal.innerHTML=tarifa
  
}



function reset(){
    
}


//Levanto el boton resumen]

resumen.addEventListener("click", total_a_pagar)

borrar.addEventListener("click", reset)






