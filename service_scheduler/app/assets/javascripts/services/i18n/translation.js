serviceScheduler.service('translationProvider', function(){

  this.translate = function(key,lang){
      // only en for now
      return I18n.lookup(key);
    };

  });
