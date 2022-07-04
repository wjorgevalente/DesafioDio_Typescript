let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo')!;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let valorInicial = 0;

limparSaldo()


function somarAoSaldo(soma: number) {
    if (campoSaldo) {
        valorInicial += soma
        campoSaldo.innerHTML = valorInicial.toString();
        limparSoma();
    }
}

function limparSoma() {
    soma.value = "";
}


function limparSaldo() {
    if (campoSaldo) {
        valorInicial = 0;
        campoSaldo.innerHTML = valorInicial.toString();
    }
}

if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', () => {
        somarAoSaldo(Number(soma.value)); 
    });
}

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});