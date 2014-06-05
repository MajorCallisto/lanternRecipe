// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider
            .state('introduction', {
                url: '/introduction',
                templateUrl: 'templates/introduction.html',
                controller: 'IntroductionCtrl'
            })

            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'
            })

            .state('registration', {
                url: '/registration',
                templateUrl: 'templates/registration.html',
                controller: 'RegistrationCtrl'
            })
            // setup an abstract state for the tabs directive
            .state('tab', {
                url: "/tab",
                abstract: true,
                templateUrl: "templates/tabs.html"
            })

            // Each tab has its own nav history stack:

            .state('tab.about', {
                url: '/about',
                views: {
                    'tab-about': {
                        templateUrl: 'templates/tab-about.html',
                        controller: 'AboutCtrl'
                    }
                }
            })

            .state('tab.ingredients', {
                url: '/ingredients',
                views: {
                    'tab-ingredients': {
                        templateUrl: 'templates/tab-ingredients.html',
                        controller: 'IngredientsCtrl'
                    }
                }
            })
            .state('tab.ingredient-detail', {
                url: '/ingredient/:ingredientId',
                views: {
                    'tab-ingredients': {
                        templateUrl: 'templates/ingredient-detail.html',
                        controller: 'IngredientDetailCtrl'
                    }
                }
            })

            .state('tab.profile', {
                url: '/profile',
                views: {
                    'tab-account': {
                        templateUrl: 'templates/tab-profile.html',
                        controller: 'ProfileCtrl'
                    }
                }
            })


        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('introduction');

    });

