angular
    .module('app', [])
    .controller('appCtrl', function ($scope) {

        $scope.inicio = false;
        $scope.detalhesFatura = true;
        $scope.pagamentos = true;
        $scope.btnEye = false;
        $scope.viewSaldo = false;
        $scope.dados = true; 
        $scope.pagarFatura = true;
        $scope.fimPagamento = true; 
        $scope.senha = true;

        
        $scope.faturaAtual = 0.0;

        $scope.compras = [
            { "estabelecimento": "Mercadinho", "classificacao": "Super Mercado", "data": "Ontem", "valor": "190,31" },
            { "estabelecimento": "Lojinha", "classificacao": "Lazer", "data": "Ontem", "valor": "22,00" },
            { "estabelecimento": "Google Games", "classificacao": "Eletrônicos", "data": "Ontem", "valor": "1,99" },
            { "estabelecimento": "Google Books", "classificacao": "Educação", "data": "Ontem", "valor": "9,99" },
            { "estabelecimento": "Ifood", "classificacao": "Serviços", "data": "Ontem", "valor": "39,00" },
            { "estabelecimento": "Shopping", "classificacao": "Casa", "data": "Ontem", "valor": "87,76" },
            { "estabelecimento": "Nu Pagamentos S.A.", "classificacao": "Recarga", "data": "Ontem", "valor": "10,00" },
        ]
        
        for (let c in $scope.compras) {
            val = $scope.compras[c].valor.replace(",",".")
            $scope.faturaAtual += parseFloat(val)
        }

        $scope.user = "Danilo";
        $scope.limiteTotal = 450;
        $scope.poupanca = 107.43;
        $scope.limiteDisponel = ($scope.limiteTotal - $scope.faturaAtual).toFixed(2);

        $scope.pagar = function(valor) {
            $scope.faturaAtual = $scope.faturaAtual - parseFloat(valor);
            $scope.limiteDisponel = ($scope.limiteTotal - $scope.faturaAtual).toFixed(2);
            $scope.poupanca = ($scope.poupanca - parseFloat(valor)).toFixed(2);
            $scope.compras.splice(0, 0, { "estabelecimento": "Nu Pagamentos S.A.", "classificacao": "Serviços", "data": "Agora", "valor": valor })
            console.log($scope.compras)
        }
    })


function pular(e){
    ele = e.id.toString();
    ele = parseInt(ele[3], 10) + 1
    document.getElementById("ipt" + ele).focus()
}