angular.module( "shared.i18n" )
       .factory( "i18nLoader", i18nLoaderService )
       .config( configureTranslation );

function configureTranslation ( $translateProvider ) {
    $translateProvider.useLoader( "i18nLoader" );
    $translateProvider.preferredLanguage( "en" );
}

function i18nLoaderService ( $q, $http, $log ) {
    const I18N_FILE = "i18n.json";

    return options => {
        let key = options.key;
        return $http.get( I18N_FILE, {
            cache: true
        }).then( response => {
            let translations = response.data[ key ];
            return translations ? $q.when( translations ) : $q.reject( key );
        }, response => {
            $log.error( `Could not download i18n file: ${I18N_FILE} - ${response.status}` );
            return $q.reject( key );
        });
    };
}