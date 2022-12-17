function xadrez() {

    let horainicio = parseInt(prompt("Informe a hora em que o jogo começou: "));
    let horafim = parseInt(prompt("Informe a hora em que o jogo terminou: "));

    var duracao = horafim - horainicio

    if (duracao <= 0) {

        var duracao = duracao + 24
        alert("A quantidade de horas jogadas foi: " + duracao + " horas")

    } else {
        alert("A quantidade de horas jogadas foi: " + duracao + " horas")
    }

}