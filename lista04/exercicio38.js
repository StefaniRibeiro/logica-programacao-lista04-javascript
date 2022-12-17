function codigoAcesso() {

    let codusuario = parseInt(prompt("Informe o código de usuário: "));

    var codigo = 1234
    var senha = 9999

    if (codusuario == codigo) {
        let senhausuario = parseInt(prompt("Informe a senha: "));
        if (senhausuario == senha) {
            alert("Acesso permitido!")
        } else {
            alert("Acesso negado!")
        }
    } else {
        alert("Usuário inválido")
    }

}