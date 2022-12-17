function valorMaior() {

    let valor1 = parseInt(prompt("Informe o primeiro valor: "))
    let valor2 = parseInt(prompt("Informe o segundo valor: "))
    let valor3 = parseInt(prompt("Informe o terceiro valor: "))

    // se verdadeiro, testa e para aqui
    if (valor1 > valor2 && valor1 > valor3) {
        alert("Valor 1 é o maior")

        // testa segunda condição se a de cima for falsa, senão vai direto pra else, que é falso
    } else if (valor2 > valor1 && valor2 > valor3) {
        alert("Valor 2 é o maior")

    } else {
        alert("Valor 3 é o maior")
    }


}