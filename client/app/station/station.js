'use strict';

angular.module('transistorApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('station', {
        url: '/station',
        templateUrl: 'app/station/station.html',
        controller: 'StationCtrl'
      });
  });