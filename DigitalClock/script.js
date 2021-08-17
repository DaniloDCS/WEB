var hour = document.getElementById("hour");
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var date = document.getElementById("data");

setInterval(() => {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    if (h < 10) {
        h = "0" + h;
    };

    if (m < 10) {
        m = "0" + m;
    };

    if (s < 10) {
        s = "0" + s;
    };

    hours.innerText = h;
    minutes.innerText = m;
    seconds.innerText = s;
}, 1000);


function dateValue() {
    let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    let d = new Date();
    let dia = d.getDate();
    let mes = d.getMonth();
    let ano = d.getFullYear();

    if (dia < 10) {
        dia = "0" + dia;
    }


    date.innerText = dia + " de " + meses[mes] + " de " + ano;
}

dateValue();