var listaQuestoes = document.getElementById("questoes");
var addQuestoesFloat = document.getElementById("addQuestoesFloat");
addQuestoesFloat.addEventListener("click", addQuestao);

function addQuestao() {
    numeroQuestoes = listaQuestoes.childElementCount + 1;

    if (numeroQuestoes < 10) {
        numeroQuestoes = "0" + numeroQuestoes;
    };

    let divQuestao = document.createElement("div");
    divQuestao.className = "questao";
    divQuestao.id = "questao" + numeroQuestoes;
    
    let inputQuestao = document.createElement("input");
    inputQuestao.className = "inputQuestao";
    inputQuestao.type = "text";
    inputQuestao.id = "inputTituloQ" + numeroQuestoes;
    inputQuestao.setAttribute("required", "false");
    /* inputQuestao.id */

    let btnDelQuestao = document.createElement("button");
    btnDelQuestao.innerHTML = "&times;"
    btnDelQuestao.className = "btnDelQuestao";
    my_del = "questao" + numeroQuestoes;
    btnDelQuestao.setAttribute("onClick", "removeQuestion(" + "\'" + my_del + "\')");

    let labelQuestao = document.createElement("label");
    labelQuestao.className = "labelQuestao";
    labelQuestao.innerText = "Questão " + numeroQuestoes;
    labelQuestao.id = "labelTituloQ" + numeroQuestoes;
    /* labelQuestao.id */

    let divOpcoesQuestoes = document.createElement("div");
    divOpcoesQuestoes.className = "opcoesQuestoes";

    let tipoQuestao = document.createElement("h4");
    tipoQuestao.innerText = "Tipo de Questão";

    let listOpcs = document.createElement("ul");
    listOpcs.className = "listOpcs";

    for (let o = 1; o <= 4; o++) {
        let li = document.createElement("li");
        if (o == 1) {
            li.innerHTML = "&#x229A; Multiplas Escolhas";
            li.className = "li";
            li.id = "tipoQ" + numeroQuestoes + "O" + o;
            n = "groupListQuests" + numeroQuestoes;
            li.setAttribute("onClick", "tipoRespostaOpcs(\'" + n +"\'," + o + ")");
        } else if (o == 2) {
            li.innerHTML = "&#x2611; Caixas de Seleção";
            li.id = "tipoQ" + numeroQuestoes + "O" + o;
            n = "groupListQuests" + numeroQuestoes;
            li.setAttribute("onClick", "tipoRespostaOpcs(\'" + n +"\'," + o + ")");
        } else if (o == 3) {
            li.innerHTML = "&#x268C; Resposta Curta";
            li.id = "tipoQ" + numeroQuestoes + "O" + o;
            n = "groupListQuests" + numeroQuestoes;
            li.setAttribute("onClick", "tipoRespostaOpcs(\'" + n +"\'," + o + ")");
        } else if (o == 4) {
            li.innerHTML = "&#x2630; Resposta Longa";
            li.id = "tipoQ" + numeroQuestoes + "O" + o;
            n = "groupListQuests" + numeroQuestoes;
            li.setAttribute("onClick", "tipoRespostaOpcs(\'" + n +"\'," + o + ")");
        }
        listOpcs.append(li);
    }


    let groupListQuests = document.createElement("div");
    groupListQuests.className = "groupListQuests";
    groupListQuests.id = "groupListQuests" + numeroQuestoes ;

    divQuestao.append(btnDelQuestao);
    divQuestao.append(inputQuestao);
    divQuestao.append(labelQuestao);
    divQuestao.append(divOpcoesQuestoes);
    divOpcoesQuestoes.append(tipoQuestao);
    divOpcoesQuestoes.append(listOpcs); 
    divOpcoesQuestoes.append(groupListQuests);

    listaQuestoes.append(divQuestao);
    let styleInputs = document.getElementById("style");


    let classInput = "#inputTituloQ" + numeroQuestoes + ":hover + #labelTituloQ" + numeroQuestoes + ", #inputTituloQ" + numeroQuestoes + ":focus + #labelTituloQ" + numeroQuestoes +", #inputTituloQ" + numeroQuestoes + ":valid + #labelTituloQ" + numeroQuestoes + "{" +
                    "transform: translateY(-60px); font-size: 20px; transition: .5s; }";

    styleInputs.innerHTML += classInput;
}

function tipoRespostaOpcs (questao, tipoResposta) {
    let question = document.getElementById(questao);
    
    if (question.childElementCount > 0) {
        question.innerHTML = ""
    };

    let div = document.createElement("div");

    if (tipoResposta == "3") {
        div.className = "respostaCurta";
        
        let inputSimples = document.createElement("input");
        inputSimples.placeholder = "Exemplo de resposta curta...";
        inputSimples.readOnly = true;

        div.append(inputSimples);
    } else if (tipoResposta == "2") {
        div.className = "respostaSelecao";

        let ul = document.createElement("ul");
        ul.className = "opcQuest";
        ul.id = "opcSelecaoQ" + numeroQuestoes;
        
        let buttonAdd = document.createElement("button");
        buttonAdd.innerHTML = "&#x2719; Nova Opção"; 
        buttonAdd.className = "btnAddOpc";
        
        buttonAdd.addEventListener("click", function () {
            addOpcao("opcSelecaoQ" + numeroQuestoes, 2);
        }, false);

        let ol = document.createElement("ol");
        ol.id = "olQ" + numeroQuestoes + "Op1";

        let text = document.createElement("text");
        text.innerHTML = "&#x2611;";
        let input = document.createElement("input");
        input.value = "Opção 01";
        let buttonDel = document.createElement("button");
        buttonDel.innerHTML = "&#x2718;";
        buttonDel.addEventListener("click", function () {
            removeQuestion("olQ" + numeroQuestoes + "Op1")
        })

        ol.append(text);
        ol.append(input);
        ol.append(buttonDel);
           
        div.append(ul);
        ul.append(ol);
        div.append(buttonAdd);
    } else if (tipoResposta == "1") {
        div.className = "respostaMultipla";

        let ul = document.createElement("ul");
        ul.className = "opcQuest";
        ul.id = "opcMultiplaQ" + numeroQuestoes;

        let buttonAdd = document.createElement("button");
        buttonAdd.innerHTML = "&#x2719; Nova Opção"; 
        buttonAdd.className = "btnAddOpc";
        buttonAdd.addEventListener("click", function () {
            addOpcao("opcMultiplaQ" + numeroQuestoes, 3);
        }, false);

        let ol = document.createElement("ol");
        ol.id = "olQ" + numeroQuestoes + "Op1";
        let text = document.createElement("text");
        text.innerHTML = " &#x229A;";
        let input = document.createElement("input");
        input.value = "Opção 01";
        let buttonDel = document.createElement("button");
        buttonDel.innerHTML = "&#x2718;";
        buttonDel.addEventListener("click", function () {
            removeQuestion("olQ" + numeroQuestoes + "Op1")
        })

        ol.append(text);
        ol.append(input);
        ol.append(buttonDel);

        div.append(ul);
        ul.append(ol)
        div.append(buttonAdd);
    } else if (tipoResposta == "4") {
        div.className = "respostaLonga";
        let inputLonga = document.createElement("textarea");
        inputLonga.placeholder = "Exemplo de resposta longa...";
        inputLonga.readOnly = true;
        
        div.append(inputLonga);
    };
    question.append(div);
};

function addOpcao(questao, tipoResposta) {
    var question = document.getElementById(questao);
    questionNumber = question.childElementCount + 1;
    if (questionNumber < 10) {
        questionNumber = "0" + questionNumber;
    }

    if (tipoResposta == 2) {
        let ol = document.createElement("ol");
        ol.id = "olQ" + numeroQuestoes + "Op1";
        let text = document.createElement("text");
        text.innerHTML = "&#x2611;";
        let input = document.createElement("input");
        input.value = "Opção " + questionNumber;
        let buttonDel = document.createElement("button");
        buttonDel.innerHTML = "&#x2718;"; 
        buttonDel.addEventListener("click", function () {
            removeQuestion("olQ" + numeroQuestoes + "Op1")
        })
        ol.append(text);
        ol.append(input);
        ol.append(buttonDel);
        question.append(ol);
    } else if (tipoResposta == 3) {
        let ol = document.createElement("ol");
        ol.id = "olQ" + numeroQuestoes + "Op1";
        let text = document.createElement("text");
        text.innerHTML = " &#x229A;";
        let input = document.createElement("input");
        input.value = "Opção " + questionNumber;
        let buttonDel = document.createElement("button");
        buttonDel.innerHTML = "&#x2718;";
        buttonDel.addEventListener("click", function () {
            removeQuestion("olQ" + numeroQuestoes + "Op1")
        })

        ol.append(text);
        ol.append(input);
        ol.append(buttonDel);
        question.append(ol);
    }
}

function removeQuestion(quest) {
    document.getElementById(quest).remove();
}


addQuestao();

var corVermelha = document.getElementById("corVermelha");
var corAzul = document.getElementById("corAzul");
var corVerde = document.getElementById("corVerde");
var corRosa = document.getElementById("corRosa");
var corPreta = document.getElementById("corPreta");
var corLaraja = document.getElementById("corLaranja");

corVermelha.addEventListener("click", function () {
    colorFormulario("formRed")
}, false );

corAzul.addEventListener("click", function () {
    colorFormulario("formBlue")
}, false);

corVerde.addEventListener("click", function () {
    colorFormulario("formGreen")
}, false );

corRosa.addEventListener("click", function () {
    colorFormulario("formPink")
}, false );

corPreta.addEventListener("click", function () {
    colorFormulario("formBlack")
}, false );

corLaraja.addEventListener("click", function () {
    colorFormulario("formOrange")
}, false);


function colorFormulario(opc) {
    var body = document.getElementById("body"); 
    body.className = opc;
};

