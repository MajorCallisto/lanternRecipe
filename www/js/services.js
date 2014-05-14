angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Ingredients', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var ingredients = [
        { id: "morel", name:"Morels", image:"img/Morchella.jpg", description:"Morchella, the true morels, is a genus of edible mushrooms closely related to anatomically simpler cup fungi. These distinctive mushrooms appear honeycomb-like in that the upper portion is composed of a network of ridges with pits between them. The ascocarps are prized by gourmet cooks, particularly for French cuisine. Commercial value aside, morels are hunted by thousands of people every year simply for their taste and the joy of the hunt."},
        { id: "asparagus", name:"Wild Asparagus", image:"img/asparagus-spear.jpg", description:"Asparagus officinalis is a spring vegetable, a flowering perennial[1] plant species in the genus Asparagus. It was once classified in the lily family, like its Allium cousins, onions and garlic, but the Liliaceae have been split and the onion-like plants are now in the family Amaryllidaceae and asparagus in the Asparagaceae. Asparagus officinalis is native to most of Europe, northern Africa and western Asia, and is widely cultivated as a vegetable crop."},
        { id: "garlic", name:"Wild Garlic", image:"img/Allium_canadense.jpg", description:"Wild onion (Allium canadense), also known as Canada onion, wild garlic, meadow garlic, and Canadian garlic,[3] is a perennial plant native to eastern North America from Texas to Florida to New Brunswick to Montana. The species is also cultivated in other regions as an ornamental and as a garden culinary herb.[4] The plant is also reportedly naturalized in Cuba."},
        { id: "redfife", name:"Red Fife Wheat", image:"img/red-fife-1.jpg", description:"Red Fife is a cultivar of bread wheat that originated in Peterborough, Ontario in 1842. It is believed to have crossed several continents and the Atlantic before arriving in Canada, where it gained a foothold on the land of David Fife, from which it is named."},
        { id: "fiddleheads", name:"Fiddlehead Greens", image:"img/fiddlehead.jpg", description:"Fiddlehead greens are the furled fronds of a young fern,[1] harvested for use as a vegetable. Left on the plant, each fiddlehead would unroll into a new frond (circinate vernation)"}
    ];

    return {
        all: function() {
            return ingredients;
        },
        get: function(ingredientId) {
            // Simple index lookup
            for(var i = 0; i < ingredients.length; i++){
                if(ingredients[i].id == ingredientId) return ingredients[i];
            }
        }
    }
})
//Static Text
.factory('StaticText', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var staticText = {
        introduction: {
            title: 'Recipe Lantern Introduction',
            h1: 'Introduction',
            p1: 'Please sign in to start foraging!',
            button1: 'Next',
            placeholder: 'User Name',
            submit: 'Submit'
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
            submit: 'Submit'
        }



    };

    return {
        all: function() {
            return staticText;
        },
        get: function(id) {
            if(!id) return 'undefined';
            return staticText[id];
        }
    }
})
//Static Text
.factory('UserInfo', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var userInfo = {
        userName: '',
        userId: ''
    };

    return {
        all: function() {
            return userInfo;
        },
        get: function(id) {
            if(!id) return 'undefined';
            return userInfo[id];
        },
        set: function(obj){
            for (var attrname in obj) {
                userInfo[attrname] = obj[attrname];
            }
        }
    }
});