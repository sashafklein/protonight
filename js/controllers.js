function VegetarianController($scope, $http) {
  $http.get('data/vegetarian.json').success(function(data) {
    $scope.vegetarians = data;
  });
}
 
//PhoneListCtrl.$inject = ['$scope', '$http'];