var getDate = new Date();
document.getElementById('demo').innerHTML= "Update is "+ getDate.
    getDate()+ "/"+getDate.getMonth()+"/" +getDate.getFullYear();

//dani code
var app = angular.module('ddcl', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: '_home.html',
        controller: 'HomeController',
        controllerAs: 'homeController'
    })
    .state('service', {
        url: '/servicios',
        templateUrl: '_service.html',
        controller: 'ServiceController',
        controllerAs: 'serviceController'
    })
    .state('methodology', {
        url: '/metodologia',
        templateUrl: '_methodology.html',
        controller: 'MethodologyController',
        controllerAs: 'methodologyController'
    })
    .state('price', {
        url: '/precio',
        templateUrl: '_price.html',
        controller: 'PriceController',
        controllerAs: 'priceController'
    })
    .state('contact', {
        url: '/contacto',
        templateUrl: '_contact.html',
        controller: 'ContactController',
        controllerAs: 'contactController'
    })
    ;
    
    $urlRouterProvider.otherwise('/');
    }])
    
app.controller('NavController', ['$scope', function($scope){
    
    var self = this;
    
    function toggleNav () {
        $scope.navActive = !$scope.navActive;
    }
    
    self.toggleNav = toggleNav;
    
    }]);
    
app.controller('HomeController', ['$scope', function($scope){
    
    }]);
    
app.controller('ServiceController', ['$scope', function($scope){
    
    }]);
    
app.controller('PriceController', ['$scope', function($scope){
    
    }]);
    
app.controller('MethodologyController', ['$scope', function($scope){
    
    }]);
    
app.controller('ContactController', ['$scope', function($scope){
    
    }]);
    