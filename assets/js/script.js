// Data do casamento

console.log("JavaScript carregou!");

const dataCasamento = new Date("August 16, 2027 16:00:00").getTime();


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


   document.getElementById("dias").innerHTML = dias;
document.getElementById("horas").innerHTML = horas;
document.getElementById("minutos").innerHTML = minutos;
document.getElementById("segundos").innerHTML = segundos;
}


setInterval(atualizarContador, 1000);


atualizarContador();
