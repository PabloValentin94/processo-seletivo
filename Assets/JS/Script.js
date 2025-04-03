document.querySelector("form").onsubmit = function(event) {

    event.preventDefault();

    console.log("Envio do formulário abortado.");

    this.reset();

}