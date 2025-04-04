// Campos do formulário da página HTML.

const form_fields = [

    document.getElementById("user-name"),
    document.getElementById("user-email"),
    document.getElementById("user-password")

];

// Evento acionado toda vez que o botão "SUBMIT" do formulário for apertado.

document.querySelector("form").onsubmit = function(event) {

    event.preventDefault();

    console.log("Envio do formulário abortado.");

    alert(`\nNome informado: ${form_fields[0].value}.\n\nE-mail informado: ${form_fields[1].value}.\n\nSenha criada: ${form_fields[2].value}.`);

    this.reset();

    console.clear();

}