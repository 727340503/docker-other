function pushTemplateCtrl(a,b,c,d,e,f,g){a.form=e,a.cancel=function(){f.path("/main/rewardList")},$("#baseInfo").validate({errorPlacement:function(a,b){b.parent().after(a)},rules:{},messages:{},submitHandler:function(b){a.pushDetail.id?a.updatePushNotif():a.createPushNotif()}}),a.createPushNotif=function(){var b=apiDomain+createPushNotifApi,c=copyData(a.form.userInfo);c.merchantId=a.form.merchantId,c.langData=[{msg:a.pushDetail.langData.msg,langCode:a.pushDetail.langData.langCode}],c.langData=angular.toJson(c.langData),c.type=1,$.ajax({type:a.form.postType,url:b,context:document.body,data:c,success:function(b){apiResultsProcessingFun(b,function(){a.alert("success"," ","Success！")})}})},a.getMerchantReservationPushNotif=function(){if(a.form.merchantId){var b=apiDomain+getMerchantReservationPushNotifApi,c=copyData(a.form.userInfo);c.merchantId=a.form.merchantId,$.ajax({type:a.form.postType,url:b,context:document.body,data:c,success:function(b){apiResultsProcessingFun(b,function(){a.pushDetail=b.result,a.pushDetail.langData=a.pushDetail.pushNotifLangMaps[0],a.pageLanguage=a.pushDetail.langData.langCode,a.$apply()})}})}},a.updatePushNotif=function(){var b=apiDomain+updatePushNotifApi,c=copyData(a.form.userInfo);c.merchantId=a.form.merchantId,c.pushNotifId=a.pushDetail.id,c.langData=[{msg:a.pushDetail.langData.msg,id:a.pushDetail.langData.id,langCode:a.pushDetail.langData.langCode}],c.langData=angular.toJson(c.langData),c.type=1,$.ajax({type:a.form.postType,url:b,context:document.body,data:c,success:function(b){apiResultsProcessingFun(b,function(){a.alert("success"," ","Success！")})}})},a.merchantListEvent=function(){var b=apiDomain+getMerchantListApi,c=copyData(a.form.userInfo);c.startRow=0,c.maxRows=1e6,c.sortType="ASC",c.sortField="id",$.ajax({type:a.form.postType,url:b,context:document.body,data:c,success:function(b){apiResultsProcessingFun(b,function(){a.merchantList=b.resultList,a.$apply()})}})},a.selectPageLang=function(){d(function(){for(var b=0;b<a.pushDetail.pushNotifLangMaps.length;b++)a.pushDetail.pushNotifLangMaps[b].langCode==a.pageLanguage&&(a.pushDetail.langData=a.pushDetail.pushNotifLangMaps[b],a.image=a.pushDetail.langData.image,a.pushDetail.langData.image=a.pushDetail.langData.fullImage)})},1==a.form.systemUserRole.roleType?(a.merchantListEvent(),a.form.merchantId=""):a.getMerchantReservationPushNotif()}var PushTemplateCtrl=["$scope","$translate","$state","$timeout","form","$location","$modal",pushTemplateCtrl];angular.module("keeperp").controller("PushTemplateCtrl",PushTemplateCtrl);