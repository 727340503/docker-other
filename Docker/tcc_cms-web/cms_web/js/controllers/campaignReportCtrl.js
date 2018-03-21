function campaignReportCtrl(a,b,c,d,e,f,g,h,i){a.langs=h.getAllLangs(),a.lang="zh-cn",a.form.showSaveBtn=!1;var j={pageNumber:1,pageSize:30,sort:null};a.gridOptions={paginationPageSize:30,enableVerticalScrollbar:0,enableGridMenu:!1,useExternalPagination:!0,useExternalSorting:!0,enableColumnResizing:!0,enableFullRowSelection:!1,enablePaginationControls:!1,multiSelect:!1,modifierKeysToMultiSelect:!1,noUnselect:!1,rowHeight:48,enableRowSelection:!0,enableRowHeaderSelection:!1,rowTemplate:'<div ios-dblclick="grid.appScope.onDblClick(row)" ng-repeat="(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name" class="ui-grid-cell" ng-class="{ \'ui-grid-row-header-cell\': col.isRowHeader }" ui-grid-cell ></div>',columnDefs:[{name:"Total no. of stamp issuance",field:"totalStamps",minWidth:100,width:200,enableSorting:!1,enableColumnResizing:!0,headerCellClass:"myTableHeader"},{name:"Total no. of stamp used",field:"totalUsedStamps",minWidth:100,width:200,enableSorting:!1,headerCellClass:"myTableHeader"},{name:"Total no. of redemption item",field:"totalRedemptionCount",minWidth:100,width:200,enableSorting:!1,enableColumnResizing:!0,headerCellClass:"myTableHeader"},{name:"Total no. of reservation item",field:"totalReservationCount",minWidth:100,width:200,enableSorting:!1,headerCellClass:"myTableHeader"},{name:"Average no. of used stamps/ campaign user",field:"averageUsedStamps",minWidth:100,width:300,enableSorting:!1,enableColumnResizing:!0,headerCellClass:"myTableHeader"},{name:"Average no. of collected stamps/ campaign user",field:"averageCollectStamps",minWidth:100,width:350,enableSorting:!1,headerCellClass:"myTableHeader"},{name:"Average no. of redeemed awards/campaign user",field:"averageRedemptionCount",minWidth:100,width:350,enableSorting:!1,headerCellClass:"myTableHeader"},{name:"Total no. of coupon collected",field:"totalCollectCoupon",minWidth:100,width:200,enableSorting:!1,headerCellClass:"myTableHeader"},{name:"Total no. of active coupon",field:"totalActiveCoupon",minWidth:100,width:200,enableSorting:!1,headerCellClass:"myTableHeader"},{name:"Total no. of inactive coupon",field:"totalInactiveCoupon",minWidth:100,width:200,enableSorting:!1,headerCellClass:"myTableHeader"},{name:"Total no. of coupon used",field:"totalRedeemCoupon",minWidth:100,width:200,enableSorting:!1,headerCellClass:"myTableHeader"},{name:"Total no of coupon expired",field:"totalExpiredCoupon",minWidth:100,width:200,enableSorting:!1,headerCellClass:"myTableHeader"}],onRegisterApi:function(b){a.gridApi=b,a.gridApi.core.on.sortChanged(a,function(b,c){if(0==c.length)a.sortField="id",a.sortType="ASC";else{for(;c.length>1;)c[0].unsort(),c.shift();a.sortField=c[0].field,a.sortType=c[0].sort.direction.toUpperCase()}k()}),b.pagination.on.paginationChanged(a,function(a,b){j.pageNumber=a,j.pageSize=b,k()}),a.onDblClick=function(a){},b.pagination.displayPage=function(){var a=[],c=0,d=b.pagination.getTotalPages(),e=5;b.pagination.getTotalPages()>e&&(b.pagination.getPage()>Math.ceil(e/2)?(c=b.pagination.getPage()-Math.ceil(e/2),d=b.pagination.getPage()+Math.floor(e/2),b.pagination.getPage()>b.pagination.getTotalPages()-Math.floor(e/2)&&(c=b.pagination.getTotalPages()-e),d>b.pagination.getTotalPages()&&(d=b.pagination.getTotalPages())):d=e);for(var f=c;f<d;f++)a.push(f+1);return a}}},a.getTableHeight=function(){var b=a.gridOptions.rowHeight;return{height:a.gridOptions.data.length*b+68+"px"}};var k=function(){var b=(j.pageNumber,j.pageSize,j.pageSize,apiDomain+viewCampaignReportApi),c=copyData(a.form.userInfo);c.campaignId=a.campaignId,$.ajax({type:a.form.postType,url:b,context:document.body,data:c,success:function(b){apiResultsProcessingFun(b,function(){a.gridOptions.data=[],a.gridOptions.data.push(b.result),a.$apply(),a.scrollTo(0,0)})}})};a.search=function(){a.sortField="id",a.sortType="ASC",k()},a.export=function(){var b=apiDomain+exportCampaignReportApi+"?userId="+a.form.userInfo.userId+"&session="+a.form.userInfo.session+"&lang=en_US";b+="&campaignId="+a.campaignId,window.open(b)},a.scrollTo=function(b,c){a.gridApi.core.scrollTo(a.gridOptions.data[b],a.gridOptions.columnDefs[c])},a.merchantListEvent=function(){var b=apiDomain+getMerchantListApi,c=copyData(a.form.userInfo);c.startRow=0,c.maxRows=1e6,c.sortType="ASC",c.sortField="id",$.ajax({type:a.form.postType,url:b,context:document.body,data:c,success:function(b){apiResultsProcessingFun(b,function(){a.merchantList=b.resultList,a.merchantList.length&&(a.form.merchantId=a.merchantList[0].id+""),a.getCampaignList(),a.$apply()})}})},a.getCampaignList=function(){a.campaignId="";var b=apiDomain+getCampaignListApi,c=copyData(a.form.userInfo);c.startRow=0,c.maxRows=1e6,c.sortType="ASC",c.sortField="id",c.merchantId=a.form.merchantId,$.ajax({type:a.form.postType,url:b,context:document.body,data:c,success:function(b){apiResultsProcessingFun(b,function(){a.campaignList=b.resultList,a.campaignList.length&&(a.campaignId=a.campaignList[0].id+""),a.$apply()})}})},a.init=function(){a.form=d,1==a.form.systemUserRole.roleType?(a.form.merchantId="",a.merchantListEvent()):a.getCampaignList()},a.init()}var CampaignReportCtrl=["$scope","$translate","$http","form","$location","uiGridConstants","$filter","i18nService","$modal",campaignReportCtrl];angular.module("keeperp").controller("CampaignReportCtrl",CampaignReportCtrl);