
    require.config({
      paths: {
        'angular': 'AssessmentPlayerConfig',
        'jquery': './lib/jquery-1.9.1',
      },

      //  Tune dependencies of non-AMD scripts
      shim: {
        'angular': {
          exports: 'angular',
          deps: ['jquery']
        }
      }
    });

    