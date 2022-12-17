function condicao() {

    let valor = parseInt(prompt("Informe um valor: "));


    if (valor > 0) {
        alert("Valor positivo!")
    // == ta certo aqui?
    } else if (valor == 0) {

        alert("É 0!")
    } else {
        alert("Valor negativo!")
    }
}