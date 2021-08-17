angular
    .module("app", [])
    .controller("appCtrl", function ($scope) {
        $scope.userLoged = "dev_fullstack_";
        $scope.userLogedImg = "me.jpg";
        $scope.app = "Instagram";
        $scope.commentsP = "";
        $scope.quantify = 1;

        $scope.viewComments = true;
        $scope.myDirects = true;
        $scope.publish = false; 
        $scope.viewStory = true; 

        $scope.friends = [
            { "user": "__daniillo__", "userImg": "user.png", "ultima": "Online agora" },
            { "user": "joaozinho", "userImg": "user.png", "ultima": "Online ontem" },
            { "user": "mariaa", "userImg": "user2.png", "ultima": "Online há 1h" },
            { "user": "_marcus", "userImg": "user.png", "ultima": "Online há 5 min" },
            { "user": "david", "userImg": "user.png", "ultima": "Online ontem" },
            { "user": "nathalliaa", "userImg": "user2.png", "ultima": "Online há dois dias" },
            { "user": "tiagoh", "userImg": "user.png", "ultima": "Online agora" },
            { "user": "thalitta", "userImg": "user2.png", "ultima": "Online agora" }
        ]

        $scope.posts = {
            "posts": {
                "post1": {
                    "user": "dev_fullstack",
                    "userImg": "me.jpg",
                    "img": "me.jpg",
                    "data": "2020/09/24 22:00:00",
                    "curtidas": 20,
                    "comentarios": {
                        "comment1": {
                            "user": "__daniillo__",
                            "userImg": "user.png",
                            "com": "Muito bom", 
                            "data": "1 dia"
                        }
                    }
                },
                "post2": {
                    "user": "__daniillo__",
                    "userImg": "user.png",
                    "img": "user.png",
                    "data": "2020/09/24 14:30:00",
                    "curtidas": 20,
                    "comentarios": {
                        "comment1": {
                            "user": "__daniillo__",
                            "userImg": "user.png",
                            "com": "Muito bom",
                            "data": "1 dia"
                        },
                        "comment2": {
                            "user": "dev_fullstack",
                            "userImg": "me.jpg",
                            "com": "Isso ae",
                            "data": "1 dia"
                        } 
                    }
                },
                "post3":{
                    "user": "mariaa",
                    "userImg": "user2.png",
                    "img": "user2.png",
                    "data": "2020/09/24 14:30:00",
                    "curtidas": 20,
                    "comentarios": {
                        "comment1": {
                            "user": "__daniillo__",
                            "userImg": "user.png",
                            "com": "Muito bom",
                            "data": "1 dia"
                        },
                        "comment2": {
                            "user": "joaozinho",
                            "userImg": "user.png",
                            "com": "Muito bom",
                            "data": "1 dia"
                        }
                    }
                },
                "post4": {
                    "user": "_marcus",
                    "userImg": "user.png",
                    "img": "user.png",
                    "data": "2020/09/24 14:30:00",
                    "curtidas": 20,
                    "comentarios": {
                        
                    }
                },
                "post5": {
                    "user": "joaozinho",
                    "userImg": "user.png",
                    "img": "code.jpg",
                    "data": "2020/09/24 14:30:00",
                    "curtidas": 20,
                    "comentarios": {

                    }
                }
            }
        }

        $scope.directs = [
            { "userName": "dev_fullstack", "user": "Danilo", "userImg": "user.png", "ultima": "Online agora" },
            { "userName": "dev_fullstack", "user": "Maria", "userImg": "user2.png", "ultima": "Online há 2h" },
            { "userName": "dev_fullstack", "user": "João", "userImg": "user.png", "ultima": "Online há 1h" },
            { "userName": "dev_fullstack", "user": "Marcos", "userImg": "user.png", "ultima": "Online ontem" }
        ]

        $scope.storys = [
            { "userName": "Seu story", "userImg":"me.jpg", "story": {"img": "me.jpg", "horas": "1h"}},
            { "userName": "joaozinho", "userImg": "user.png", "story": {"img": "code.jpg", "horas": "1h"}},
            { "userName": "mariaa","userImg": "user2.png", "story": {"img": "user2.png", "horas": "1h"}},
            { "userName": "_marcus", "userImg": "user.png", "story": {"img": "user.png", "horas": "1h"}},
            { "userName": "david", "userImg": "user.png", "story": {"img": "user.png", "horas": "1h"}},
            { "userName": "nathalliaa", "userImg": "user2.png", "story": {"img": "user2.png", "horas": "1h"}},
            { "userName": "tiagoh", "userImg": "user.png", "story": { "img": "user.png", "horas": "1h" } },
            { "userName": "thalitta", "userImg": "user2.png", "story": { "img": "user2.png", "horas": "1h" } }
        ]

        $scope.likePhoto = function (e) {
            $scope.id = "img" + e;
            $scope.likeing = "like" + e;
            document.getElementById($scope.id).className = "fas fa-heart like";
            document.getElementById($scope.likeing).style = "display: flex";
            
            $scope.inter = setTimeout(() => {
                document.getElementById($scope.likeing).style = "display: none"; 
            }, 700);

        }

        $scope.savePhoto = function (e) {
            $scope.mark = "mark" + e;
            document.getElementById($scope.mark).className = "fas fa-bookmark float-right";
        }
        
        $scope.listCommentsP = function (e) {
            $scope.commentsP = e + 1;
            $scope.viewComments = false;
            $scope.publish = true;
        }

        $scope.addIcon = function(icon) {
            $scope.antigo = document.getElementById("inputComentario").value;
            document.getElementById("inputComentario").innerHTML = $scope.antigo + "&#" + icon + ";";
        }

        $scope.publishComennt = function(post, comentario) {
            $scope.qtdComentarios = "comment" + (Object.keys($scope.posts.posts['post' + post].comentarios).length + 1);
            $scope.posts.posts['post' + post].comentarios[$scope.qtdComentarios] = {'user' : $scope.userLoged, 'userImg' : $scope.userLogedImg, 'com' : comentario , 'data': 'agora'}
        }

        $scope.storysVisualizar = function(s) {
            $scope.publish = true;
            $scope.viewStory = false; 
            $scope.dadosStory = $scope.storys[(s)];
            $scope.dadosStory['index'] = s;
            console.log($scope.dadosStory) 
        }
    })