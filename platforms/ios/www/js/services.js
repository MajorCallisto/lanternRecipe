angular.module('starter.services', ['ngResource'])

    .factory('GamesFactory', ['$resource', '$q', function ($resource, $q) {


        return  {
            games: {
                _meta: null,
                data:null,
                get: function(){
                    var deferred = $q.defer();
                    var that = this;
                    var url = 'http://cttoronto.cloudapp.net/api/games';
                    var date = new Date();
                    var currentDate = date.getTime();
                    var timeElapsed;
                    var games = this.data;
                    var _meta = this._meta;

                    if(games){
                        timeElapsed = currentDate - _meta.datetime;
                    }

                    if(!games){
                        console.log('no games in memory, check local storage.');
                        var storage = angular.fromJson(window.localStorage['games']);
                        if(storage){
                            games = angular.fromJson(storage).result;
                            _meta =  angular.fromJson(storage)._meta;
                            console.log(_meta)
                            timeElapsed = currentDate - _meta.datetime;
                        }
                    };

                    timeElapsed = 86400000;

                    if(!games || (games && timeElapsed > 86400000)){
                        console.log('no games in local storage OR time has elapsed, request games from the server.');
                        $resource(url, {callback: "JSON_CALLBACK"}, {
                            query: {method: 'JSONP', params: {}, isArray: false}
                        }).query({}, angular.noop, function (response) {
                            if (response.status == 0) deferred.reject('404 (Not Found)');
                        }).$promise.then(function (data) {
                                if (!data.result.length) {
                                    deferred.reject('there are no games available')
                                }
                                window.localStorage['games'] = angular.toJson(data);

                                that._meta = angular.fromJson(data)._meta;
                                that.data = angular.fromJson(data).result;
                                deferred.resolve(that.data);
                            });
                    }else if(games){
                        //console.log('games: ',angular.fromJson(data));
                        this._meta = _meta;
                        this.data = games;

                        deferred.resolve(this.data);
                    }else{
                        deferred.reject('there are no games available');
                    }

                    return deferred.promise;

                },
                join: function(gameId){

                }

            },
            game: {
                data: null,
                _meta: null,
                get: function(gameId){
                    var deferred = $q.defer();
                    var that = this;
                    var url = 'http://cttoronto.cloudapp.net/api/games/' + ( gameId || '' );
                    var date = new Date();
                    var currentDate = date.getTime();
                    var timeElapsed;
                    var game = this.data;
                    var _meta = this._meta;

                    if(game){
                        timeElapsed = currentDate - _meta.datetime;
                    }

                    if(!game){
                        console.log('no game in memory, check local storage.');
                        var storage = angular.fromJson(window.localStorage['game']);
                        if(storage){
                            game = angular.fromJson(storage).result[0];
                            _meta =  angular.fromJson(storage)._meta;
                            timeElapsed = currentDate - _meta.datetime;
                        }
                    };

                    timeElapsed = 86400001;

                    if(!game || (game && timeElapsed > 86400000)){
                        console.log('no game in local storage OR time has elapsed, request game from the server.');
                        $resource(url, {callback: "JSON_CALLBACK"}, {
                            query: {method: 'JSONP', params: {}, isArray: false}
                        }).query({}, angular.noop, function (response) {
                            if (response.status == 0) deferred.reject('404 (Not Found)');
                        }).$promise.then(function (data) {
                                if (!data.result.length) {
                                    deferred.reject('there are no games available')
                                }
                                window.localStorage['game'] = angular.toJson(data);
                                that._meta = angular.fromJson(data)._meta;
                                that.data = angular.fromJson(data).result[0]
                                deferred.resolve(that.data);
                            });
                    }else if(game){
                        //console.log('games: ',angular.fromJson(data));
                        this._meta = _meta;
                        this.data = game;
                        deferred.resolve(this.data);
                    }else{
                        deferred.reject('your game is not available');
                    }

                    return deferred.promise;
                },
                set: function(gameId){

                }

            }
        }
        /*
         return $resource('http://cttoronto.cloudapp.net/api/games/:gameId', {callback: "JSON_CALLBACK"}, {
         query: {method:'JSONP', params:{gameId:''}, isArray:false}
         });
         */
    }])

    .factory('UserLogin', ['$resource', function ($resource) {
        return $resource('http://cttoronto.cloudapp.net/api/players/login');
    }])

    .factory('Ingredients', function () {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var ingredients = [
            { id: "morel", name: "Morels", image: "img/Morchella.jpg", description: "Morchella, the true morels, is a genus of edible mushrooms closely related to anatomically simpler cup fungi. These distinctive mushrooms appear honeycomb-like in that the upper portion is composed of a network of ridges with pits between them. The ascocarps are prized by gourmet cooks, particularly for French cuisine. Commercial value aside, morels are hunted by thousands of people every year simply for their taste and the joy of the hunt."},
            { id: "asparagus", name: "Wild Asparagus", image: "img/asparagus-spear.jpg", description: "Asparagus officinalis is a spring vegetable, a flowering perennial[1] plant species in the genus Asparagus. It was once classified in the lily family, like its Allium cousins, onions and garlic, but the Liliaceae have been split and the onion-like plants are now in the family Amaryllidaceae and asparagus in the Asparagaceae. Asparagus officinalis is native to most of Europe, northern Africa and western Asia, and is widely cultivated as a vegetable crop."},
            { id: "garlic", name: "Wild Garlic", image: "img/Allium_canadense.jpg", description: "Wild onion (Allium canadense), also known as Canada onion, wild garlic, meadow garlic, and Canadian garlic,[3] is a perennial plant native to eastern North America from Texas to Florida to New Brunswick to Montana. The species is also cultivated in other regions as an ornamental and as a garden culinary herb.[4] The plant is also reportedly naturalized in Cuba."},
            { id: "redfife", name: "Red Fife Wheat", image: "img/red-fife-1.jpg", description: "Red Fife is a cultivar of bread wheat that originated in Peterborough, Ontario in 1842. It is believed to have crossed several continents and the Atlantic before arriving in Canada, where it gained a foothold on the land of David Fife, from which it is named."},
            { id: "fiddleheads", name: "Fiddlehead Greens", image: "img/fiddlehead.jpg", description: "Fiddlehead greens are the furled fronds of a young fern,[1] harvested for use as a vegetable. Left on the plant, each fiddlehead would unroll into a new frond (circinate vernation)"}
        ];

        return {
            all: function () {
                return ingredients;
            },
            get: function (ingredientId) {
                // Simple index lookup
                for (var i = 0; i < ingredients.length; i++) {
                    if (ingredients[i].id == ingredientId) return ingredients[i];
                }
            }
        }
    })
//Static Text
    .factory('StaticText', function () {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var staticText = {
            introduction: {
                h1: 'Introduction',
                welcomeMsg: 'Lantern Resipe is Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                button1: 'Next',
                placeholder: 'User Name',
                connectionErrorMsg: 'There was a problem getting your game.',
                gettingYourGame: 'Getting your game.'
            },
            registration: {
                h1: 'Registration',
                p1: 'Please register to play Lantern Recipe.'
            },
            about: {
                title: 'About',
                h1: 'About',
                ol1: [
                    { step: 'Do step one.' },
                    { step: 'Do step two.' },
                    { step: 'Do step three.' },
                    { step: 'Do step four.' }
                ],
                p1: 'Game description and instructions.'
            },
            profile: {
                placeholder: 'User Name',
                submit: 'Submit'
            },
            defaults: {
                title: 'Food Lantern',
                submit: 'Submit',
                refresh: 'Refresh',
                play: 'Play',
                tryAgain: 'Try Again',
                userName: 'User Name',
                password: 'Password',
                registration: 'Restistration',
                login: 'Login',
                getStarted: 'Get Started',
                notAMember: 'Not a Member?',
                firstName: 'First Name',
                lastName: 'Last Name',
                email: 'Email',
                password: 'Password',
                alreadyAMember: 'Already a Member?'
            }



        };

        return {
            all: function () {
                return staticText;
            },
            get: function (id) {
                if (!id) return staticText['defaults'];
                return $.extend(true, staticText['defaults'], staticText[id]);
            }
        }
    })
//Static Text
    .factory('UserInfo', function () {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var userInfo = {
            userName: '',
            userId: ''
        };

        return {
            all: function () {
                return userInfo;
            },
            get: function (id) {
                if (!id) return 'undefined';
                return userInfo[id];
            },
            set: function (obj) {
                for (var attrname in obj) {
                    userInfo[attrname] = obj[attrname];
                }
            }
        }
    });