var valueTime = document.getElementById("time-value");
var btnIniciar = document.getElementById("btn-iniciar");
var btnSair = document.getElementById("btn-sair");
var btnIniciar2 = document.getElementById("btn-iniciar2");
var btnPausar = document.getElementById("btn-pausar"); 
var timeView = document.getElementById("timeView");
var counterView = document.getElementById("counterView");


valueTime.value = "01:59:30";
btnIniciar.addEventListener("click", iniciar);
btnSair.addEventListener("click", sair);
counterView.hidden = true;
btnPausar.addEventListener("click", pausar);

var textHoras = document.getElementById("horas");
var textMinutos = document.getElementById("minutos");
var textSegundos = document.getElementById("segundos");

function iniciar() {
    btnPausar.style.display = "block";
    btnIniciar2.style.display = "none";

    let val = valueTime.value.split(":");
    timeView.hidden = true;
    counterView.hidden = false;
    let horas = parseInt(val[0], 10);
    let minutos = parseInt(val[1], 10);
    let segundos = parseInt(val[2], 10);
    
    if (isNaN(segundos)) {
        segundos = 0;
    }

    segAux = segundos;
    minAux = minutos;
    horAux = horas;

    contador = setInterval(() => {
        textHoras.innerText = horAux < 10 ? "0" + horAux : horAux;;
        textMinutos.innerText = minAux < 10 ? "0" + minAux : minAux;
        textSegundos.innerText = segAux < 10 ? "0" + segAux : segAux;

        if (minAux == 0 && segAux == 0 && horAux == 0) {
            clearInterval(contador);
        } else if (segAux == 0 && minAux == 0 && horAux > 0) {
            minAux = 59;
            segAux = 59;
            horAux--;
        } else if (segAux == 0 && minAux > 0) {
            minAux--;
            segAux = 59;
        }else if (segAux == 0 && minAux >= 0 && horAux >= 0) {
            segAux == 59;
        }

        segAux--;

        if (segAux < 0) {
            segAux = 0;
        } ;

    }, 1000);
};

function sair() {
    timeView.hidden = false;
    counterView.hidden = true;
    clearInterval(contador);
};

function pausar(){
    btnIniciar2.style.display = "block";
    btnIniciar2.addEventListener("click", iniciar);
    btnPausar.style.display = "none";
    clearInterval(contador);
};

