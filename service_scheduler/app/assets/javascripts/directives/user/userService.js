serviceScheduler.service('userService',['$http',function($http){

  this.save = function(){
      $http.post('/someUrl', data, config).then(successCallback, errorCallback);
  };

}])
