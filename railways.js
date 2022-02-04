var myapp=angular.module("myapp", []);
myapp.controller("myctrl", function($scope, $http)
{
    $http.get('https://adithkkn.github.io/LAB_WSD_ANGULAR_JSON/Booking.json')
    .success(function(response)
    {
        $scope.names=response.records;
    });
});

myapp.filter("bookingstatuss", function(){
  return function (bookingstatus){
      switch(bookingstatus){
          case 1:
              return "successful";
          case 2:
              return "failed";
          case 3:
              return "pending";    
      }
  }
});
