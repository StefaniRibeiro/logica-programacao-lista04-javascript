function valorCompra() {

    let nomeproduto = prompt("Informe o nome do produto: ");
    let qtdproduto = parseInt(prompt("Informe a quantidade de produtos comprados: "))
    let precoproduto = parseInt(prompt("Informe o preço do produto: "))

    var total = qtdproduto * precoproduto

    if (qtdproduto <= 5) {
        var desconto = total * 0.02
        var vfinal = total - desconto

    } else if (qtdproduto > 5 && qtdproduto <= 10) {
        var desconto = total * 0.03
        var vfinal = total - desconto

    } else if (qtdproduto > 10) {
        var desconto = total * 0.05
        var vfinal = total - desconto
    }

    alert("O valor final da compra é igual a: " + vfinal)
}