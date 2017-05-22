angular.module('app.main.register', ['ngRoute','app.main.register.templates'])
    .config(function ($routeProvider) {
        'use strict';
        $routeProvider.when('/main/register/reg', {templateUrl: 'main/register/reg/register.html'});
    });
