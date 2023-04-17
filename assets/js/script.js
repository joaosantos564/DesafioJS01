function baskaratest() {

    /*Coletando valores*/
    let a = document.getElementById("valora").value;
    let b = document.getElementById("valorb").value;
    let c = document.getElementById("valorc").value;

    /*fórmula de bhaskára*/
    let quadrado = (b * b);
    let delta = quadrado - 4 * (a * c);
    let raiz = Math.sqrt(delta);
    let x1 = (-b + raiz) / (2 * a);
    let x2 = (-b - raiz) / (2 * a);

    /*Variáveis*/
    let maior = '';
    let imparpar = '';

    /*Consoles*/
    console.log(quadrado)
    console.log(delta)
    console.log(raiz)
    console.log(x1)
    console.log(x2)

    /*Respostas*/
    document.getElementById("rx1").innerHTML = `O Valor de X1 é ${x1.toFixed(2)}.`;
    document.getElementById("rx2").innerHTML = `O Valor de X2 é ${x2.toFixed(2)}.`;

    /*if's e else variantes*/
    if (a == "" || b == "" || c == "") {
        document.getElementById("resultado").innerHTML = "Digite um valor válido";
    }

    if (delta < 0) {
        document.getElementById("resultado").innerHTML = "Digite um valor válido, pois o delta é menor que 0.";
    }

    if (delta == 0) {
        document.getElementById("resultado").innerHTML = `Ambos os números tem o mesmo valor, e ele é ${x1} `;
    }

    if (x1 < x2) {
        maior = x2;
        x2 = x1;
        x1 = maior;
    }
    else {
        maior = x1;
        x1 = maior;
    }

    let sobra1 = document.getElementById("x1").value;
    let sobra2 = document.getElementById("x2").value;
    if (x1 % 2 ==0) {
        document.getElementById("resultado").innerHTML =  "o número é par"
    }
    else {
        document.getElementById("resultado").innerHTML =  "o número é par"
    }
}