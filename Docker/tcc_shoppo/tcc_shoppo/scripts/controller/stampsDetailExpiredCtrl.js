function stampsDetailExpiredCtrl(a,b,c,d,e,f,g,h){b.form=g,b.form.topBar.showTopBar=!0,b.form.topBar.showMenuBtn=!1,b.form.menuMerchantList=!0,b.form.topBar.topBarTitle=d.instant("Stamps"),b.form.bottomMenu=!1,b.form.topBar.showBackBtn=!0,b.expandcode=!1,b.isPopupGrant=!0,b.form.backFromExpired=!0,b.form.topBar.lastPage="/main/stampsCard",b.form.topBar.showShareBtn=!0,b.$root.gotoShare=function(){sendGAEvent(b.campaignInfo.name,"Sticker","Share",1);var a=d.instant("shareTitle1")+appName+d.instant("shareTitle2"),c=b.campaignInfo.coverImg,e="I am collecting stickers for the "+b.campaignInfo.name+" and I have a total of "+b.form.collectStampQty+" stickers. Start collecting, too! Download app here.";b.form.shareEvent(a,c,e)},b.form.giftDetailExpired?(b.chooseStamps=!1,b.chooseReward=!0):(b.chooseStamps=!0,b.chooseReward=!1);var i=!0;b.showCouponList=!1,b.showCode=!1,b.showSuccess=!1,b.form.collectStampQty,b.getCampaignDetail=function(){var a=copyData(b.form.userInfo);a.campaignId=b.form.campaignId;var c=apiDomain+getCampaignDetail;$.ajax({type:AJAX_TYPE,data:a,url:c,context:document.body,success:function(a){apiResultsProcessingFun(a,function(){b.campaignInfo=a.result,b.form.campainTerms=b.campaignInfo.terms,b.campaignInfo.redeemStartTime=formatDate(b.campaignInfo.redeemStartTime,b.form.dateFormat),b.campaignInfo.redeemEndTime=formatDate(b.campaignInfo.redeemEndTime,b.form.dateFormat),b.campaignInfo.collStartTime=formatDate(b.campaignInfo.collStartTime,b.form.dateFormat),b.campaignInfo.collEndTime=formatDate(b.campaignInfo.collEndTime,b.form.dateFormat),b.newestCampainInfo=a.result,b.campaignInfo.bgImg?b.form.stampsCardBgImg=b.campaignInfo.bgImg:b.campaignInfo.bgColor||(b.form.stampsCardBgImg="images/stamp_collection_default.png"),b.campaignInfo.bgImg?(b.campainBgImg="url("+b.campaignInfo.bgImg+")",$("#campaign").css("background-image",b.campainBgImg)):b.campaignInfo.bgColor?$("#campaign").css("background-color",b.campaignInfo.bgColor):$("#campaign").css("background-image","url(images/stamp_collection_default.png)"),b.collStartTime=getTimeStamp(b.campaignInfo.collStartTime),b.collEndTime=getTimeStamp(b.campaignInfo.collEndTime),b.redeemStartTime=getTimeStamp(b.campaignInfo.redeemStartTime),b.redeemEndTime=getTimeStamp(b.campaignInfo.redeemEndTime),b.startTime=getTimeStamp(b.campaignInfo.startTime),b.endTime=getTimeStamp(b.campaignInfo.endTime),b.currDate=getTimeStamp(b.newestCampainInfo.currDate),b.startTime<b.currDate<b.endTime?b.canTransfer=!0:b.canTransfer=!1,b.collStartTime<=b.currDate&&b.currDate<=b.collEndTime?b.canCollect=!0:b.canCollect=!1,b.redeemStartTime<=b.currDate&&b.currDate<=b.redeemEndTime?b.form.canRedeem=!0:b.form.canRedeem=!1,b.getUserStampCard(),b.$apply()})}})},b.setStampsTabStyle=function(){setTimeout(function(){var a=$(".img-responsive img").height();fixedPosition("stampCardExtra",a+85),$(".stampsModule").height($(".stampsModule").width()),$(".stampsModule").css("line-height",$(".stampsModule").width()+"px"),$(".stampsModule img").width($(".stampsModule").width()+2);for(var b=$(".stampsModule").find("img"),c=0;c<=b.length;c++){var d=Math.round(60*Math.random()-30);$(b[c]).css("transform","rotate("+d+"deg)")}})},b.getUserStampCard=function(){var a=copyData(b.form.userInfo);a.stampCardId=b.form.stampCardId,a.campaignId=b.form.campaignId;var c=apiDomain+getUserStampCard;$.ajax({type:AJAX_TYPE,data:a,url:c,context:document.body,success:function(a){apiResultsProcessingFun(a,function(){b.stampsCardInfo=a.result,b.form.collectStampQty=b.stampsCardInfo.collectStampQty,b.getListUserStamp(),b.setStamp(b.stampsCardInfo.collectStampQty),f(function(){b.instanceEvent()},500),b.$apply()})}})},b.getListUserStamp=function(){var a=copyData(b.form.userInfo);a.userStampCardId=b.stampsCardInfo.id;var c=apiDomain+listUserStamp;$.ajax({type:AJAX_TYPE,data:a,url:c,context:document.body,success:function(a){apiResultsProcessingFun(a,function(){b.userStamps=a.result,b.getListGift();for(var c=0;c<b.userStamps.length;c++)b.stamps[c]&&(b.stamps[c].stampImg=b.userStamps[c].stampImg);i=!0,b.$apply()})}})},b.showStamps=function(){b.chooseStamps=!0,b.chooseReward=!1,b.getUserStampCard(),setTimeout(function(){$(".stampsModule").height($(".stampsModule").width()),$(".stampsModule").css("line-height",$(".stampsModule").width()+"px")},60),b.setStampsTabStyle()},b.showReward=function(){b.chooseStamps=!1,b.chooseReward=!0,fixedPosition("reward-wrapper",$(".img-responsive").height()+61)},b.openLink=function(){c.path("main/game")},b.goTNC=function(){b.form.stampPageTab=!1,b.form.expired=!0,c.path("main/terms")},b.$root.gotoLastPage=function(){c.path(b.form.topBar.lastPage)},b.setStamp=function(a){var c=String(a).split(""),d=10*Math.floor(a/10%10)+a%10;if(b.stampNum="",d<=50){c[c.length-2]="5",c[c.length-1]="0";for(var e=0;e<c.length;e++)b.stampNum+=c[e];b.stampNum=parseInt(b.stampNum)}else{c[c.length-3]?(c[c.length-3]=parseInt(c[c.length-3])+1,c[c.length-2]="0",c[c.length-1]="0"):c=["1","0","0"];for(var e=0;e<c.length;e++)b.stampNum+=c[e];b.stampNum=parseInt(b.stampNum)}0!=b.stampNum&&b.stampNum?b.startNum=b.stampNum-49:(b.startNum=1,b.stampNum=50),b.stamps={};for(var e=b.startNum;e<=b.stampNum;e++)b.stamps[e-1]={},b.stamps[e-1].num=e;b.setStampsTabStyle()},b.instanceEvent=function(){$(".stampCardExtra").bind("scrollstop",function(){var a=$(".stampCardExtra").height(),c=$("#stampsList").height(),d=$(".stampCardExtra").scrollTop();if(d>=c-a){for(var e=b.stampNum;e<b.stampNum+50;e++)b.stamps[e]={},b.stamps[e].num=e+1;b.stampNum+=50,b.$apply();for(var e=0;e<b.userStamps.length;e++)b.stamps[e]&&(b.stamps[e].stampImg=b.userStamps[e].stampImg);if(b.stampNum-b.startNum>150){for(var e=b.startNum;e<b.startNum+50;e++)delete b.stamps[e-1];b.startNum+=50}b.$apply(),b.setStampsTabStyle(),f(function(){$(".stampCardExtra").scrollTop(20*($("#stampsList").find("li").width()+10)-a)})}if(d<=0&&b.startNum>50){for(var e=b.startNum-50;e<=b.startNum-1;e++)b.stamps[e-1]={},b.stamps[e-1].num=e;for(var e=0;e<b.userStamps.length;e++)b.stamps[e]&&(b.stamps[e].stampImg=b.userStamps[e].stampImg);if(b.startNum-=50,b.stampNum-b.startNum>150){for(var e=b.stampNum-50;e<b.stampNum;e++)delete b.stamps[e];b.stampNum-=50}b.setStampsTabStyle(),b.$apply(),f(function(){$(".stampCardExtra").scrollTop(10*($("#stampsList").find("li").width()+10))})}})},b.getListGift=function(){var a=copyData(b.form.userInfo);a.campaignId=b.form.campaignId;var c=apiDomain+listGift;$.ajax({type:AJAX_TYPE,data:a,url:c,context:document.body,success:function(a){apiResultsProcessingFun(a,function(){b.giftList=a.result,b.giftList[0]&&(b.nowTime=new Date(Date.parse(b.giftList[0].currDate.replace(/-/g,"/"))),b.nowTime=b.nowTime.getTime());for(var c=0;c<b.giftList.length;c++)1==b.giftList[c].status?b.giftList[c].giftStatusText="Coming soon":2==b.giftList[c].status?b.giftList[c].giftStatusText="Available​":3==b.giftList[c].status?b.giftList[c].giftStatusText="Available in select stores​":4==b.giftList[c].status?b.giftList[c].giftStatusText="Out of stock":5==b.giftList[c].status?b.giftList[c].giftStatusText="Expired":6==b.giftList[c].status&&(b.giftList[c].giftStatusText="Inactive"),1==b.giftList[c].isReservation?(b.giftList[c].gotoReserve=!0,1==b.giftList[c].status||4==b.giftList[c].status||5==b.giftList[c].status||6==b.giftList[c].status?b.giftList[c].canReserve=!1:(b.giftList[c].giftStatusText="Open for reservation​",b.giftList[c].canReserve=!0)):b.giftList[c].gotoReserve=!1;if(b.redeemStartTime>b.currDate)for(var c=0;c<b.giftList.length;c++)b.giftList[c].giftStatusText="Coming soon",b.giftList[c].status=1;if(b.currDate>b.redeemEndTime)for(var c=0;c<b.giftList.length;c++)b.giftList[c].giftStatusText="Expired",b.giftList[c].status=5;b.$apply()})}})},b.gotoGiftDetail=function(a){b.form.gift=a,c.path("main/giftDetailExpired")},b.init=function(){b.getCampaignDetail()},b.init()}var StampsDetailExpiredCtrl=["$filter","$scope","$location","$translate","$state","$timeout","form","shoppoDialog",stampsDetailExpiredCtrl];angular.module("shoppoweb").controller("StampsDetailExpiredCtrl",StampsDetailExpiredCtrl);