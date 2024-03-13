import { validaCEP } from "./cep.js";

const allowedKeys = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0"];

const form = document.getElementById("form");
const cep = document.getElementById("cep");
const cpf = document.getElementById("cpf");

const buscaCEP = (ev) => {
  ev.preventDefault();
  if (allowedKeys.includes(ev.key)) {
    cep.value += ev.key;
  }

  if (ev.key === "Backspace") {
    cep.value = cep.value.slice(0, -1);
  } else {
    validaCEP(cep.value);
  }
};

function validaInputs() {
  return form.reportValidity();
}

function salvarCliente() {
  if (validaInputs()) {
    const dadosCliente = {
      nome: document.getElementById("nomeCliente").value,
      cpf: document.getElementById("cpf").value,
      cep: document.getElementById("cep").value,
      rua: document.getElementById("rua").value,
      numero: document.getElementById("numeroEndereco").value,
      telefone: document.getElementById("telefone").value,
    };
    console.log(dadosCliente);
    document.getElementById("modal").classList.remove("active");
    form.reset();
  } else {
  }
}

cep.addEventListener("keydown", buscaCEP);
cep.onblur = function () {
  validaCEP(cep.value);
};

cpf.addEventListener("keydown", (ev) => {
  ev.preventDefault();
  if (allowedKeys.includes(ev.key)) {
    cpf.value += ev.key;
    console.log(ev);
  }

  if (ev.key === "Backspace") {
    cpf.value = cpf.value.slice(0, -1);
  }
});

export { salvarCliente };
