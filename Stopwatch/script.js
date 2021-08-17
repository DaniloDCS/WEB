var btnIniciar = document.getElementById("btn-iniciar");
var btnPausar = document.getElementById("btn-pausar");
var btnContinuar = document.getElementById("btn-continuar");
var btnReiniciar = document.getElementById("btn-reiniciar");
var counterView = document.getElementById("counterView");

btnIniciar.addEventListener("click", () => {
    iniciar(0, 0, 0);
});

btnPausar.addEventListener("click", pausar);
btnPausar.style.display = "none";
btnReiniciar.addEventListener("click", reiniciar);
btnReiniciar.style.display = "none";
btnContinuar.addEventListener("click", continuar);
btnContinuar.style.display = "none";


var textHoras = document.getElementById("horas");
var textMinutos = document.getElementById("minutos");
var textSegundos = document.getElementById("segundos");

function iniciar(h, m, s) {
    btnIniciar.style.display = "none";
    btnPausar.style.display = "block";
    btnContinuar.style.display = "none";
    btnReiniciar.style.display = "none";

    segs = s;
    mins = m;
    hors = h;

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
    btnPausar.style.display = "none";
    clearInterval(contador);
    btnContinuar.style.display = "block";
    btnReiniciar.style.display = "block";
};

function continuar() {
    iniciar(hors, mins, segs); 
};

function reiniciar() {
    clearInterval(contador);
    iniciar(0, 0, 0); 
};

