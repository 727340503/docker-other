function settingCtrl(a,b,c,d,e,f){a.form=f,a.form.topBar.topBarTitle=c.instant("Setting"),a.form.topBar.showTopBar=!0,a.form.topBar.lastPage="main/more",a.form.topBar.showBackBtn=!0,a.form.bottomMenu=!1,a.$root.gotoLastPage=function(){b.path(a.form.topBar.lastPage)},a.chooseLang=function(b,d){var e=b+"";$(".circle-check").removeClass("checked"),$(".chooseLang_"+e).addClass("checked"),c.use(d),a.setLangCodeText(),a.form.changeLangNum=b,a.form.haveChangeLang=!0};var g=!0;a.setLangCode=function(){g&&(g=!1,a.form.haveChangeLang?a.useChangeLang():a.useDefaultLang())},a.useDefaultLang=function(){e(function(){for(var b=0;b<a.form.langType.length;b++)1==a.form.langType[b].isDefault&&$(".chooseLang_"+b).addClass("checked"),a.setLangCodeText()},200)},a.useChangeLang=function(){e(function(){$(".chooseLang_"+a.form.changeLangNum).addClass("checked"),a.setLangCodeText()},200)},a.setLangCodeText=function(){for(var b=0;b<a.form.langType.length;b++)"en_US"==a.form.langType[b].langCode?a.form.langType[b].langCodeText=c.instant("en_US"):"zh_CN"==a.form.langType[b].langCode?a.form.langType[b].langCodeText=c.instant("zh_CN"):"zh_HK"==a.form.langType[b].langCode&&(a.form.langType[b].langCodeText=c.instant("zh_HK"))}}var SettingCtrl=["$scope","$location","$translate","$state","$timeout","form",settingCtrl];angular.module("shoppoweb").controller("SettingCtrl",SettingCtrl);