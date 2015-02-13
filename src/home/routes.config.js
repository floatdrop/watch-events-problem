angular.module( "app.home" ).config( routesConfig );

function routesConfig ( $stateProvider ) {
    $stateProvider.state( "home", {
        url: "/",
        templateUrl: "home/home.html"
    });
}