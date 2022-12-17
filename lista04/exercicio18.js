function resultado() {

    let anoAtual = parseInt(prompt("Em que ano nós estamos? "));
    let anoNasc = parseInt(prompt("Informe o ano em que você nasceu: "));
    let idade = anoAtual - anoNasc

    if (idade >= 16) {
        alert("Você poderá votar!")
    } else {
        alert("Você não poderá votar!")
    }

}