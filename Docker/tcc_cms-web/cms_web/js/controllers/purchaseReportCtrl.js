function purchaseReportCtrl(a,b,c,d,e,f,g,h,i){a.langs=h.getAllLangs(),a.lang="zh-cn",a.form.showSaveBtn=!1;var j={pageNumber:1,pageSize:30,sort:null};a.gridOptions={paginationPageSize:30,enableVerticalScrollbar:0,enableGridMenu:!1,useExternalPagination:!0,useExternalSorting:!0,enableColumnResizing:!0,enableFullRowSelection:!1,enablePaginationControls:!1,multiSelect:!1,modifierKeysToMultiSelect:!1,noUnselect:!1,rowHeight:48,enableRowSelection:!0,enableRowHeaderSelection:!1,rowTemplate:'<div ios-dblclick="grid.appScope.onDblClick(row)" ng-repeat="(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name" class="ui-grid-cell" ng-class="{ \'ui-grid-row-header-cell\': col.isRowHeader }" ui-grid-cell ></div>',columnDefs:[{name:"Registration time",field:"createdTime",minWidth:100,width:200,enableSorting:!1,enableColumnResizing:!0,headerCellClass:"myTableHeader"},{name:"Merchant name",field:"merchantName",minWidth:100,width:200,enableSorting:!1,headerCellClass:"myTableHeader"},{name:"User type",field:"userTypeValue",minWidth:100,width:200,enableSorting:!1,enableColumnResizing:!0,headerCellClass:"myTableHeader"},{name:"User name",field:"userName",minWidth:100,width:200,enableSorting:!1,headerCellClass:"myTableHeader"},{name:"User status",field:"statusValue",minWidth:100,width:200,enableSorting:!1,enableColumnResizing:!0,headerCellClass:"myTableHeader"},{name:"Contact email",field:"email",minWidth:100,width:200,enableSorting:!1,headerCellClass:"myTableHeader"},{name:"Mobile number",field:"phone",minWidth:100,width:200,enableSorting:!1,headerCellClass:"myTableHeader"},{name:"Gender",field:"gender",minWidth:100,width:200,enableSorting:!1,headerCellClass:"myTableHeader"},{name:"Date of bitrh",field:"birthdayValue",minWidth:100,width:200,enableSorting:!1,headerCellClass:"myTableHeader"}],onRegisterApi:function(b){a.gridApi=b,a.gridApi.core.on.sortChanged(a,function(b,c){if(0==c.length)a.sortField="id",a.sortType="ASC";else{for(;c.length>1;)c[0].unsort(),c.shift();a.sortField=c[0].field,a.sortType=c[0].sort.direction.toUpperCase()}k()}),b.pagination.on.paginationChanged(a,function(a,b){j.pageNumber=a,j.pageSize=b,k()}),a.onDblClick=function(a){},b.pagination.displayPage=function(){var a=[],c=0,d=b.pagination.getTotalPages(),e=5;b.pagination.getTotalPages()>e&&(b.pagination.getPage()>Math.ceil(e/2)?(c=b.pagination.getPage()-Math.ceil(e/2),d=b.pagination.getPage()+Math.floor(e/2),b.pagination.getPage()>b.pagination.getTotalPages()-Math.floor(e/2)&&(c=b.pagination.getTotalPages()-e),d>b.pagination.getTotalPages()&&(d=b.pagination.getTotalPages())):d=e);for(var f=c;f<d;f++)a.push(f+1);return a}}},a.getTableHeight=function(){var b=a.gridOptions.rowHeight;return{height:a.gridOptions.data.length*b+68+"px"}};var k=function(){var b=(j.pageNumber-1)*j.pageSize,c=j.pageSize,d=b+c,e=apiDomain+viewUserReportApi,f=copyData(a.form.userInfo);f.startRow=b,f.maxRows=c,f.sortType=a.sortType,f.sortField=a.sortField,f.merchantId=a.form.merchantId,f.campaignId=a.campaignId,a.startTime&&(f.startTime=a.startTime),a.endTime&&(f.endTime=a.endTime),$.ajax({type:a.form.postType,url:e,context:document.body,data:f,success:function(c){apiResultsProcessingFun(c,function(){a.gridOptions.totalItems=c.totalRows,a.gridOptions.data=c.resultList,a.gridOptions.startItem=b+1,d>a.gridOptions.totalItems&&(d=a.gridOptions.totalItems),0==a.gridOptions.totalItems&&(a.gridOptions.startItem=0),a.gridOptions.endItem=d,a.gridOptions.data.forEach(function(b,c){b.status=a.mappingStatus(b.status)}),a.$apply(),a.scrollTo(0,0)})}})};a.mappingStatus=function(a){var b="";switch(a){case 1:b=g("translate")("Active");break;case 0:b=g("translate")("Inactive");break;default:b=a}return b},a.search=function(){a.sortField="id",a.sortType="ASC",k()},a.export=function(){$("#report").validate({errorPlacement:function(a,b){b.parent().after(a)},rules:{startTime:{required:!0},endTime:{required:!0}},messages:{},submitHandler:function(b){var c=apiDomain+exportUserReportApi+"?userId="+a.form.userInfo.userId+"&session="+a.form.userInfo.session+"&lang=en_US";a.userType&&(c+="&merchantId="+a.form.merchantId),a.userType&&(c+="&userType="+a.userType),3==a.userType&&(c+="&snsType=1"),a.startTime&&(c+="&startTime="+a.startTime),a.endTime&&(c+="&endTime="+a.endTime),window.open(c)}}),$("#report").submit()},a.scrollTo=function(b,c){a.gridApi.core.scrollTo(a.gridOptions.data[b],a.gridOptions.columnDefs[c])},a.merchantListEvent=function(){var b=apiDomain+getMerchantListApi,c=copyData(a.form.userInfo);c.startRow=0,c.maxRows=1e6,c.sortType="ASC",c.sortField="id",$.ajax({type:a.form.postType,url:b,context:document.body,data:c,success:function(b){apiResultsProcessingFun(b,function(){a.merchantList=b.resultList,a.merchantList.length&&(a.form.merchantId=a.merchantList[0].id+""),a.getCampaignList(),a.$apply()})}})},a.getCampaignList=function(){a.campaignId="";var b=apiDomain+getCampaignListApi,c=copyData(a.form.userInfo);c.startRow=0,c.maxRows=1e6,c.sortType="ASC",c.sortField="id",c.merchantId=a.form.merchantId,$.ajax({type:a.form.postType,url:b,context:document.body,data:c,success:function(b){apiResultsProcessingFun(b,function(){a.campaignList=b.resultList,a.campaignList.length&&(a.campaignId=a.campaignList[0].id+""),a.$apply()})}})},a.init=function(){a.form=d,1==a.form.systemUserRole.roleType?(a.form.merchantId="",a.merchantListEvent()):a.getCampaignList()},a.init()}var PurchaseReportCtrl=["$scope","$translate","$http","form","$location","uiGridConstants","$filter","i18nService","$modal",purchaseReportCtrl];angular.module("keeperp").controller("PurchaseReportCtrl",PurchaseReportCtrl);