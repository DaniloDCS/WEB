angular
    .module("classroom", ['ngRoute'])
    .config(function ($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'templates/login.html' 
            })
            .when('/turmas', {
                templateUrl: 'templates/turmas.html'
            })
            .when('/turma/:id', {
                templateUrl: 'templates/turma.html',
                controller: "classCtrl"
            })
    })
    .controller("classCtrl", function ($scope, $routeParams) {
        $scope.turmas = [
            { descricao: "Programação WEB", professor: "Danilo Costa Santos", img: "../dev_fullstack.jpg", tema: "https://www.gstatic.com/classroom/themes/USHistory.jpg" },
            { descricao: "Banco de Dados", professor: "Danilo Costa Santos", img: "../dev_fullstack.jpg", tema: "https://www.gstatic.com/classroom/themes/img_graduation.jpg" },
            { descricao: "Introdução à Python", professor: "Danilo Costa Santos", img: "../dev_fullstack.jpg", tema: "https://www.gstatic.com/classroom/themes/img_code.jpg" },
            { descricao: "Lógica de Programação I", professor: "Danilo Costa Santos", img: "../dev_fullstack.jpg", tema: "https://www.gstatic.com/classroom/themes/img_reachout.jpg" },
            { descricao: "Lógica de Programação II", professor: "Danilo Costa Santos", img: "../dev_fullstack.jpg", tema: "https://www.gstatic.com/classroom/themes/img_breakfast.jpg" },
            { descricao: "Estrutura de Dados", professor: "Danilo Costa Santos", img: "../dev_fullstack.jpg", tema: "https://www.gstatic.com/classroom/themes/img_backtoschool.jpg" },
            { descricao: "Sistemas Operacionais", professor: "Danilo Costa Santos", img: "../dev_fullstack.jpg", tema: "https://www.gstatic.com/classroom/themes/img_videogaming.jpg" },
            { descricao: "Informática Básica", professor: "Danilo Costa Santos", img: "../dev_fullstack.jpg", tema: "https://www.gstatic.com/classroom/themes/img_reachout.jpg" },
            { descricao: "Matemática I", professor: "Danilo Costa Santos", img: "../dev_fullstack.jpg", tema: "https://www.gstatic.com/classroom/themes/img_code.jpg" },
            { descricao: "Língua Portuguesa I", professor: "Danilo Costa Santos", img: "../dev_fullstack.jpg", tema: "https://www.gstatic.com/classroom/themes/USHistory.jpg" },
            { descricao: "Inglês I", professor: "Danilo Costa Santos", img: "../dev_fullstack.jpg", tema: "https://www.gstatic.com/classroom/themes/img_backtoschool.jpg" }
        ]

        $scope.turma = $scope.turmas[$routeParams.id];

        $scope.viewMural = false;
        $scope.viewAtividades = true;
        $scope.viewPessoas = true;
        $scope.btnSelect1 = "btnSelect";
        $scope.viewBox = true;

    })
