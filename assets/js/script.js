/* ======================================================= */
/* 1. SCRIPT DO CONTADOR REGRESSIVO                        */
/* ======================================================= */
function atualizarContador() {
    const dataCasamento = new Date('August 16, 2027 16:00:00').getTime();
    const agora = new Date().getTime();
    const diferenca = dataCasamento - agora;

    if (diferenca < 0) {
        document.getElementById('dias').innerText = '00';
        document.getElementById('horas').innerText = '00';
        document.getElementById('minutos').innerText = '00';
        document.getElementById('segundos').innerText = '00';
        return;
    }

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    document.getElementById('dias').innerText = dias < 10 ? '0' + dias : dias;
    document.getElementById('horas').innerText = horas < 10 ? '0' + horas : horas;
    document.getElementById('minutos').innerText = minutos < 10 ? '0' + minutos : minutos;
    document.getElementById('segundos').innerText = segundos < 10 ? '0' + segundos : segundos;
}

setInterval(atualizarContador, 1000);
atualizarContador();


/* ======================================================= */
/* 2. SCRIPT DO ACORDEÃO (DICAS ÚTEIS)                     */
/* ======================================================= */
document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('.acordeao-header');

    headers.forEach(header => {
        header.addEventListener('click', function() {
            const body = this.nextElementSibling;

            if (this.classList.contains('active')) {
                this.classList.remove('active');
                body.classList.remove('active');
                body.style.maxHeight = null;
            } else {
                headers.forEach(otherHeader => {
                    otherHeader.classList.remove('active');
                    otherHeader.nextElementSibling.classList.remove('active');
                    otherHeader.nextElementSibling.style.maxHeight = null;
                });

                this.classList.add('active');
                body.classList.add('active');
                body.style.maxHeight = body.scrollHeight + "px";
            }
        });
    });

    /* ======================================================= */
    /* 3. LÓGICA DO RSVP ENXUTO (ETAPA 4)                      */
    /* ======================================================= */
    const formRSVP = document.getElementById('form-rsvp');
    const seletorPresenca = document.getElementById('rsvp-presenca');

    if (formRSVP) {
        formRSVP.addEventListener('submit', function(e) {
            e.preventDefault(); // Impede o recarregamento da página

            const nome = document.getElementById('rsvp-nome').value;
            const presenca = seletorPresenca.value;

            if (presenca === 'sim') {
                alert(`Obrigado, ${nome}! Sua presença foi confirmada com sucesso. Nos vemos no grande dia! 🎉`);
            } else {
                alert(`Obrigado por nos avisar, ${nome}. Sentiremos sua falta na nossa celebração! ❤️`);
            }

            formRSVP.reset(); // Limpa os campos do formulário
        });
    }
});
