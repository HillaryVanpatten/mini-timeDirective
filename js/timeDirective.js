angular.module('timeApp').directive('showTime', function(){
  return{
    restric:'E',
    template:'<div>The current time is {{time}}</div>',
    link: function ($scope, element, attrs){
      var currentTime = new Date();
      $scope.time = currentTime.toString();

    }

  }
});
