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

    .controller('LoginCtrl', function ($scope, $state, StaticText, UserLogin) {
        $scope.staticText = StaticText.get($state.$current.toString());

        $scope.userLogin = UserLogin

        $scope.master = {};

        $scope.update = function (user) {
            $scope.master = angular.copy(user);
            console.log('user: ',user);
            /*
            $scope.userLogin.save(user, function(response) {
                console.log(response);
            });
            */
        };

        $scope.reset = function() {
            $scope.user = angular.copy($scope.master);
        };

        $scope.reset();
    })

    .controller('RegistrationCtrl', function ($scope, $state, StaticText, UserInfo) {
        $scope.staticText = StaticText.get($state.$current.toString());
        //$scope.userInfo = UserInfo.userInfo;

        $scope.master = {};

        /*
        $scope.$watch('user.email', function(value) {
            $scope.user.email = value
        });
        */

        $scope.update = function (user) {
            $scope.master = angular.copy(user);
            /*
            $state.go('login')
            return;
            $scope.submitted = true;
            if (isValid) {
                UserInfo.userInfo = angular.copy(user);
                $state.go('tab.about')
            }
            //window.location.href = '#/tab/about/';
            //$location.url('#/tab/about/')

            */
        };

        $scope.reset = function() {
            $scope.user = angular.copy($scope.master);
        };

        $scope.reset();

        $scope.submitForm = function (userForm) {
            $scope.submitted = true;
            console.log(userForm.$valid)
            // check to make sure the form is completely valid
            if (userForm.$valid) {
                console.log("userForm:", userForm.userName);
                console.log("UserInfo.userInfo", UserInfo.userInfo);
                console.log("angular.copy($scope.userInfo):", angular.copy($scope.userInfo))
                UserInfo.userInfo = angular.copy($scope.userInfo);

            }

        };
    })

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
    });


