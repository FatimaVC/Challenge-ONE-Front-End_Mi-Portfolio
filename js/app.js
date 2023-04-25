import { validatxt } from "./validaciones-txtarea.js";
import { valida } from "./validaciones.js";
// creamos una constane que nos selecione todos los elementos inputs

const inputs = document.querySelectorAll("input");
const input1 = document.querySelectorAll("textarea");

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});

input1.forEach((textarea) => {
    textarea.addEventListener("blur",(textarea) => {
        validatxt(textarea.target);
    });
 });

