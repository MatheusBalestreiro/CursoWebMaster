var app = angular.module("myShoppingList", []);
app.controller("myCtrl", function($scope) {
  $scope.products = ["Leite", "Pão", "Queijo"];
  $scope.addItem = function(){
    if ($scope.products.indexOf($scope.item) == -1) {
      $scope.products.push($scope.item);
    } else {
      $scope.errortext = "The item is already in your shopping list.";
    }

  }

  $scope.removeItem = function(x){
    $scope.products.splice(x,1);
  }
});