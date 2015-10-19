var app = angular.module("myApp", ['ngResource']);

app.controller("ResourceController", function($scope, OOTDService){
  $scope.ootd = {};
  $scope.ootds = OOTDService.query();

  $scope.options = ['user', 'pubdate'];

// user can create a new ootd
   $scope.createOOTD = function(){
        OOTDService.save($scope.newOOTD);
        $scope.newOOTD = {}; // clear new OOTD object
    };

});

////////////
// MODELS //
////////////

app.factory('OOTDService', function(){

  var OOTDService = {};

  OOTDService.query = function(){
    return ALL_OOTDS;
  }

  OOTDService.get = function(id){
    var id = parseInt(id);
    return ALL_OOTDS.find(function(ootd){
      return ootd.id == id;
    });
  }

  return OOTDService;

})