var listMensagens = document.getElementById("listMensagens");
var btnAdd = document.getElementById("btnEnviar");
var userMensagem = document.getElementById("mensagem");

function newMenssage (conteudo, position) {
    let div = document.createElement("div");
    let small = document.createElement("small");
    let date = new Date();
    let horas = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    let minutos = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    /* Coloca o CHECK apenas no remetente */
    small.innerHTML = position == "left" ? horas + "h" + minutos : horas + "h" + minutos + " <i>&check;</i>";
    
    div.className = "msg";
    let label = document.createElement("label");
    label.className = "msg_" + position;
    label.innerText = conteudo;
    
    
    div.appendChild(label);
    label.appendChild(small);
    listMensagens.appendChild(div);

    /* Deixa o scrool fixo no final */
    listMensagens.scrollTop = listMensagens.scrollHeight;
};


function saudacao() {
    setTimeout(() => {
        newMenssage("Olá, seja bem-vindo!", "left");
    }, 1000);
    
    setTimeout(() => {
        newMenssage("Eu sou Davi assitente do SIAE", "left");
    }, 3000);

    setTimeout(() => {
        newMenssage("E eu vou te ajudar!", "left");
    }, 5500);
    
    setTimeout(() => {
        newMenssage("Qual é o seu nome? Por favor!", "left");
    }, 7000);

    btnAdd.addEventListener("click", nome);
};

function nome() {
    newMenssage(userMensagem.value, "right");
    name = userMensagem.value;
    name2 = name.split(" ")
    userMensagem.value = " "
    
    setTimeout(() => {
        newMenssage("Ok, " + name2[0] + "!", "left");
    }, 1000);

    setTimeout(() => {
        newMenssage("Agora envie-me sua matrícula", "left");
    }, 3000);

    btnAdd.removeEventListener("click", nome);
    btnAdd.addEventListener("click", matricula);
};

function matricula() {
    matricula_aluno = userMensagem.value;
    newMenssage(matricula_aluno, "right");
    userMensagem.value = ""

    setTimeout(() => {
        newMenssage("Tudo certo!", "left");
    }, 1000);

    setTimeout(() => {
        newMenssage("Seu CPF?", "left");
    }, 2500);

    btnAdd.removeEventListener("click", matricula);
    btnAdd.addEventListener("click", cpf);
};

function cpf() {
    cpf_aluno = userMensagem.value;
    newMenssage(userMensagem.value, "right")
    userMensagem.value = "";

    setTimeout(() => {
        newMenssage("Otimo!", "left");
    }, 500);
    
    setTimeout(() => {
        newMenssage("Só mais um registro! Qual o seu email?", "left");
    }, 1600);

    btnAdd.removeEventListener("click", cpf);
    btnAdd.addEventListener("click", email);
};

function email() {
    email_aluno = userMensagem.value
    newMenssage(email_aluno, "right");

    if (email_aluno.indexOf("@") == -1) {
        setTimeout(() => {
            newMenssage("Ops! Email inválido", "left");
        }, 1000);

        setTimeout(() => {
            newMenssage("Tente novamente!", "left");
        }, 1900);
    }else {
        userMensagem.value = ""
        setTimeout(() => {
            newMenssage("Tudo OK!", "left");
        }, 1000);

        setTimeout(() => {
            newMenssage("Qual a sua nova senha?", "left");
        }, 2000);

        userMensagem.type = "password";
        btnAdd.removeEventListener("click", email);
        btnAdd.addEventListener("click", senha);
    }

};

function senha() {
    senha_aluno = userMensagem.value;
    newMenssage("*********", "right");
    userMensagem.value = ""

    setTimeout(() => {
        newMenssage("Confirme sua senha", "left");
    }, 1000);

    btnAdd.removeEventListener("click", senha);
    btnAdd.addEventListener("click", senha_confirm);
};

function senha_confirm() {
    senha_confirm_aluno = userMensagem.value
    newMenssage("*********", "right");
    
    if (senha_aluno != senha_confirm_aluno) {
        btnAdd.removeEventListener("click", senha_confirm);
        btnAdd.addEventListener("click", senha);
        userMensagem.value = ""

        setTimeout(() => {
            newMenssage("Algo deu errado...", "left");
        }, 1000);

        setTimeout(() => {
            newMenssage("As senhas não coicidem", "left");
        }, 3000);

        setTimeout(() => {
            newMenssage("Tente novamente!", "left");
        }, 4000);

        setTimeout(() => {
            newMenssage("Qual a sua nova senha?", "left");
        }, 5000);

    } else {
        userMensagem.value = "";
        btnAdd.removeEventListener("click", senha_confirm);

        setTimeout(() => {
            newMenssage("Ok, " + name2[0] + "!", "left");
        }, 1000);

        setTimeout(() => {
            newMenssage("Senha alterada com sucesso!", "left");
        }, 2000);

        setTimeout(() => {
            newMenssage("Já pode acessar a plataforma.", "left");
        }, 3000);

        setTimeout(() => {
            newMenssage("Precisar é só chamar.", "left");
        }, 4000);

    };
};


saudacao();
