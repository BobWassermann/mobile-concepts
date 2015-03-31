"use strict";angular.module("mobileConceptsApp",["ngAnimate","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/quest-bever",{templateUrl:"views/quest-bever.html",controller:"QuestBeverCtrl"}).when("/quest-worm",{templateUrl:"views/quest-worm.html",controller:"QuestWormCtrl"}).when("/quest-tak",{templateUrl:"views/quest-tak.html",controller:"QuestTakCtrl"}).when("/quest-bloem",{templateUrl:"views/quest-bloem.html",controller:"QuestBloemCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("mobileConceptsApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),document.addEventListener("touchmove",function(a){a.preventDefault()},!1),angular.module("mobileConceptsApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("mobileConceptsApp").controller("QuestBeverCtrl",["$scope",function(a){a.messages=["Hoi, ik ben Bob de Bolle Bever. Ik speelde verstoppertje met mijn vriendjes, maar ze zijn er vandoor. Kunnen jullie mij helpen mijn vriendjes terug te vinden?","AngularJS","Karma"]}]).directive("tekstBallon",function(){return{restrict:"A",scope:!0,template:'<ng-include src="getTemplateUrl()" />',controller:["$scope",function(a){a.clicked=0,a.click=function(){a.clicked++},a.getTemplateUrl=function(){return a.clicked<=a.messages.length-1?"/templates/bever-tekstballon.tpl.html":void 0}}]}}),angular.module("mobileConceptsApp").controller("QuestWormCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("mobileConceptsApp").controller("QuestTakCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("mobileConceptsApp").controller("QuestBloemCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("mobileConceptsApp").factory("cordova",function(){var a=42;return{someMethod:function(){return a}}});