var btnReiniciar = document.getElementById("btn-reiniciar");
var btnIniciar = document.getElementById("btn-iniciar");
var btnPausar = document.getElementById("btn-pausar");
var counterView = document.getElementById("counterView");

btnIniciar.addEventListener("click", iniciar);
btnPausar.addEventListener("click", pausar);
btnReiniciar.addEventListener("click", reiniciar);

var textHoras = document.getElementById("horas");
var textMinutos = document.getElementById("minutos");
var textSegundos = document.getElementById("segundos");

function iniciar() {

    segs = 0;
    mins = 0;
    hors = 0;

    contador = setInterval(() => {
        textHoras.innerText = hors < 10 ? "0" + hors : hors;;
        textMinutos.innerText = mins < 10 ? "0" + mins : mins;
        textSegundos.innerText = segs < 10 ? "0" + segs : segs;

        if (mins == 59 && segs == 59) {
            hors++;
            mins = 0;
            segs = 0;
        } else if (segs == 59) {
            mins++;
            segs = -1;
        }
            
        segs++;
        
    }, 1000);
};

function pausar() {
    clearInterval(contador);
};

function reiniciar() {
    clearInterval(contador);
    iniciar(); 
};

