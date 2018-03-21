function stampsDetailCtrl($filter,$scope,$location,$translate,$state,$timeout,form,shoppoDialog){$scope.form=form,$scope.form.topBar.showTopBar=!0,$scope.form.topBar.showMenuBtn=!1,$scope.form.menuMerchantList=!0,$scope.form.topBar.topBarTitle=$translate.instant("Stamps"),$scope.form.bottomMenu=!1,$scope.form.topBar.showBackBtn=!0,$scope.expandcode=!1,$scope.form.topBar.showShareBtn=!0,$scope.$root.gotoShare=function(){sendGAEvent($scope.campaignInfo.name,"Sticker","Share",1);var a=$translate.instant("shareTitle1")+appName+$translate.instant("shareTitle2"),b=$scope.campaignInfo.coverImg,c="I am collecting stickers for the "+$scope.campaignInfo.name+" and I have a total of "+$scope.form.collectStampQty+" stickers. Start collecting, too! Download app here.";$scope.form.shareEvent(a,b,c)},$scope.isPopupGrant=!0,$scope.form.fromHomePage?$scope.form.topBar.lastPage="/main/landing":$scope.form.topBar.lastPage="/main/stampsCard",$scope.form.stampPageTab?($scope.chooseStamps=!0,$scope.chooseReward=!1):($scope.chooseStamps=!1,$scope.chooseReward=!0);var isFirst=!0;$scope.showCouponList=!1,$scope.showCode=!1,$scope.showSuccess=!1,$scope.form.collectStampQty,$scope.getCampaignDetail=function(){var a=copyData($scope.form.userInfo);a.campaignId=$scope.form.campaignId;var b=apiDomain+getCampaignDetail;$.ajax({type:AJAX_TYPE,data:a,url:b,context:document.body,success:function(a){apiResultsProcessingFun(a,function(){$scope.campaignInfo=a.result,$scope.form.campainTerms=$scope.campaignInfo.terms,$scope.collStartTime=getTimeStamp($scope.campaignInfo.collStartTime),$scope.collEndTime=getTimeStamp($scope.campaignInfo.collEndTime),$scope.redeemStartTime=getTimeStamp($scope.campaignInfo.redeemStartTime),$scope.redeemEndTime=getTimeStamp($scope.campaignInfo.redeemEndTime),$scope.startTime=getTimeStamp($scope.campaignInfo.startTime),$scope.endTime=getTimeStamp($scope.campaignInfo.endTime),$scope.currDate=getTimeStamp($scope.campaignInfo.currDate),$scope.campaignInfo.collStartTimeHours=getHourEvent($scope.campaignInfo.collStartTime),$scope.campaignInfo.collStartTimeMinute=getMinuteEvent($scope.campaignInfo.collStartTime),$scope.campaignInfo.collEndTimeHours=getHourEvent($scope.campaignInfo.collEndTime),$scope.campaignInfo.collEndTimeMinute=getMinuteEvent($scope.campaignInfo.collEndTime),$scope.campaignInfo.redeemStartTimeHours=getHourEvent($scope.campaignInfo.redeemStartTime),$scope.campaignInfo.redeemStartTimeMinute=getMinuteEvent($scope.campaignInfo.redeemStartTime),$scope.campaignInfo.redeemEndTimeHours=getHourEvent($scope.campaignInfo.redeemEndTime),$scope.campaignInfo.redeemEndTimeMinute=getMinuteEvent($scope.campaignInfo.redeemEndTime),$scope.collStartChange=!1,$scope.collEndChange=!1,$scope.redeemStartChange=!1,$scope.redeemEndChange=!1,"12"==$scope.form.hoursFormat&&($scope.campaignInfo.collStartTimeHours>12&&($scope.campaignInfo.collStartTimeHours-=12,$scope.collStartChange=!0),$scope.campaignInfo.collEndTimeHours>12&&($scope.campaignInfo.collEndTimeHours-=12,$scope.collEndChange=!0),$scope.campaignInfo.redeemStartTimeHours>12&&($scope.campaignInfo.redeemStartTimeHours-=12,$scope.redeemStartChange=!0),$scope.campaignInfo.redeemEndTimeHours>12&&($scope.campaignInfo.redeemEndTimeHours-=12,$scope.redeemEndChange=!0)),$scope.campaignInfo.redeemStartTime=formatDate($scope.campaignInfo.redeemStartTime,$scope.form.dateFormat),$scope.campaignInfo.redeemEndTime=formatDate($scope.campaignInfo.redeemEndTime,$scope.form.dateFormat),$scope.campaignInfo.collStartTime=formatDate($scope.campaignInfo.collStartTime,$scope.form.dateFormat),$scope.campaignInfo.collEndTime=formatDate($scope.campaignInfo.collEndTime,$scope.form.dateFormat),$scope.campaignInfo.bgImg?$scope.form.stampsCardBgImg=$scope.campaignInfo.bgImg:$scope.campaignInfo.bgColor||($scope.form.stampsCardBgImg="images/stamp_collection_default.png"),$scope.campaignInfo.bgImg?($scope.campainBgImg="url("+$scope.campaignInfo.bgImg+")",$("#campaign").css("background-image",$scope.campainBgImg)):$scope.campaignInfo.bgColor?$("#campaign").css("background-color",$scope.campaignInfo.bgColor):$("#campaign").css("background-image","url(images/stamp_collection_default.png)"),$scope.startTime<$scope.currDate&&$scope.currDate<$scope.endTime?$scope.canTransfer=!0:$scope.canTransfer=!1,$scope.collStartTime<=$scope.currDate&&$scope.currDate<=$scope.collEndTime?$scope.canCollect=!0:$scope.canCollect=!1,$scope.redeemStartTime<=$scope.currDate&&$scope.currDate<=$scope.redeemEndTime?$scope.form.canRedeem=!0:$scope.form.canRedeem=!1,$scope.getUserStampCard(),$scope.$apply()})}})},$scope.show=function(a){"none"==$("#expandcode"+a).css("display")?($("#expandcode"+a).css("display","block"),$(".icon-arrow"+a).addClass("down")):($("#expandcode"+a).css("display","none"),$(".icon-arrow"+a).removeClass("down"))},$scope.setStampsTabStyle=function(){setTimeout(function(){var a=$(".img-responsive img").height();$scope.canCollect?fixedPosition("stampCardExtra",a+125):fixedPosition("stampCardExtra",a+85),$(".stampsModule").height($(".stampsModule").width()),$(".stampsModule img").width($(".stampsModule").width()+2);for(var b=$(".stampsModule").find("img"),c=0;c<=b.length;c++){var d=Math.round(60*Math.random()-30);$(b[c]).css("transform","rotate("+d+"deg)")}})},$scope.getUserStampCard=function(){var a=copyData($scope.form.userInfo);a.stampCardId=$scope.form.stampCardId,a.campaignId=$scope.form.campaignId;var b=apiDomain+getUserStampCard;$.ajax({type:AJAX_TYPE,data:a,url:b,context:document.body,success:function(a){apiResultsProcessingFun(a,function(){$scope.stampsCardInfo=a.result,$scope.form.collectStampQty=$scope.stampsCardInfo.collectStampQty,$scope.getListUserStamp(),$scope.setStamp($scope.stampsCardInfo.collectStampQty),$timeout(function(){$scope.instanceEvent()},500),$scope.campaignInfo.grantStampQty>0&&$scope.canTransfer&&(1==$scope.campaignInfo.grantType&&0==$scope.stampsCardInfo.isGrant||1!=$scope.campaignInfo.grantType&&0==$scope.stampsCardInfo.isPopGrant)&&$scope.isPopupGrant&&$scope.chooseStamps&&($scope.isPopupGrant=!1,$scope.preGrantEvent()),$scope.$apply()})}})},$scope.getListUserStamp=function(){var a=copyData($scope.form.userInfo);a.userStampCardId=$scope.stampsCardInfo.id;var b=apiDomain+listUserStamp;$.ajax({type:AJAX_TYPE,data:a,url:b,context:document.body,success:function(a){apiResultsProcessingFun(a,function(){$scope.userStamps=a.result,$scope.getListGift();for(var b=0;b<$scope.userStamps.length;b++)$scope.stamps[b]&&($scope.stamps[b].stampImg=$scope.userStamps[b].stampImg);isFirst=!0,$scope.$apply()})}})},$scope.preGrantEvent=function(){$scope.isGrant=!0,$scope.preGrant=!0,$scope.grant=!1,$scope.closeThisDialog=function(){$scope.isGrant=!1,$scope.preGrant=!1,$scope.grant=!1,$scope.getUserStampCard()},shoppoDialog($scope,{templateUrl:"pages/common/JsBarcode128Dlg.html?rnd="+rndver,preCloseCallback:$scope.closeThisDialog})},$scope.grantEvent=function(){var a=copyData($scope.form.userInfo);a.userStampCardId=$scope.stampsCardInfo.id;var b=apiDomain+grantUserStamp;$.ajax({type:AJAX_TYPE,data:a,url:b,context:document.body,success:function(a){apiResultsProcessingFun(a,function(){$scope.openGrant(),$scope.$apply()})}})},$scope.openGrant=function(){$scope.grantStampQty=$scope.campaignInfo.grantStampQty,$scope.isGrant=!0,$scope.preGrant=!1,$scope.grant=!0},$scope.showStamps=function(){$scope.chooseStamps=!0,$scope.chooseReward=!1,$scope.getUserStampCard(),setTimeout(function(){$(".stampsModule").height($(".stampsModule").width()),$(".stampsModule").css("line-height",$(".stampsModule").width()+"px")},60),$scope.setStampsTabStyle()},$scope.showReward=function(){$scope.chooseStamps=!1,$scope.chooseReward=!0,fixedPosition("reward-wrapper",$(".img-responsive").height()+61)},$scope.openLink=function(){$location.path("main/game")},$scope.goTNC=function(){$scope.form.stampPageTab=!1,$scope.form.expired=!1,$location.path("main/terms")},$scope.gotoGiftDetail=function(a){$scope.form.gift=a,$scope.form.stampPageTab=!1,sendGAEvent(a.name,"RewardList-Reward","click",1),$scope.form.gift.gotoReserve?$location.path("main/giftDetailReserve"):$location.path("main/giftDetail")},$scope.$root.gotoLastPage=function(){$location.path($scope.form.topBar.lastPage)},$scope.fixPositionBug=function(){$("body").css("height","+=9999").css("height","-=9999")},$scope.getFriendslist=function(){var a=copyData($scope.form.userInfo),b=apiDomain+listUserFriend;$.ajax({type:AJAX_TYPE,data:a,url:b,context:document.body,success:function(a){apiResultsProcessingFun(a,function(){$scope.friendsList=a.result.listUserFriend,$scope.requestFriendsList=a.result.listUserRequsetFriend;for(var b=0;b<$scope.friendsList.length;b++)$scope.friendsList[b].icon||($scope.friendsList[b].icon="images/user_default_photo.png");$scope.$apply()})}})},$scope.transfer=function(){isFirst&&(isFirst=!1,$scope.transferStamps=!0,$scope.inputNumber=!0,$scope.selectFriend=!1,$scope.transferConfirm=!1,$scope.transferComplete=!1,$scope.form.transferNum=null,$scope.getFriendslist(),sendGAEvent("","Sticker-Transfer","click",1),$scope.closeThisDialog=function(){$scope.transferStamps=!1,$scope.inputNumber=!1,$scope.selectFriend=!1,$scope.transferConfirm=!1,$scope.transferComplete=!1,isFirst=!0},shoppoDialog($scope,{templateUrl:"pages/common/JsBarcode128Dlg.html?rnd="+rndver,preCloseCallback:$scope.closeThisDialog}))},$scope.showFriendsList=function(){$scope.form.transferNum&&$scope.form.transferNum<=$scope.form.collectStampQty-$scope.stampsCardInfo.grantStampQty&&($scope.inputNumber=!1,$scope.selectFriend=!0,$scope.transferConfirm=!1,$scope.transferComplete=!1)},$scope.chooseFriend=function(a,b){var c=a+"";$(".chooseFriend_"+c).hasClass("checked")?($(".chooseFriend_"+c).removeClass("checked"),$scope.transUserId=void 0):($(".circle-check").removeClass("checked"),$(".chooseFriend_"+c).addClass("checked"),$scope.transferFriendName=b.userName,$scope.transferFriendImg=b.icon,$scope.transUserId=b.userId)},$scope.showTransferConfirm=function(){$scope.transUserId&&($scope.inputNumber=!1,$scope.selectFriend=!1,$scope.transferConfirm=!0,$scope.transferComplete=!1)};var isTransferFirst=!0;$scope.showTransferComplete=function(a){if(isTransferFirst){isTransferFirst=!1;var b=copyData($scope.form.userInfo);b.stampCardId=$scope.stampsCardInfo.stampCardId,b.campaignId=$scope.form.campaignId,b.transUserId=$scope.transUserId,b.transStampsQty=a;var c=apiDomain+transferStamp;$.ajax({type:AJAX_TYPE,data:b,url:c,context:document.body,success:function(a){apiResultsProcessingFun(a,function(){var a=copyData($scope.form.userInfo);a.stampCardId=$scope.form.stampCardId,a.campaignId=$scope.form.campaignId;var b=apiDomain+getUserStampCard,b=apiDomain+getUserStampCard;$.ajax({type:AJAX_TYPE,data:a,url:b,context:document.body,success:function(a){apiResultsProcessingFun(a,function(){$scope.stampsCardInfo=a.result,$scope.form.collectStampQty=$scope.stampsCardInfo.collectStampQty,$scope.inputNumber=!1,$scope.selectFriend=!1,$scope.transferConfirm=!1,$scope.transferComplete=!0,isTransferFirst=!0,$scope.$apply()})}}),$scope.$apply()})}})}},$scope.gotoAddfriends=function(){$scope.form.isFromUser=!1,$scope.form.isFromStampsDetail=!0,$location.path("main/addFriends")},$scope.redeemCoupon=function(){$scope.form.redeemCouponStampCardId=$scope.stampsCardInfo.stampCardId,$scope.form.redeemCouponCollectCode=$scope.stampsCardInfo.collectCode,$location.path("main/redeemCoupon")},$scope.collectStamp=function(){$scope.form.collectCode=$scope.stampsCardInfo.collectCode,$location.path("main/scanCollectCode")},$scope.showJsBarcode128=function(){if(isFirst){isFirst=!1;var a=copyData($scope.form.userInfo);a.collectCode=$scope.stampsCardInfo.collectCode;var b=apiDomain+clearCollectCodeStatus;sendGAEvent(a.collectCode,"Sticker-Collect","collect",1),$.ajax({type:AJAX_TYPE,data:a,url:b,context:document.body,success:function(a){apiResultsProcessingFun(a,function(){$scope.showCouponList=!1,$scope.showCode=!0,$scope.showSuccess=!1,$scope.qrCode=$scope.stampsCardInfo.collectCode,$scope.barCode=$scope.stampsCardInfo.collectCode,$scope.getCouponList(),$scope.$apply()})}})}},$scope.getCouponList=function(){var postData=copyData($scope.form.userInfo),listUserCouponApiUrl=apiDomain+listUserCoupon;$.ajax({type:AJAX_TYPE,data:postData,url:listUserCouponApiUrl,context:document.body,success:function(data){apiResultsProcessingFun(data,function(){if($scope.userCoupon=data.result,$scope.userCoupon.length>0){$scope.showCouponList=!0,$scope.showCode=!1,$scope.showSuccess=!1,$scope.couponQrCode=[],$scope.couponBarCode=[];for(var i=0;i<$scope.userCoupon.length;i++)eval("$scope.couponQrCode"+i+" = $scope.userCoupon[i].qrCode"),eval("$scope.couponBarCode"+i+" = $scope.userCoupon[i].qrCode");$scope.qrCode=$scope.stampsCardInfo.collectCode,$scope.barCode=$scope.stampsCardInfo.collectCode,$scope.showCodeTotal()}else $scope.showCouponList=!1,$scope.showCode=!0,$scope.showSuccess=!1,$scope.qrCode=$scope.stampsCardInfo.collectCode,$scope.barCode=$scope.stampsCardInfo.collectCode,$scope.showCodeTotal();$scope.$apply()})}})},$scope.toShowCode=function(){$scope.showCouponList=!1,$scope.showCode=!0,$scope.showSuccess=!1,$scope.qrCode=$scope.collectCode,$scope.barCode=$scope.collectCode},$scope.showCodeTotal=function(){$scope.JsBarcode=!0,$scope.closeThisDialog=function(){$scope.JsBarcode128="",$scope.JsBarcode=!1,$scope.showCouponList=!0,$scope.showCoupon=!1,$scope.showCode=!1,$scope.showSuccess=!1,$scope.getUserStampCard(),isFirst=!0},shoppoDialog($scope,{templateUrl:"pages/common/JsBarcode128Dlg.html?rnd="+rndver,preCloseCallback:$scope.closeThisDialog})},$scope.toShowSuccess=function(){var a=copyData($scope.form.userInfo);a.collectCode=$scope.stampsCardInfo.collectCode;var b=apiDomain+getUserCollectStampMsg;$.ajax({type:AJAX_TYPE,data:a,url:b,context:document.body,success:function(a){apiResultsProcessingFun(a,function(){$scope.posData=a.result,$scope.posMessage=a.result.msg,$scope.showRefresh=!1,$scope.haveScan=!1,0==$scope.posData.isScan?($scope.showRefresh=!0,$scope.haveScan=!1):1==$scope.posData.isScan&&($scope.showRefresh=!1,$scope.haveScan=!0,0==$scope.posData.scanStatus?($scope.posSuccess=!1,$scope.errorMsg=$scope.posMessage):1==$scope.posData.scanStatus&&($scope.posSuccess=!0),$scope.qrCode="",$scope.barCode=""),$scope.showCouponList=!1,$scope.showCode=!1,$scope.showSuccess=!0,$scope.getUserStampCard(),$scope.$apply()})}})},$scope.reFreshActive=function(){$scope.toShowSuccess()},$scope.setStamp=function(a){var b=a%50;$scope.stampNum="",a<=50?($scope.stampNum=50,$scope.stampNum=parseInt($scope.stampNum)):($scope.stampNum=a-b+50,$scope.stampNum=parseInt($scope.stampNum)),0!=$scope.stampNum&&$scope.stampNum?$scope.startNum=$scope.stampNum-49:($scope.startNum=1,$scope.stampNum=50),$scope.stamps={};for(var c=$scope.startNum;c<=$scope.stampNum;c++)$scope.stamps[c-1]={},$scope.stamps[c-1].num=c;$scope.setStampsTabStyle()},$scope.instanceEvent=function(){$(".stampCardExtra").bind("scrollstop",function(){var a=$(".stampCardExtra").height(),b=$("#stampsList").height(),c=$(".stampCardExtra").scrollTop();if(c>=b-a){for(var d=$scope.stampNum;d<$scope.stampNum+50;d++)$scope.stamps[d]={},$scope.stamps[d].num=d+1;$scope.stampNum+=50,$scope.$apply();for(var d=0;d<$scope.userStamps.length;d++)$scope.stamps[d]&&($scope.stamps[d].stampImg=$scope.userStamps[d].stampImg);if($scope.stampNum-$scope.startNum>150){for(var d=$scope.startNum;d<$scope.startNum+50;d++)delete $scope.stamps[d-1];$scope.startNum+=50}$scope.$apply(),$scope.setStampsTabStyle(),$timeout(function(){$(".stampCardExtra").scrollTop(20*($("#stampsList").find("li").width()+10)-a)})}if(c<=0&&$scope.startNum>50){for(var d=$scope.startNum-50;d<=$scope.startNum-1;d++)$scope.stamps[d-1]={},$scope.stamps[d-1].num=d;for(var d=0;d<$scope.userStamps.length;d++)$scope.stamps[d]&&($scope.stamps[d].stampImg=$scope.userStamps[d].stampImg);if($scope.startNum-=50,$scope.stampNum-$scope.startNum>150){for(var d=$scope.stampNum-50;d<$scope.stampNum;d++)delete $scope.stamps[d];$scope.stampNum-=50}$scope.setStampsTabStyle(),$scope.$apply(),$timeout(function(){$(".stampCardExtra").scrollTop(10*($("#stampsList").find("li").width()+10))})}})},$scope.getListGift=function(){var a=copyData($scope.form.userInfo);a.campaignId=$scope.form.campaignId;var b=apiDomain+listGift;$.ajax({type:AJAX_TYPE,data:a,url:b,context:document.body,success:function(a){apiResultsProcessingFun(a,function(){$scope.giftList=a.result,$scope.giftList[0]&&($scope.nowTime=new Date(Date.parse($scope.giftList[0].currDate.replace(/-/g,"/"))),$scope.nowTime=$scope.nowTime.getTime());for(var b=0;b<$scope.giftList.length;b++)1==$scope.giftList[b].status?$scope.giftList[b].giftStatusText="Coming soon":2==$scope.giftList[b].status?$scope.giftList[b].giftStatusText="Available​":3==$scope.giftList[b].status?$scope.giftList[b].giftStatusText="Available in select stores​":4==$scope.giftList[b].status?$scope.giftList[b].giftStatusText="Out of stock":5==$scope.giftList[b].status?$scope.giftList[b].giftStatusText="Expired":6==$scope.giftList[b].status&&($scope.giftList[b].giftStatusText="Inactive"),1==$scope.giftList[b].isReservation?($scope.giftList[b].gotoReserve=!0,1==$scope.giftList[b].status||5==$scope.giftList[b].status||6==$scope.giftList[b].status?$scope.giftList[b].canReserve=!1:($scope.giftList[b].giftStatusText="Open for reservation​",$scope.giftList[b].canReserve=!0)):$scope.giftList[b].gotoReserve=!1;if($scope.redeemStartTime>$scope.currDate)for(var b=0;b<$scope.giftList.length;b++)$scope.giftList[b].giftStatusText="Coming soon",$scope.giftList[b].status=1;if($scope.currDate>$scope.redeemEndTime)for(var b=0;b<$scope.giftList.length;b++)$scope.giftList[b].giftStatusText="Expired",$scope.giftList[b].status=5;$scope.$apply()})}})},$scope.$watch("form.transferNum",function(a,b){new RegExp("[1-9][0-9]*$").test(a)?$scope.form.transferNum=a:$scope.form.transferNum=b,""!=a&&a||($scope.form.transferNum="")}),$scope.init=function(){$scope.getCampaignDetail()},$scope.init()}var StampsDetailCtrl=["$filter","$scope","$location","$translate","$state","$timeout","form","shoppoDialog",stampsDetailCtrl];angular.module("shoppoweb").controller("StampsDetailCtrl",StampsDetailCtrl);