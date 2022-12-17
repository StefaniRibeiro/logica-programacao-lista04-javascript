function jogo() {

    var time1 = prompt("Informe o nome do time 1: ")
    var time2 = prompt("Informe o nome do time 2: ")
    var gols1 = parseInt(prompt("Informe o saldo de gols do time 1: "))
    var gols2 = parseInt(prompt("Informe o saldo de gols do time 2: "))

    if (gols1 == gols2) {
        alert("Os dois times empataram")
    } else if (gols1 > gols2) {
        alert("O time 1 "+ time1 + " venceu a partida")
    } else {
        alert("O time 1 " + time2 + " venceu a partida")
    }

}