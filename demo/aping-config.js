"use strict";
angular.module('jtt_aping').config(['$provide', function ($provide) {
    $provide.value("apingDefaultSettings", {
        apingApiKeys : {
            'footballdata': [
                //{'api_key':'<YOUR_API_KEY>'},
                {'api_key':'e42cb6a6ecc949c8897e06d284a55e05'},
            ],
            //...
        }
    });
}]);