/**
 * INSPINIA - Responsive Admin Theme
 *
 */

const PC_STATUS_ACTIVE_N_INACTIVE = 9;
const PC_STATUS_INACTIVE = 0;
const PC_STATUS_ACTIVE = 1;
const PC_STATUS_TERMINATED = 4;
const PC_STATUS_CREATED = 1;
const CP_STATUS_ACTIVE = 1;
const CP_STATUS_TERMINATED = 2;
const CP_IMGLOAD_COUNT=6;

const PMC_STATUS_CREATED = 1;
const PM_TARGET_TYPE=2;
const MBRCARD_STATUS_ACTIVE=1;
const MBRTIER_STATUS_ACTIVE=1;

const RESULT_SUCCESS  = 0;
const RESULT_USER_NOT_EXIST = -5000;

(function () {
    angular.module('keeperp', [
        'ui.router',                    // Routing
        'oc.lazyLoad',                  // ocLazyLoad
        'ui.bootstrap',                 // Ui Bootstrap
        'pascalprecht.translate',       // Angular Translate
        'ngIdle',                       // Idle timer
        'ngSanitize',                    // ngSanitize
        'ngIOS9UIWebViewPatch'
    ])
})();

// Other libraries are loaded dynamically in the config.js file using the library ocLazyLoad