'use strict';

angular.module('transistorApp')
  .controller('MainCtrl', function ($scope, $http, socket) {
    $scope.awesomeThings = [];

    $scope.stations = {};

    $http.get('/api/things').success(function(awesomeThings) {

      console.log(awesomeThings);
      $scope.awesomeThings = awesomeThings;

      socket.syncUpdates('thing', $scope.awesomeThings);
    });

   $scope.tune = function() {
     $http.get('/api/things/' + $scope.stations.selected._id).success(function(oneAwesomeThing){

       console.log('one awesome thing!', oneAwesomeThing);

     });
   };




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
