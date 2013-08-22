


      define(function() {
          var deps = someCond ? ['a', 'b'] : ['a', 'c'];
          require(deps, function(a, bOrC) {
            // ...
          })
        }
      })




      