function combustiveis() {
    let combustivel = prompt("Qual combustivel deseja abastecer? [A/G]; ");
    let litros = parseInt(prompt("Quantos litros deseja abastecer? "));

    let A = 2.90;
    let G = 3.30;

    if (combustivel == "A" && litros <= 20) {
        let total = litros * A;
        let desconto = 0.03 * total;
        var preco = total - desconto;
        alert("O preço a se pagar pelo combustivel é: R$ " + preco);

    } else if (combustivel == "A" && litros > 20) {
        let total = litros * A;
        let desconto = 0.05 * total;
        var preco = total - desconto;
        alert("O preço a se pagar pelo combustivel é: R$ " + preco);

    } else if (combustivel == "G" && litros <= 20) {
        let total = litros * G;
        let desconto = 0.04 * total;
        var preco = total - desconto;
        alert("O preço a se pagar pelo combustivel é: R$ " + preco);

    } else if (combustivel == "G" && litros > 20) {
        let total = litros * G;
        let desconto = 0.06 * total;
        var preco = total - desconto;
        alert("O preço a se pagar pelo combustivel é: R$ " + preco);

    }
}