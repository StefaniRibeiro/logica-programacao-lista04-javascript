function resultado() {

    let valor1 = parseInt(prompt("Informe o primeiro valor: "));
    let valor2 = parseInt(prompt("IInforme o segundo valor: "));

    if (valor1 > valor2) {
        alert("A ordem crescente dos valores é igual a: " + valor2 + " e " + valor1)
    } else {
        alert("A ordem crescente dos valores é igual a: " + valor1 + " e " + valor2)
    }
}