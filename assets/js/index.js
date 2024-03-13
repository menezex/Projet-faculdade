import { salvarCliente } from "./cliente.js";

const form = document.getElementById("form");
const listaCliente = document.getElementById("listaCliente");

const abrirModal = () => {
  document.getElementById("modal").classList.add("active");
};

const fecharModal = () => {
  document.getElementById("modal").classList.remove("active");
  form.reset();
};

document.getElementById("btnNovoCliente").addEventListener("click", abrirModal);
document.getElementById("modalClose").addEventListener("click", fecharModal);
document
  .getElementById("cancelarCliente")
  .addEventListener("click", fecharModal);

document
  .getElementById("salvarCliente")
  .addEventListener("click", salvarCliente);

async function verificaBanco() {
  const response = await fetch("http://localhost:8181/get").then((res) => res);
  console.log(JSON.stringify(response));
}

verificaBanco();
