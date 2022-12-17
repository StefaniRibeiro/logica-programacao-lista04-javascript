function mediaFinal() {

    let nota1 = parseInt(prompt("Informe sua nota 1: "));
    let nota2 = parseInt(prompt("Informe sua nota 2: "));
    let nota3 = parseInt(prompt("Informe sua nota 3: "));
    let mediaexercicios = parseInt(prompt("Informe sua média de exercícios: "));

    var media = (nota1 + nota2 * 2 + nota3 * 3 + mediaexercicios) / 7

    if (media >= 9) {
        var conceito = "A"

    } else if (media >= 7.5 && media < 9) {
        var conceito = "B"

    } else if (media >= 6 && media < 7.5) {
        var conceito = "C"
    } else if (media < 6) {
        var conceito = "D"
    }

    alert("Sua média final foi: " + media.toFixed(1) + " e seu conceito foi: " + conceito)
}