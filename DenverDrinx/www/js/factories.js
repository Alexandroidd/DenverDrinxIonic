angular.module('factories', [])



.factory('Bars', Bars);


Bars.$inject = ['$http'];
function Bars($http) {
  var self = this;

  return {
    all: function() {
      return $http.get('https://enigmatic-brushlands-11009.herokuapp.com/api/bars/index');
    },
    makeBars: function(){
      
    },
    get: function(id){
      return $http.get('https://enigmatic-brushlands-11009.herokuapp.com/api/bars/' + id);
    }
  };
}


