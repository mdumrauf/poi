angular.module('poiApp')
  .controller("DetailsCtrl", function($scope, $stateParams, PointsService) {
    var id = $stateParams.id;
    function calculateDistance(position) {
      var point = $scope.point;
      var dLat = toRad(point.lat - position.coords.latitude);
      var dLon = toRad(point.lon - position.coords.longitude);
      var lat1Rad = toRad(position.coords.latitude);
      var lat2Rad = toRad(point.lat);

      var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1Rad) * Math.cos(lat2Rad);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      var d = 100 * c;
      $scope.$apply(function () {
        point.distance = d;
      });
    }

    function toRad(deg) {
      return deg * (Math.PI/180);
    }


    $scope.point = PointsService.getPois()[id-1];
    navigator.geolocation.getCurrentPosition(calculateDistance, function(error) {console.log(error);});
});
