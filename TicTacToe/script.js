var vez = document.getElementById("vez");
vez.hidden = true;
var tabuleiro = document.getElementById("tabuleiro");
tabuleiro.hidden = true;
var btn_play = document.getElementById("comecar");
var jogadas = [10, 20, 30, 40, 50, 60, 70, 80, 90];
var posJogadas = [10, 20, 30, 40, 50, 60, 70, 80, 90];
var ganhador = document.getElementById("ganhador");
ganhador.setAttribute("style", "display: none;");
var placarJogo = document.getElementById("placar");
placarJogo.setAttribute("style", "display: none;");
var pontosP1 = document.getElementById("placarP1");
var pontosP2 = document.getElementById("placarP2");
var cont = 2;

function jogar(val){
    local = document.getElementById(val.id);
    if(cont % 2 == 0){
        local.innerText = "X";
        local.setAttribute("class", "preenchido2 espaco e" + val.id);
        vez.innerHTML = "É a sua vez " + p2 + " ( <b class='o'> O</b> )";
        jogadas[val.id - 1] = 0
        jogador = p1
    }else{
        local.innerText = "O";
        local.setAttribute("class", "preenchido espaco e" + val.id);
        vez.innerHTML = "É a sua vez " + p1 + " ( <b class='x'> X</b> )";
        jogadas[val.id - 1] = 1;
        jogador = p2;
    }

    local.setAttribute("disabled", "disabled")
    console.log(jogadas)
    if (cont >= 5) {
        ganhou(jogadas, jogador)
    }

    cont += 1
}

function play(){
    placarJogo.setAttribute("style", "display: flex;");
    document.getElementById("h1").setAttribute("style", "display: none");
    p1 = document.getElementById("p1").value;
    p2 = document.getElementById("p2").value;
    if (p1 == "") {
        p1 = "Player 1"
    }
    if (p2 == "") {
        p2 = "Player 2"
    }
    vez.innerHTML = "É a sua vez " + p1 + " ( <b class='x'> X</b> )"

    vez.hidden = false
    tabuleiro.hidden = false
    btn_play.hidden = true
}

function ganhou(jogadas, jogador){
    var player = "";

    if (jogadas[0] == jogadas[1] && jogadas[0] == jogadas[2]){
        player = jogador;
    } else if (jogadas[3] == jogadas[4] && jogadas[3] == jogadas[5]) {
        player = jogador;
    } else if (jogadas[6] == jogadas[7] && jogadas[6] == jogadas[8]) {
        player = jogador;
    } else if (jogadas[0] == jogadas[3] && jogadas[0] == jogadas[6]) {
        player = jogador;
    } else if (jogadas[1] == jogadas[4] && jogadas[1] == jogadas[7]) {
        player = jogador;
    } else if (jogadas[2] == jogadas[5] && jogadas[2] == jogadas[8]) {
        player = jogador;
    } else if (jogadas[0] == jogadas[4] && jogadas[0] == jogadas[8]) {
        player = jogador;
    } else if (jogadas[2] == jogadas[4] && jogadas[2] == jogadas[6]) {
        player = jogador;
    } else if (jogadas[0] != posJogadas[0] && jogadas[1] != posJogadas[1] && jogadas[2] != posJogadas[2]
        && jogadas[3] != posJogadas[3] && jogadas[4] != posJogadas[4] && jogadas[5] != posJogadas[5]
        && jogadas[6] != posJogadas[6] && jogadas[7] != posJogadas[7] && jogadas[8] != posJogadas[8]
    ) {
        player = "Ninguém";
    }
    
    if (player != "" ) {
        finaliza(player);
    }

};

function finaliza(player) {
    document.getElementById("mensagemFinal").innerText = player + " venceu!"
    ganhador.setAttribute("style", "display: block;");
    
    let reply = document.getElementById("reply");
    reply.addEventListener("click", replay);

    if (player == p1) {
        pontosP1.innerText = parseInt(pontosP1.innerText, 10) + 1;
    } else if (player == p2){
        pontosP2.innerText = parseInt(pontosP2.innerText, 10) + 1;
    };

    for (let i = 1; i < 10; i++) {
        let elem = document.getElementById(i);
        if (elem.disabled == false) {
            elem.setAttribute("disabled", "disabled"); 
        }
    };

};

function replay() {
    ganhador.setAttribute("style", "display: none;");
    for (let i = 1; i < 10; i++) {
        let elem = document.getElementById(i);
        if (elem.disabled == true) {
            elem.removeAttribute("disabled", "disabled");
            elem.setAttribute("class", "espaco e" + i);
        }
    };
    vez.innerHTML = "É a sua vez " + p1 + " ( <b class='x'> X</b> )";
    cont = 2
    jogadas = [10, 20, 30, 40, 50, 60, 70, 80, 90]

};