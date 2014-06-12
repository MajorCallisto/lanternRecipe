angular.module('starter.controllers', [])

    .controller('IntroductionCtrl', ['$scope', '$state', 'StaticText', 'GamesFactory', '$http', function ($scope, $state, StaticText, GamesFactory, $http) {

        var staticText = StaticText.get($state.$current.toString());
        $scope.staticText = staticText;
        $scope.welcomeMsg = staticText.gettingYourGame;
        $scope.connectionError = false;

        GamesFactory.game.get().then(
            function (game) {
                console.log('game: ', game);
                $scope.name = game.name;
                $scope.gameReady = true;
                $scope.welcomeMsg = staticText.welcomeMsg;
            },
            function (error) {
                $scope.connectionError = true;
                $scope.welcomeMsg = staticText.connectionErrorMsg;
                // If something goes wrong with a JSONP request in AngularJS,
                // the status code is always reported as a "0". As such, it's
                // a bit of black-box, programmatically speaking.
                console.log("error: ", error);

            }
        );

        $scope.playGame = function () {
            $state.go('login')
        };

        $scope.refreshPage = function () {

        };

    }])

    .controller('LoginCtrl', ['$scope', '$state', 'StaticText', '$http',function ($scope, $state, StaticText, $http) {

        $scope.staticText = StaticText.get($state.$current.toString());
        $scope.master = {};
        $scope.submitted = false;
        $scope.invalidCredentials = false;

        $scope.submitForm = function (valid) {
            console.log('$scope.update');
            console.log('valid: ',valid);
            $scope.submitted = true;

            if(!valid) return;

            $scope.master = angular.copy($scope.user);

            $http.post("http://cttoronto.cloudapp.net/api/players/login", $scope.master).success(function(data) {
                console.log(data);
                if(data.result.error){
                    $scope.invalidCredentials = true;
                }else{
                    $scope.invalidCredentials = false;
                    $state.go('tab.about');
                }
            }).error(function() {
                console.log("error");
            });

        };

        $scope.reset = function() {
            $scope.user = angular.copy($scope.master);
            $scope.submitted = false;
            $scope.invalidCredentials = false;
        };

        $scope.reset();
    }])

    .controller('RegistrationCtrl', ['$scope', '$state', 'StaticText', '$http', function ($scope, $state, StaticText, $http) {

        $scope.staticText = StaticText.get($state.$current.toString());
        $scope.master = {};
        $scope.submitted = false;
        $scope.invalidCredentials = false;

        $scope.submitForm = function (valid) {
            console.log('$scope.update');
            console.log('valid: ',valid);
            $scope.submitted = true;

            if(!valid) return;

            $scope.master = angular.copy($scope.user);

            $http.post("http://cttoronto.cloudapp.net/api/players/register", $scope.master).success(function(data) {
                console.log(data);
                if(data.result.error){
                    $scope.invalidCredentials = true;
                }else{
                    $scope.invalidCredentials = false;
                    $state.go('tab.about');
                }
            }).error(function() {
                console.log("error");
            });

        };

        $scope.reset = function() {
            $scope.user = angular.copy($scope.master);
            $scope.submitted = false;
            $scope.invalidCredentials = false;
        };

        $scope.reset();

    }])

    .controller('AboutCtrl', function ($scope, $state, StaticText) {
        $scope.staticText = StaticText.get('about');
        console.log($scope.staticText.ol1);
        // rfduino.discover(5, app.onDiscoverDevice, app.onError);
        console.log($state);

    })

    .controller('IngredientsCtrl', function ($scope, $state, Ingredients, StaticText) {
        $scope.staticText = StaticText.get('ingredients');
        $scope.ingredients = Ingredients.all();
        console.log($state);
    })

    .controller('IngredientDetailCtrl', function ($scope, $stateParams, $state, Ingredients, StaticText) {
        $scope.staticText = StaticText.get($state.$current.toString());
        $scope.ingredient = Ingredients.get($stateParams.ingredientId);
        console.log($state);
    })

    .controller('ProfileCtrl', function ($scope, $state, StaticText, UserInfo) {
        $scope.staticText = StaticText.get('profile');
        $scope.userInfo = UserInfo.userInfo;
        //$scope.userInfo = UserInfo.all();
        $scope.submit = function () {
            $state.go('tab.about');
            //console.log()
            //alert('submit')
            //window.location.href = '#/tab/about/';
            //$location.url('#/tab/about/')
        }
        console.log($state);
    })

    .controller('DebugCtrl', function ($scope, $stateParams, $state, StaticText) {
        $scope.staticText = StaticText.get($state.$current.toString());

        console.log($state);
    });


