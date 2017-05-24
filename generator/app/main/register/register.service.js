/**
 * @ngdoc service
 * @name main.signIn
 * @module app.main
 * @requiares oasp.oaspSecurityService
 * @requires spinner.globalSpinner
 *//**
angular.module('app.main')
    .factory('inscription', function (ctrl) {
       'use strict';

        return function (user) {


       ctrl.inscription = function (user) {
                                    alert("Bonjour "+user);
                                    signInSuccessCallback(user);
                                });
                }

            };

            **/
