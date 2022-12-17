function condicaoNumero() {

    let valor1 = parseInt(prompt("Informe um valor: "))
    let valor2 = parseInt(prompt("Informe outro valor: "))

    if (valor1 == valor2) {
        alert("Números iguais!")
    } else if (valor1 > valor2) {
        alert("Primeiro é maior!")
    } else {
        alert("Segundo é maior!")
    }



}