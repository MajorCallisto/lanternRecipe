var app;
app = {
	initialize: function() {
		this.bindEvents();
	}
	,bindEvents: function() {
		
	}
	,onDeviceReady: function() {
		app.receivedEvent('deviceready');
	}
	,receivedEvent: function(id) {
		
	}
};

document.addEventListener('deviceready', app.onDeviceReady, false);

var config;
config = {};