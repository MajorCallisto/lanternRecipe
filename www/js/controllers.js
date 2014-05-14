angular.module('starter.controllers', [])

    .controller('IntroductionCtrl', function ($scope, $state, StaticText, UserInfo) {
        $scope.staticText = StaticText.get($state.$current.toString());
        $scope.userInfo = UserInfo.userInfo;
       // console.log($scope.userInfo);
        $scope.update = function (user, isValid) {
            $scope.submitted = true;
            if (isValid) {
                UserInfo.userInfo = angular.copy(user);
                $state.go('tab.about')
            }
            //window.location.href = '#/tab/about/';
            //$location.url('#/tab/about/')
        }

        $scope.submitForm = function(userForm) {
            $scope.submitted = true;
            console.log(userForm.$valid)
            // check to make sure the form is completely valid
            if (userForm.$valid) {
                console.log("userForm:",userForm.userName);
                console.log("UserInfo.userInfo",UserInfo.userInfo);
                console.log("angular.copy($scope.userInfo):",angular.copy($scope.userInfo))
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


