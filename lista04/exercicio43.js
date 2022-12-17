function formarTriangulo() {

    let a = parseInt(prompt("Informe o valor de A: "))
    let b = parseInt(prompt("Informe o valor de B: "))
    let c = parseInt(prompt("Informe o valor de C: "))

    if (a < b + c && b < a + c && c < a + b) {
        if (a == b && b == c) {
            var mensagem = "Triângulo Equilátero"
        } else if (a == b || b == c || a == c) {
            var mensagem = "Triângulo Isósceles"
        } else {
            var mensagem = "Triângulo Escaleno"
        }
    } else {
        var mensagem = "Não é possível formar um triângulo"
    }

    alert(mensagem)

}