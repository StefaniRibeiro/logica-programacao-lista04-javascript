function estoque() {

    let qtdAtual = parseInt(prompt("Informe a quantidade atual do estoque: "));
    let qtdMaxima = parseInt(prompt("Informe a quantidade máxima do estoque: "));
    let qtdMinima = parseInt(prompt("Informe a quantidade mínima do estoque: "));

    let qtdMedia = (qtdMaxima + qtdMinima) / 2
    
    if (qtdAtual >= qtdMedia) {
        alert("Não efetuar compra!")
    } else {
        alert("Efetuar compra!")
    }


}