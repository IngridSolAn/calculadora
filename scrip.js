function calcularValores() {
    let valor1 = parseFloat(document.getElementById("txValore1").value);
    let valor2 = parseFloat(document.getElementById("txValore2").value);
    let resultado;

    if (operacao === "+") {
        resultado = valor1 + valor2;
    } else if (operacao === "-") {
        resultado = valor1 - valor2;
    } else if (operacao === "/") {
        resultado = valor1 / valor2;
    } else if (operacao === "*") {
        resultado = valor1 * valor2;
    }

    document.getElementById("txResultado").innerHTM = resultado;
}