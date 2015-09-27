serviceScheduler.directive('translator', function() {
    // Runs during compile
    return {
        terminal: true,
        scope: {}, // {} = isolate, true = child, false/undefined = no change
        link: function($scope, iElm, iAttrs, controller) {
            $(iElm).append(I18n.lookup(iAttrs.labelKey));
        }
    };
});
