serviceScheduler.directive('userLogin',['translationProvider',function(){
  // Runs during compile
  var behaviors = [{
      "setDefaultLogin" : function(scope){
          scope.setDefaultState("login");
      }
    }
  ];
  // see it as settings
  var states={
    loginState: "login"
  };

  return {
    terminal: false,
    templateUrl: 'assets/templates/user.html',
    link: function($scope, iElm, iAttrs, controller) {


        $scope.signup = function(){
          $('#signin').transition({animation:'horizontal flip',onComplete:function(){
              $('#signup-form').transition('horizontal flip');
            }
          });
        };

        $scope.goback = function(){
          $('#signup-form').transition({animation:'horizontal flip',onComplete:function(){
              $('#signin').transition('horizontal flip');
            }
          });
        };

        $scope.setDefaultState = function(defaultState){
          states["loginState"] = defaultState;
        };

         for (var i = 0; i < behaviors.length; i++) {
          for(var key in behaviors[i]) {
              behaviors[i][key].call(this,$scope);
          }
        };

      }
    };
  }]);
