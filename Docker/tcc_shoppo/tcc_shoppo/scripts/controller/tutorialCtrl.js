function tutorialCtrl(a,b,c,d,e,f,g,h){b.form=f,b.form.topBar.showTopBar=!0,b.form.menuMerchantList=!0,b.form.bottomMenu=!1,b.form.topBar.showBackBtn=!0,b.form.topBar.topBarTitle=d.instant("Tutorial"),$(".tutorialPage").height($(window).height()-60),b.form.topBar.lastPage="/main/more";var i=!0;b.flexsliderEvent=function(){i&&($(".flexslider").flexslider({animation:"slide",directionNav:!1,slideshow:!1,prevText:"",nextText:"",controlNav:!0,animation:"slide",animationLoop:!1,before:function(a){}}),i=!1)},b.skipEvent=function(){c.path("main/landing")},b.registerEvent=function(){c.path("main/registration")},b.$root.gotoLastPage=function(){c.path(b.form.topBar.lastPage)}}var TutorialCtrl=["$filter","$scope","$location","$translate","$state","form","$timeout","shoppoDialog",tutorialCtrl];angular.module("shoppoweb").controller("TutorialCtrl",TutorialCtrl);