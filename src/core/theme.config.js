angular.module( "app.core" ).config( themeConfig );

function themeConfig ( $mdThemingProvider ) {
    let theme = $mdThemingProvider.theme( "default" );
    theme.primaryPalette( "teal" )
         .accentPalette( "deep-purple" );
}