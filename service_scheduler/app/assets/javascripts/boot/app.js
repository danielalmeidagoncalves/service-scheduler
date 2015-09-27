var serviceScheduler = angular.module('ServiceScheduler', ['oc.lazyLoad']).config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
  $ocLazyLoadProvider.config({
     debug: true,
     events: true
     /* modules: [{
        name: 'TestModule',
        files: ['js/TestModule.js']
      }] */

      //$ocLazyLoad.load('TestModule'); // will load the predefined configuration
  });
}]);


