	$(document).ready(function(){
		 $("#findbutton").bind("click",goMeetState);  //绑定查询
		 $("#cleanMeetState").bind("click",cleanMeetState); //绑定清空
		 $.each($("img[name='checkflowlog']"),function(index,o){ //查看流程记录
		        var title = $(o).nextAll("#title").val();
		        var recordid = $(o).nextAll("#recordid").val();
		        var filetypeid = $(o).nextAll("#filetypeid").val();
		        $(o).click(function(){
		           flowlog(recordid,filetypeid,title);
		        })
		 });
		 $("#cy").click(function(){ //传阅
		        var curOrgId = $("#curOrgId").val();
		        var gongwenType = $("#gongwenType").val();
		        var url = "";
				if('FW'==gongwenType) { //发文
					 url = "/archives/fwDocSend!save.action";
				}else if('SW'==gongwenType) { //TODO收文
					 url = "/archives/swDocSend!save.action";
				}else if('QB'==gongwenType) { //TODO签报
				     url = "/archives/qbDocSend!save.action";
				}else if('CDB'==gongwenType) { //TODO催督办
				     url = "/archives/cdbDocSend!save.action";
				}
		        CyMethods.CY('userid','username',curOrgId,url,"flowReadId");
		 });
		 $("#clearcy").click(function(){ //撤销传阅
		        var gongwenType = $("#gongwenType").val();
		        var url = "";
				if('FW'==gongwenType) { //发文
					 url = "/archives/fwDocSend!clearcylist.action";
				}else if('SW'==gongwenType) { //TODO收文
					 url = "/archives/swDocSend!clearcylist.action";
				}else if('QB'==gongwenType) { //TODO签报
				     url = "/archives/qbDocSend!clearcylist.action";
				}else if('CDB'==gongwenType) { //TODO催督办
                     url = "/archives/cdbDocSend!clearcylist.action";
                }
		        CyMethods.cleanCY(url,"flowReadId");
		 });
		 $.each($("#listtable tr:gt(0)"),function(index,o){  //绑定打开某一个文
		       var url = $(o).attr("url");
		       var id = $(o).attr("id");
		       var gongwenType = $("#gongwenType").val();
		       $(o).children("td:gt(1):not(:last)").click(function(){
		             openlist(url,id,gongwenType);
		       });
		 });
		 $("#moveBox").click(function(){ //移至废件箱
		     moveWastebox();
		 });
		 $("#takeBack").click(function(){ //收回
		    takeBack();
		 })
		 $("#openFill").click(function(){//移至文件柜
		    openFill();
		 })
	});	
	
    //查询
	function goMeetState(){
		var form = $("#frm");
		form.submit();
	}
	
	//清除
	function cleanMeetState(){
        $("#title").val("");
        $("#flowTypeId").val("");
        $("#code").val(""); 
        $("#internalControl").val("");
     }
     
     // 查看流程记录
     function flowlog(recordid,filetypeid,title){
	       var style = 'status=no,toolbar=no,scrollbars=yes,menubar=no,location=no,top=20,left=20,resizable=yes,height=680,width=950';
		   window.open("/archives/gongwenCommonAction!flowCourse.action?title="+title+"&flowTypeId="+filetypeid+"&gongwenId="+recordid,'',style);
     }
     
     // 打开某一个文
     function openlist(url,id,gongwenType) {
         	var bodyWidth = window.screen.width-100;
	    	var bodyHeight = window.screen.height-150;
	    	var style = "status=no,maximize=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,top=15,left=50, resizable=yes,height="+bodyHeight+",width="+bodyWidth;
		 	if(gongwenType=='FW')
		 	{
		 		window.open(url+"&archivesOut.flowReadId="+id,'openArchives',style);
		 	}
		 	else if(gongwenType=='SW')
		 	{
		 		window.open(url+"&yzArchivesIn.flowReadId="+id,'openArchives',style);
		 	}
		 	else if(gongwenType=='QB')
		 	{
		 		window.open(url+"&archivesSign.flowReadId="+id,'openArchives',style);
		 	}
		 	else if(gongwenType=='CDB')
		 	{
		 		window.open(url+"&yzSupervise.flowReadId="+id,'openArchives',style);
		 	}
		 	else
		 	{
		 		window.open(url,'openArchives',style);
		 	}
     }
     //移至废件箱
     function moveWastebox(){
        var len = $("input[type='checkbox'][name='flowReadId']:checked").length;
        if(len==0) {
          	alert("请选择您要移至废件箱的记录！");
          	return false;
        } else {
        //<c:out value="${sign.fileTypeId }"/>,<c:out value="${sign.recordId}"/>,<c:out value="${sign.title }"/>,<c:out value="${sign.subflag }"/>
              var infos = "";
	          $.each($("input[type='checkbox'][name='flowReadId']:checked"),function(index,o){
		          var gongwenId = $(o).nextAll("#gongwenid").val();
		          var filetypeid = $(o).nextAll("#rfiletypeid").val();
		          var title = $(o).nextAll("#rtitle").val();
		          var info =  gongwenId+ ',' + title + ',' + filetypeid;
		          infos = infos+info+"|$|";
		      });
		      infos = infos.substring(0, infos.length - 3);
		      var gongwenType = $("#gongwenType").val();
	          var tableName = "";
	          var tableId = "";
	          var userId = $("#curUserId").val();
	          var orgId = $("#curOrgId").val();
			  if('FW'==gongwenType) { //发文
					tableName = "YZ_ARCHIVES_OUT";
				    tableId = "OUT_ID";
			  }else if('SW'==gongwenType) { //收文
					tableName = "YZ_ARCHIVES_IN";
				    tableId = "IN_ID";
			  }else if('QB'==gongwenType) { //签报
				    tableName = "YZ_ARCHIVES_SIGN";
				    tableId = "SIGN_ID";
			  }else if('CDB'==gongwenType) { //催督办
                    tableName = "YZ_SUPERVISE";
                    tableId = "SUPERVISE_ID";
                }
 		      moveBox(infos,tableName,tableId,"","","",userId,orgId);
        }
     }
     //收回
     function takeBack() {
	        var len = $("input[type='checkbox'][name='flowReadId']:checked").length;
	        if(len==0) {
	          	alert("请选择您要收回的记录！");
	          	return false;
	        } else if(len>1){
	            alert("您只能选择一条记录，请重新选择！");
	          	return false;
	        } else if(len==1) {
	            var curUserId = $("#curUserId").val();
	            var gongwenType = $("#gongwenType").val();
		        var tableName = "";
		        var tableId = "";
				if('FW'==gongwenType) { //发文
					tableName = "YZ_ARCHIVES_OUT";
				    tableId = "OUT_ID";
				}else if('SW'==gongwenType) { //收文
					tableName = "YZ_ARCHIVES_IN";
				    tableId = "IN_ID";
				}else if('QB'==gongwenType) { //签报
				    tableName = "YZ_ARCHIVES_SIGN";
				    tableId = "SIGN_ID";
				}else if('CDB'==gongwenType) { //催督办
				    tableName = "YZ_SUPERVISE";
				    tableId = "SUPERVISE_ID";
				}
	            var gongwenId = "";
	            var filetypeid = "";
	            $.each($("input[type='checkbox'][name='flowReadId']:checked"),function(index,o){
		            gongwenId = $(o).nextAll("#gongwenid").val();
		            filetypeid = $(o).nextAll("#rfiletypeid").val();
		        });
		        commonTakeBack(gongwenId,filetypeid,curUserId,tableName,tableId);
	        }
     }
     
     //移至文件柜
     function openFill(){
            var len = $("input[type='checkbox'][name='flowReadId']:checked").length;
	        if(len==0) {
	          	alert("请选择您要移至文件柜的项！");
	          	return false;
	        } else {
	            var flowReadIds = "";
	            $.each($("input[type='checkbox'][name='flowReadId']:checked"),function(index,o){
		            flowReadIds = flowReadIds + this.value + ",";
		        });
		        flowReadIds = flowReadIds.substring(0, flowReadIds.length - 1);
		        commonOpenFill("yb",flowReadIds,"");
	        }
     }
     function refAndClose(){
		  	window.location.href = window.location.href;
		  }
		  
	   function orderField(cells,orderBy){
			var forwordURL = "/archives/gongwenCommonAction!doList.action";
			order(cells,orderBy,forwordURL,document.frm);
		}