angular.module( "app.core" ).config( initRoutes );

function initRoutes ( $urlRouterProvider ) {
    $urlRouterProvider.otherwise( "/" );
}