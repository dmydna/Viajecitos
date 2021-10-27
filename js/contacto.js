const formulario = document.getElementById("formulario")
const inputs = document.querySelectorAll("#formulario input")

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, //? Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{2,40}$/,
    contraseña: /^.{4,12}$/, //? 4 a 12 digitos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    numero: /^\d{7,14}$/ //? 7 a 14 numeros.
}

const campos = {
    nombre: false,
    apellido: false,
    contraseña: false,
    contraseña2: false,
    email: false,
    numero: false
}

const formularioValidacion = (e) => {
    switch(e.target.name){
        case "nombre":
            campoValidacion(expresiones.nombre, e.target, "nombre")
        break;
        case "apellido":
            campoValidacion(expresiones.apellido, e.target, "apellido")
        break;
        
        case "email":
            campoValidacion(expresiones.email, e.target, "email")
        break;
        case "numero":
            campoValidacion(expresiones.numero, e.target, "numero")
        break;
        case "contraseña":
            campoValidacion(expresiones.contraseña, e.target, "contraseña")
            contraseñaValidacion()
        break;
        case "contraseña2":
            contraseñaValidacion()
        break;
    }
}

const campoValidacion = (expresion, input, campo) => {
    if (expresion.test(input.value)){
        document.getElementById(`grupo_${campo}`).classList.remove("form_grupo_incorrecto")
        document.getElementById(`grupo_${campo}`).classList.add("form_grupo_correcto")
        document.querySelector(`#grupo_${campo} i`).classList.add("fa-check-circle")
        document.querySelector(`#grupo_${campo} i`).classList.remove("fa-times-circle")
        document.querySelector(`#grupo_${campo} .form_input_error`).classList.remove("form_input_error_activo")
        campos[campo] = true;
    }else{
        document.getElementById(`grupo_${campo}`).classList.add("form_grupo_incorrecto")
        document.getElementById(`grupo_${campo}`).classList.remove("form_grupo_correcto")
        document.querySelector(`#grupo_${campo} i`).classList.remove("fa-check-circle")
        document.querySelector(`#grupo_${campo} i`).classList.add("fa-times-circle")
        document.querySelector(`#grupo_${campo} .form_input_error`).classList.add("form_input_error_activo")
        campos[campo] = false;
    }
}

const contraseñaValidacion = () => {
    const inputContraseña1 = document.getElementById("contraseña")
    const inputContraseña2 = document.getElementById("contraseña2")

    if(inputContraseña1.value !== inputContraseña2.value){
        document.getElementById(`grupo_contraseña2`).classList.add("form_grupo_incorrecto")
        document.getElementById(`grupo_contraseña2`).classList.remove("form_grupo_correcto")
        document.querySelector(`#grupo_contraseña2 i`).classList.remove("fa-check-circle")
        document.querySelector(`#grupo_contraseña2 i`).classList.add("fa-times-circle")
        document.querySelector(`#grupo_contraseña2 .form_input_error`).classList.add("form_input_error_activo")
        campos["contraseña"] = false;
        campos["contraseña2"] = false;
    }else{
        document.getElementById(`grupo_contraseña2`).classList.remove("form_grupo_incorrecto")
        document.getElementById(`grupo_contraseña2`).classList.add("form_grupo_correcto")
        document.querySelector(`#grupo_contraseña2 i`).classList.add("fa-check-circle")
        document.querySelector(`#grupo_contraseña2 i`).classList.remove("fa-times-circle")
        document.querySelector(`#grupo_contraseña2 .form_input_error`).classList.remove("form_input_error_activo")
        campos["contraseña"] = true;
        campos["contraseña2"] = true;
    }
}

inputs.forEach((input) => {
    input.addEventListener("keyup", formularioValidacion)
    input.addEventListener("blur", formularioValidacion)
})

formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(campos.nombre, campos.apellido, campos.email, campos.numero, campos.contraseña)
    if(campos.nombre && campos.apellido && campos.email && campos.numero && campos.contraseña){
        formulario.reset();
        
        document.getElementById("form_mensaje_exito").classList.add("form_mensaje_exito_activo");
        setTimeout (() => {
            document.getElementById("form_mensaje_exito").classList.remove("form_mensaje_exito_activo");
        }, 2000);

        document.querySelectorAll(".form_grupo_correcto").forEach((icono) => {
            icono.classList.remove("form_grupo_correcto");

        document.getElementById("form_mensaje").classList.remove("form_mensaje_activo")
        })
    }else{
        document.getElementById("form_mensaje").classList.add("form_mensaje_activo");
    }
});