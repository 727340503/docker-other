function loginCtrl(a,b,c,d,e,f){a.form=f,a.form.topBar.topBarTitle=c.instant("Login"),a.form.topBar.showTopBar=!0,a.form.topBar.showRegisterBtn=!0,a.form.topBar.showBackBtn=!0,a.form.bottomMenu=!1,a.facebookIsReady=!0,a.form.isFromMore?a.form.topBar.lastPage="/main/more":a.form.isFromRegister?a.form.topBar.lastPage="/main/registration":a.form.topBar.lastPage="/main/landing",a.facebookLogin=function(){getfaceBookUserInfo=function(b){a.form.facebookInfo=JSON.parse(b.result),a.fbLogin()},1==a.form.isInApp&&(window.location.href="tcc://shoppo?func=facebookLogin&callback=getfaceBookUserInfo")},a.fbLogin=function(){var b=copyData(a.form.userInfo);b.loginType=3,b.snsId=a.form.facebookInfo.id,b.snsType=1,b.snsAccessToken=a.form.facebookInfo.token;var c=apiDomain+newLogin;$.ajax({type:AJAX_TYPE,url:c,context:document.body,data:b,success:function(b){apiResultsProcessingFun(b,function(){a.form.userInfo=b.result,a.form.getDeviceToken(),a.form.getUserPofile(3),a.$apply()})}})},a.$root.gotoLastPage=function(){a.form.isFromMore=!1,a.form.isFromRegister=!1,e(function(){b.path(a.form.topBar.lastPage)},200)},a.$root.gotoRegister=function(){e(function(){b.path("/main/registration")},200)},a.errorMsg=!1,a.loginEvent=function(){var c=/^\d{4,}$/,d=/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;c.test(a.loginContent)?(a.form.phone=a.loginContent,b.path("/main/loginMobile")):d.test(a.loginContent)&&a.form.emailMethod?(a.form.email=a.loginContent,b.path("/main/loginEmail")):(a.errorMsg=!0,a.$watch(function(){return a.loginContent},function(b,e){c.test(a.loginContent)||d.test(a.loginContent)&&a.form.emailMethod?a.errorMsg=!1:a.errorMsg=!0}))},$("#login").validate({errorPlacement:function(a,b){b.after(a)},rules:{},submitHandler:function(b){a.loginEvent(1)}}),a.submitEvent=function(){$("#login").submit()},a.form.userInfo.merchantId||a.form.getMerchantDetail()}var LoginCtrl=["$scope","$location","$translate","$state","$timeout","form",loginCtrl];angular.module("shoppoweb").controller("LoginCtrl",LoginCtrl),keepSession=!0;