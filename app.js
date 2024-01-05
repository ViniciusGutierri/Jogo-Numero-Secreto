let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function adivinharNumeroSecreto() {
    let textoTitulo = document.getElementById("texto__insere");
    let blocoInserir = document.getElementById("container__insere");
    let jogarNovamente = document.getElementById("btn__novamente");
    let textoResultado = document.getElementById("texto__resultado");
    let input = document.getElementById("input__numero");
    let imgTrofeu = document.getElementById("img__trofeu");
    let textoAcertou = document.getElementById("container__texto");
    let descobriu = document.getElementById("descobriu");
    let numeroInserido = document.getElementById("input__numero").value;
    
    if (numeroInserido > numeroSecreto) {
        tentativas++;
        textoResultado.innerText = `O número secreto é menor que ${numeroInserido}. Tente novamente!`;
        input.value = "";
        input.focus();
    }
    else if (numeroInserido < numeroSecreto) {
        tentativas++;
        textoResultado.innerText = `O número secreto é maior que ${numeroInserido}. Tente novamente!`;
        input.value = "";
        input.focus();
    }
    else {
        imgTrofeu.style.display="block";
        textoAcertou.style.display="block";
        jogarNovamente.style.display="block";
        textoResultado.style.display="none";
        textoTitulo.style.display="none";
        blocoInserir.style.display="none";
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        descobriu.innerText = `Você descobriu o número secreto em ${tentativas} ${palavraTentativa}. O número secreto era ${numeroSecreto}.`;
        input.value = "";
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 100 + 1);
}

function jogarNovamente() {
    location.reload();
}