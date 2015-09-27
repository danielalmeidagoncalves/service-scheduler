serviceScheduler.directive('ngAppComponent', function() {
    // Runs during compile
    return {
        //terminal: false,
        link: function($scope, iElm, iAttrs, controller) {
            console.log("boot Linked");
        }
    };
});
