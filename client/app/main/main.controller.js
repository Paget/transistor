'use strict';

angular.module('transistorApp')
  .controller('MainCtrl', function ($scope, $http, socket) {
    $scope.awesomeThings = [];

    $scope.stations = {};

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;

      socket.syncUpdates('thing', $scope.awesomeThings);
    });

   $scope.tuned = function() {
     console.log($scope.stations.selected);
   }




    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
  });
