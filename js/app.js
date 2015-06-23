// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

$.fn.HeaderPadrao = function () {
	
		$("#Header").html('<div id="BtnEsquerdo"><a class="button icon ion-navicon"></a></div>'+
		'<h1 class="title">Menu</h1>'+
		'<div id="BtnDireito" class="button button-icon icon ion-settings" ></div>');
	
};

$.fn.BotoesPadrao = function () {
	
	$("#Conteudo").html('<button id="BtnInventario" class="button button-full button-positive">Inventário</button>');
	
};
