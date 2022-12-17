function saldoAtual() {
    let conta = parseInt(prompt("Informe o número da conta: "))
    let saldo = parseInt(prompt("Informe o seu saldo: "))
    let debito = parseInt(prompt("Informe o seu saldo em débito:"))
    let credito = parseInt(prompt("Informe o seu saldo em crédito: "))

    let saldoAtual = saldo - debito + credito

    if (saldoAtual >= 0) {
        alert("Saldo positivo! Você tem em sua conta R$ " + saldoAtual)

    } else {
        alert("Saldo negativo! Você está devendo R$ " + saldoAtual)
    }

}