function loginCtrl(a,b,c,d,e,f){a.form=c,sendGAEvent(window.location.toString(),"Page View","Page Shown","",{}),a.changeLanguage=function(a){b.use(a)};var g=!0;a.login=function(){if(g){g=!1,e(function(){g=!0},1e3);var b=apiDomain+getLoginApi,f={};f.userName=a.username,f.password=a.password,f.lang=a.form.lang,$.ajax({type:c.postType,url:b,context:document.body,data:f,success:function(b){apiResultsProcessingFun(b,function(){e(function(){a.form.userInfo.session=b.result.session,a.form.userInfo.userId=b.result.systemUserId,a.form.userInfo.userName=b.result.userName,a.form.userInfo.lang=a.form.lang,a.form.systemUserRole=b.result.systemUserRole,2==a.form.systemUserRole.roleType&&(a.form.systemUserRole.merchantLangCodes=b.result.merchantLangCodes,a.form.merchantId=b.result.merchantId);for(var c=!1,e=[],f=0;f<b.result.systemFuncs.length;f++)"MERCHANT_LIST"==b.result.systemFuncs[f].funcCode&&(c=!0);for(var f=0;f<b.result.systemFuncs.length;f++)c&&"MERCHANT_INFO"==b.result.systemFuncs[f].funcCode||e.push(b.result.systemFuncs[f]);var g={id:0};a.assembleFunction(g,e),a.form.functionList=g.children,a.form.actionList=[],angular.copy(b.result.systemActions,a.form.actionList);var h=angular.toJson(a.form.functionList),i=angular.toJson(a.form.actionList),j=angular.toJson(a.form.systemUserRole),k=Date.now().toString(),l=CryptoJS.AES.encrypt(h,k),m=CryptoJS.AES.encrypt(i,k),n=CryptoJS.AES.encrypt(j,k);sessionStorage.setItem("ks",CryptoJS.AES.encrypt(k,"kplus").toString()),sessionStorage.setItem("f1",l.toString()),sessionStorage.setItem("a1",m.toString()),sessionStorage.setItem("r1",n.toString()),delete b.result.functionList,delete b.result.actionList;var o=CryptoJS.AES.encrypt(JSON.stringify(copyData(a.form.userInfo)),k);sessionStorage.setItem("s1",o.toString()),d.go("main.landing")})})}})}},a.assembleFunction=function(b,c){for(var d=0;d<c.length;d++){var e=c[d];b.id==e.parentId&&(b.children?b.children.push(e):(b.children=[],b.children.push(e)),a.assembleFunction(e,c))}},a.registerDialog=function(){a.$root.warningDialog=function(b){b(a,a.$root,f)}},a.init=function(){a.username="",a.password="",a.$root.permissions=null,a.registerDialog()},a.init()}var LoginCtlr=["$scope","$translate","form","$state","$timeout","$modal",loginCtrl];angular.module("keeperp").controller("LoginCtlr",LoginCtlr);