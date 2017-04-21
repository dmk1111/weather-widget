const app = angular.module('weatherApp', []);

app.controller('weatherCtrl', function weatherCtrl($http, $element, $scope, $timeout) {
  $scope.Data = {};
    $.get("https://ipinfo.io", function(response) {
  console.log(response);
      $scope.Data.ip = response.ip;
      $scope.Data.city = response.city;
      $scope.Data.country = response.country;
  }, "jsonp");
  // $timeout( function() {
  // $.get(`https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='${$scope.Data.city}, ${$scope.Data.country}')&format=json`, function(response) {
  // // console.log(response.query);
  //   console.log(response.query.results.channel.item.forecast[0]);
  // });
  // }, 1000);
  $scope.apiKey = 'b92357938cea442596fdb39f03b38001';
  $timeout( function() {
  $.get('https://api.weatherbit.io/v1.0/current/ip?ip=' + $scope.Data.ip + '&key=' + $scope.apiKey, function(response) {
    console.log(response.data[0]);
  });
    }, 1000);
});

app.component('weatherComponent', {
  templateUrl: '/tpl.html',
  controller: 'weatherCtrl',
  bindings: {
    weather: '='
  }
});