function Calcular_sueldo() {
    var sueldo1 = parseFloat(document.getElementById("sueldo1").value);
    var sueldo2 = parseFloat(document.getElementById("sueldo2").value);
    var sueldo3 = parseFloat(document.getElementById("sueldo3").value);

    var total = sueldo1 + sueldo2 + sueldo3;

    document.getElementsByName("total")[0].value = total.toFixed(2);
}