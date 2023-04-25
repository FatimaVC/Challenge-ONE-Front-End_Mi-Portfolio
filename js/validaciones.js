export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    if (tipoDeInput) {
        tipoDeInput.input;
    }
    console.log(input.parentElement);

    if (input.validity.valid) {
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    } else {
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = 
        mostrarMensajeDeError(tipoDeInput, input);
    }

}
const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
  ];
const mensajesTipoError = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacío",
    },

    email: {
        valueMissing: "El campo nombre no puede estar vacío",
        typeMismatch: "El correo no es válido",
    },

    asunto: {
        valueMissing: "El campo Asunto no puede estar vacio",
    },

    mensaje: {
        valueMissing: "El campo Mensaje no puede estar vacio",
        patternMismatch: "El mensaje puede tener como máximo 300 carácteres",
    }
}

function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
      if (input.validity[error]) {
        console.log(tipoDeInput, error);
        console.log(input.validity[error]);
        console.log(mensajesTipoError[tipoDeInput][error]);
        mensaje = mensajesTipoError[tipoDeInput][error];
      }
    });
    return mensaje;
  }
