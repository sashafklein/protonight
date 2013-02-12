

function VegetarianController($scope, $http) {
    
    var mapOptions = {
        center: new google.maps.LatLng(-34.387, 150.644),
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"),
        mapOptions);
    
    $http.get('data/vegetarian.json').success(function(data) {
        $scope.vegetarians = data;
        
        for(i in data)
        {
            var marker = new google.maps.Marker({
                map:map,
                draggable:true,
                animation: google.maps.Animation.DROP,
                position: new google.maps.LatLng(data[i].latitude, data[i].longitude)
            });
        }
    });
}

//PhoneListCtrl.$inject = ['$scope', '$http'];