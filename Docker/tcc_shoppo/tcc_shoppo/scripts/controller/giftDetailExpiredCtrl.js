function giftDetailExpiredCtrl(a,b,c,d,e,f,g,h){b.form=f,b.form.topBar.showTopBar=!0,b.form.topBar.showMenuBtn=!1,f.topBar.showLogo=!1,b.form.topBar.topBarTitle=d.instant("Reward"),b.form.topBar.showBackBtn=!0,b.form.topBar.lastPage="/main/stampsDetailExpired",b.qrCodeMessageSuccess=!1,b.form.giftDetailExpired=!0,b.form.topBar.showShareBtn=!0,b.$root.gotoShare=function(){sendGAEvent(b.giftDetail.name,"RewardDetail - "+b.giftDetail.name,"Share",1);var a=d.instant("shareTitle1")+appName+d.instant("shareTitle2"),c=b.giftDetail.image,e="I am collecting stickers for the "+b.giftDetail.name+". Start collecting for your favorite reward! Download app here.";b.form.shareEvent(a,c,e)},b.getGiftDetail=function(){var a=copyData(b.form.userInfo);a.giftId=b.form.gift.giftId,a.campaignId=b.form.campaignId;var c=apiDomain+getGiftDetail;$.ajax({type:AJAX_TYPE,data:a,url:c,context:document.body,success:function(a){apiResultsProcessingFun(a,function(){b.giftDetail=a.result,b.exchangeRule=b.giftDetail.exchangeTypeList,1==b.giftDetail.status?(b.giftStatusText="coming soon",b.canRedeem=!1):2==b.giftDetail.status?(b.giftStatusText="available",b.canRedeem=!0):3==b.giftDetail.status?(b.giftStatusText="low stock",b.canRedeem=!0):4==b.giftDetail.status?(b.giftStatusText="out of stock",b.canRedeem=!1):5==b.giftDetail.status?b.giftStatusText="expired":6==b.giftDetail.status&&(b.giftStatusText="inactive",b.canRedeem=!1),b.getUserStampCard(),b.$apply()})}})},b.getUserStampCard=function(){var a=copyData(b.form.userInfo);a.stampCardId=b.form.stampCardId,a.campaignId=b.form.campaignId;var c=apiDomain+getUserStampCard;$.ajax({type:AJAX_TYPE,data:a,url:c,context:document.body,success:function(a){apiResultsProcessingFun(a,function(){b.stampsCardInfo=a.result,b.collectStampQty=a.result.collectStampQty,b.$apply()})}})},b.$root.gotoLastPage=function(){c.path(b.form.topBar.lastPage)};var i=!0;b.showJsBarcode128=function(){b.redeemtion=!0,b.expiredCode=!1,b.cashQtyText=!1,b.reFresh=!1,b.closeThisDialog=function(){b.JsBarcode128="",b.qrCode="",b.barCode="",b.redeemtion=!1,b.showRedeemCode=!1,b.redeemSuccess=!1,i=!0,clearInterval(b.timer)},h(b,{templateUrl:"pages/common/JsBarcode128Dlg.html?rnd="+rndver,preCloseCallback:b.closeThisDialog})},b.showRedeemptionCode=function(a){if(i){i=!1,b.rule=a,b.stampQty=b.rule.stampQty,b.cashQty=b.rule.cashQty,b.cashQty>0&&(b.cashQtyText=!0);var c=copyData(b.form.userInfo);c.userStampCardId=b.stampsCardInfo.id,c.campaignGiftMapId=b.form.gift.id,c.campaignGiftExchangeTypeId=b.rule.campaignGiftExchangeTypeId;var d=apiDomain+getUserGiftRedeemCode;$.ajax({type:AJAX_TYPE,data:c,url:d,context:document.body,success:function(a){apiResultsProcessingFun(a,function(){b.redeem=a.result,b.qrCode=b.redeem.redeemCode,b.barCode=b.redeem.redeemCode,b.showRedeemCode=!0,b.showJsBarcode128(),b.m=9,b.s=59,b.timer=setInterval(function(){b.s<10?$("#time").html("Done(Code remaining time: "+b.m+":0"+b.s+")"):$("#time").html("Done(Code remaining time: "+b.m+":"+b.s+")"),b.s--,b.s<0&&(b.s=59,b.m--),0==b.m&&0==b.s&&($("#time").html("Done(Code remaining time: "+b.m+":00)"),b.expiredCode=!0,b.$apply(),clearInterval(b.timer))},1e3),b.$apply()})}})}},b.showRedeemption=function(){var a=copyData(b.form.userInfo);a.redeemCode=b.qrCode;var c=apiDomain+getUserGiftRedeemMsg;$.ajax({type:AJAX_TYPE,data:a,url:c,context:document.body,success:function(a){apiResultsProcessingFun(a,function(){b.redeemMsg=a.result,0==b.redeemMsg.isScan?b.reFresh=!0:1==b.redeemMsg.isScan&&(b.redeemSuccess=!0,0==b.redeemMsg.scanStatus?(b.redeemFail=!0,b.redeemErrorMsg=b.redeemMsg.msg):1==b.redeemMsg.scanStatus&&(b.stillHaveStamp=b.redeemMsg.msg,b.redeemFail=!1),b.qrCode="",b.barCode="",clearInterval(b.timer)),b.showRedeemCode=!1,b.$apply()})}})},b.reFreshActive=function(){b.showRedeemption()},b.init=function(){b.getGiftDetail()},b.init()}var GiftDetailExpiredCtrl=["$filter","$scope","$location","$translate","$state","form","$timeout","shoppoDialog",giftDetailExpiredCtrl];angular.module("shoppoweb").controller("GiftDetailExpiredCtrl",GiftDetailExpiredCtrl);