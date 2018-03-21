function gameListCtrl(a,b,c,d,e,f,g,h,i){a.langs=h.getAllLangs(),a.lang="zh-cn";var j={pageNumber:1,pageSize:30,sort:null},k=!1;a.checkPermission("GAME_MANAGEMENT_DELETE")&&(k=!0),a.gridOptions={paginationPageSize:30,enableVerticalScrollbar:0,enableGridMenu:!1,useExternalPagination:!0,useExternalSorting:!0,enableColumnResizing:!0,enableFullRowSelection:!1,enablePaginationControls:!1,multiSelect:!1,modifierKeysToMultiSelect:!1,noUnselect:!1,rowHeight:48,enableRowSelection:!0,enableRowHeaderSelection:k,rowTemplate:'<div ios-dblclick="grid.appScope.onDblClick(row)" ng-repeat="(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name" class="ui-grid-cell" ng-class="{ \'ui-grid-row-header-cell\': col.isRowHeader }" ui-grid-cell ></div>',columnDefs:[{name:"Name",field:"name",minWidth:100,width:175,enableSorting:!0,enableColumnResizing:!0,headerCellClass:"myTableHeader"},{name:"Status",field:"status",minWidth:70,width:130,enableSorting:!1,enableColumnResizing:!0,headerCellClass:"myTableHeader"},{name:"Merchant name",field:"merchantName",minWidth:100,width:175,enableSorting:!0,enableColumnResizing:!0,headerCellClass:"myTableHeader"}],onRegisterApi:function(b){a.gridApi=b,a.gridApi.core.on.sortChanged(a,function(b,c){if(0==c.length)a.sortField="id",a.sortType="ASC";else{for(;c.length>1;)c[0].unsort(),c.shift();a.sortField=c[0].field,a.sortType=c[0].sort.direction.toUpperCase()}l()}),b.pagination.on.paginationChanged(a,function(a,b){j.pageNumber=a,j.pageSize=b,l()}),a.onDblClick=function(b){a.form.gameId=b.entity.id,a.checkPermission("GAME_MANAGEMENT_UPDATE")&&(a.form.showSaveBtn=!0),e.path("/main/gameDetail")},b.pagination.displayPage=function(){var a=[],c=0,d=b.pagination.getTotalPages(),e=5;b.pagination.getTotalPages()>e&&(b.pagination.getPage()>Math.ceil(e/2)?(c=b.pagination.getPage()-Math.ceil(e/2),d=b.pagination.getPage()+Math.floor(e/2),b.pagination.getPage()>b.pagination.getTotalPages()-Math.floor(e/2)&&(c=b.pagination.getTotalPages()-e),d>b.pagination.getTotalPages()&&(d=b.pagination.getTotalPages())):d=e);for(var f=c;f<d;f++)a.push(f+1);return a}}},a.getTableHeight=function(){var b=a.gridOptions.rowHeight;return{height:a.gridOptions.data.length*b+68+"px"}};var l=function(){var b=(j.pageNumber-1)*j.pageSize,c=j.pageSize,d=b+c,e=apiDomain+getGameListApi,f=copyData(a.form.userInfo);f.name=a.searchGameName,f.langCode=a.searchLanguage,f.startRow=b,f.maxRows=c,f.sortType=a.sortType,f.sortField=a.sortField,f.merchantId=a.form.merchantId,f.status=a.searchStatus,$.ajax({type:a.form.postType,url:e,context:document.body,data:f,success:function(c){apiResultsProcessingFun(c,function(){a.gridOptions.totalItems=c.totalRows,a.gridOptions.data=c.resultList,a.gridOptions.startItem=b+1,d>a.gridOptions.totalItems&&(d=a.gridOptions.totalItems),0==a.gridOptions.totalItems&&(a.gridOptions.startItem=0),a.gridOptions.endItem=d,a.gridOptions.data.forEach(function(b,c){b.status=a.mappingStatus(b.status)}),a.$apply(),$(".ui-grid-row").css("cursor","pointer"),a.scrollTo(0,0)})}})};a.mappingStatus=function(a){var b="";switch(a){case 1:b=g("translate")("Pending");break;case 2:b=g("translate")("Active");break;case 3:b=g("translate")("Expired");break;case 4:b=g("translate")("Inactive");break;default:b=a}return b},a.search=function(){a.sortField="id",a.sortType="ASC",l()},a.scrollTo=function(b,c){a.gridApi.core.scrollTo(a.gridOptions.data[b],a.gridOptions.columnDefs[c])},a.form.showSaveBtn=!1,a.addGame=function(){a.form.gameId="",a.checkPermission("GAME_MANAGEMENT_NEW")&&(a.form.showSaveBtn=!0),e.path("/main/gameDetail")},a.deleteUser=function(){function b(a,b,c,d,e){a.showOk=!0,a.msg=e("translate")("AreYouSure"),a.cancel=function(){b.dismiss("cancel")},a.ok=function(){a.deleteGift(),b.dismiss("cancel")}}if(0==a.gridApi.selection.getSelectedRows().length)return void a.alert("warning"," ","Please select the data first！");var c=["$scope","$modalInstance","$state","$translate","$filter",b];i.open({templateUrl:"pages/common/warningDlg.html",controller:c,scope:a})},a.deleteGift=function(){for(var b=a.gridApi.selection.getSelectedRows(),c=[],d=0;d<b.length;d++)c.push(b[d].id);var e=c.join(","),f=apiDomain+deleteGameApi,g=copyData(a.form.userInfo);g.ids=e,$.ajax({type:a.form.postType,url:f,context:document.body,data:g,success:function(b){apiResultsProcessingFun(b,function(){a.alert("success"," ","Success！"),a.search()})}})},a.merchantListEvent=function(){var b=apiDomain+getMerchantListApi,c=copyData(a.form.userInfo);c.startRow=0,c.maxRows=1e6,c.sortType="ASC",c.sortField="id",$.ajax({type:a.form.postType,url:b,context:document.body,data:c,success:function(b){apiResultsProcessingFun(b,function(){a.merchantList=b.resultList,a.merchantList.length&&(a.form.merchantId=a.merchantList[0].id+""),l(),a.$apply()})}})},a.init=function(){a.sortField="id",a.sortType="ASC",a.form=d,a.searchRewardName="",1==a.form.systemUserRole.roleType?(a.form.merchantId="",a.merchantListEvent()):l()},a.init()}var GameListCtrl=["$scope","$translate","$http","form","$location","uiGridConstants","$filter","i18nService","$modal",gameListCtrl];angular.module("keeperp").controller("GameListCtrl",GameListCtrl);