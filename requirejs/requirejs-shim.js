
    require.config({
      paths: {
        'angular': '/ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js',
        'jquery': '//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js',
      },

      //  Tune dependencies of non-AMD scripts
      shim: {
        'angular': {
          exports: 'angular',
          deps: ['jquery']
        }
      }
    });


    require(['angular'], function(ng) {
      ng.module('MyAngularApp').service(...)
    });


