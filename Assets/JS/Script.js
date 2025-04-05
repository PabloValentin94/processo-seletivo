// Campos do formulário da página HTML.

const form_fields = [

    document.getElementById("user-name"),
    document.getElementById("user-email"),
    document.getElementById("user-password")

];

// Evento acionado toda vez que o botão "SUBMIT" do formulário for apertado.

document.querySelector("form").onsubmit = function(event) {

    event.preventDefault();

    alert(`\nNome informado: ${form_fields[0].value}.\n\nE-mail informado: ${form_fields[1].value}.\n\nSenha criada: ${form_fields[2].value}.`);

};

// Evento acionado toda vez que o botão "RESET" do formulário for apertado.

document.querySelector("form").onreset = function(event) {

    if(!confirm("Realmente deseja redefinir o formulário? Os dados atuais serão perdidos."))
    {

        event.preventDefault();

    }

}