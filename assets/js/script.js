// Data do casamento
console.log("JavaScript carregou!");

const dataCasamento = new Date(2026, 7, 16, 16, 0, 0).getTime();


function atualizarContador() {

    const agora = new Date().getTime();

    const diferenca = dataCasamento - agora;


    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

    const horas = Math.floor(
        (diferenca % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutos = Math.floor(
        (diferenca % (1000 * 60 * 60))
        / (1000 * 60)
    );


    const segundos = Math.floor(
        (diferenca % (1000 * 60))
        / 1000
    );


    document.getElementById("contador").innerHTML =
        `${dias} dias | ${horas} horas | ${minutos} minutos | ${segundos} segundos`;
}


setInterval(atualizarContador, 1000);


atualizarContador();
