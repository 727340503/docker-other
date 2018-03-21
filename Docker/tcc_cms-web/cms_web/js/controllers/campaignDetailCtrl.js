function campaignDetailCtrl(a,b,c,d,e,f,g,h){if(a.form=e,a.cancel=function(){f.path("/main/campaignList")},a.merchantListEvent=function(){var b=apiDomain+getMerchantListApi,c=copyData(a.form.userInfo);c.startRow=0,c.maxRows=1e6,c.sortType="ASC",c.sortField="id",$.ajax({type:a.form.postType,url:b,context:document.body,data:c,success:function(b){apiResultsProcessingFun(b,function(){a.merchantList=b.resultList,a.$apply()})}})},a.getMerchantDetail=function(b){var c=apiDomain+getMerchantDetailApi,d=copyData(a.form.userInfo);d.merchantId=b,$.ajax({type:a.form.postType,url:c,context:document.body,data:d,success:function(b){apiResultsProcessingFun(b,function(){for(var c=0;c<a.form.languageList.length;c++)a.form.languageList[c].select=!1;a.merchantDetail=b.result;for(var c=0;c<a.merchantDetail.merchantLangMapList.length;c++){a.merchantDetail.merchantLangMapList[c].isDefault&&(a.defaultLanguage=a.merchantDetail.merchantLangMapList[c].langCode);for(var d=0;d<a.form.languageList.length;d++)a.merchantDetail.merchantLangMapList[c].langCode==a.form.languageList[d].langCode&&(a.form.languageList[d].select=!0)}a.$apply()})}})},a.getCampaignDetail=function(){var b=apiDomain+getCampaignDetailApi,c=copyData(a.form.userInfo);c.campaignId=a.form.campaignId,$.ajax({type:a.form.postType,url:b,context:document.body,data:c,success:function(b){apiResultsProcessingFun(b,function(){a.campaignDetail=b.result,a.campaignDetail.status+="",a.campaignDetail.merchantId+="",a.campaignDetail.inappOpen+="",a.pageLanguage=a.campaignDetail.campaignLangMaps[0].langCode,a.campaignDetail.langData=a.campaignDetail.campaignLangMaps[0],a.campaignDetail.langData.bgColor&&(a.backgroundType="1"),1==a.form.systemUserRole.roleType?a.merchantListEvent():(a.campaignDetail.merchantId=a.form.merchantId,a.getMerchantDetail(a.form.merchantId)),a.$apply()})}})},a.selectPageLang=function(){d(function(){for(var b=0;b<a.campaignDetail.campaignLangMaps.length;b++)a.campaignDetail.campaignLangMaps[b].langCode==a.pageLanguage&&(a.campaignDetail.langData=a.campaignDetail.campaignLangMaps[b])})},a.createCampaign=function(){if(a.campaignDetail.prmBannerUrl)if(a.campaignDetail.prmBannerUrl.indexOf("http://")<0&&a.campaignDetail.prmBannerUrl.indexOf("https://")<0)var b="http://"+a.campaignDetail.prmBannerUrl;else b=a.campaignDetail.prmBannerUrl;var c=apiDomain+createCampaignApi,d=copyData(a.form.userInfo);d.merchantId=a.campaignDetail.merchantId,d.startTime=a.campaignDetail.startTime,d.endTime=a.campaignDetail.endTime,d.collStartTime=a.campaignDetail.collStartTime,d.collEndTime=a.campaignDetail.collEndTime,d.redeemStartTime=a.campaignDetail.redeemStartTime,d.redeemEndTime=a.campaignDetail.redeemEndTime,d.status=a.campaignDetail.status,d.stampRatio=a.campaignDetail.stampRatio,d.grantStampQty=a.campaignDetail.grantStampQty,d.grantType=a.campaignDetail.grantType,d.prmBannerUrl=b,d.inappOpen=a.campaignDetail.inappOpen,d.langData=[],d.langData.push({name:a.campaignDetail.langData.name,coverImg:a.coverImg,bgImg:a.bgImg,bgColor:a.campaignDetail.langData.bgColor,prmBannerImg:a.prmBannerImg,terms:a.campaignDetail.langData.terms,descr:a.campaignDetail.langData.descr,langCode:a.defaultLanguage}),d.langData=angular.toJson(d.langData),$.ajax({type:a.form.postType,url:c,context:document.body,data:d,success:function(b){apiResultsProcessingFun(b,function(){a.alert("success"," ","Success！"),a.form.campaignId=b.result.id,a.init()})}})},a.checkGrantType=function(){1==a.campaignDetail.grantType?a.campaignDetail.grantType=0:a.campaignDetail.grantType=1},a.updateCampaign=function(){if(a.campaignDetail.prmBannerUrl)if(a.campaignDetail.prmBannerUrl.indexOf("http://")<0&&a.campaignDetail.prmBannerUrl.indexOf("https://")<0)var b="http://"+a.campaignDetail.prmBannerUrl;else b=a.campaignDetail.prmBannerUrl;var c=apiDomain+updateCampaignApi,d=copyData(a.form.userInfo);a.campaignDetail.updatedTime&&(d.updatedTime=a.campaignDetail.updatedTime),d.campaignId=a.form.campaignId,d.merchantId=a.campaignDetail.merchantId,d.startTime=a.campaignDetail.startTime,d.endTime=a.campaignDetail.endTime,d.collStartTime=a.campaignDetail.collStartTime,d.collEndTime=a.campaignDetail.collEndTime,d.redeemStartTime=a.campaignDetail.redeemStartTime,d.redeemEndTime=a.campaignDetail.redeemEndTime,d.status=a.campaignDetail.status,d.stampRatio=a.campaignDetail.stampRatio,d.grantStampQty=a.campaignDetail.grantStampQty,d.grantType=a.campaignDetail.grantType,d.prmBannerUrl=b,d.inappOpen=a.campaignDetail.inappOpen,d.langData=[{id:a.campaignDetail.langData.id,name:a.campaignDetail.langData.name,coverImg:a.coverImg,bgImg:a.bgImg,bgColor:a.campaignDetail.langData.bgColor,terms:a.campaignDetail.langData.terms,descr:a.campaignDetail.langData.descr,langCode:a.campaignDetail.langData.langCode}],d.langData=angular.toJson(d.langData),$.ajax({type:a.form.postType,url:c,context:document.body,data:d,success:function(b){apiResultsProcessingFun(b,function(){a.alert("success"," ","Success！"),a.getCampaignDetail()})}})},a.form.campaignId)var i={};else var i={cover:{required:!0}};$("#campaignInfo").validate({errorPlacement:function(a,b){b.parent().after(a)},rules:i,messages:{},submitHandler:function(b){a.form.campaignId?a.updateCampaign():a.createCampaign()}}),a.$watch("campaignDetail.grantStampQty",function(b,c){new RegExp("^[0-9]*$").test(b)?a.campaignDetail.grantStampQty=b:a.campaignDetail.grantStampQty=c,""!=b&&b||(a.campaignDetail.grantStampQty="")}),a.$watch("campaignDetail.stampRatio",function(b,c){new RegExp("^[0-9]*$").test(b)?a.campaignDetail.stampRatio=b:a.campaignDetail.stampRatio=c,""!=b&&b||(a.campaignDetail.stampRatio="")}),a.getStampDetail=function(){var b=apiDomain+getStampListApi,c=copyData(a.form.userInfo);c.campaignId=a.form.campaignId,$.ajax({type:a.form.postType,url:b,context:document.body,data:c,success:function(b){apiResultsProcessingFun(b,function(){if(b.result.length>0){a.stampDetail=[];for(var c=0;c<b.result.length;c++)for(var d=0;d<b.result[c].stampLangMaps.length;d++)b.result[c].stampLangMaps[d].langCode==a.pageLanguage&&a.stampDetail.push({stampId:b.result[c].id,id:b.result[c].stampLangMaps[d].id,stampImg:b.result[c].stampLangMaps[d].stampFullImg,fileName:b.result[c].stampLangMaps[d].stampImg})}else a.stampDetail=[{stampImg:""}];a.$apply()})}})},a.addNewStamp=function(){a.stampDetail.push({stampImg:""})},a.updateStamp=function(){for(var b=[],c=0;c<a.stampDetail.length;c++)b.push({}),b[c].stampImg=a.stampDetail[c].stampImg,b[c].langCode=a.pageLanguage,a.stampDetail[c].fileName&&(b[c].stampImg=a.stampDetail[c].fileName),a.stampDetail[c].id&&(b[c].id=a.stampDetail[c].id);var d=apiDomain+updateStampApi,e=copyData(a.form.userInfo);e.campaignId=a.form.campaignId,e.langData=angular.toJson(b),$.ajax({type:a.form.postType,url:d,context:document.body,data:e,success:function(b){apiResultsProcessingFun(b,function(){a.alert("success"," ","Success！"),a.getStampDetail()})}})},a.createStamp=function(){for(var b=0;b<a.stampDetail.length;b++)a.stampDetail[b].langCode=a.pageLanguage;var c=apiDomain+createStampApi,d=copyData(a.form.userInfo);d.campaignId=a.form.campaignId,d.langData=angular.toJson(a.stampDetail),$.ajax({type:a.form.postType,url:c,context:document.body,data:d,success:function(b){apiResultsProcessingFun(b,function(){a.alert("success"," ","Success！"),a.getStampDetail()})}})},a.deleteStampApi=function(b,c){var d=apiDomain+deleteStampApi,e=copyData(a.form.userInfo);e.stampIds=b,e.campaignId=a.form.campaignId,$.ajax({type:a.form.postType,url:d,context:document.body,data:e,success:function(b){apiResultsProcessingFun(b,function(){a.stampDetail.splice(c,1)})}})},a.deleteStamp=function(b,c){b&&a.deleteUser(b),a.stampDetail.splice(c,1)},a.deleteStamp=function(b,c){function d(a,d,e,f,g){a.showOk=!0,a.msg=g("translate")("AreYouSure"),a.cancel=function(){d.dismiss("cancel")},a.ok=function(){b?a.deleteStampApi(b,c):a.stampDetail.splice(c,1),d.dismiss("cancel")}}var e=["$scope","$modalInstance","$state","$translate","$filter",d];g.open({templateUrl:"pages/common/warningDlg.html",controller:e,scope:a})},$("#StampForm").validate({errorPlacement:function(a,b){b.parent().after(a)},rules:{},messages:{},submitHandler:function(b){a.updateStamp()}}),a.stampSubmit=function(){$("#StampForm").submit()},a.campaignSubmit=function(){$("#campaignInfo").submit()},a.changeTab=function(b){a.form.campaignId&&d(function(){$(".tab"+b).parent().find("a").click()})},a.form.rewardTab&&(a.changeTab(3),a.form.rewardTab=!1),a.showTab=function(b,c){switch(b.preventDefault(),c){case"stamp":a.showStamp=!0,a.getStampDetail(),d(function(){$(b.target).tab("show")},10);break;case"Reward":a.Reward=!0,a.search(),d(function(){$(b.target).tab("show")},10)}},a.showStamp=!1,a.Reward=!1,a.uploadFinish=function(b,c){"coverInput"==b||"coverInput2"==b?(a.campaignDetail.langData.coverImg=c.fullName,a.coverImg=c.fileName):"bgInput"==b?(a.campaignDetail.langData.bgImg=c.fullName,a.bgImg=c.fileName):"prmBannerInput"==b&&(a.campaignDetail.langData.prmBannerImg=c.fullName,a.prmBannerImg=c.fileName),a.$apply()},a.uploadStampFinish=function(b,c){var d=b.replace(/stampInput/,"");a.stampDetail[d].stampImg=c.fullName,a.stampDetail[d].fileName=c.fileName,a.$apply()};var j={pageNumber:1,pageSize:30,sort:null},k=!1;a.checkPermission("CAMPAIGN_REWARD_LIST_DELETE")&&(k=!0),a.gridOptions={paginationPageSize:30,enableVerticalScrollbar:0,enableGridMenu:!1,useExternalPagination:!0,useExternalSorting:!0,enableColumnResizing:!0,enableFullRowSelection:!1,enablePaginationControls:!1,multiSelect:!1,modifierKeysToMultiSelect:!1,noUnselect:!1,rowHeight:48,enableRowSelection:!0,enableRowHeaderSelection:k,rowTemplate:'<div ios-dblclick="grid.appScope.onDblClick(row)" ng-repeat="(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name" class="ui-grid-cell" ng-class="{ \'ui-grid-row-header-cell\': col.isRowHeader }" ui-grid-cell ></div>',columnDefs:[{name:"Reward name",field:"name",minWidth:70,width:130,enableSorting:!0,enableColumnResizing:!0,headerCellClass:"myTableHeader"},{name:"Status",field:"status",minWidth:100,width:175,enableSorting:!1,enableColumnResizing:!0,headerCellClass:"myTableHeader"},{name:"Reservation on/off",field:"isReservation",minWidth:100,width:175,enableSorting:!1,enableColumnResizing:!0,headerCellClass:"myTableHeader"},{name:"Created time",field:"createdTime",minWidth:20,width:140,enableSorting:!0,enableColumnResizing:!0,headerCellClass:"myTableHeader"}],onRegisterApi:function(b){a.gridApi=b,a.gridApi.core.on.sortChanged(a,function(b,c){if(0==c.length)a.sortField="id",a.sortType="ASC";else{for(;c.length>1;)c[0].unsort(),c.shift();a.sortField=c[0].field,a.sortType=c[0].sort.direction.toUpperCase()}l()}),b.pagination.on.paginationChanged(a,function(a,b){j.pageNumber=a,j.pageSize=b,l()}),a.onDblClick=function(b){a.form.newGift=!1,a.form.giftId=b.entity.giftId,a.form.rewardName=b.entity.name,f.path("/main/rewardRuleDetail")},b.pagination.displayPage=function(){var a=[],c=0,d=b.pagination.getTotalPages(),e=5;b.pagination.getTotalPages()>e&&(b.pagination.getPage()>Math.ceil(e/2)?(c=b.pagination.getPage()-Math.ceil(e/2),d=b.pagination.getPage()+Math.floor(e/2),b.pagination.getPage()>b.pagination.getTotalPages()-Math.floor(e/2)&&(c=b.pagination.getTotalPages()-e),d>b.pagination.getTotalPages()&&(d=b.pagination.getTotalPages())):d=e);for(var f=c;f<d;f++)a.push(f+1);return a}}},a.getTableHeight=function(){var b=a.gridOptions.rowHeight;return{height:a.gridOptions.data.length*b+68+"px"}},a.addCampaignReward=function(){a.form.newGift=!0,a.form.giftId="",a.form.rewardName="",a.form.merchantId=a.campaignDetail.merchantId,f.path("/main/rewardRuleDetail")};var l=function(){var b=(j.pageNumber-1)*j.pageSize,c=j.pageSize,d=b+c,e=apiDomain+getCampaignGiftListApi,f=copyData(a.form.userInfo);f.campaignId=a.form.campaignId,f.langCode=a.searchLanguage,f.startRow=b,f.maxRows=c,f.sortType=a.sortType,f.sortField=a.sortField,$.ajax({type:a.form.postType,url:e,context:document.body,data:f,success:function(c){apiResultsProcessingFun(c,function(){a.gridOptions.totalItems=c.totalRows,a.gridOptions.data=c.resultList,a.gridOptions.startItem=b+1,d>a.gridOptions.totalItems&&(d=a.gridOptions.totalItems),0==a.gridOptions.totalItems&&(a.gridOptions.startItem=0),a.gridOptions.endItem=d,a.gridOptions.data.forEach(function(b,c){b.status=a.mappingStatus(b.status),b.isReservation=a.mappingReservation(b.isReservation)}),a.$apply(),$(".ui-grid-row").css("cursor","pointer")})}})};a.mappingReservation=function(a){var b="";switch(a){case 0:b="off";break;case 1:b="on";break;default:b=a}return b},a.mappingStatus=function(a){var b="";switch(a){case 2:b=h("translate")("available");break;case 3:b=h("translate")("low stock");break;case 4:b=h("translate")("out of stock");break;case 6:b=h("translate")("Inactive");break;default:b=a}return b},a.deleteRelated=function(){function b(a,b,c,d,e){a.showOk=!0,a.msg=e("translate")("AreYouSure"),a.cancel=function(){b.dismiss("cancel")},a.ok=function(){a.deleteUserAction(),b.dismiss("cancel")}}if(0==a.gridApi.selection.getSelectedRows().length)return void a.alert("warning"," ","Please select the data first！");var c=["$scope","$modalInstance","$state","$translate","$filter",b];g.open({templateUrl:"pages/common/warningDlg.html",controller:c,scope:a})},a.deleteUserAction=function(){for(var b=a.gridApi.selection.getSelectedRows(),c=[],d=0;d<b.length;d++)c.push(b[d].id);var e=c.join(","),f=apiDomain+delCampaignGiftMapApi,g=copyData(a.form.userInfo);g.ids=e,$.ajax({type:a.form.postType,url:f,context:document.body,data:g,success:function(b){apiResultsProcessingFun(b,function(){a.alert("success"," ","Success！"),a.search(),a.$apply()})}})},a.search=function(){a.sortField="id",a.sortType="ASC",l()},a.selectBgType=function(){0==a.backgroundType?a.campaignDetail.langData.bgColor="":(a.bgImg="",a.campaignDetail.langData.bgImg="")},a.scrollTo=function(b,c){a.gridApi.core.scrollTo(a.gridOptions.data[b],a.gridOptions.columnDefs[c])},a.init=function(){a.form.campaignId?a.getCampaignDetail():(a.campaignDetail={status:"",merchantId:"",grantType:0,langData:{},inappOpen:"1"},1==a.form.systemUserRole.roleType?a.merchantListEvent():(a.campaignDetail.merchantId=a.form.merchantId,a.getMerchantDetail(a.form.merchantId))),a.backgroundType="0",$("#cp2").colorpicker()},a.init();var m=$("#datetimepicker1"),n=$("#datetimepicker2");$("#datetimepicker3"),$("#datetimepicker4");m.on("dp.change",function(b){d(function(){a.campaignDetail.collStartTime=a.campaignDetail.startTime,a.$apply()})}),n.on("dp.change",function(b){d(function(){a.campaignDetail.redeemEndTime=a.campaignDetail.endTime,a.$apply()})})}var CampaignDetailCtrl=["$scope","$translate","$state","$timeout","form","$location","$modal","$filter",campaignDetailCtrl];angular.module("keeperp").controller("CampaignDetailCtrl",CampaignDetailCtrl);