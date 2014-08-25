angular.module('oasp.main').factory('securityRestService', function ($http, currentContextPath) {
    'use strict';

    var servicePath = currentContextPath.get() + 'services/rest';

    return {
        getCurrentUser: function () {
            return $http.get(servicePath + '/security/currentUser');
        },
        login: function (credentials) {
            return $http.post(servicePath + '/login', credentials);
        },
        logout: function () {
            return $http.get(servicePath + '/logout');
        }
    };
});