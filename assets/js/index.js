const inputEmail = document.getElementById("email");
const avisoVermelho = document.getElementById("ativo");

inputEmail.addEventListener("change", () =>{

    ValidaPreenchimentoDeInput();

})

function ValidaPreenchimentoDeInput() {

    if (inputEmail.value === "" ) {
        inputEmail.style.border = "1px solid red";
        avisoVermelho.style.opacity = "1";

    } else {
        inputEmail.style.border = "1px solid green ";
        avisoVermelho.style.opacity = "0";
    }
}
