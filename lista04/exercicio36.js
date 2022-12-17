function idades() {

    let homem1 = parseInt(prompt("Informe a sua idade: "));
    let homem2 = parseInt(prompt("Informe a sua idade: "));
    let mulher1 = parseInt(prompt("Informe a sua idade: "));
    let mulher2 = parseInt(prompt("Informe a sua idade: "));

    if (homem1 > homem2) {
        var hmaisvelho = homem1
        var hmaisnovo = homem2

    } else {
        var hmaisnovo = homem1
        var hmaisvelho = homem2
    } if (mulher1 > mulher2) {
        var mmaisvelha = mulher1
        var mmaisnova = mulher2
    } else {
        var mmaisvelha = mulher2
        var mmaisnova = mulher1
    }

    var soma = hmaisvelho + mmaisnova
    var produto = hmaisnovo * mmaisvelha

    alert("O resultado da soma das idades do homem mais velho com a mulher mais nova é igual a: " + soma)
    alert("O resultado do produto das idades do homem mais novo com a mulher mais velha é igual a: " + produto)

}