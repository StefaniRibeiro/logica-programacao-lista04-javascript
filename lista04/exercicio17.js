function media() {

    let av1 = parseInt(prompt("Informe a nota da avaliação 1: "));
    let av2 = parseInt(prompt("Informe a nota da avaliação 2: "));


    let media = (av1+av2)/2

if (media >= 6) {
    alert("Sua média foi igual a "+media+" .Você foi aprovado!")
} else {
    alert("Sua média foi igual a "+media+" .Você foi reprovado!")
}

}