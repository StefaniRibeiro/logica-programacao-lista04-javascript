function pesoideal() {

    let nome = parseInt(prompt("Informe seu nome: "))
    let sexo = parseInt(prompt("Informe seu sexo (F/M): "))
    let altura = parseInt(prompt("Informe sua altura: "))

    if (sexo = "M") {
        var pesoIdeal = (72.7 * altura) - 58
        alert("O seu peso ideal é igual a: " + pesoIdeal);
    } else {
        var pesoIdeal = (62.1 * altura) - 44.7
        alert("O seu peso ideal é igual a: " + pesoIdeal);
    }



}