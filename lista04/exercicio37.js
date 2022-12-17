function valorCompra() {

    let qtdmorangos = parseInt(prompt("Informe a quantidade de morangos comprados (em Kg): "));
    let qtdmacas = parseInt(prompt("Informe a quantidade de maçãs compradas (em Kg): "));

    var preco1morango = qtdmorangos * 2.50
    var preco1maca = qtdmacas * 1.80
    var preco2morango = qtdmorangos * 2.20
    var preco2maca = qtdmacas * 1.50
    var total1 = preco1morango + preco1maca
    var total2 = preco2morango + preco2maca

    if (qtdmorangos <= 5 && qtdmacas <= 5) {
        alert("O valor total é igual a: " + total1.toFixed(2))

    } else if (total2 >= 25) {
        var desconto = total2 * 0.1
        var vfinal = total2 - desconto
        alert("O valor total é igual a: " + vfinal.toFixed(2))

    } else if (qtdmorangos > 5 && qtdmorangos < 8 && qtdmacas > 5 && qtdmorangos < 8) {
        alert("O valor total é igual a: " + total2.toFixed(2))

    } else if (qtdmorangos > 8 && qtdmacas > 8) {
        var desconto = total2 * 0.1
        var vfinal = total2 - desconto
        alert("O valor total é igual a: " + vfinal.toFixed(2))
    }
}