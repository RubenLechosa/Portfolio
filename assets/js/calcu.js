function validate() {
    
    return false;

    paridad();
    auno();
    ande();
}

function ande() {
    var num1 = document.getElementById("nbin").value;
    var num2 = document.getElementById("nbin2").value;
    var comprobar = true;
    var resultado = "";
    var contador = 0;
    var contador2 = 0;

    if (num1.length == 0 && num2.length == 0) {
        text.innerHTML = "Rellena la casilla 1 y 2"
        text.style.color = "red";
        comprobar = false;
        return false;
    } else {
        comprobar = true;
    }

    if (num1.length == 0) {
        text.innerHTML = "Rellena la casilla 1"
        text.style.color = "red";
        comprobar = false;
        return false;
    } else {
        comprobar = true;
    }

    for (var i = 0; i < num1.length; i++) {
        if (num1[i] == "1" || num1[i] == "0") {
            comprobar = true;
            contador++;
        } else {
            comprobar = false;
        }
    }

    if (contador != num1.length) {
        text.innerHTML = "En la casilla 1 el numero no es binario";
        text.style.color = "red";
        return false;
    }


    if (num2.length == 0) {
        text.innerHTML = "Rellena la casilla 2"
        text.style.color = "red";
        comprobar = false;
        return false;
    } else {
        comprobar = true;
    }

    for (var i = 0; i < num2.length; i++) {
        if (num2[i] == "1" || num2[i] == "0") {
            comprobar = true;
            contador2++;
        } else {
            comprobar = false;
        }
    }

    if (contador2 != num2.length) {
        text.innerHTML = "En la casilla 2 el numero no es binario";
        text.style.color = "red";
        return false;
    }

    for (var i = 0; i < num1.length; i++) {

        resultado = resultado + (num1.charAt(i) * num2.charAt(i));
    }


    const convertAndReverse = resultado.toString().split("").reverse().join("");


    text.innerHTML = "El resultado del AND es: " + convertAndReverse;
    text.style.color = "green";
    return false;

}

function auno() {
    var num1 = document.getElementById("nbin").value;
    var contador = 0;
    var contador2 = 0;
    var comprobar = true;
    var complemento = "";

    if (num1.length == 0) {
        text.innerHTML = "Rellena la casilla 1"
        text.style.color = "red";
        comprobar = false;
    } else {
        comprobar = true;
    }

    for (var i = 0; i < num1.length; i++) {
        if (num1[i] == "1" || num1[i] == "0") {
            comprobar = true;
            text.innerHTML = "";
            contador2++;
        } else {
            comprobar = false;
        }
    }

    if (contador2 != num1.length) {
        text.innerHTML = "El numero no es binario";
        text.style.color = "red";
        return false;
    }

    for (var i = 0; i < num1.length; i++) {
        if (num1[i] == "1") {
            complemento = complemento + "0"
            contador++;
        } else {
            complemento = complemento + "1"
            contador++;
        }
    }

    if (comprobar == true && complemento.length == num1.length) {
        text.innerHTML = "El resultado del complemento A1 es: " + complemento;
        text.style.color = "green";
    }
    return false;

}


function paridad() {
    var num1 = document.getElementById("nbin").value;
    var contador = 0;
    var contador2 = 0;
    var comprobar = true;


    if (num1.length == 0) {
        text.innerHTML = "Rellena la casilla 1"
        text.style.color = "red";
        comprobar = false;
    } else {
        comprobar = true;
    }

    for (var i = 0; i < num1.length; i++) {
        if (num1[i] == "1" || num1[i] == "0") {
            if (num1[i] == 1) {
                contador++;
            }
            contador2++;
            comprobar = true;
        } else {
            comprobar = false;
        }
    }

    if (contador2 != num1.length) {
        text.innerHTML = "El numero no es binario";
        text.style.color = "red";
        return false;
    }

    if (contador > 0 && contador % 2 == 0) {
        text.innerHTML = "El bit de paridad es 0";
        text.style.color = "green";

    } else if (comprobar == true && contador > 0 && contador % 2 == 1) {
        text.innerHTML = "El bit de paridad es 1";
        text.style.color = "green";
    }


    return false;
}