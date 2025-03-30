function calcula_Factura() {
    var precio = parseFloat(document.getElementById("precio1").value);
    var cantidad = parseInt(document.getElementById("cantidad1").value);

    var subtotal = (precio * cantidad);
    var impuesto = (subtotal * 0.15); 
    var total = (subtotal + impuesto);

    document.getElementById("subtotal").value = subtotal.toFixed(2);
    document.getElementById("impuesto").value = impuesto.toFixed(2);
    document.getElementById("total").value = total.toFixed(2);
}