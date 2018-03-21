/**
 * INSPINIA - Responsive Admin Theme
 *
 * Inspinia theme use AngularUI Router to manage routing and views
 * Each view are defined as state.
 * Initial there are written state for all view in theme.
 *
 */
 function checkLogin() {
    var requestLocation = window.location.hash.slice(window.location.hash.lastIndexOf("/") + 1);
    if (requestLocation=="") {
        window.location.href = '#/login';
    }
 }
function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, IdleProvider, KeepaliveProvider) {

    // Configure Idle settings
    // IdleProvider.idle(5); // in seconds
    // IdleProvider.timeout(120); // in seconds
    var rnd = rndver;
    //$urlRouterProvider.otherwise("/landing");
    // window.location.hash = "/login";
    $ocLazyLoadProvider.config({
        // Set to true if you want to see what and when is dynamically loaded
        debug: false,
        modules: [{
            name: 'landingController',
            files: ['js/controllers/landingCtrl.js?rnd=' + rnd]
        }, {
            name: 'loginController',
            files: ['js/controllers/loginCtrl.js?rnd=' + rnd]
        }, {
            name: 'acountListController',
            files: ['js/controllers/acountListCtrl.js?rnd=' + rnd]
        }, {
            name: 'addUserController',
            files: ['js/controllers/addUserCtrl.js?rnd=' + rnd]
        }, {
            name: 'updateUserController',
            files: ['js/controllers/updateUserCtrl.js?rnd=' + rnd]
        }, {
            name: 'roleListController',
            files: ['js/controllers/roleListCtrl.js?rnd=' + rnd]
        }, {
            name: 'addRoleController',
            files: ['js/controllers/addRoleCtrl.js?rnd=' + rnd]
        }, {
            name: 'updateRoleController',
            files: ['js/controllers/updateRoleCtrl.js?rnd=' + rnd]
        }, {
            name: 'merchantListController',
            files: ['js/controllers/merchantListCtrl.js?rnd=' + rnd]
        }, {
            name: 'merchantDetailController',
            files: ['js/controllers/merchantDetailCtrl.js?rnd=' + rnd]
        }, {
            name: 'rewardListController',
            files: ['js/controllers/rewardListCtrl.js?rnd=' + rnd]
        }, {
            name: 'rewardDetailController',
            files: ['js/controllers/rewardDetailCtrl.js?rnd=' + rnd]
        }, {
            name: 'rewardRuleDetailController',
            files: ['js/controllers/rewardRuleDetailCtrl.js?rnd=' + rnd]
        }, {
            name: 'storeListController',
            files: ['js/controllers/storeListCtrl.js?rnd=' + rnd]
        }, {
            name: 'storeDetailController',
            files: ['js/controllers/storeDetailCtrl.js?rnd=' + rnd]
        }, {
            name: 'storeAreaDetailController',
            files: ['js/controllers/storeAreaDetailCtrl.js?rnd=' + rnd]
        }, {
            name: 'reservationListController',
            files: ['js/controllers/reservationListCtrl.js?rnd=' + rnd]
        }, {
            name: 'reservationDetailController',
            files: ['js/controllers/reservationDetailCtrl.js?rnd=' + rnd]
        }, {
            name: 'campaignListController',
            files: ['js/controllers/campaignListCtrl.js?rnd=' + rnd]
        }, {
            name: 'campaignDetailController',
            files: ['js/controllers/campaignDetailCtrl.js?rnd=' + rnd]
        }, {
            name: 'homePageController',
            files: ['js/controllers/homePageCtrl.js?rnd=' + rnd]
        }, {
            name: 'homePageCurrentController',
            files: ['js/controllers/homePageCurrentCtrl.js?rnd=' + rnd]
        }, {
            name: 'homePagePreviewController',
            files: ['js/controllers/homePagePreviewCtrl.js?rnd=' + rnd]
        }, {
            name: 'gameListController',
            files: ['js/controllers/gameListCtrl.js?rnd=' + rnd]
        }, {
            name: 'gameDetailController',
            files: ['js/controllers/gameDetailCtrl.js?rnd=' + rnd]
        }, {
            name: 'bannerListController',
            files: ['js/controllers/bannerListCtrl.js?rnd=' + rnd]
        }, {
            name: 'bannerDetailController',
            files: ['js/controllers/bannerDetailCtrl.js?rnd=' + rnd]
        }, {
            name: 'couponListController',
            files: ['js/controllers/couponListCtrl.js?rnd=' + rnd]
        }, {
            name: 'couponDetailController',
            files: ['js/controllers/couponDetailCtrl.js?rnd=' + rnd]
        }, {
            name: 'customerListController',
            files: ['js/controllers/customerListCtrl.js?rnd=' + rnd]
        }, {
            name: 'customerTempListController',
            files: ['js/controllers/customerTempListCtrl.js?rnd=' + rnd]
        }, {
            name: 'customerDetailController',
            files: ['js/controllers/customerDetailCtrl.js?rnd=' + rnd]
        }, {
            name: 'customerReservationDetailController',
            files: ['js/controllers/customerReservationDetailCtrl.js?rnd=' + rnd]
        }, {
            name: 'customerAdjustStampsController',
            files: ['js/controllers/customerAdjustStampsCtrl.js?rnd=' + rnd]
        }, {
            name: 'customerAdjustCouponController',
            files: ['js/controllers/customerAdjustCouponCtrl.js?rnd=' + rnd]
        }, {
            name: 'pushTemplateController',
            files: ['js/controllers/pushTemplateCtrl.js?rnd=' + rnd]
        }, {
            name: 'pushNotifController',
            files: ['js/controllers/pushNotifCtrl.js?rnd=' + rnd]
        }, {
            name: 'userReportController',
            files: ['js/controllers/userReportCtrl.js?rnd=' + rnd]
        }, {
            name: 'campaignReportController',
            files: ['js/controllers/campaignReportCtrl.js?rnd=' + rnd]
        }, {
            name: 'collectCouponReportController',
            files: ['js/controllers/collectCouponReportCtrl.js?rnd=' + rnd]
        }, {
            name: 'collectStampsReportController',
            files: ['js/controllers/collectStampsReportCtrl.js?rnd=' + rnd]
        }, {
            name: 'purchaseReportController',
            files: ['js/controllers/purchaseReportCtrl.js?rnd=' + rnd]
        }, {
            name: 'redeemCouponReportController',
            files: ['js/controllers/redeemCouponReportCtrl.js?rnd=' + rnd]
        }, {
            name: 'redemptionReportController',
            files: ['js/controllers/redemptionReportCtrl.js?rnd=' + rnd]
        }, {
            name: 'reservationReportController',
            files: ['js/controllers/reservationReportCtrl.js?rnd=' + rnd]
        }, {
            name: 'transferStampsReportController',
            files: ['js/controllers/transferStampsReportCtrl.js?rnd=' + rnd]
        }, {
            name: 'keeperUserListController',
            files: ['js/controllers/keeperUserListCtrl.js?rnd=' + rnd]
        }, {
            name: 'keeperUserDetailController',
            files: ['js/controllers/keeperUserDetailCtrl.js?rnd=' + rnd]
        }, {
            name: 'reasonListController',
            files: ['js/controllers/reasonListCtrl.js?rnd=' + rnd]
        }, {
            name: 'reasonDetailController',
            files: ['js/controllers/reasonDetailCtrl.js?rnd=' + rnd]
        }, {
            name: 'merchantConfigListController',
            files: ['js/controllers/merchantConfigListCtrl.js?rnd=' + rnd]
        }, {
            name: 'merchantConfigDetailController',
            files: ['js/controllers/merchantConfigDetailCtrl.js?rnd=' + rnd]
        }, {
            name: 'ui-grid',
            serie: true,
            files: ['js/plugins/ui-grid/ui-grid.min.js', 'js/plugins/ui-grid/ui-grid.min.css', "styles/plugins/myuigrid/gridstyle.css", "js/plugins/ui-grid-draggable-rows/js/draggable-rows.js"]
        }, {
            name: 'slimscroll',
            files: ['js/plugins/slimscroll/jquery.slimscroll.min.js']
        }, {
            name: 'angular-iscroll',
            serie: true,
            files: ['js/iscroll.min.js', 'js/angular-iscroll.min.js']
        }, {
            name: 'async',
            files: ['js/plugins/async/async.min.js']
        }, {
            name: 'md5',
            files: ['js/plugins/jQuery-MD5-master/jquery.md5.js']
        }, {
            name: 'nouislider',
            files: ['styles/plugins/nouslider/jquery.nouislider.css', 'js/plugins/nouslider/jquery.nouislider.min.js', 'js/plugins/nouslider/angular-nouislider.js']
        }, {
            name: 'lightbox',
            files: ['js/plugins/blueimp/jquery.blueimp-gallery.min.js', 'styles/plugins/blueimp/css/blueimp-gallery.min.css']
        }, {
            name: 'dropzonejs',
            files: ['styles/plugins/dropzone/basic.css', 'styles/plugins/dropzone/dropzone.css', 'js/plugins/dropzone/dropzone.js']
        }, {
            name: 'validate',
            files: ['js/plugins/validate/jquery.validate.js']
        }, {
            name: 'toastr',
            files: ['js/plugins/toastr/toastr.min.js', 'styles/plugins/toastr/toastr.min.css']
        }, {
            name: 'datapicker',
            files: ['js/plugins/datapicker/bootstrap-datepicker.js','styles/plugins/datapicker/datepicker3.css']
        },{
            name: 'clockpicker',
            files: ['js/plugins/clockpicker/clockpicker.js','styles/plugins/clockpicker/clockpicker.css']
        },{
            name: 'hashmap',
            files: ['js/plugins/hashmap/hashmap.min.js']
        }, {
            name: 'jsTree',
            files: ['js/plugins/jsTree/jstree.min.js', 'styles/plugins/jsTree/style.min.css']
        },{
            name: 'steps',
            files: ["styles/plugins/steps/jquery.steps.css"]
        },{
            name: 'slick',
            files: ["js/jquery.flexslider.min.js","js/plugins/ui-sortable/sortable.js"]
        },{
            name: 'jscolor',
            serie: true,
            files: ["js/bootstrap-colorpicker.js"]
        },{
            name: 'chosen',
            serie: true,
            files: ["js/plugins/chosen/chosen.jquery.js","js/plugins/chosen/chosen.js","styles/plugins/chosen/chosen.css"]
        },{
            name: 'datetimepicker',
            files: ["styles/plugins/datetimepicker/bootstrap-datetimepicker.min.css"
                   ,'js/plugins/datetimepicker/bootstrap-datetimepicker.min.js'
            ]
        }]
    });

    $stateProvider
        .state('login', {
            url: "/login",
            controller: "LoginCtlr",
            templateUrl: "pages/login.html?rnd=" + rnd,
            data: {
                pageTitle: 'Login',

            },
            resolve: {
                loadPlugin: ["$ocLazyLoad", function($ocLazyLoad) {
                    return $ocLazyLoad.load(["loginController", "md5"]);
                }]
            }
        })
        .state('main', {
            abstract: true,
            url: "/main",
            controller: "MainCtlr",
            templateUrl: "pages/common/content.html?rnd=" + rnd,
            resolve: {
                loadPlugin: ["$ocLazyLoad", function($ocLazyLoad) {
                    return $ocLazyLoad.load(["hashmap", "toastr", "slimscroll", "angular-iscroll"]);
                }]
            }
        })
        .state('main.landing', {
            url: "/landing",
            controller: "LandingCtlr",
            templateUrl: "pages/dashboard_2.html?rnd=" + rnd,
            data: {
                pageTitle: 'Landing',

            },
            resolve: {
                loadPlugin: ["$ocLazyLoad", function($ocLazyLoad) {
                    return $ocLazyLoad.load(["landingController","slick", "ui-grid"]);
                }]
            }
        })
        .state('main.homePage', {
            url: "/homePage",
            controller: "HomePageCtrl",
            templateUrl: "pages/homePage.html?rnd=" + rnd,
            data: {
                pageTitle: 'Home page',

            },
            resolve: {
                loadPlugin: ["$ocLazyLoad", function($ocLazyLoad) {
                    return $ocLazyLoad.load(["homePageController","slick", "ui-grid"]);
                }]
            }
        })
        .state('main.homePageCurrent', {
            url: "/homePageCurrent",
            controller: "HomePageCurrentCtrl",
            templateUrl: "pages/homePageCurrent.html?rnd=" + rnd,
            data: {
                pageTitle: 'Home page',

            },
            resolve: {
                loadPlugin: ["$ocLazyLoad", function($ocLazyLoad) {
                    return $ocLazyLoad.load(["homePageCurrentController","slick", "ui-grid"]);
                }]
            }
        })
        .state('main.homePagePreview', {
            url: "/homePagePreview",
            controller: "HomePagePreviewCtrl",
            templateUrl: "pages/homePagePreview.html?rnd=" + rnd,
            data: {
                pageTitle: 'Home page',

            },
            resolve: {
                loadPlugin: ["$ocLazyLoad", function($ocLazyLoad) {
                    return $ocLazyLoad.load(["homePagePreviewController","slick", "ui-grid"]);
                }]
            }
        })
        .state('main.gameList', {
            url: "/gameList",
            controller: "GameListCtrl",
            templateUrl: "pages/gameList.html?rnd=" + rnd,
            data: {
                pageTitle: 'Game',

            },
            resolve: {
                loadPlugin: ["$ocLazyLoad", function($ocLazyLoad) {
                    return $ocLazyLoad.load(["gameListController", "ui-grid"]);
                }]
            }
        })
        .state('main.gameDetail', {
            url: "/gameDetail",
            controller: "GameDetailCtrl",
            templateUrl: "pages/gameDetail.html?rnd=" + rnd,
            data: {
                pageTitle: 'Game',

            },
            resolve: {
                loadPlugin: ["$ocLazyLoad", function($ocLazyLoad) {
                    return $ocLazyLoad.load(["gameDetailController", "ui-grid","datetimepicker"]);
                }]
            }
        })
        .state('main.bannerList', {
            url: "/bannerList",
            controller: "BannerListCtrl",
            templateUrl: "pages/bannerList.html?rnd=" + rnd,
            data: {
                pageTitle: 'Banner',

            },
            resolve: {
                loadPlugin: ["$ocLazyLoad", function($ocLazyLoad) {
                    return $ocLazyLoad.load(["bannerListController", "ui-grid"]);
                }]
            }
        })
        .state('main.bannerDetail', {
            url: "/bannerDetail",
            controller: "BannerDetailCtrl",
            templateUrl: "pages/bannerDetail.html?rnd=" + rnd,
            data: {
                pageTitle: 'Banner',

            },
            resolve: {
                loadPlugin: ["$ocLazyLoad", function($ocLazyLoad) {
                    return $ocLazyLoad.load(["bannerDetailController", "ui-grid","datetimepicker"]);
                }]
            }
        })
        .state('main.couponList', {
            url: "/couponList",
            controller: "CouponListCtrl",
            templateUrl: "pages/couponList.html?rnd=" + rnd,
            data: {
                pageTitle: 'Coupon',

            },
            resolve: {
                loadPlugin: ["$ocLazyLoad", function($ocLazyLoad) {
                    return $ocLazyLoad.load(["couponListController", "ui-grid", "hashmap", "async", "ui-grid", "toastr",'chosen']);
                }]
            }
        })
        .state('main.couponDetail', {
            url: "/couponDetail",
            controller: "CouponDetailCtrl",
            templateUrl: "pages/couponDetail.html?rnd=" + rnd,
            data: {
                pageTitle: 'Coupon',

            },
            resolve: {
                loadPlugin: ["$ocLazyLoad", function($ocLazyLoad) {
                    return $ocLazyLoad.load(["couponDetailController", "ui-grid","datetimepicker"]);
                }]
            }
        })
        
        
        
        
        
        .state('main.merchantList', {
            url: "/merchantList",
            controller: "MerchantListCtrl",
            templateUrl: "pages/merchantList.html?rnd=" + rnd,
            data: {
                pageTitle: 'Merchant',

            },
            resolve: {
                loadPlugin: ["$ocLazyLoad", function($ocLazyLoad) {
                    return $ocLazyLoad.load(["merchantListController", "ui-grid"]);
                }]
            }
        })
        .state('main.merchantDetail', {
            url: "/merchantDetail",
            controller: "MerchantDetailCtrl",
            templateUrl: "pages/merchantDetail.html?rnd=" + rnd,
            data: {
                pageTitle: 'Merchant ',

            },
            resolve: {
                loadPlugin: ["$ocLazyLoad", function($ocLazyLoad) {
                    return $ocLazyLoad.load(["merchantDetailController", "angular-iscroll", "ui-grid", "lightbox", "dropzonejs", "validate", "toastr", "nouislider","datapicker","clockpicker",'chosen']);
                }]
            }
        })
        .state('main.rewardList', {
            url: "/rewardList",
            controller: "RewardListCtrl",
            templateUrl: "pages/rewardList.html?rnd=" + rnd,
            data: {
                pageTitle: 'Reward',

            },
            resolve: {
                loadPlugin: ["$ocLazyLoad", function($ocLazyLoad) {
                    return $ocLazyLoad.load(["rewardListController", "ui-grid"]);
                }]
            }
        })
        .state('main.rewardDetail', {
            url: "/rewardDetail",
            controller: "RewardDetailCtrl",
            templateUrl: "pages/rewardDetail.html?rnd=" + rnd,
            data: {
                pageTitle: 'Reward',

            },
            resolve: {
                loadPlugin: ["$ocLazyLoad", function($ocLazyLoad) {
                    return $ocLazyLoad.load(["rewardDetailController", "angular-iscroll", "ui-grid", "lightbox", "dropzonejs", "validate", "toastr", "nouislider","datapicker","clockpicker"]);
                }]
            }
        })
        .state('main.rewardRuleDetail', {
            url: "/rewardRuleDetail",
            controller: "RewardRuleDetailCtrl",
            templateUrl: "pages/rewardRuleDetail.html?rnd=" + rnd,
            data: {
                pageTitle: 'Reward',

            },
            resolve: {
                loadPlugin: ["$ocLazyLoad", function($ocLazyLoad) {
                    return $ocLazyLoad.load(["rewardRuleDetailController"]);
                }]
            }
        })
        .state('main.storeList', {
            url: "/storeList",
            controller: "StoreListCtrl",
            templateUrl: "pages/storeList.html?rnd=" + rnd,
            data: {
                pageTitle: 'Store',

            },
            resolve: {
                loadPlugin: ["$ocLazyLoad", function($ocLazyLoad) {
                    return $ocLazyLoad.load(["storeListController", "ui-grid"]);
                }]
            }
        })
        .state('main.storeDetail', {
            url: "/storeDetail",
            controller: "StoreDetailCtrl",
            templateUrl: "pages/storeDetail.html?rnd=" + rnd,
            data: {
                pageTitle: 'Store',

            },
            resolve: {
                loadPlugin: ["$ocLazyLoad", function($ocLazyLoad) {
                    return $ocLazyLoad.load(["storeDetailController", "validate","datetimepicker"]);
                }]
            }
        })
        .state('main.storeAreaDetail', {
            url: "/storeAreaDetail",
            controller: "StoreAreaDetailCtrl",
            templateUrl: "pages/storeAreaDetail.html?rnd=" + rnd,
            data: {
                pageTitle: 'Store',

            },
            resolve: {
                loadPlugin: ["$ocLazyLoad", function($ocLazyLoad) {
                    return $ocLazyLoad.load(["storeAreaDetailController", "validate"]);
                }]
            }
        })
        .state('main.reservationList', {
            url: "/reservationList",
            controller: "ReservationListCtrl",
            templateUrl: "pages/reservationList.html?rnd=" + rnd,
            data: {
                pageTitle: 'Reservation',

            },
            resolve: {
                loadPlugin: ["$ocLazyLoad", function($ocLazyLoad) {
                    return $ocLazyLoad.load(["reservationListController", "ui-grid","datetimepicker"]);
                }]
            }
        })
        .state('main.reservationDetail', {
            url: "/reservationDetail",
            controller: "ReservationDetailCtrl",
            templateUrl: "pages/reservationDetail.html?rnd=" + rnd,
            data: {
                pageTitle: 'Reservation',

            },
            resolve: {
                loadPlugin: ["$ocLazyLoad", function($ocLazyLoad) {
                    return $ocLazyLoad.load(["reservationDetailController", "validate","datetimepicker"]);
                }]
            }
        })
        .state('main.pushTemplate', {
            url: "/pushTemplate",
            controller: "PushTemplateCtrl",
            templateUrl: "pages/pushTemplate.html?rnd=" + rnd,
            data: {
                pageTitle: 'Push notification',

            },
            resolve: {
                loadPlugin: ["$ocLazyLoad", function($ocLazyLoad) {
                    return $ocLazyLoad.load(["pushTemplateController", "validate"]);
                }]
            }
        })
        .state('main.pushNotif', {
            url: "/pushNotif",
            controller: "PushNotifCtrl",
            templateUrl: "pages/pushNotif.html?rnd=" + rnd,
            data: {
                pageTitle: 'Push notification',

            },
            resolve: {
                loadPlugin: ["$ocLazyLoad", function($ocLazyLoad) {
                    return $ocLazyLoad.load(["pushNotifController", "validate", "ui-grid"]);
                }]
            }
        })
        .state('main.campaignList', {
            url: "/campaignList",
            controller: "CampaignListCtrl",
            templateUrl: "pages/campaignList.html?rnd=" + rnd,
            data: {
                pageTitle: 'Campaign',

            },
            resolve: {
                loadPlugin: ["$ocLazyLoad", function($ocLazyLoad) {
                    return $ocLazyLoad.load(["campaignListController", "ui-grid"]);
                }]
            }
        })
        .state('main.campaignDetail', {
            url: "/campaignDetail",
            controller: "CampaignDetailCtrl",
            templateUrl: "pages/campaignDetail.html?rnd=" + rnd,
            data: {
                pageTitle: 'Campaign',

            },
            resolve: {
                loadPlugin: ["$ocLazyLoad", function($ocLazyLoad) {
                    return $ocLazyLoad.load(["campaignDetailController", "validate","steps","datetimepicker","jscolor", "ui-grid"]);
                }]
            }
        })
        .state('main.customerList', {
            url: "/customerList",
            controller: "CustomerListCtrl",
            templateUrl: "pages/customerList.html?rnd=" + rnd,
            data: {
                pageTitle: 'Customer',

            },
            resolve: {
                loadPlugin: ["$ocLazyLoad", function($ocLazyLoad) {
                    return $ocLazyLoad.load(["customerListController", "ui-grid"]);
                }]
            }
        })
        .state('main.customerTempList', {
            url: "/customerTempList",
            controller: "CustomerTempListCtrl",
            templateUrl: "pages/customerTempList.html?rnd=" + rnd,
            data: {
                pageTitle: 'Customer',

            },
            resolve: {
                loadPlugin: ["$ocLazyLoad", function($ocLazyLoad) {
                    return $ocLazyLoad.load(["customerTempListController", "ui-grid"]);
                }]
            }
        })
        .state('main.customerDetail', {
            url: "/customerDetail",
            controller: "CustomerDetailCtrl",
            templateUrl: "pages/customerDetail.html?rnd=" + rnd,
            data: {
                pageTitle: 'Customer',

            },
            resolve: {
                loadPlugin: ["$ocLazyLoad", function($ocLazyLoad) {
                    return $ocLazyLoad.load(["customerDetailController", "validate","steps","datetimepicker", "ui-grid"]);
                }]
            }
        })
        .state('main.customerReservationDetail', {
            url: "/customerReservationDetail",
            controller: "CustomerReservationDetailCtrl",
            templateUrl: "pages/customerReservationDetail.html?rnd=" + rnd,
            data: {
                pageTitle: 'Customer',

            },
            resolve: {
                loadPlugin: ["$ocLazyLoad", function($ocLazyLoad) {
                    return $ocLazyLoad.load(["customerReservationDetailController", "validate","datetimepicker"]);
                }]
            }
        })
        .state('main.customerAdjustStamps', {
            url: "/customerAdjustStamps",
            controller: "CustomerAdjustStampsCtrl",
            templateUrl: "pages/customerAdjustStamps.html?rnd=" + rnd,
            data: {
                pageTitle: 'Customer',

            },
            resolve: {
                loadPlugin: ["$ocLazyLoad", function($ocLazyLoad) {
                    return $ocLazyLoad.load(["customerAdjustStampsController", "validate","datetimepicker"]);
                }]
            }
        })
        .state('main.customerAdjustCoupon', {
            url: "/customerAdjustCoupon",
            controller: "CustomerAdjustCouponCtrl",
            templateUrl: "pages/customerAdjustCoupon.html?rnd=" + rnd,
            data: {
                pageTitle: 'Customer',

            },
            resolve: {
                loadPlugin: ["$ocLazyLoad", function($ocLazyLoad) {
                    return $ocLazyLoad.load(["customerAdjustCouponController", "validate"]);
                }]
            }
        })
        .state('main.roleList', {
            url: "/roleList",
            controller: "RoleListCtrl",
            templateUrl: "pages/roleList.html",
            data: {
                pageTitle: 'Role',

            },
            resolve: {
                loadPlugin: ["$ocLazyLoad", function($ocLazyLoad) {
                    return $ocLazyLoad.load(["roleListController", "hashmap", "async", "ui-grid", "toastr"]);
                }]
            }
        })
        .state('main.acountList', {
            url: "/acountList",
            controller: "AcountListCtrl",
            templateUrl: "pages/acountList.html",
            data: {
                pageTitle: 'Account',

            },
            resolve: {
                loadPlugin: ["$ocLazyLoad", function($ocLazyLoad) {
                    return $ocLazyLoad.load(["acountListController", "hashmap", "async", "ui-grid", "toastr"]);
                }]
            }
        })
        .state('main.addRole', {
            url: "/addRole",
            controller: "AddRoleCtrl",
            templateUrl: "pages/addRole.html",
            data: {
                pageTitle: 'Role',

            },
            resolve: {
                loadPlugin: ["$ocLazyLoad", function($ocLazyLoad) {
                    return $ocLazyLoad.load(["addRoleController", "hashmap", "async", "ui-grid", "toastr", "jsTree", "validate"]);
                }]
            }
        })
        .state('main.addUser', {
            url: "/addUser",
            controller: "AddUserCtrl",
            templateUrl: "pages/addUser.html",
            data: {
                pageTitle: 'Account',

            },
            resolve: {
                loadPlugin: ["$ocLazyLoad", function($ocLazyLoad) {
                    return $ocLazyLoad.load(["addUserController", "hashmap", "async", "ui-grid", "toastr", "jsTree", "validate"]);
                }]
            }
        })
        .state('main.updateRole', {
            url: "/updateRole",
            controller: "UpdateRoleCtrl",
            templateUrl: "pages/updateRole.html",
            data: {
                pageTitle: 'Role',

            },
            resolve: {
                loadPlugin: ["$ocLazyLoad", function($ocLazyLoad) {
                    return $ocLazyLoad.load(["updateRoleController", "hashmap", "async", "ui-grid", "toastr", "jsTree", "validate"]);
                }]
            }
        })
        .state('main.updateUser', {
            url: "/updateUser",
            controller: "UpdateUserCtrl",
            templateUrl: "pages/updateUser.html",
            data: {
                pageTitle: 'Account',

            },
            resolve: {
                loadPlugin: ["$ocLazyLoad", function($ocLazyLoad) {
                    return $ocLazyLoad.load(["updateUserController", "hashmap", "async", "ui-grid", "toastr", "jsTree", "validate"]);
                }]
            }
        })
        .state('main.userReport', {
            url: "/userReport",
            controller: "UserReportCtrl",
            templateUrl: "pages/userReport.html",
            data: {
                pageTitle: 'Report and Analytics',

            },
            resolve: {
                loadPlugin: ["$ocLazyLoad", function($ocLazyLoad) {
                    return $ocLazyLoad.load(["userReportController", "hashmap", "async", "ui-grid", "toastr","datetimepicker", "validate"]);
                }]
            }
        })
        .state('main.campaignReport', {
            url: "/campaignReport",
            controller: "CampaignReportCtrl",
            templateUrl: "pages/campaignReport.html",
            data: {
                pageTitle: 'Report and Analytics',

            },
            resolve: {
                loadPlugin: ["$ocLazyLoad", function($ocLazyLoad) {
                    return $ocLazyLoad.load(["campaignReportController", "hashmap", "async", "ui-grid", "toastr","datetimepicker", "validate"]);
                }]
            }
        })
        .state('main.collectCouponReport', {
            url: "/collectCouponReport",
            controller: "CollectCouponReportCtrl",
            templateUrl: "pages/collectCouponReport.html",
            data: {
                pageTitle: 'Report and Analytics',

            },
            resolve: {
                loadPlugin: ["$ocLazyLoad", function($ocLazyLoad) {
                    return $ocLazyLoad.load(["collectCouponReportController", "hashmap", "async", "ui-grid", "toastr","datetimepicker", "validate"]);
                }]
            }
        })
        .state('main.collectStampsReport', {
            url: "/collectStampsReport",
            controller: "CollectStampsReportCtrl",
            templateUrl: "pages/collectStampsReport.html",
            data: {
                pageTitle: 'Report and Analytics',

            },
            resolve: {
                loadPlugin: ["$ocLazyLoad", function($ocLazyLoad) {
                    return $ocLazyLoad.load(["collectStampsReportController", "hashmap", "async", "ui-grid", "toastr","datetimepicker", "validate"]);
                }]
            }
        })
        .state('main.purchaseReport', {
            url: "/purchaseReport",
            controller: "PurchaseReportCtrl",
            templateUrl: "pages/purchaseReport.html",
            data: {
                pageTitle: 'Report and Analytics',

            },
            resolve: {
                loadPlugin: ["$ocLazyLoad", function($ocLazyLoad) {
                    return $ocLazyLoad.load(["purchaseReportController", "hashmap", "async", "ui-grid", "toastr","datetimepicker", "validate"]);
                }]
            }
        })
        .state('main.redeemCouponReport', {
            url: "/redeemCouponReport",
            controller: "RedeemCouponReportCtrl",
            templateUrl: "pages/redeemCouponReport.html",
            data: {
                pageTitle: 'Report and Analytics',

            },
            resolve: {
                loadPlugin: ["$ocLazyLoad", function($ocLazyLoad) {
                    return $ocLazyLoad.load(["redeemCouponReportController", "hashmap", "async", "ui-grid", "toastr","datetimepicker", "validate"]);
                }]
            }
        })
        .state('main.redemptionReport', {
            url: "/redemptionReport",
            controller: "RedemptionReportCtrl",
            templateUrl: "pages/redemptionReport.html",
            data: {
                pageTitle: 'Report and Analytics',

            },
            resolve: {
                loadPlugin: ["$ocLazyLoad", function($ocLazyLoad) {
                    return $ocLazyLoad.load(["redemptionReportController", "hashmap", "async", "ui-grid", "toastr","datetimepicker", "validate"]);
                }]
            }
        })
        .state('main.reservationReport', {
            url: "/reservationReport",
            controller: "ReservationReportCtrl",
            templateUrl: "pages/reservationReport.html",
            data: {
                pageTitle: 'Report and Analytics',

            },
            resolve: {
                loadPlugin: ["$ocLazyLoad", function($ocLazyLoad) {
                    return $ocLazyLoad.load(["reservationReportController", "hashmap", "async", "ui-grid", "toastr","datetimepicker", "validate"]);
                }]
            }
        })
        .state('main.transferStampsReport', {
            url: "/transferStampsReport",
            controller: "TransferStampsReportCtrl",
            templateUrl: "pages/transferStampsReport.html",
            data: {
                pageTitle: 'Report and Analytics',

            },
            resolve: {
                loadPlugin: ["$ocLazyLoad", function($ocLazyLoad) {
                    return $ocLazyLoad.load(["transferStampsReportController", "hashmap", "async", "ui-grid", "toastr","datetimepicker", "validate"]);
                }]
            }
        })
        .state('main.keeperUserList', {
            url: "/keeperUserList",
            controller: "KeeperUserListCtrl",
            templateUrl: "pages/keeperUserList.html",
            data: {
                pageTitle: 'keeperUser',

            },
            resolve: {
                loadPlugin: ["$ocLazyLoad", function($ocLazyLoad) {
                    return $ocLazyLoad.load(["keeperUserListController", "hashmap", "async", "ui-grid", "toastr"]);
                }]
            }
        })
        .state('main.keeperUserDetail', {
            url: "/keeperUserDetail",
            controller: "KeeperUserDetailCtrl",
            templateUrl: "pages/keeperUserDetail.html",
            data: {
                pageTitle: 'keeperUser',

            },
            resolve: {
                loadPlugin: ["$ocLazyLoad", function($ocLazyLoad) {
                    return $ocLazyLoad.load(["keeperUserDetailController", "hashmap", "async", "ui-grid", "toastr", "jsTree", "validate"]);
                }]
            }
        })
        .state('main.reasonList', {
            url: "/reasonList",
            controller: "ReasonListCtrl",
            templateUrl: "pages/reasonList.html",
            data: {
                pageTitle: 'Reason',

            },
            resolve: {
                loadPlugin: ["$ocLazyLoad", function($ocLazyLoad) {
                    return $ocLazyLoad.load(["reasonListController", "hashmap", "async", "ui-grid", "toastr"]);
                }]
            }
        })
        .state('main.reasonDetail', {
            url: "/reasonDetail",
            controller: "ReasonDetailCtrl",
            templateUrl: "pages/reasonDetail.html",
            data: {
                pageTitle: 'Reason',

            },
            resolve: {
                loadPlugin: ["$ocLazyLoad", function($ocLazyLoad) {
                    return $ocLazyLoad.load(["reasonDetailController", "hashmap", "async", "ui-grid", "toastr", "jsTree", "validate"]);
                }]
            }
        })
        .state('main.merchantConfigList', {
            url: "/merchantConfigList",
            controller: "MerchantConfigListCtrl",
            templateUrl: "pages/merchantConfigList.html",
            data: {
                pageTitle: 'Reason',

            },
            resolve: {
                loadPlugin: ["$ocLazyLoad", function($ocLazyLoad) {
                    return $ocLazyLoad.load(["merchantConfigListController", "hashmap", "async", "ui-grid", "toastr"]);
                }]
            }
        })
        .state('main.merchantConfigDetail', {
            url: "/merchantConfigDetail",
            controller: "MerchantConfigDetailCtrl",
            templateUrl: "pages/merchantConfigDetail.html",
            data: {
                pageTitle: 'Reason',

            },
            resolve: {
                loadPlugin: ["$ocLazyLoad", function($ocLazyLoad) {
                    return $ocLazyLoad.load(["merchantConfigDetailController", "hashmap", "async", "ui-grid", "toastr", "jsTree", "validate"]);
                }]
            }
        })
}
var factoryVal = {
    "userInfo": !localStorage.userInfo ? {} : eval('(' + localStorage.userInfo + ')'),
    "postType": "POST",
    "lang": "en_US",
    "dateFormat":[
        {
            'wenzi' : "YYYY.MM.DD",
            "value" : "YYYY.MM.dd"
        },
        {
            'wenzi' : "DD.MM.YYYY",
            "value" : "dd.MM.YYYY"
        },
        {
            'wenzi' : "MM.DD.YYYY",
            "value" : "MM.dd.YYYY"
        }
    ],
    "phoneDistrictCode": ["Afghanistan +93",
"Albania +355",
"Algeria +213",
"American Samoa +1684",
"Andorra +376",
"Angola +244",
"Anguilla +1264",
"Antarctica +672",
"Antigua and Barbuda +1268",
"Argentina +54",
"Armenia +374",
"Aruba +297",
"Australia +61",
"Austria +43",
"Azerbaijan +994",
"Bahamas +1242",
"Bahrain +973",
"Bangladesh +880",
"Barbados +1246",
"Belarus +375",
"Belgium +32",
"Belize +501",
"Benin +229",
"Bermuda +1441",
"Bhutan +975",
"Bolivia +591",
"Bosnia and Herzegovina +387",
"Botswana +267",
"Brazil +55",
"British Indian Ocean Territory +246",
"British Virgin Islands +1284",
"Brunei +673",
"Bulgaria +359",
"Burkina Faso +226",
"Burundi +257",
"Cambodia +855",
"Cameroon +237",
"Canada +1",
"Cape Verde +238",
"Cayman Islands +1345",
"Central African Republic +236",
"Chad +235",
"Chile +56",
"China +86",
"Christmas Island +61",
"Cocos Islands +61",
"Colombia +57",
"Comoros +269",
"Cook Islands +682",
"Costa Rica +506",
"Croatia +385",
"Cuba +53",
"Curacao +599",
"Cyprus +357",
"Czech Republic +420",
"Democratic Republic of the Congo +243",
"Denmark +45",
"Djibouti +253",
"Dominica +1767",
"Dominican Republic +1829",
"Dominican Republic +1809",
"Dominican Republic +1849",
"East Timor +670",
"Ecuador +593",
"Egypt +20",
"El Salvador +503",
"Equatorial Guinea +240",
"Eritrea +291",
"Estonia +372",
"Ethiopia +251",
"Falkland Islands +500",
"Faroe Islands +298",
"Fiji +679",
"Finland +358",
"France +33",
"French Polynesia +689",
"Gabon +241",
"Gambia +220",
"Georgia +995",
"Germany +49",
"Ghana +233",
"Gibraltar +350",
"Greece +30",
"Greenland +299",
"Grenada +1473",
"Guam +1671",
"Guatemala +502",
"Guernsey +441481",
"Guinea +224",
"Guinea-Bissau +245",
"Guyana +592",
"Haiti +509",
"Honduras +504",
"Hong Kong +852",
"Hungary +36",
"Iceland +354",
"India +91",
"Indonesia +62",
"Iran +98",
"Iraq +964",
"Ireland +353",
"Isle of Man +441624",
"Israel +972",
"Italy +39",
"Ivory Coast +225",
"Jamaica +1876",
"Japan +81",
"Jersey +441534",
"Jordan +962",
"Kazakhstan +7",
"Kenya +254",
"Kiribati +686",
"Kosovo +383",
"Kuwait +965",
"Kyrgyzstan +996",
"Laos +856",
"Latvia +371",
"Lebanon +961",
"Lesotho +266",
"Liberia +231",
"Libya +218",
"Liechtenstein +423",
"Lithuania +370",
"Luxembourg +352",
"Macau +853",
"Macedonia +389",
"Madagascar +261",
"Malawi +265",
"Malaysia +60",
"Maldives +960",
"Mali +223",
"Malta +356",
"Marshall Islands +692",
"Mauritania +222",
"Mauritius +230",
"Mayotte +262",
"Mexico +52",
"Micronesia +691",
"Moldova +373",
"Monaco +377",
"Mongolia +976",
"Montenegro +382",
"Montserrat +1664",
"Morocco +212",
"Mozambique +258",
"Myanmar +95",
"Namibia +264",
"Nauru +674",
"Nepal +977",
"Netherlands +31",
"Netherlands Antilles +599",
"New Caledonia +687",
"New Zealand +64",
"Nicaragua +505",
"Niger +227",
"Nigeria +234",
"Niue +683",
"North Korea +850",
"Northern Mariana Islands +1670",
"Norway +47",
"Oman +968",
"Pakistan +92",
"Palau +680",
"Palestine +970",
"Panama +507",
"Papua New Guinea +675",
"Paraguay +595",
"Peru +51",
"Philippines +63",
"Pitcairn +64",
"Poland +48",
"Portugal +351",
"Puerto Rico +1787",
"Puerto Rico +1939",
"Qatar +974",
"Republic of the Congo +242",
"Reunion +262",
"Romania +40",
"Russia +7",
"Rwanda +250",
"Saint Barthelemy +590",
"Saint Helena +290",
"Saint Kitts and Nevis +1869",
"Saint Lucia +1758",
"Saint Martin +590",
"Saint Pierre and Miquelon +508",
"Saint Vincent and the Grenadines +1784",
"Samoa +685",
"San Marino +378",
"Sao Tome and Principe +239",
"Saudi Arabia +966",
"Senegal +221",
"Serbia +381",
"Seychelles +248",
"Sierra Leone +232",
"Singapore +65",
"Sint Maarten +1721",
"Slovakia +421",
"Slovenia +386",
"Solomon Islands +677",
"Somalia +252",
"South Africa +27",
"South Korea +82",
"South Sudan +211",
"Spain +34",
"Sri Lanka +94",
"Sudan +249",
"Suriname +597",
"Svalbard and Jan Mayen +47",
"Swaziland +268",
"Sweden +46",
"Switzerland +41",
"Syria +963",
"Taiwan +886",
"Tajikistan +992",
"Tanzania +255",
"Thailand +66",
"Togo +228",
"Tokelau +690",
"Tonga +676",
"Trinidad and Tobago +1868",
"Tunisia +216",
"Turkey +90",
"Turkmenistan +993",
"Turks and Caicos Islands +1649",
"Tuvalu +688",
"U.S. Virgin Islands +1340",
"Uganda +256",
"Ukraine +380",
"United Arab Emirates +971",
"United Kingdom +44",
"United States +1",
"Uruguay +598",
"Uzbekistan +998",
"Vanuatu +678",
"Vatican +379",
"Venezuela +58",
"Vietnam +84",
"Wallis and Futuna +681",
"Western Sahara +212",
"Yemen +967",
"Zambia +260",
"Zimbabwe +263"
],
    "timeZone":[ 
      {"value":"Etc/GMT+12",
       "label":"(GMT-12:00) International Date Line West"
      },
      {"value":"Pacific/Midway",
       "label":"(GMT-11:00) Midway Island, Samoa"
      },
      {"value":"US/Hawaii",
       "label":"(GMT-10:00) Hawaii"
      },
      {"value":"US/Alaska",
       "label":"(GMT-09:00) Alaska"
      },
      {"value":"Canada/Pacific",
       "label":"(GMT-08:00) Pacific Time (US and Canada); Tijuana"
      },
      {"value":"Canada/Mountain",
       "label":"(GMT-07:00) Mountain Time (US and Canada)"
      },
      {"value":"America/Mazatlan",
       "label":"(GMT-07:00) Chihuahua, La Paz, Mazatlan"
      },
      {"value":"US/Arizona",
       "label":"(GMT-07:00) Arizona"
      },
      {"value":"Canada/Central",
       "label":"(GMT-06:00) Central Time (US and Canada"
      },
      {"value":"Canada/East-Saskatchewan",
       "label":"(GMT-06:00) Saskatchewan"
      },
      {"value":"America/Mexico_City",
       "label":"(GMT-06:00) Guadalajara, Mexico City, Monterrey"
      },
      {"value":"US/Central",
       "label":"(GMT-06:00) Central America"
      },
      {"value":"Canada/Eastern",
       "label":"(GMT-05:00) Eastern Time (US and Canada)"
      },
      {"value":"US/East-Indiana",
       "label":"(GMT-05:00) Indiana (East)"
      },
      {"value":"America/Bogota",
       "label":"(GMT-05:00) Bogota, Lima, Quito"
      },
      {"value":"Canada/Atlantic",
       "label":"(GMT-04:00) Atlantic Time (Canada)"
      },
      {"value":"America/La_Paz",
       "label":"(GMT-04:00) Caracas, La Paz"
      },
      {"value":"America/Santiago",
       "label":"(GMT-04:00) Santiago"
      },
      {"value":"America/Buenos_Aires",
       "label":"(GMT-03:00) Buenos Aires, Georgetown"
      },
      {"value":"Etc/GMT+2",
       "label":"(GMT-02:00) Mid-Atlantic"
      },
      {"value":"Atlantic/Azores",
       "label":"(GMT-01:00) Azores"
      },
      {"value":"Atlantic/Cape_Verde",
       "label":"(GMT-01:00) Cape Verde Islands"
      },
      {"value":"Europe/London",
       "label":"(GMT) Greenwich Mean Time: Dublin, Edinburgh, Lisbon, London"
      },
      {"value":"Africa/Casablanca",
       "label":"(GMT) Casablanca, Monrovia"
      },
      {"value":"Europe/Belgrade",
       "label":"(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague"
      },
      {"value":"Europe/Sarajevo",
       "label":"(GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb"
      },
      {"value":"Europe/Brussels",
       "label":"(GMT+01:00) Brussels, Copenhagen, Madrid, Paris"
      },
      {"value":"Europe/Amsterdam",
       "label":"(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna"
      },
      {"value":"Africa/Algiers",
       "label":"(GMT+01:00) West Central Africa"
      },
      {"value":"Europe/Bucharest",
       "label":"(GMT+02:00) Bucharest"
      },
      {"value":"Africa/Cairo",
       "label":"(GMT+02:00) Cairo"
      },
      {"value":"Europe/Helsinki",
       "label":"(GMT+02:00) Helsinki, Kiev, Riga, Sofia, Tallinn, Vilnius"
      },
      {"value":"Europe/Athens",
       "label":"(GMT+02:00) Athens, Istanbul, Minsk"
      },
      {"value":"Asia/Jerusalem",
       "label":"(GMT+02:00) Jerusalem"
      },
      {"value":"Africa/Harare",
       "label":"(GMT+02:00) Harare, Pretoria"
      },
      {"value":"Etc/GMT-3",
       "label":"(GMT+03:00) Moscow, St. Petersburg, Volgograd"
      },
      {"value":"Asia/Kuwait",
       "label":"(GMT+03:00) Kuwait, Riyadh"
      },
      {"value":"Africa/Nairobi",
       "label":"(GMT+03:00) Nairobi"
      },
      {"value":"Asia/Baghdad",
       "label":"(GMT+03:00) Baghdad"
      },
      {"value":"Asia/Tehran",
       "label":"(GMT+03:30) Tehran"
      },
      {"value":"Asia/Muscat",
       "label":"(GMT+04:00) Abu Dhabi, Muscat"
      },
      {"value":"Asia/Tbilisi",
       "label":"(GMT+04:00) Baku, Tbilisi, Yerevan"
      },
      {"value":"Asia/Kabul",
       "label":"(GMT+04:30) Kabul"
      },
      {"value":"Etc/GMT-5",
       "label":"(GMT+05:00) Ekaterinburg"
      },
      {"value":"Asia/Karachi",
       "label":"(GMT+05:00) Islamabad, Karachi, Tashkent"
      },
      {"value":"Asia/Kolkata",
       "label":"(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi"
      },
      {"value":"Asia/Kathmandu",
       "label":"(GMT+05:45) Kathmandu"
      },
      {"value":"Asia/Dhaka",
       "label":"(GMT+06:00) Astana, Dhaka"
      },
      {"value":"Asia/Almaty",
       "label":"(GMT+06:00) Almaty, Novosibirsk"
      },
      {"value":"Asia/Rangoon",
       "label":"(GMT+06:30) Yangon Rangoon"
      },
      {"value":"Asia/Bangkok",
       "label":"(GMT+07:00) Bangkok, Hanoi, Jakarta"
      },
      {"value":"Asia/Chongqing",
       "label":"(GMT+08:00) Beijing, Chongqing, Hong Kong SAR, Urumqi"
      },
      {"value":"Asia/Kuala_Lumpur",
       "label":"(GMT+08:00) Kuala Lumpur, Singapore"
      },
      {"value":"Asia/Taipei",
       "label":"(GMT+08:00) Taipei"
      },
      {"value":"Australia/Perth",
       "label":"(GMT+08:00) Perth"
      },
      {"value":"Asia/Ulaanbaatar",
       "label":"(GMT+08:00) Irkutsk, Ulaanbaatar"
      },
      {"value":"Asia/Seoul",
       "label":"(GMT+09:00) Seoul"
      },
      {"value":"Asia/Tokyo",
       "label":"(GMT+09:00) Osaka, Sapporo, Tokyo"
      },
      {"value":"Asia/Yakutsk",
       "label":"(GMT+09:00) Yakutsk"
      },
      {"value":"Australia/Darwin",
       "label":"(GMT+09:30) Darwin"
      },
      {"value":"Australia/Adelaide",
       "label":"(GMT+09:30) Adelaide"
      },
      {"value":"Australia/Canberra",
       "label":"(GMT+10:00) Canberra, Melbourne, Sydney"
      },
      {"value":"Australia/Brisbane",
       "label":"(GMT+10:00) Brisbane"
      },
      {"value":"Australia/Hobart",
       "label":"(GMT+10:00) Hobart"
      },
      {"value":"Asia/Vladivostok",
       "label":"(GMT+10:00) Vladivostok"
      },
      {"value":"Pacific/Guam",
       "label":"(GMT+10:00) Guam, Port Moresby"
      },
      {"value":"Asia/Magadan",
       "label":"(GMT+11:00) Magadan, Solomon Islands, New Caledonia"
      },
      {"value":"Pacific/Fiji",
       "label":"(GMT+12:00) Fiji Islands, Kamchatka, Marshall Islands"
      },
      {"value":"Pacific/Auckland",
       "label":"(GMT+12:00) Auckland, Wellington"
      },
      {"value":"Etc/GMT-13",
       "label":"(GMT+13:00) Nuku'alofa"
      }
]
}
var factoryFn = function() {
    return factoryVal;
};
var app = angular.module('keeperp');

app.filter('dateFilter', function() {
    return function(input) {
        return formatDateToEnCN(input);
    }
});

app.filter("megaNumber", function() {
    return function(number, fractionSize) {
        if (typeof number === "undefined") return "0";
        if (number === null) return null;
        if (number === 0) return "0";

        if (!fractionSize || fractionSize < 0)
            fractionSize = 2;

        var abs = Math.abs(number);
        var rounder = Math.pow(10, fractionSize);
        var isNegative = number < 0;
        var key = '';
        var powers = [
            { key: "Q", value: Math.pow(10, 15) },
            { key: "T", value: Math.pow(10, 12) },
            { key: "B", value: Math.pow(10, 9) },
            { key: "M", value: Math.pow(10, 6) },
            { key: "K", value: 1000 }
        ];

        for (var i = 0; i < powers.length; i++) {

            var reduced = abs / powers[i].value;

            reduced = Math.round(reduced * rounder) / rounder;

            if (reduced >= 1) {
                abs = reduced;
                key = powers[i].key;
                break;
            }
        }

        return (isNegative ? '-' : '') + abs + key;
    };
});

app.filter('datetimeFilter', function() {
    return function(input) {
        return formatDateTimeToEnCN(input);
    }
});
app.directive('datetimepicker', function(){
        return {
            require: 'ngModel',
            restrict: 'A',
            link: function(scope, element, attrs, ngModel){

                if(!ngModel) return; // do nothing if no ng-model

                ngModel.$render = function(){
                    element.find('input').val( ngModel.$viewValue || '' );
                }

                var hourOnly = element.attr("hourOnly");
                var dateOnly = element.attr("dateOnly");
                var startT = element.attr("startT");
                var endT = element.attr("endT");
                var format='YYYY-MM-DD HH:mm:ss'
                // if(startT){
                //     format='YYYY-MM-DD 00:00:00'
                // }
                // if(endT){
                //     format='YYYY-MM-DD 23:59:59'
                // }
                if(hourOnly){
                    format = 'LT'
                }
                if(dateOnly){
                    format = 'YYYY-MM-DD'
                }
                element.datetimepicker({
                    format: format,
                    locale: 'en',
                    allowInputToggle:true
                });
                element.on('dp.change', function(){
                    scope.$apply(read);
                });

                read();

                function read() {
                    var value = element.find('input').val();
                    ngModel.$setViewValue(value);
                }
            }
        }
    })
app.factory("form", factoryFn);
app.config(["$stateProvider", "$urlRouterProvider", "$ocLazyLoadProvider", "IdleProvider", "KeepaliveProvider", config]);
app.run(["$rootScope", "$state","$modal", function($rootScope, $state,$modal) {


    $rootScope.$state = $state;

    $rootScope.$on('$viewContentLoaded',
        function(event) {
            // set the min height to screen height, and max-width to screen width, when page loaded
            //alert($(window).height() + "px"+" "+$(window).width() + "px");
            $('#page-wrapper').css("min-height", $(window).height() + "px");
            //$('#page-wrapper').css("max-width", $(window).width() + "px");
            $('#newSideMenu').hide();
            $('.back-btn').show();
            $("body").removeClass("show-slidbar");
            checkLogin();
        }
    );


    $rootScope.$on("$locationChangeStart", function(event, next, current) {
        sessionStorage.removeItem("errorCode");
        if(next.indexOf('merchantDetail')<0){
            factoryVal.AreaTab=false;
        }
        if(next.indexOf('campaignDetail')<0){
            factoryVal.rewardTab=false;
        }
        if(next.indexOf('customerDetail')<0){
            factoryVal.stampHistory=false;
            factoryVal.reservationHistory=false;
        }
        if (factoryVal.functionList) {
            var ctext = sessionStorage.getItem("ks");
            if (ctext) {
                var k = CryptoJS.AES.decrypt(ctext, 'kplus');
                k = k.toString(CryptoJS.enc.Utf8)
                var formStr = angular.toJson(factoryVal);
                var formtext = CryptoJS.AES.encrypt(formStr, k);
                sessionStorage.setItem("form", formtext.toString());
            }
        }else{
            factoryVal = resistSession(factoryVal);
        }
    });
    $rootScope.$root.warning = function() {
        var modalInstance = $modal.open({
            templateUrl: '/pages/common/warningDlg.html',
            controller: WarningDlgCtrl,
        });
    };
    $rootScope.$root.sessionTimeout = function() {
        var modalInstance = $modal.open({
            templateUrl: '/pages/common/warningDlg.html',
            controller: SessionTimeDlgCtrl,
        });
    };
    $rootScope.warningDlg = function(obj) {
        obj = obj || {};
        obj.msg = obj.msg || "";
        $rootScope.msg = obj.msg;
        shoppoDialog($rootScope, {
            template: "warningDlg.html?rnd=" + rnd,
            preCloseCallback: angular.loop
        });
    };

    $rootScope.useThumbnail = function(imgUrl) {
        var point = imgUrl.lastIndexOf('.')
        var thumbnailUrl = imgUrl.substring(0, point) + '_s' + imgUrl.substring(point);
        return thumbnailUrl;
    }

}]);


function copyData(scopeObj) {
    var newObj = {};
    for (var obj in scopeObj) {
        newObj[obj] = scopeObj[obj]
    }
    return newObj;
}

function mergeData(data1, data2) {
    var newObj = {};
    newObj = eval('(' + (JSON.stringify(data1) + JSON.stringify(data2)).replace(/}{/, ',') + ')');
    return newObj;
}

$(window).ajaxError(function(event, jqXHR, options, errorMsg) {
    if(jqXHR.responseText){
        var data = JSON.parse(jqXHR.responseText)
        if(data.errorCode == 10401 ){
            sessionTimeout(data.message)
        }else{
            warning(data.message)
        }     
        return;
    }
    if (jqXHR.readyState == 0) {
        warning(error[factoryFn().lang]['noNetWork']);
    } else if (jqXHR.readyState == 413) {
        warning(error[factoryFn().lang]['imgLimit']);
    } else {
        warning("Error requesting " + options.url + ": " + jqXHR.status + " " + jqXHR.statusText);
    }
}).ajaxStart(function() {
    $('.spiner-postion').removeClass('hide');

}).ajaxStop(function() {
    $('.spiner-postion').addClass('hide');
});

function apiResultsProcessingFun(result, successCallback, errorCallback) {
    if (result.errorCode == undefined||result.errorCode == 0) {
        successCallback();
    } else if (result.errorCode == -6) {

    } else if (result.errorCode == -16) {

    } else {
        if (errorCallback != undefined) {
            errorCallback();
        } else {
        }
    }
}

function warning(warningMsg) {
    setTimeout(
        function() {
            $('#warningMsg').val(warningMsg);
            $('#warning').click();
        }, 10);
}

function sessionTimeout(errorMsg) {
    setTimeout(
        function() {
            $('#sessionTimeoutMsg').val(errorMsg);
            $('#sessionTimeout').click();

        }, 10);
}

// function formatDate(date) {
//     var myyear = date.getFullYear();
//     var mymonth = date.getMonth() + 1;
//     var myweekday = date.getDate();

//     if (mymonth < 10) {
//         mymonth = "0" + mymonth;
//     }
//     if (myweekday < 10) {
//         myweekday = "0" + myweekday;
//     }
//     return (myyear + "-" + mymonth + "-" + myweekday);
// }

// function addDate(dd, dadd) {
//     var a = new Date(dd)
//     a = a.valueOf()
//     a = a + dadd * 24 * 60 * 60 * 1000
//     a = new Date(a)
//     return a;
// }

function warningDlgCtrl($scope, $modalInstance) {
    $scope.msg = $('#warningMsg').val();
    $scope.cancel = function() {
        $modalInstance.dismiss('cancel');
    };
    $scope.ok = function() {
        $modalInstance.dismiss('cancel');
    };
}
var WarningDlgCtrl = ["$scope", "$modalInstance", warningDlgCtrl];

function sessionTimeDlgCtrl($scope, $modalInstance, $state) {
    $scope.msg = $('#sessionTimeoutMsg').val();
    sessionStorage.clear();
    $scope.timeout = true;
    $scope.cancel = function() {
        $state.go('login');
        $modalInstance.dismiss('cancel');
    };
    $scope.ok = function() {
        $state.go('login');
        $modalInstance.dismiss('cancel');
    };

}
var SessionTimeDlgCtrl = ["$scope", "$modalInstance", "$state", sessionTimeDlgCtrl];




function mainCtlr($scope, $modal, form, $state) {
    // get session for test login
    resistSession(form, $state);
    if (!form.functionList) {
        $state.go('login');
    }
    $scope.form = form;
    $scope.makePermissionHash = function() {
        if (!$scope.$root.permissions) {
            $scope.$root.permissions = new HashMap();

            for (var i = 0; i < $scope.form.actionList.length; i++) {
                var action = $scope.form.actionList[i];
                $scope.$root.permissions.set(action.funcCode, 1);
            }
        }
    }

    $scope.makePermissionHash();

    $scope.warning = function() {
        var modalInstance = $modal.open({
            templateUrl: 'warningDlg.html',
            controller: WarningDlgCtrl,
        });
    };

    $scope.sessionTimeout = function() {
        var modalInstance = $modal.open({
            templateUrl: 'pages/common/timeoutDlg.html',
            controller: SessionTimeDlgCtrl,
        });
    }

    $scope.form.phoneCodeFormat = function(str){
        if(str){
            return str.replace(/^00/,"+");
        }else{
            return "";
        }
        
    }
    $scope.form.getPhoneCode = function(str){
        str = str.substr(str.indexOf("+"), str.length);
        str = str.replace("+", "00");
        return str;
    }
    $scope.$root.gotoUrl = function(url) {
        $state.go(url, {}, { reload: false });
        //$(".navbar-minimalize").click();
        if ($('body').hasClass('body-small')) {
            angular.element(".navbar-minimalize").scope().minimalize();
        }

    }

    $scope.$root.yesNoDialog = function(callback) {
        callback($scope, $scope.$root, $modal);
    }

    $scope.$root.warningDialog = function(callback) {
        callback($scope, $scope.$root, $modal);
    }

    $scope.$root.checkPermission = function(permission) {

        if (typeof $scope.$root.permissions.get(permission) != "undefined") {
            return true;
        }
        return false;
    }


    var imgUrl;
    var reader;
    var result;
    var input;

    $scope.$root.prepareUploadImg = function(inputElementId, imageElementId, callbackFn, callbackObj, sizeCheckObject,merchantId,imgType) {
        result = document.getElementById(imageElementId);
        input = document.getElementById(inputElementId);
        if (typeof FileReader === 'undefined') {
            // result.innerHTML = "抱歉，你的浏览器不支持 FileReader";
            $scope.alert("warning", " ", "Sorry, your browser does not support FileReader");
            input.setAttribute('disabled', 'disabled');
        } else {

            input.addEventListener('change', readFile, false);

        }

        function readFile() {
            input.removeEventListener('change', readFile, false);
            var file = this.files[0];
            if (typeof callbackObj == "undefined") {
                callbackObj = {};
            }

            callbackObj.localFilename = file.name;

            if (!/image\/\w+/.test(file.type)) {
                $scope.alert("warning", " ", "Must be image file format!");
                return false;
            }

            var fileZise = file.size / (1024 * 1024);
            if (fileZise > 3) {
                $scope.alert("warning", " ", "File cannot exceed 3M！");
                input.value = "";
            } else {
                reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function(e) {
                    var image = new Image();
                    image.src = this.result;
                    image.onload=function() {
                    if (sizeCheckObject && typeof sizeCheckObject.width != "undefined") {

                        if (this.width == sizeCheckObject.width && this.height == sizeCheckObject.height) {
                            result.src = this.src;
                            $scope.$root.guploadImg(callbackFn, inputElementId,merchantId,imgType);
                        } else {
                            $scope.alert("warning", " ", "Dimension must be：" +sizeCheckObject.width + " x " +sizeCheckObject.height);
                            input.value = "";
                        }
                    } else {
                        result.src = this.src;
                        $scope.$root.guploadImg(callbackFn, inputElementId,merchantId,imgType);
                    }
                    }

                }
            }

        }
    }

    $scope.$root.guploadImg = function(callbackFn, callbackObj,merchantId,imgType) {
        imgUrl = result.src.replace('image/jpeg','image/jpg');
        var uploadImageApiUrl = apiDomain + uploadImgApi;

        var postData = copyData($scope.form.userInfo);
        postData.image = imgUrl;
        postData.merchantId = merchantId;
        postData.type = imgType;

        $.ajax({
            type: $scope.form.postType,
            url: uploadImageApiUrl,
            context: document.body,
            data: postData,
            success: function(data) {
                //sendGAEvent("", "SPEED", JSON.stringify({ "tid": getUniId(), "t": Date.now(), "whr": "businessInfo - uploadImg 1", "uid": form.userInfo.ownerUserId, "eid": form.userInfo.entityId }), '', {});
                apiResultsProcessingFun(data,
                    function() {
                        if (callbackFn) {
                            callbackFn(callbackObj, data.result);
                        }
                    }
                );
            }
        });
    }
    $scope.goLanding = function(){
        $state.go('main.landing');
    }
    $scope.goToInBox = function() {
        $state.go('main.notificationIn');
    }

    $scope.logOut = function() {
        // $scope.form = {
        //     "userInfo": !localStorage.userInfo ? {} : eval('(' + localStorage.userInfo + ')'),
        //     "postType": "POST",
        //     "lang": "en"
        // }
        sessionStorage.clear();
        $scope.form = {};
        $state.go('login');
    }
    $scope.form.getLongDate = function(time){
        var date = new Date();
        var dateArr = time.substring(0, time.lastIndexOf(' ')).split('-');
        var timeArr = time.substring(time.lastIndexOf(' ')).split(':');
        date.setYear(dateArr[0])
        date.setMonth(dateArr[1] - 1);
        date.setDate(dateArr[2]);
        date.setHours(timeArr[0],timeArr[1]);
        return date.getTime();
    }
    $scope.alert = function(data1, data2, data3) {

        var shortCutFunction = data1;
        var msg = data2;
        var title = data3;
        toastr.options = {
            "closeButton": true,
            "debug": false,
            "progressBar": true,
            "preventDuplicates": false,
            "positionClass": "toast-center",
            "onclick": null,
            "showDuration": "100000000",
            "hideDuration": "2000",
            "timeOut": "3000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        };
        if (!msg) {
            msg = getMessage();
        }
        var $toast = toastr[shortCutFunction](msg, title);
        $toastlast = $toast;
    }

    $scope.$on('onRepeatLast', function(scope, element, attrs) {
        setTimeout(function() {
            var sidebarHeight = $(".navbar-static-side").height();
        $('.slimScrollDiv').slimscroll({
            size: '5px',
            height: sidebarHeight + 'px',
            wheelStep: 10,
            touchScrollStep: 20
        });
        }, 300);
        
        console.log("on repeat last");
    });




}
var MainCtlr = ["$scope", "$modal", "form", "$state", mainCtlr];
angular.module('keeperp').controller('MainCtlr', MainCtlr);





Date.prototype.format = function(fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份         
        "d+": this.getDate(), //日         
        "h+": this.getHours() % 12 == 0 ? 12 : this.getHours() % 12, //小时         
        "H+": this.getHours(), //小时         
        "m+": this.getMinutes(), //分         
        "s+": this.getSeconds(), //秒         
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度         
        "S": this.getMilliseconds() //毫秒         
    };
    var week = {
        "0": "/u65e5",
        "1": "/u4e00",
        "2": "/u4e8c",
        "3": "/u4e09",
        "4": "/u56db",
        "5": "/u4e94",
        "6": "/u516d"
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    if (/(E+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "/u661f/u671f" : "/u5468") : "") + week[this.getDay() + ""]);
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
}

var goToCustomHref = function() {
    hideKeyboard();
    setTimeout(function() {
        window.location = $('.back-btn').attr('customHref');
    }, 300)
}



//判断访问终端
var browser = {
    versions: function() {
        var u = navigator.userAgent,
            app = navigator.appVersion;
        return {
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
            iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1 //是否iPad
        };
    }(),
}


function resistSession(form, $state) {
    if (!form.functionList) {
        var ctext = sessionStorage.getItem("ks");
        if (ctext) {
            try {
                var k = CryptoJS.AES.decrypt(ctext, 'kplus');
                k = k.toString(CryptoJS.enc.Utf8)
                var f = sessionStorage.getItem("f1");
                var c = sessionStorage.getItem("a1");
                var s = sessionStorage.getItem("s1");
                var r = sessionStorage.getItem("r1");
                var forms = sessionStorage.getItem("form");
                var fstr = CryptoJS.AES.decrypt(f, k);
                fstr = fstr.toString(CryptoJS.enc.Utf8);
                var cstr = CryptoJS.AES.decrypt(c, k);
                cstr = cstr.toString(CryptoJS.enc.Utf8);
                var sstr = CryptoJS.AES.decrypt(s, k);
                sstr = sstr.toString(CryptoJS.enc.Utf8);
                var rstr = CryptoJS.AES.decrypt(r, k);
                rstr = rstr.toString(CryptoJS.enc.Utf8);
                var formstr = CryptoJS.AES.decrypt(forms, k);
                formstr = formstr.toString(CryptoJS.enc.Utf8);
                form.functionList = angular.fromJson(fstr);
                form.actionList = angular.fromJson(cstr);
                form.userInfo = angular.fromJson(sstr);
                form.systemUserRole = angular.fromJson(rstr);
                form = angular.fromJson(formstr);
            } catch (e) {
            }
        } else {
        }
    }else{
    }
    return form;
}

function clearSession() {
    if (typeof keepSession != "undefined" && keepSession) {
        var sId = "s01"
        localStorage.removeItem(sId);
    }

}


var sendGAEvent = function(eventLabel, eventCategory, eventAction, remark, customDimensions) {

    //console.log("sendGAEvent");

    /*
    if (typeof keewee2JSInterface != 'undefined') {
        var eventObj = {
            "eventLabel": eventLabel,
            "eventCategory": eventCategory,
            "eventAction": eventAction,
            "remark": remark,
            "customDimensions": customDimensions
        }
        var eventStr = JSON.stringify(eventObj);
        keewee2JSInterface.sendGAEvent(eventStr);
    }*/
    var GA_PAGE_VIEW = "Page View";
    if (typeof _hmt != "undefined") {

        // for (var i=0; i < customDimensions.length; i++) {
        //     var idx = i+1;
        //     var label  = "Dimension"+idx;
        //     var SCOPE_THIS_ACTION = 2; //BAIDU SCOPE
        //     var value  = customDimensions[i];
        //     _hmt.push(['_setCustomVar', idx, label, value, SCOPE_THIS_ACTION]);
        // }

        if (customDimensions.length > 0) {
            _hmt.push(['_setCustomVar', 1, "param", JSON.stringify(customDimensions), SCOPE_THIS_ACTION]);
        }
        //console.log("_trackEvent");
        if (eventCategory == GA_PAGE_VIEW) {
            //baidu tongji cannot get the path after #
            var page = window.location.hash.replace("#", "/");
            if (page != "") {
                _hmt.push(['_trackPageview', page]);
            }
        } else {
            _hmt.push(['_trackEvent', eventCategory, eventAction, eventLabel, remark]);
        }
    }


    if (typeof _czc != "undefined") {
        if (customDimensions.length > 0) {
            _czc.push(['_setCustomVar', 1, "param", JSON.stringify(customDimensions), SCOPE_THIS_ACTION]);
        }
        //console.log("_trackEvent");
        if (eventCategory == GA_PAGE_VIEW) {
            _czc.push(['_trackPageview', eventLabel]);
        } else {
            _czc.push(['_trackEvent', eventCategory, eventAction, eventLabel, remark]);
        }
    }
}

function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}
