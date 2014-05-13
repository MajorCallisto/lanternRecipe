angular.module('starter.controllers', [])

.controller('AboutCtrl', function($scope) {
       // rfduino.discover(5, app.onDiscoverDevice, app.onError);


})

.controller('IngredientsCtrl', function($scope, Ingredients) {
  $scope.ingredients = Ingredients.all();
})

.controller('IngredientDetailCtrl', function($scope, $stateParams, Ingredients) {
        //console.log($stateParams.ingredientId)
       // console.log(Ingredients)
       //console.log('$stateParams: ',$stateParams);
       // console.log('Ingredients: ',Ingredients);
       // console.log('ingredient: ',Ingredients.get($stateParams.ingredientId))
  $scope.ingredient = Ingredients.get($stateParams.ingredientId);
})

.controller('ProfileCtrl', function($scope) {
});
