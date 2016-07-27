
'use strict';
angular.module('siteSeedApp') 
.service('LocaleService', function ($translate, APP_CONFIG, $rootScope) {
    // get locales from config
    var localesObj = APP_CONFIG.locales.locales;

    // locales and locales display names
    var locales = Object.keys(localesObj);
    if (!locales || locales.length === 0) {
        console.error('There are no locales provided');
    }
    var localesDisplayNames = [];
    locales.forEach(function (locale) {
        localesDisplayNames.push(localesObj[locale]);
    });

    // storing current locale
    var currentLocale = $translate.use();

    var checkLocaleIsValid = function (locale) {
        return locales.indexOf(locale) !== -1;
    };

    var setLocale = function (locale) {
        if (!checkLocaleIsValid(locale)) {
            console.error('Locale name "' + locale + '" is invalid');
            return;
        }
        currentLocale = locale;// updating current locale

        // asking angular-translate to load and apply proper translations
        $translate.use(locale);
    };

    return {
        getLocaleDisplayName: function () {
            return localesObj[currentLocale];
        },
        setLocaleByDisplayName: function (localeDisplayName) {
            setLocale(
                locales[
                    localesDisplayNames.indexOf(localeDisplayName)// get locale index
                ]
            );
        },
        getLocalesDisplayNames: function () {
            return localesDisplayNames;
        }
    };
});
