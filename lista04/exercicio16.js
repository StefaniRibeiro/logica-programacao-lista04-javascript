function macas(){

    let macasCompradas = parseInt(prompt("Informe quantas maçãs comprou: "))
 
 
 if (macasCompradas <12) {
    var valorFinal = macasCompradas*1.30
 } else {
     var valorFinal = macasCompradas*1.00
 }
 
 
     alert("O valor final de sua compra é igual a: "+valorFinal+" reais");
 }