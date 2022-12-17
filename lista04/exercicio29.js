function somarDoisMaiores() {

    let valor1 = parseInt(prompt("Informe o primeiro valor: "))
    let valor2 = parseInt(prompt("Informe o segundo valor: "))
    let valor3 = parseInt(prompt("Informe o terceiro valor: "))

    if (valor1 > valor2 && valor1 > valor3) {
        var maior1 = valor1
        if (valor2 > valor3) {
            var maior2 = valor2
        } else {
            var maior2 = valor3
        }
    } else if (valor2 > valor1 && valor2 > valor3) {
        var maior1 = valor2
        if (valor1 > valor3) {
            var maior2 = valor1
        } else {
            var maior2 = valor3
        }
    } else if (valor3 > valor1 && valor3 > valor2) {
        var maior1 = valor3
        if (valor1 > valor2) {
            var maior2 = valor1
        } else {
            var maior2 = valor2
        }
    }
    var soma = maior1 + maior2
    alert("A soma dos 2 maiores números é igual a: " + soma)
}