function Calcular_raiz() {
    var numero = parseFloat(document.getElementById("numero").value);
    var raiz = Math.sqrt(numero);
    
    document.getElementsByName("resultado")[0].value = raiz.toFixed(2);
}