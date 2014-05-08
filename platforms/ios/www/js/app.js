'use strict';
/* App Module */
var lanternRecipeApp = angular.module('lanternRecipeApp', [
  'ngRoute',
  'lanternRecipeApp',
  'ngSanitize'
]);

window.debug = false;

document.addEventListener("deviceready", function(){
}, false);

Element.prototype.hasClass = function (className) {
    return new RegExp(' ' + className + ' ').test(' ' + this.className + ' ');
};
Element.prototype.addClass = function (className) {
	if (!this.hasClass(className)) { this.className += ' ' + className; }
};
Element.prototype.removeClass = function (className) {
	var newClass = ' ' + this.className.replace(/[\t\r\n]/g, ' ') + ' ';
	if (this.hasClass(className)) {
		while (newClass.indexOf( ' ' + className + ' ') >= 0) {
			newClass = newClass.replace(' ' + className + ' ', ' ');
		}
		this.className = newClass.replace(/^\s+|\s+$/g, ' ');
	}
};
function loading($val){
	if ($val == false){
		//document.getElementById("loading").addClass("hidden");	
	}else{
		//document.getElementById("loading").removeClass("hidden");	
	}
}

lanternRecipeApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
		when('/start', {
			templateUrl: 'partials/start.html',
			controller: 'LanternRecipeCtrl'
		}).
		when('/ingredients/:ingredientId', {
			templateUrl: 'partials/ingredients/ingredient.html',
			controller: 'LanternRecipeCtrl'
		}).
		when('/lantern/:ingredientId', {
			templateUrl: 'partials/lantern/lantern.html',
			controller: 'LanternRecipeCtrl'
		}).
		otherwise({
			redirectTo: '/start'
		});
  }]);
