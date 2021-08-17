var apagar = document.getElementById("apagar");
apagar.addEventListener("click", () => {
    del(this);
});

var text_resultado = document.getElementById("resultado");

val = (v) => {
    if (v.id == '+' || v.id == '-' || v.id == '/' || v.id == '*'){
        oper = text_resultado.value.indexOf(v.id);
        if (oper == -1){
            text_resultado.value += v.id;
        }
    }else{
        text_resultado.value += v.id;
    };
};

del = (v) => {
    let tam = text_resultado.value.length - 1;
    text_resultado.value = text_resultado.value.substr(0, tam);
};

resultado = () => {
    let valores = text_resultado.value
    let tam = valores.length;
    let sum = valores.indexOf('+');
    let sub = valores.indexOf('-');
    let div = valores.indexOf('/');
    let mul = valores.indexOf('*');
    
    if (sum != -1) {
        let op1 = parseFloat(valores.substr(0, sum), 10);
        let op2 = parseFloat(valores.substr(sum + 1, tam), 10);
        text_resultado.value = (op1 + op2);
    };
    if (sub != -1) {
        let op1 = parseFloat(valores.substr(0, sub), 10);
        let op2 = parseFloat(valores.substr(sub + 1, sub), 10);
        text_resultado.value = (op1 - op2);
    };
    if (div != -1) {
        let op1 = parseFloat(valores.substr(0, div), 10);
        let op2 = parseFloat(valores.substr(div + 1, div), 10);
        text_resultado.value = (op1 / op2); 
    };
    if (mul != -1) {
        let op1 = parseFloat(valores.substr(0, mul), 10);
        let op2 = parseFloat(valores.substr(mul + 1, mul), 10);
        text_resultado.value = (op1 * op2);
    };
    
};