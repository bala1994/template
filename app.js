var app = angular.module('test',['ngRoute']);


app.config(["$routeProvider", "$locationProvider","$httpProvider", function($routeProvider, $locationProvider,$httpProvider)
{
    $routeProvider
.
    when('/firstPage', {
        templateUrl: 'views/firstPage.html',
        controller: 'firstPageController'
    })
.
    when('/secondPage', {
        templateUrl: 'views/secondPage.html',
        controller: 'secondPageController'
         })
.

        otherwise({
            redirectTo: '/firstPage'
        });
    }]);

