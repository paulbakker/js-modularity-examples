
    require.config({
      paths: {
        'mymodule': 'mymodule-1.2'
      }
    });

    require(['mymodule'], function(mymodule) {
      document.write('<p>' + mymodule.message() + '<p>');
    });

    

