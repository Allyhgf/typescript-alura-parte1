import { NegociacaoController } from "./controllers/negociacao-contoller.js";
const controller = new NegociacaoController();
const form = document.querySelector(".form");
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adicionar();
    });
}
else {
    throw Error("Não foi possível inicializar o formulário");
}
