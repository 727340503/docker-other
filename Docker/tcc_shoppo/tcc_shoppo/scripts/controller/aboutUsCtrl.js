function aboutUsCtrl(a,b,c,d,e,f,g,h){b.form=g,b.form.topBar.showTopBar=!0,b.form.topBar.topBarTitle=d.instant("aboutUs"),b.form.topBar.showBackBtn=!0,b.form.bottomMenu=!1,b.form.topBar.lastPage="/main/more",f(function(){$(".scrollArea").height($(window).height()-$(".aboutUs").height()-75)}),b.$root.gotoLastPage=function(){c.path(b.form.topBar.lastPage)}}var AboutUsCtrl=["$filter","$scope","$location","$translate","$state","$timeout","form","shoppoDialog",aboutUsCtrl];angular.module("shoppoweb").controller("AboutUsCtrl",AboutUsCtrl);