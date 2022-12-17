function media() {

    let nota1 = parseInt(prompt("Informe a nota 1: "))
    let nota2 = parseInt(prompt("Informe a nota 2: "))
    let nota3 = parseInt(prompt("Informe a nota 3: "))

    let media = (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10

    alert("Sua média final é igual a: " + media)
}