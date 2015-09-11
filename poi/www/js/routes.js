angular.module('poiApp')
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('master', {
      url: "/",
      templateUrl: 'templates/points.html',
      controller: 'PointsCtrl'
    })
    .state('details', {
      url: "/details/:id",
      templateUrl: 'templates/point.html',
      controller: 'DetailsCtrl'
    });
  });
