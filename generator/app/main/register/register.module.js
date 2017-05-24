angular.module('app.main.register', ['ngRoute', 'app.main.register.templates'])
    .config(function ($routeProvider) {
        'use strict';
        $routeProvider.when('/main/register', {templateUrl: 'main/register/register.html'});
    });
