'use strict';
/* Controllers */
var ingredient_list = {};
ingredient_list.morel = {"id":"morel", "name":"Morels", "image":"images/Morchella.jpg", "description":"Morchella, the true morels, is a genus of edible mushrooms closely related to anatomically simpler cup fungi. These distinctive mushrooms appear honeycomb-like in that the upper portion is composed of a network of ridges with pits between them. The ascocarps are prized by gourmet cooks, particularly for French cuisine. Commercial value aside, morels are hunted by thousands of people every year simply for their taste and the joy of the hunt."};
ingredient_list.asparagus = {"id":"asparagus", "name":"Wild Asparagus", "image":"images/asparagus-spear.jpg", "description":"Asparagus officinalis is a spring vegetable, a flowering perennial[1] plant species in the genus Asparagus. It was once classified in the lily family, like its Allium cousins, onions and garlic, but the Liliaceae have been split and the onion-like plants are now in the family Amaryllidaceae and asparagus in the Asparagaceae. Asparagus officinalis is native to most of Europe, northern Africa and western Asia, and is widely cultivated as a vegetable crop."};
ingredient_list.garlic = {"id": "garlic", "name":"Wild Garlic", "image":"images/Allium_canadense.jpg", "description":"Wild onion (Allium canadense), also known as Canada onion, wild garlic, meadow garlic, and Canadian garlic,[3] is a perennial plant native to eastern North America from Texas to Florida to New Brunswick to Montana. The species is also cultivated in other regions as an ornamental and as a garden culinary herb.[4] The plant is also reportedly naturalized in Cuba."};
ingredient_list.redfife = {"id":"redfife", "name":"Red Fife Wheat", "image":"images/red-fife-1.jpg", "description":"Red Fife is a cultivar of bread wheat that originated in Peterborough, Ontario in 1842. It is believed to have crossed several continents and the Atlantic before arriving in Canada, where it gained a foothold on the land of David Fife, from which it is named."};
ingredient_list.fiddleheads = {"id":"fiddleheads", "name":"Fiddlehead Greens", "image":"images/fiddlehead.jpg", "description":"Fiddlehead greens are the furled fronds of a young fern,[1] harvested for use as a vegetable. Left on the plant, each fiddlehead would unroll into a new frond (circinate vernation)"};

var arrayBufferToInt = function (ab) {
    var a = new Uint8Array(ab);
    return a[0];
};

lanternRecipeApp.controller('LanternRecipeCtrl', ['$scope', '$rootScope', '$http', '$routeParams', '$location',
  function ($scope, $rootScope, $http, $routeParams, $location) {
      console.log('sldkfjsdlkfj');
      /*
      rfduino.discover(5, onDiscoverDevice, onError);

      var onDiscoverDevice = function(obj){
          alert('dicovered device!');
      };

      var onError = function(error){
          alert('onError: ',error);
      }
      */
      //console.log(rfduino);
	  $scope.ingredientId = $routeParams.ingredientId;
	  $scope.ingredientList = ingredient_list;
	  if ($scope.ingredientId){
	  	console.log("here");
		for (var i in $scope.ingredientList){
			console.log($scope.ingredientList[i]);
			if ($scope.ingredientList[i].id == $scope.ingredientId){
				$scope.ingredient = $scope.ingredientList[i];	
			}
		}
	  }
	$scope.$on('$viewContentLoaded', function(event) {

	});

  }]);