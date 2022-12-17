function triangulo() {

    let a = parseInt(prompt("Informe o valor de A"))
    let b = parseInt(prompt("Informe o valor de B"))
    let c = parseInt(prompt("Informe o valor de C"))


    if ((a < b + c) && (b < a + c) && (c < a + b)) {
        alert("Forma-se um triângulo")
    } else {
        alert("Não forma-se um triângulo!")
    }
}