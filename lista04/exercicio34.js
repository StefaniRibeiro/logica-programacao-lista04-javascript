function conceitoZ() {

    let x = parseInt(prompt("Informe o valor de X: "));
    let y = parseInt(prompt("Informe o valor de Y: "));


    var z = (x * y) + 5


    if (z <= 0) {
        var resposta = "A"
    } else if (z <= 100) {
        var resposta = "B"
    } else {
        var resposta = "C"
    }
    alert(resposta + z)

}