function salario() {

    let horasTrabalhadas = parseInt(prompt("Informe a quantidade de horas trabalhadas no mês: "));
    let salarioHora = parseInt(prompt("Informe o salário por hora: "));

    var salarioMensal = horasTrabalhadas * salarioHora
    var horaExtra = horasTrabalhadas - 160


    var acrescimo = (((horaExtra*salarioHora*50/100)+salarioHora)*horaExtra)
    var acrescimofinal = acrescimo + (160*salarioHora)

    if (horasTrabalhadas > 160) {

        alert("Você trabalhou mais de 160 horas, então seu salário com acréscimo é igual a: " + acrescimofinal)
    } else {
        alert("Você trabalhou menos de 160 horas, então seu salário é igual a: " + salarioMensal)
    }


}