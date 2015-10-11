serviceScheduler.directive('userLogin', ['translationProvider', 'userService',
    function(translationProvider, userService) {
        // Runs during compile
        var behaviors = [{
            "initForm": function(scope, element) {
                scope.initForm(element);
            }
        }];

        // see it as settings
        var states = {
            login: "signin",
            singup: "invalid"
        };

        var $form;

        var serializeForm = function() {
            return $form.serialize();
        };

        return {
            terminal: false,
            templateUrl: 'assets/templates/user.html',
            link: function($scope, iElm, iAttrs, controller) {

                $scope.signup = function() {
                    $('#signin').transition({
                        animation: 'horizontal flip',
                        onComplete: function() {
                            $('#signup-form').transition('horizontal flip');
                        }
                    });
                };

                $scope.goback = function() {
                    $('#signup-form').transition({
                        animation: 'horizontal flip',
                        onComplete: function() {
                            $('#signin').transition('horizontal flip');
                        }
                    });
                };

                $scope.submit = function() {
                    if($form.form("is valid")){
                        userService.save(serializeForm());
                    }
                };

                $scope.setDefaultState = function(defaultState) {
                    states["loginState"] = defaultState;
                };

                $scope.initForm = function(element) {
                    $form = $(element).find("form");

                    $form.form({
                        fields: {
                            username: 'empty',
                            password: 'empty',
                            retypePassword: 'empty'
                        },
                        inline: true
                    });
                };

                for (var i = 0; i < behaviors.length; i++) {
                    for (var key in behaviors[i]) {
                        behaviors[i][key].call(this, $scope, iElm);
                    }
                };

            }
        };
    }
]);
