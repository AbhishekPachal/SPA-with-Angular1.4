var app=angular.module('myApp',['ngRoute']);
app.config(function($routeProvider){
      $routeProvider
          .when('/',{
                templateUrl: 'home.html',
				controller:'mainController'
          })
          .when('/other',{
                templateUrl: 'other.html',
				controller:'otherController'
          });
});
app.controller('mainController',function($scope,$route){
    //Controller code for mainController
});
app.controller('otherController',function($scope,$route){
	//Controller code for otherController
});