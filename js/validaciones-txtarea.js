export function validatxt(textarea) {
    const tipoDeTextarea = textarea.dataset.tipo;
    if (tipoDeTextarea) {
        tipoDeTextarea.textarea;
    }
    console.log( textarea.parentElement);

    if (textarea.validity.valid) {
        textarea.parentElement.classList.remove("textarea-container--invalid");
        textarea.parentElement.querySelector(".textarea-mensagem-error").innerHTML = "";
    } else {
        textarea.parentElement.classList.add("textarea-container--invalid");
        textarea.parentElement.querySelector(".textarea-mensagem-error").innerHTML = 
        mostrarMensajeDeErrores(tipoDeTextarea, textarea);
    }

}
const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
  ];

const mensajesTipoErrores = {
    mensaje: {
        valueMissing: "El campo Mensaje no puede estar vacio",
    }
}

function mostrarMensajeDeErrores(tipoDeTextarea, textarea) {
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
      if (textarea.validity[error]) {
        console.log(tipoDeTextarea, error);
        console.log(textarea.validity[error]);
        console.log(mensajesTipoErrores[tipoDeTextarea][error]);
        mensaje = mensajesTipoErrores[tipoDeTextarea][error];
      }
    });
    return mensaje;
  }
