function giftDetailReserveCtrl(a,b,c,d,e,f,g,h){b.form=f,b.form.topBar.showTopBar=!0,b.form.topBar.showMenuBtn=!1,f.topBar.showLogo=!1,b.form.topBar.topBarTitle=d.instant("Reward"),b.form.topBar.showBackBtn=!0,b.form.topBar.lastPage="/main/stampsDetail",b.form.topBar.showShareBtn=!0,b.$root.gotoShare=function(){sendGAEvent(b.giftDetail.name,"RewardDetail - "+b.giftDetail.name,"Share",1);var a=d.instant("shareTitle1")+appName+d.instant("shareTitle2"),c=b.giftDetail.image,e="I am collecting stickers for the "+b.giftDetail.name+". Start collecting for your favorite reward! Download app here.";b.form.shareEvent(a,c,e)},b.form.reservationForm={},b.form.isFromGiftDetail=!0,b.getGiftDetail=function(){var a=copyData(b.form.userInfo);a.giftId=b.form.gift.giftId,a.campaignId=b.form.campaignId;var c=apiDomain+getGiftDetail;$.ajax({type:AJAX_TYPE,data:a,url:c,context:document.body,success:function(a){apiResultsProcessingFun(a,function(){b.giftDetail=a.result,b.exchangeRule=b.giftDetail.exchangeTypeList,b.getUserStampCard(),b.$apply()})}})},b.getUserStampCard=function(){var a=copyData(b.form.userInfo);a.stampCardId=b.form.stampCardId,a.campaignId=b.form.campaignId;var c=apiDomain+getUserStampCard;$.ajax({type:AJAX_TYPE,data:a,url:c,context:document.body,success:function(a){apiResultsProcessingFun(a,function(){b.collectStampQty=a.result.collectStampQty,b.$apply()})}})},b.gotoReservationForm=function(a){b.form.reservationForm.exchangeType=a,c.path("main/reservationForm")},b.$root.gotoLastPage=function(){c.path(b.form.topBar.lastPage)},b.init=function(){b.getGiftDetail()},b.init()}var GiftDetailReserveCtrl=["$filter","$scope","$location","$translate","$state","form","$timeout","shoppoDialog",giftDetailReserveCtrl];angular.module("shoppoweb").controller("GiftDetailReserveCtrl",GiftDetailReserveCtrl);