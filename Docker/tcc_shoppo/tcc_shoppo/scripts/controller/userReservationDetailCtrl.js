function userReservationDetailCtrl(a,b,c,d,e,f,g,h){b.form=f,b.form.topBar.showTopBar=!0,b.form.topBar.showMenuBtn=!1,f.topBar.showLogo=!1,b.form.bottomMenu=!1,b.form.topBar.topBarTitle=d.instant("Reservation"),b.showSearch=!1,b.showFilter=!1,b.form.topBar.showBackBtn=!0,b.form.topBar.lastPage="/main/user",b.toFinishReservation=!1;var i=!0;b.form.reservation.contactPhoneAreaCode=phoneCodeFormat(b.form.reservation.contactPhoneAreaCode),b.$root.gotoLastPage=function(){c.path(b.form.topBar.lastPage)},b.showCodeEvent=function(){b.clearUserReservationCodeStatus()},b.clearUserReservationCodeStatus=function(){var a=copyData(b.form.userInfo);a.reservationCode=b.form.reservation.reservationCode;var c=apiDomain+clearUserReservationCodeStatus;$.ajax({type:AJAX_TYPE,data:a,url:c,context:document.body,success:function(a){apiResultsProcessingFun(a,function(){b.showJsBarcode128(),b.$apply()})}})},b.showJsBarcode128=function(){i&&(i=!1,b.reservation=!0,b.name=b.form.reservation.giftName,b.stampQty=b.form.reservation.stampQty,b.cashQty=b.form.reservation.cashQty,b.showCode=!0,b.showError=!1,b.showSuccess=!1,b.showCompleteReservation=!1,b.showRefresh=!1,b.qrCode=b.form.reservation.reservationCode,b.barCode=b.form.reservation.reservationCode,b.closeThisDialog=function(){b.reservation=!1,b.showCode=!1,b.showError=!1,b.showRefresh=!1,b.qrCode="",b.barCode="",i=!0},h(b,{templateUrl:"pages/common/JsBarcode128Dlg.html?rnd="+rndver,preCloseCallback:b.closeThisDialog}))},b.getUserReservationMsg=function(){var a=copyData(b.form.userInfo);a.reservationCode=b.form.reservation.reservationCode;var c=apiDomain+getUserReservationMsg;$.ajax({type:AJAX_TYPE,data:a,url:c,context:document.body,success:function(a){apiResultsProcessingFun(a,function(){b.userReservationMsg=a.result,b.showCode=!1,b.toFinishReservation?0==b.userReservationMsg.isScan?(b.showCompleteReservation=!1,b.showError=!1,b.showRefresh=!0):0==b.userReservationMsg.scanStatus?(b.showError=!0,b.errorMsg=a.result.msg,b.showRefresh=!1,b.showCompleteReservation=!1):(b.showError=!1,b.showRefresh=!1,b.showCompleteReservation=!0):0==b.userReservationMsg.isScan?(b.showSuccess=!1,b.showError=!1,b.showRefresh=!0):0==b.userReservationMsg.scanStatus?(b.showError=!0,b.errorMsg=a.result.msg,b.showRefresh=!1,b.showSuccess=!1):(b.showError=!1,b.showRefresh=!1,b.showSuccess=!0),b.$apply()})}})},b.reFreshActive=function(){b.getUserReservationMsg()},b.showReservationEvent=function(){b.comPareCollectStampQty>=b.form.reservation.stampQty?(b.toFinishReservation=!0,b.showJsBarcode128()):b.notEnoughReserveEvent()},b.notEnoughReserveEvent=function(){b.notEnoughReserve=!0,b.closeThisDialog=function(){b.notEnoughReserve=!1},h(b,{templateUrl:"pages/common/JsBarcode128Dlg.html?rnd="+rndver,preCloseCallback:b.closeThisDialog})},b.getCampaignDetail=function(){var a=copyData(b.form.userInfo);a.campaignId=b.form.reservation.campaignId;var c=apiDomain+getCampaignDetail;$.ajax({type:AJAX_TYPE,data:a,url:c,context:document.body,success:function(a){apiResultsProcessingFun(a,function(){b.campaignInfo=a.result,b.stampCardId=b.campaignInfo.stampCardId,b.getUserStampCard(),b.$apply()})}})},b.getUserStampCard=function(){var a=copyData(b.form.userInfo);a.stampCardId=b.stampCardId,a.campaignId=b.form.reservation.campaignId;var c=apiDomain+getUserStampCard;$.ajax({type:AJAX_TYPE,data:a,url:c,context:document.body,success:function(a){apiResultsProcessingFun(a,function(){b.stampsCardInfo=a.result,b.comPareCollectStampQty=b.stampsCardInfo.collectStampQty,b.$apply()})}})},b.init=function(){b.storePhone=b.form.reservation.storePhone.split("/"),b.getCampaignDetail()},b.checkPhone=function(a,b){return new RegExp("^[0-9|.|#|(|)|\\s|-]+$").test(a)?2!=b:1!=b},b.init()}var UserReservationDetailCtrl=["$filter","$scope","$location","$translate","$state","form","$timeout","shoppoDialog",userReservationDetailCtrl];angular.module("shoppoweb").controller("UserReservationDetailCtrl",UserReservationDetailCtrl);