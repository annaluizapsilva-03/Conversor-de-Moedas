function converter(){

    let valor = Number(document.getElementById("valor").value);

    let origem = document.getElementById("origem").value;

    let destino = document.getElementById("destino").value;

    if(valor <= 0){
        alert("Digite um valor válido.");
        return;
    }

    let reais;

    if(origem == "BRL"){
        reais = valor;
    }

    if(origem == "USD"){
        reais = valor * 5.40;
    }

    if(origem == "EUR"){
        reais = valor * 6.30;
    }

    let resultado;

    if(destino == "BRL"){
        resultado = reais;
    }

    if(destino == "USD"){
        resultado = reais / 5.40;
    }

    if(destino == "EUR"){
        resultado = reais / 6.30;
    }

    document.getElementById("resultado").innerHTML =
        valor.toFixed(2) + " " + origem +
        " = <br><strong>" +
        resultado.toFixed(2) + " " + destino +
        "</strong>";
}