function aposentadoria() {

    let numeroempregado = parseInt(prompt("Informe o número do empregado: "));
    let anonasc = parseInt(prompt("Informe seu ano de nascimento: "))
    let anoingresso = parseInt(prompt("Informe o ano em que ingressou na empresa: "))

    var tempotrabalhado = 2022 - anoingresso
    var idade = 2022 - anonasc

    if (idade >= 65) {
        alert("Requerer aposentadoria")

    } else if (tempotrabalhado >= 30) {
        alert("Requerer aposentadoria")

    } else if (idade >= 60 && tempotrabalhado >= 25) {
        alert("Requerer aposentadoria")

    } else {
        alert("Não requerer aposentadoria")
    }

}