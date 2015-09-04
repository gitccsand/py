//意见信息
function flowNotion() {
	window.open("/jsp/common/notion.jsp","","status=no,toolbar=no,scrollbars=auto,menubar=no,location=no,top=20,left=20,resizable=yes,height=680,width=950");
}

//流程记录
function flowCourse(title,fileType,recordId,url) {		
	if(recordId=='undefined' || recordId=='' || recordId == null || recordId == 'null'){
		alert("请先保存基本信息");
		return;
	}
	if(url == null || url == ''){
		url = "/jsp/common/flow.jsp";
	}
	window.open(url+"?fileType="+fileType+"&recordId="+recordId+"&title="+title,"","status=no,toolbar=no,scrollbars=yes,menubar=no,location=no,top=20,left=20,resizable=yes,height=680,width=950");
	//window.open("/jsp/common/flow.jsp?includeTitle="+title+"&fileType="+fileType+"&recordId="+recordId,"","status=no,toolbar=no,scrollbars=yes,menubar=no,location=no,top=20,left=20,resizable=yes,height=680,width=950");
}
//历史库流程记录
function flowCourseHistory(title,fileType,recordId) {																																												
	window.open("/jsp/common/flowHistory.jsp?includeTitle="+title+"&fileType="+fileType+"&recordId="+recordId,"","status=no,toolbar=no,scrollbars=yes,menubar=no,location=no,top=20,left=20,resizable=yes,height=680,width=950");
}
//已办结流程记录
function flowCourseDone(title,fileType,recordId) {																																												
	window.open("/jsp/common/flow_done.jsp?includeTitle="+title+"&fileType="+fileType+"&recordId="+recordId,"","status=no,toolbar=no,scrollbars=yes,menubar=no,location=no,top=20,left=20,resizable=yes,height=680,width=950");
}
//流程状态图
function flowStatePic(fileTypeId,recordId,url) {
	if(recordId=='undefined' || recordId=='' || recordId == null || recordId == 'null'){
		alert("请先保存基本信息");
		return;
	}
	if(url == null || url == ''){
		url = "/product/workflow/jsp/flowStatus.jsp";
		//url = "/jsp/module/workflow/jsp/flowStatus.jsp";
	}//product/workflow/jsp/flowStatus.jsp?fileTypeID=743539547&recordID=14050455011140410042
	window.open(url+"?fileTypeID="+fileTypeId+"&recordID="+recordId,'','status=no,maximize=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,top=20,left=50, resizable=yes,height=600,width=800');
}

//关联公文 （发文用）
function showLink(id,state) {
	window.open("/jsp/common/associate.jsp?outId="+id+"&showflag="+state,'','status=yes,maximize=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,top=20,left=50, resizable=yes,height=600,width=800');
}

//关联历史公文 （发文用）
function showHistoryLink(id,state){
	window.open("/jsp/common/associateHistory.jsp?outId="+id+"&showflag=out",'','status=yes,maximize=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,top=20,left=50, resizable=yes,height=600,width=800');
}

//关联公文 （收文用）
function showLinkin(id,state) {
	window.open("/jsp/common/associate.jsp?inId="+id+"&showflag="+state,'','status=yes,maximize=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,top=20,left=50, resizable=yes,height=600,width=800');
}

//关联历史公文 （收文用）
function showHistoryLinkin(id,state) {
	window.open("/jsp/common/associateHistory.jsp?inId="+id+"&showflag=in",'','status=yes,maximize=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,top=20,left=50, resizable=yes,height=600,width=800');
}

//关联公文 （签报用）
function showLinksign(id,state) {
	window.open("/jsp/common/associate.jsp?signId="+id+"&showflag="+state,'','status=yes,maximize=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,top=20,left=50, resizable=yes,height=600,width=800');
}

//关联历史公文 （签报用）
function showHistoryLinksign(id,state) {
	window.open("/jsp/common/associateHistory.jsp?signId="+id+"&showflag=sign",'','status=yes,maximize=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,top=20,left=50, resizable=yes,height=600,width=800');
}

//手动插入记录 buttonType 1:意见补登  2：补登集团领导意见 3：补登部室领导意见
function insertHandIdea(recordid,flowtype,tableName,tableId,type,buttonType) {
	if(buttonType==undefined){
		buttonType = "1"; 
	}	
	window.open("/jsp/module/archives/notion_insertHand.jsp?recordid="+recordid+"&flowtype="+flowtype+"&tableName="+tableName+"&tableId="+tableId+"&type="+type+"&buttonType="+buttonType,'','status=no,maximize=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,top=20,left=50, resizable=yes,height=600,width=800');
}

//附件信息
function affixlink(str) {
	window.open("/jsp/common/affix/affix_list.jsp",'','status=no,maximize=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,top=20,left=50, resizable=yes,height=600,width=800');
}

var xmlHttpFlow;

function createXMLHttpRequestFlow() {
    if (window.ActiveXObject) {
        xmlHttpFlow = new ActiveXObject("Microsoft.XMLHTTP");
    } 
    else if (window.XMLHttpRequest) {
        xmlHttpFlow = new XMLHttpRequest();
    }else{
    	xmlHttpFlow = new XMLHttpRequest();
    
    }
}

var xmlHttpFlow2;

function createXMLHttpRequestFlow2() {
    if (window.ActiveXObject) {
        xmlHttpFlow2 = new ActiveXObject("Microsoft.XMLHTTP");
    } 
    else if (window.XMLHttpRequest) {
        xmlHttpFlow2 = new XMLHttpRequest();
    }
}

var xmlHttpFlowSignIn;

function createXMLHttpRequestFlowSignIn() {
    if (window.ActiveXObject) {
        xmlHttpFlowSignIn = new ActiveXObject("Microsoft.XMLHTTP");
    } 
    else if (window.XMLHttpRequest) {
        xmlHttpFlowSignIn = new XMLHttpRequest();
    }
}

//撤办
function suspendFlow(flowTypeId, recordId, tableName, keyName, subflag, subflagValue) {
	if (subflag==undefined){
			subflag = "subflag";
	}
	if (subflagValue==undefined){
			subflagValue = "05";
	}
	createXMLHttpRequestFlow();
	var url="/jsp/common/workflowServlet.jsp?method=suspendFlow&flowTypeId="+flowTypeId+"&recordId="+recordId+"&tableName="+tableName+"&keyName="+keyName+"&subflag="+subflag+"&subflagValue="+subflagValue;
	xmlHttpFlow.onreadystatechange = function(){
		if (xmlHttpFlow.readyState == 4) {
			if (xmlHttpFlow.status == 200) {
				var results = trim(xmlHttpFlow.responseText);
				alert(results);
				window.opener.location.reload();
				self.close();
			}
		}
	}
	xmlHttpFlow.open("POST", url, true);
	xmlHttpFlow.send(null);
}

//重新启用
function reuse(flowTypeId, recordId, tableName, keyName, subflag, subflagValue) {
	if (subflag==undefined){
			subflag = "subflag";
	}
	if (subflagValue==undefined){
			subflagValue = "01";
	}
	createXMLHttpRequestFlow();
	var url="/jsp/common/workflowServlet.jsp?method=reuse&flowTypeId="+flowTypeId+"&recordId="+recordId+"&tableName="+tableName+"&keyName="+keyName+"&subflag="+subflag+"&subflagValue="+subflagValue;
	xmlHttpFlow.onreadystatechange = function(){
		if (xmlHttpFlow.readyState == 4) {
			if (xmlHttpFlow.status == 200) {
				var results = trim(xmlHttpFlow.responseText);
				alert(results);
				window.opener.location.reload();
				self.close();
			}
		}
	}
	xmlHttpFlow.open("POST", url, true);
	xmlHttpFlow.send(null);
}

//回收重办
function cancelFlow(flowTypeId, recordId) {
	createXMLHttpRequestFlow();
	var url="/jsp/common/workflowServlet.jsp?method=cancelFlow&flowTypeId="+flowTypeId+"&recordId="+recordId;
	xmlHttpFlow.onreadystatechange = function(){
		if (xmlHttpFlow.readyState == 4) {
			if (xmlHttpFlow.status == 200) {
				var results = trim(xmlHttpFlow.responseText);
				alert(results);
				window.opener.location.reload();
				openDBgw();
			}
		}
	}
	xmlHttpFlow.open("POST", url, true);
	xmlHttpFlow.send(null);
}
//已办列表 回收重办
function cancelFlowYB(flowTypeId, recordId) {
	createXMLHttpRequestFlow();
	var url="/jsp/common/workflowServlet.jsp?method=cancelFlow&flowTypeId="+flowTypeId+"&recordId="+recordId;
	xmlHttpFlow.onreadystatechange = function(){
		if (xmlHttpFlow.readyState == 4) {
			if (xmlHttpFlow.status == 200) {
				var results = trim(xmlHttpFlow.responseText);
				alert(results);
				openDBgw();
			}
		}
	}
	xmlHttpFlow.open("POST", url, true);
	xmlHttpFlow.send(null);
}
function trim(stringToTrim) {	return stringToTrim.replace(/^\s+|\s+$/g,"");}
//保存临时意见
function saveTempIdea(flowTypeId, recordId,idea,ideaFiled,tableName,tableId,functionType,callback,writeId) {
	if(idea != null && idea.length > 400){
		alert("意见长度最大为400!");
	}else{
		if(ideaFiled==undefined || ideaFiled=="undefined"){
			ideaFiled = "";
		}
		if(tableName==undefined || tableName=="undefined"){
			tableName = "";
		}
		if(tableId==undefined || tableId=="undefined"){
			tableId = "";
		}
		if(ideaFiled!=""){
			//如果有多个意见类型，取第一个
			if(trim(ideaFiled).indexOf(",")>-1){
				ideaFiled = ideaFiled.substr(0,ideaFiled.indexOf(","));
			}
			if(trim(ideaFiled).indexOf(",")==-1){
				createXMLHttpRequestFlow();
				//中文转码
				idea = encodeURI(idea);
				idea = encodeURI(idea);
				var url="/jsp/common/workflowServlet.jsp?method=saveTempIdea&flowTypeId="+flowTypeId+"&recordId="+recordId+"&idea="+idea+"&ideaFiled="+ideaFiled+"&tableName="+tableName+"&tableId="+tableId+"&writeId="+writeId;
				xmlHttpFlow.onreadystatechange = function(){
					if (xmlHttpFlow.readyState == 4) {
						if (xmlHttpFlow.status == 200) {
							var results = xmlHttpFlow.responseText;
							alert(trim(results));
							try{
								if(functionType == 1){
									window.opener.eval(callback)();
									window.close();
								}else{
									eval(callback)();
								}
							}catch(e){}
						}
					}
				}
				xmlHttpFlow.open("POST", url, true);
				xmlHttpFlow.send(null);
			}else{
				createXMLHttpRequestFlow();
				var url="/jsp/common/workflowServlet.jsp?method=checkTempIdea&flowTypeId="+flowTypeId+"&recordId="+recordId+"&idea="+idea+"&ideaFiled="+ideaFiled+"&tableName="+tableName+"&tableId="+tableId+"&writeId="+writeId;
				xmlHttpFlow.onreadystatechange = function(){
					if (xmlHttpFlow.readyState == 4) {
						if (xmlHttpFlow.status == 200) {
							var results = xmlHttpFlow.responseText;
							if(trim(results)==""){
								window.open("/jsp/module/archives/selectIdea.jsp?flowTypeId="+flowTypeId+"&recordId="+recordId+"&idea="+idea+"&ideaFiled="+ideaFiled+"&tableName="+tableName+"&tableId="+tableId+"&functionType=1&callback="+callback,'','status=yes,maximize=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,top=20,left=50, resizable=yes,height=200,width=800');
							}else{
								createXMLHttpRequestFlow();
								//中文转码
								idea = encodeURI(idea);
								idea = encodeURI(idea);
								var url="/jsp/common/workflowServlet.jsp?method=saveTempIdea&flowTypeId="+flowTypeId+"&recordId="+recordId+"&idea="+idea+"&ideaFiled="+ideaFiled+"&tableName="+tableName+"&tableId="+tableId;
								xmlHttpFlow.onreadystatechange = function(){
									if (xmlHttpFlow.readyState == 4) {
										if (xmlHttpFlow.status == 200) {
											var results = xmlHttpFlow.responseText;
											alert(trim(results));
											try{
												if(functionType == 1){
													window.opener.eval(callback)();
													window.close();
												}else{
													eval(callback)();
												}
											}catch(e){}
										}
									}
								}
								xmlHttpFlow.open("POST", url, true);
								xmlHttpFlow.send(null);
							}
						}
					}
				}
				xmlHttpFlow.open("POST", url, true);
				xmlHttpFlow.send(null);
			}
		}
	}
}

//检查是否编写正文
function checkText(textid,tablename)
{
	createXMLHttpRequestFlow();
	var url="/jsp/common/workflowServlet.jsp?method=checkText&textid="+textid+"&tableName="+tablename;
	xmlHttpFlow.onreadystatechange = function(){
		if (xmlHttpFlow.readyState == 4) {
			if (xmlHttpFlow.status == 200) {
				 if(xmlHttpFlow.responseText.indexOf("no")>-1)
				 {
				 	 alert("请编写正文后进行提交办理");
				 	 return false;
				 }else if(xmlHttpFlow.responseText.indexOf("yes")>-1)
				 	{ 
				 		document.forms["frm"].submit();  
				 	}
			}
		}
	}
	xmlHttpFlow.open("POST", url, true);
	xmlHttpFlow.send(null);
}
//检查是否编写正文
function checkTextForKill(textid,tablename)
{
	createXMLHttpRequestFlow();
	var url="/jsp/common/workflowServlet.jsp?method=checkText&textid="+textid+"&tableName="+tablename;
	xmlHttpFlow.onreadystatechange = function(){
		if (xmlHttpFlow.readyState == 4) {
			if (xmlHttpFlow.status == 200) {
				 if(xmlHttpFlow.responseText.indexOf("no")>-1)
				 {
				 	 alert("请编写正文后再进行办结");
				 	 return false;
				 }else{
				 	if(confirm("您确定要对该文办结？")){
						document.forms["frm"].method.value='killNoFlow'; 
				    	document.forms["frm"].submit();
				    }else{
				    	return false;
				    }
				 }
			}
		}
	}
	xmlHttpFlow.open("POST", url, true);
	xmlHttpFlow.send(null);
}

//删除意见
function deleteIdea(ideaid)
{
	createXMLHttpRequestFlow();
	var url="/jsp/common/workflowServlet.jsp?method=deleteIdea&ideaid="+ideaid;
	xmlHttpFlow.onreadystatechange = function(){
		if (xmlHttpFlow.readyState == 4) {
			if (xmlHttpFlow.status == 200) {
				var results = xmlHttpFlow.responseText;
				alert(trim(results));
				self.location.reload();
				if(window.opener != null){
					window.opener.parent.frames["ideaInfo"].location.reload();
				}
			}
		}
	}
	xmlHttpFlow.open("POST", url, true);
	xmlHttpFlow.send(null);
}
//回复签收
 function signFlagState(signFlag,subflag,recordId,flowTypeId){
	//var linkSignFlagState = window.event.clientX < 0 && window.event.clientY < 0 || window.event.altKey;
	var linkSignFlagState = window.event.clientY < 0 || window.event.altKey;
	if(signFlag=="false" && linkSignFlagState && subflag=="01"){
		createXMLHttpRequestFlow();
		var url="/jsp/common/workflowServlet.jsp?method=signFlag&recordId="+recordId+"&flowTypeId="+flowTypeId;
    xmlHttpFlow.onreadystatechange = function(){
			if (xmlHttpFlow.readyState == 4) {
				if (xmlHttpFlow.status == 200) {
					var results = xmlHttpFlow.responseText;
				}
			}
		}
		xmlHttpFlow.open("POST", url, true);
		xmlHttpFlow.send(null);
	}
}

//获得文号的文头
function getCodeHead(type,id,outword,chwDate,yfDate)
{
	createXMLHttpRequestFlow();
	var url="/jsp/module/archives/common/archivescode/codeServlet.jsp?type="+type+"&id="+id+"&codeId="+codeId+"&chwDate="+chwDate+"&yfDate="+yfDate;
	xmlHttpFlow.onreadystatechange = function(){
		if (xmlHttpFlow.readyState == 4) {
			if (xmlHttpFlow.status == 200) {
				var results = xmlHttpFlow.responseText;
				//document.getElementById(fieldname).value =results;
			}
		}
	}
	xmlHttpFlow.open("POST", url, true);
	xmlHttpFlow.send(null);
}

//获得文号的文尾
function getCodeTail(type,id,codeId,chwDate,yfDate){
	createXMLHttpRequestFlow();
	var url="/jsp/module/archives/common/archivescode/codeServlet.jsp?type="+type+"&id="+id+"&codeId="+codeId+"&chwDate="+chwDate+"&yfDate="+yfDate;
	xmlHttpFlow.onreadystatechange = function(){
		if (xmlHttpFlow.readyState == 4) {
			if (xmlHttpFlow.status == 200) {
				var results = xmlHttpFlow.responseText;
				//document.getElementById(fieldname).value =trim(results);
			}
		}
	}
	xmlHttpFlow.open("POST", url, true);
	xmlHttpFlow.send(null);
}

//获得附件是否存在，判断附件图片的显示
function getAffixImg(recordId,tableName,div1,div2){
	createXMLHttpRequestFlow();
	var url="/jsp/module/archives/affixServlet.jsp?recordId="+recordId+"&tableName="+tableName;
	xmlHttpFlow.onreadystatechange = function(){
		if (xmlHttpFlow.readyState == 4) {
			if (xmlHttpFlow.status == 200) {
				var results = xmlHttpFlow.responseText;
				var sut = results.split("*");
				document.getElementById(div1).innerHTML=sut[0];
				document.getElementById(div2).innerHTML=sut[1];
			}
		}
	}
	xmlHttpFlow.open("POST", url, true);
	xmlHttpFlow.send(null);
}

//变更流程
function changeFlow(id,toFileType){
	createXMLHttpRequestFlow();
	var url="/jsp/module/archives/flowChangeServlet.jsp?id="+id+"&toFileType="+toFileType;
	xmlHttpFlow.onreadystatechange = function(){
		if (xmlHttpFlow.readyState == 4) {
			if (xmlHttpFlow.status == 200) {
				var results = xmlHttpFlow.responseText;
				alert(results);
				window.opener.location.reload();
				window.close();
			}
		}
	}
	xmlHttpFlow.open("POST", url, true);
	xmlHttpFlow.send(null);
}

//更新SEND表附件字符串
function updateSendAffix(sendid,affixid){
	createXMLHttpRequestFlow();
	var url="/jsp/module/archives/updateSendServlet.jsp?sendid="+sendid+"&affixid="+affixid;
	xmlHttpFlow.onreadystatechange = function(){
		if (xmlHttpFlow.readyState == 4) {
			if (xmlHttpFlow.status == 200) {
				var results = xmlHttpFlow.responseText;
				window.close();
			}
		}
	}
	xmlHttpFlow.open("POST", url, true);
	xmlHttpFlow.send(null);
}
//综合分发
function sendAll(str,recordid,repeatSend,remind,notion)
{
	createXMLHttpRequestFlow();
	var url="/jsp/common/workflowServlet.jsp?method=sendAll&str="+str+"&recordId="+recordid+"&repeatSend="+repeatSend+"&remind="+remind+"&notion="+notion;
	xmlHttpFlow.onreadystatechange = function(){
		if (xmlHttpFlow.readyState == 4) {
			if (xmlHttpFlow.status == 200) {
				var results = xmlHttpFlow.responseText;
				closeLoadingPopup();
				alert(trim(results));
				if(results.indexOf("未进行")>-1){
				}else{
					window.parent.close();
				}
			}
		}
	}
	xmlHttpFlow.open("POST", url, true);
	xmlHttpFlow.send(null);
}
//分发前判断是否重复分发
function sendCheck(str,recordid,repeatSend,remind,notion)
{
	createXMLHttpRequestFlow();
	var url="/jsp/common/workflowServlet.jsp?method=sendCheck&str="+str+"&recordId="+recordid+"&repeatSend="+repeatSend+"&remind="+remind+"&notion"+notion;
	xmlHttpFlow.onreadystatechange = function(){
		if (xmlHttpFlow.readyState == 4) {
			if (xmlHttpFlow.status == 200) {
				var results = trim(xmlHttpFlow.responseText);
				if(results!=""){
					if(results.indexOf("已经分发过")>-1){
						//关闭滚动条
						closeLoadingPopup();
						if(confirm(results+"是否重新分发？")){
							showLoadingPopup("请等待......");
							sendAll(str,recordid,repeatSend,remind,notion); 
						}
					}else if(results.indexOf("未进行")>-1){
						closeLoadingPopup();
						alert(results); //未套红或者盖章
					}else{
						sendAll(str,recordid,repeatSend,remind,notion);
					}
				}else{
					sendAll(str,recordid,repeatSend,remind,notion);
				}
			}
		}
	}
	xmlHttpFlow.open("POST", url, true);
	xmlHttpFlow.send(null);
}

//判断是否盖章,暂时没用，写在页面上。
function checkSealText(recordId){
	createXMLHttpRequestFlow();
	var url="/jsp/common/workflowServlet.jsp?method=checkSealText&recordId="+recordId;
	xmlHttpFlow.onreadystatechange = function(){
		if (xmlHttpFlow.readyState == 4) {
			if (xmlHttpFlow.status == 200) {
				var results = xmlHttpFlow.responseText;
			}
		}
	}
	xmlHttpFlow.open("POST", url, true);
	xmlHttpFlow.send(null);
}
//延后处理，待办页面用。
function waitDo(doIdsStr,attr,value){
	createXMLHttpRequestFlow();
	var url="/jsp/module/archives/waitTransactServlet.jsp?doIdsStr="+doIdsStr+"&attr="+attr+"&value="+value;
	xmlHttpFlow.onreadystatechange = function(){
		if (xmlHttpFlow.readyState == 4) {
			if (xmlHttpFlow.status == 200) {
				var results = xmlHttpFlow.responseText;
				alert(trim(results));
				window.location.reload();
			}
		}
	}
	xmlHttpFlow.open("POST", url, true);
	xmlHttpFlow.send(null);
}
//待办列表，已办列表，待阅列表，已阅列表 传阅
function listCY(type,recordIds,uids,unames,remindValue,userdeptid,userdeptname,message,model_id,page_id){
	if(message==undefined || message=="undefined"){
		message = "";
	}
	if(model_id==undefined || model_id=="undefined"){
		model_id = "";
	}
	if(page_id==undefined || page_id=="undefined"){
		page_id = "";
	}
	createXMLHttpRequestFlow();
	var url="/jsp/module/gongwen/listCY.jsp";
	xmlHttpFlow.onreadystatechange = function(){
		if (xmlHttpFlow.readyState == 4) {
			if (xmlHttpFlow.status == 200) {
				var results = trim(xmlHttpFlow.responseText);
				closeLoading();
				alert(results+message);
			}
		}
	}
	xmlHttpFlow.open("POST", url, true);
	xmlHttpFlow.setRequestHeader('Content-Type','application/x-www-form-urlencoded'); 
	xmlHttpFlow.send("type="+type+"&recordIds="+recordIds+"&uids="+uids+"&unames="+unames+"&remindValue="+remindValue+"&userdeptid="+userdeptid+"&userdeptname="+userdeptname+"&model_id="+model_id+"&page_id="+page_id);
}
//取消在办状态
function cleanDBtype(ids,message){
	
	if(message==undefined || message=="undefined"){
		message = "";
	}
	createXMLHttpRequestFlow();
	//中文转码
	ids = encodeURI(ids);
	ids = encodeURI(ids);
	var url="/jsp/common/workflowServlet.jsp?method=cleanDB&ids="+ids;
	xmlHttpFlow.onreadystatechange = function(){
		if (xmlHttpFlow.readyState == 4) {
			if (xmlHttpFlow.status == 200) {
				var results = xmlHttpFlow.responseText;
				alert(trim(results)+message);
				window.location.reload();
			}
		}
	}
	xmlHttpFlow.open("POST", url, true);
	xmlHttpFlow.send(null);
}
//一人多岗，填写意见选择部门
function showSelectDept(){
	createXMLHttpRequestFlow();
	var url="/jsp/common/workflowServlet.jsp?method=showSelectDept";
	xmlHttpFlow.onreadystatechange = function(){
		if (xmlHttpFlow.readyState == 4) {
			if (xmlHttpFlow.status == 200) {
				//var results = xmlHttpFlow.responseText;
				//if (results.indexOf("true")!=-1){
				//	window.open("/jsp/common/show_dept_select.jsp","","status=no,alwaysLowered=yes,maximize=yes,toolbar=no,menubar=no,location=no,top=780,left=636,resizable=yes,height=400,width=400");
				//}
			}
		}
	}
	xmlHttpFlow.open("POST", url, true);
	xmlHttpFlow.send(null);
}
//获取收文编号
function getinNum(sort,sendDeptId,flowIntype){
	if(sendDeptId==undefined){
		sendDeptId = "";
	}
	if(flowIntype==undefined){
		flowIntype = "";
	}
	createXMLHttpRequestFlow();
	var url="/jsp/common/workflowServlet.jsp?method=getinNum&sort="+sort+"&sendDeptId="+sendDeptId+"&flowIntype="+flowIntype;
	xmlHttpFlow.onreadystatechange = function(){
		if (xmlHttpFlow.readyState == 4) {
			if (xmlHttpFlow.status == 200) {
				var results = xmlHttpFlow.responseText;
				//alert(trim(results));
				document.getElementById("inNum").value = trimQH(results);
				var year = document.getElementById("year").value;
				document.getElementById("inNumber").value = sort+" ("+year+") "+trimQH(results)+"号";
				document.getElementById("buttonqs").disabled="";
				document.getElementById("button2").disabled="";
			}
		}
	}
	xmlHttpFlow.open("POST", url, true);
	xmlHttpFlow.send(null);
}

//获取收文编号(拆表后)
function getinNumnew(sort,sendDeptId,flowIntype,disabled){
	if(sendDeptId==undefined){
		sendDeptId = "";
	}
	if(flowIntype==undefined){
		flowIntype = "";
	}
	createXMLHttpRequestFlow();
	var url="/jsp/common/workflowServlet.jsp?method=getArchivesinNum&sort="+sort+"&sendDeptId="+sendDeptId+"&flowIntype="+flowIntype;
	xmlHttpFlow.onreadystatechange = function(){
		if (xmlHttpFlow.readyState == 4) {
			if (xmlHttpFlow.status == 200) {
				var results = xmlHttpFlow.responseText;
				results = trimQH(results);
				if(results.indexOf(";")>-1){
					var groupValue = results.split(";");
					document.getElementById("inNum").value = trimQH(groupValue[1]);
					var year = document.getElementById("year").value;
					document.getElementById("updateInNum").value = groupValue[0];
					document.getElementById("inNumber").value = sort+" ("+year+") "+trimQH(groupValue[1])+"号";
					if(flowIntype==""){
						document.getElementById("buttonqs").disabled=disabled;
						document.getElementById("button2").disabled=disabled;
					}
				}
			}
		}
	}
	xmlHttpFlow.open("POST", url, true);
	xmlHttpFlow.send(null);
}


//管理员删除意见
function delidea(doIdsStr){
	createXMLHttpRequestFlow();
	var url="/jsp/common/workflowServlet.jsp?method=delidea&doIdsStr="+doIdsStr;
	xmlHttpFlow.onreadystatechange = function(){
		if (xmlHttpFlow.readyState == 4) {
			if (xmlHttpFlow.status == 200) {
				var results = xmlHttpFlow.responseText;
				alert(trim(results));
				window.location.reload();
			}
		}
	}
	xmlHttpFlow.open("POST", url, true);
	xmlHttpFlow.send(null);
}
//取消办结
function cancelKillFlow(doIdsStr){
	createXMLHttpRequestFlow();
	var url="/jsp/common/workflowServlet.jsp?method=cancelKillFlow&doIdsStr="+doIdsStr;
	xmlHttpFlow.onreadystatechange = function(){
		if (xmlHttpFlow.readyState == 4) {
			if (xmlHttpFlow.status == 200) {
				var results = xmlHttpFlow.responseText;
				closeLoading();
				alert(trim(results));
				window.location.reload();
			}
		}
	}
	xmlHttpFlow.open("POST", url, true);
	xmlHttpFlow.send(null);
}
//纸质取消办结
function cancelKillNoFlow(doIdsStr){
	createXMLHttpRequestFlow();
	var url="/jsp/common/workflowServlet.jsp?method=cancelKillNoFlow&doIdsStr="+doIdsStr;
	xmlHttpFlow.onreadystatechange = function(){
		if (xmlHttpFlow.readyState == 4) {
			if (xmlHttpFlow.status == 200) {
				var results = xmlHttpFlow.responseText;
				alert(trim(results));
				window.location.reload();
			}
		}
	}
	xmlHttpFlow.open("POST", url, true);
	xmlHttpFlow.send(null);
}
//文号删除，同时删除文号关联
function delCodeAndLink(ids){
	createXMLHttpRequestFlow();
	var url="/jsp/common/workflowServlet.jsp?method=delCode&ids="+ids;
	xmlHttpFlow.onreadystatechange = function(){
		if (xmlHttpFlow.readyState == 4) {
			if (xmlHttpFlow.status == 200) {
				var results = xmlHttpFlow.responseText;
				alert(trim(results));
				window.location.reload();
			}
		}
	}
	xmlHttpFlow.open("POST", url, true);
	xmlHttpFlow.send(null);
}
//模板删除，同时清空文号关联中的该模板
function delModelAndLink(ids,type,isM){
	if(isM==undefined){
		isM = "";
	}
	createXMLHttpRequestFlow();
	var url="/jsp/common/workflowServlet.jsp?method=delModel&fileNames="+ids+"&type="+type+"&isM="+isM;
	xmlHttpFlow.onreadystatechange = function(){
		if (xmlHttpFlow.readyState == 4) {
			if (xmlHttpFlow.status == 200) {
				var results = xmlHttpFlow.responseText;
				alert(trim(results));
				window.location.reload();
			}
		}
	}
	xmlHttpFlow.open("POST", url, true);
	xmlHttpFlow.send(null);
}
//删除表单
function delForm(ids){
	createXMLHttpRequestFlow();
	var url="/jsp/common/workflowServlet.jsp?method=delForm&formId="+ids;
	xmlHttpFlow.onreadystatechange = function(){
		if (xmlHttpFlow.readyState == 4) {
			if (xmlHttpFlow.status == 200) {
				var results = xmlHttpFlow.responseText;
				alert(trim(results));
				window.location.reload();
			}
		}
	}
	xmlHttpFlow.open("POST", url, true);
	xmlHttpFlow.send(null);
}
//查询签收后的文流程类型
function getFlowTypes(deptId,isSccredit){
	if(isSccredit==undefined){
		isSccredit = "";
	}
	createXMLHttpRequestFlowSignIn();
	var url="/jsp/common/workflowServlet.jsp?method=getFlowTypes&deptId="+deptId+"&isSccredit="+isSccredit;
	xmlHttpFlowSignIn.onreadystatechange = function(){
		if (xmlHttpFlowSignIn.readyState == 4) {
			if (xmlHttpFlowSignIn.status == 200) {
				var results = trim(xmlHttpFlowSignIn.responseText);
				if(results.indexOf("当前人")>-1){
					if(confirm(results+",是否确认签收？")){
						document.forms["frm"].action="/archives/archivesInAction.do?method=signIn&flowType="+results+"&isSccredit="+isSccredit;
		    			document.forms["frm"].submit();
					}else{
						document.getElementById("buttonqs").disabled="";
					}
				}else if(results.indexOf(",")>-1){
					var isOld = document.getElementById("isOld").value;
					window.open("/jsp/module/archives/selectFlowType.jsp?filwTypes="+results+"&isSccredit="+isSccredit+"&isOld="+isOld,'','status=no,maximize=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,top=0,left=50, resizable=yes,height=300,width=500');
				}else{
					document.forms["frm"].action="/archives/archivesInAction.do?method=signIn&flowType="+results+"&isSccredit="+isSccredit;
		    		document.forms["frm"].submit();
				}
			}
		}
	}
	xmlHttpFlowSignIn.open("POST", url, true);
	xmlHttpFlowSignIn.send(null);
}
//阅毕（不用填写阅毕意见）
function readover(sendid,recordId,isBack,islist,isSinoForm,model_id,page_id){
	if(isBack==undefined){
		isBack = "";
	}
	if(islist==undefined){
		islist = "";
	}
	if(isSinoForm==undefined){
		isSinoForm = "";
	}
	if(model_id==undefined){
		model_id = "";
	}
	if(page_id==undefined){
		page_id = "";
	}
	createXMLHttpRequestFlow();
	var url="/jsp/common/workflowServlet.jsp?method=readover&sendid="+sendid+"&recordId="+recordId+"&isBack="+isBack+"&isSinoForm="+isSinoForm+"&model_id="+model_id+"&page_id="+page_id;
	xmlHttpFlow.onreadystatechange = function(){
		if (xmlHttpFlow.readyState == 4) {
			if (xmlHttpFlow.status == 200) {
				var results = trim(xmlHttpFlow.responseText);
				if (islist=="1"){
					window.location = window.location;
				}else{
					alert(results);
					window.opener.location.reload();
					window.close();
				}
			}
		}
	}
	xmlHttpFlow.open("POST", url, true);
	xmlHttpFlow.send(null);
}
//文号模板删除判断是否有关联
function isHaveLink(type,typeStr,isM){
	if(isM==undefined){
		isM = "";
	}
	createXMLHttpRequestFlow();
	var url="/jsp/common/workflowServlet.jsp?method=isHaveLink&type="+type+"&typeStr="+typeStr;
	xmlHttpFlow.onreadystatechange = function(){
		if (xmlHttpFlow.readyState == 4) {
			if (xmlHttpFlow.status == 200) {
				var results = trim(xmlHttpFlow.responseText);
				if(results.indexOf("删除关联")>-1){
					alert(results);
				}else{
					if("code"==type){ 			//文号删除
						delCodeAndLink(typeStr);
					}
					else if("flow"==type){ 	//流程删除flow_filetype
						checkMoreDel('/archives/flowFiletypeAction.do?method=deleteFalse&isM='+isM,'frm','filetypeid');
					}else if("workflow"==type){ //流程删除 flow_workflow
						checkMoreDel('/flow/FlowWorkFlowAction.do?method=deleteFalse&isM='+isM,'frm','Bid');
					}else{						//模板删除
						delModelAndLink(typeStr,type,isM);
					}
				}
			}
		}
	}
	xmlHttpFlow.open("POST", url, true);
	xmlHttpFlow.send(null);
}
//流程管理-》新建流程-》授权
function accreditAdminUser(workflowids,admin,adminName){
	createXMLHttpRequestFlow();
	var url="/jsp/common/workflowServlet.jsp?method=accreditAdminUser&workflowids="+workflowids+"&admin="+admin+"&adminName="+adminName;
	xmlHttpFlow.onreadystatechange = function(){
		if (xmlHttpFlow.readyState == 4) {
			if (xmlHttpFlow.status == 200) {
				var results = trim(xmlHttpFlow.responseText);
				alert(results);
				window.location.reload();
			}
		}
	}
	xmlHttpFlow.open("POST", url, true);
	xmlHttpFlow.send(null);
}
//回收重办判断
function iscalFlow(filetypeId,recordId,flowSortId,isSinoForm,tableNameSinoform,keyNameSinoform){
	if(isSinoForm==undefined){
		isSinoForm = "";
	}
	if(tableNameSinoform==undefined){
		tableNameSinoform = "";
	}
	if(keyNameSinoform==undefined){
		keyNameSinoform = "";
	}
	createXMLHttpRequestFlow2();
	var url="/jsp/common/workflowServlet.jsp?method=iscalFlow&recordId="+recordId+"&filetypeId="+filetypeId+"&flowSortId="+flowSortId+"&isSinoForm="+isSinoForm+"&tableNameSinoform="+tableNameSinoform+"&keyNameSinoform="+keyNameSinoform;
	xmlHttpFlow2.onreadystatechange = function(){
		if (xmlHttpFlow2.readyState == 4) {
			if (xmlHttpFlow2.status == 200) {
				var results = trim(xmlHttpFlow2.responseText);
				if(results=="yes"){
				  	cancelFlowYB(filetypeId,recordId);
				}else{
					alert("该记录处于在办状态，或已被办理，不能回收！");
				}
			}
		}
	}
	xmlHttpFlow2.open("POST", url, true);
	xmlHttpFlow2.send(null);
}
//删除文件柜
function delFiling(ids){
	createXMLHttpRequestFlow2();
	var url="/jsp/common/workflowServlet.jsp?method=delFiling&ids="+ids;
	xmlHttpFlow2.onreadystatechange = function(){
		if (xmlHttpFlow2.readyState == 4) {
			if (xmlHttpFlow2.status == 200) {
				var results = trim(xmlHttpFlow2.responseText);
				alert(results);
				window.location.reload();
			}
		}
	}
	xmlHttpFlow2.open("POST", url, true);
	xmlHttpFlow2.send(null);
}
//修正线序
function upFlowWfleve(ids){
	createXMLHttpRequestFlow2();
	var url="/jsp/common/workflowServlet.jsp?method=upFlowWfleve&ids="+ids;
	xmlHttpFlow2.onreadystatechange = function(){
		if (xmlHttpFlow2.readyState == 4) {
			if (xmlHttpFlow2.status == 200) {
				var results = trim(xmlHttpFlow2.responseText);
				alert(results);
				window.location.reload();
			}
		}
	}
	xmlHttpFlow2.open("POST", url, true);
	xmlHttpFlow2.send(null);
}
//生成签报编号
function getSignSn(deptId,year,recordId){
	createXMLHttpRequestFlow2();
	var url="/jsp/common/workflowServlet.jsp?method=getSignSn&deptId="+deptId+"&year="+year+"&recordId="+recordId;
	xmlHttpFlow2.onreadystatechange = function(){
		if (xmlHttpFlow2.readyState == 4) {
			if (xmlHttpFlow2.status == 200) {
				var results = trim(xmlHttpFlow2.responseText);
				document.getElementById("signSn").value = results;
				var year = document.getElementById("year").value;
				document.getElementById("signNum").value = year +" - "+results+" 号";
			}
		}
	}
	xmlHttpFlow2.open("POST", url, true);
	xmlHttpFlow2.send(null);
}
//公文关联公文引入附件
function GWcopyAffixAss(ids,recordId,tableName){
	createXMLHttpRequestFlow2();
	var url="/jsp/common/workflowServlet.jsp?method=GWcopyAffixAss&ids="+ids+"&recordId="+recordId+"&tableName="+tableName;
	xmlHttpFlow2.onreadystatechange = function(){
		if (xmlHttpFlow2.readyState == 4) {
			if (xmlHttpFlow2.status == 200) {
				var results = trim(xmlHttpFlow2.responseText);
				alert(results);
				window.opener.location.reload();
			}
		}
	}
	xmlHttpFlow2.open("POST", url, true);
	xmlHttpFlow2.send(null);
}
//公文关联公文引入收文正文
function copyInTextForAss(ids,recordId,tableName,history){
	if(history==undefined){//是否是历史公文
		history = "";
	}
	createXMLHttpRequestFlow2();
	var url="/jsp/common/workflowServlet.jsp?method=copyInTextForAss&ids="+ids+"&recordId="+recordId+"&tableName="+tableName+"&history="+history;
	xmlHttpFlow2.onreadystatechange = function(){
		if (xmlHttpFlow2.readyState == 4) {
			if (xmlHttpFlow2.status == 200) {
				var results = trim(xmlHttpFlow2.responseText);
				alert(results);
				if(results.indexOf("引入正文成功")>-1){
					window.location.reload();
					window.opener.location.reload();
				}
			}
		}
	}
	xmlHttpFlow2.open("POST", url, true);
	xmlHttpFlow2.send(null);
}
//查询授权
function updateArchivesRight(ids,recordId,tableName,tableKey,type,isSplit,userId,deptId){
	if(type==undefined){
		type = "";
	}
	if(isSplit==undefined){
		isSplit = "";
	}
	
	if(userId==undefined){
		userId = "";
	}
	if(deptId==undefined){
		deptId = "";
	}
	createXMLHttpRequestFlow2();
	var url="/archives/archivesSign!updateRight.action?ids="+ids+"&recordId="+recordId+"&tableName="+tableName+"&tableKey="+tableKey+"&type="+type+"&isSplit="+isSplit+"&userId="+userId+"&deptId="+deptId;
	xmlHttpFlow2.onreadystatechange = function(){
		if (xmlHttpFlow2.readyState == 4) {
			if (xmlHttpFlow2.status == 200) {
				var results = trim(xmlHttpFlow2.responseText);
				alert(results);
				if(type=="update"){
					window.opener.location.reload();
				}
				window.close();
			}
		}
	}
	xmlHttpFlow2.open("POST", url, true);
	xmlHttpFlow2.send(null);
}
//取消查询授权
function cancelArchivesRight(recordId,tableName,tableKey,type,isSplit){
	if(type==undefined){
		type = "";
	}
	if(isSplit==undefined){
		isSplit = "";
	}
	createXMLHttpRequestFlow2();
	var url="/archives/archivesSign!cancelRight.action?recordId="+recordId+"&tableName="+tableName+"&tableKey="+tableKey+"&type="+type+"&isSplit="+isSplit;
	xmlHttpFlow2.onreadystatechange = function(){
		if (xmlHttpFlow2.readyState == 4) {
			if (xmlHttpFlow2.status == 200) {
				var results = trim(xmlHttpFlow2.responseText);
				alert(results);
				if(type=="update"){
					window.opener.location.reload();
				}
				window.close();
			}
		}
	}
	xmlHttpFlow2.open("POST", url, true);
	xmlHttpFlow2.send(null);
}
//常用意见排序
function commonNotionOrder(type,notionId,userId,selectObject,objName){
	createXMLHttpRequestFlow2();
	var url="/jsp/common/workflowServlet.jsp?method=commonNotionOrder&type="+type+"&notionId="+notionId+"&userId="+userId;
	xmlHttpFlow2.onreadystatechange = function(){
		if (xmlHttpFlow2.readyState == 4) {
			if (xmlHttpFlow2.status == 200) {
				var results = trim(xmlHttpFlow2.responseText);
				//alert(results);
				window.location="/jsp/common/notion/common_notion.jsp?&selectObject="+selectObject+"&objName="+objName;
			}
		}
	}
	xmlHttpFlow2.open("POST", url, true);
	xmlHttpFlow2.send(null);
}


//附件排序
function commonAffixOrder(type,affixId,tableName,tableId,affixTableName,page){
	createXMLHttpRequestFlow2();
	var url="/jsp/common/workflowServlet.jsp?method=commonAffixOrder&type="+type+"&affixId="+affixId+"&tableName="+tableName+"&tableId="+tableId+"&affixTableName="+affixTableName;
	xmlHttpFlow2.onreadystatechange = function(){
		if (xmlHttpFlow2.readyState == 4) {
			if (xmlHttpFlow2.status == 200) {
				var results = trim(xmlHttpFlow2.responseText);
				//alert(results);
				window.location="/jsp/common/affix/"+page+"?&ywId="+tableId+"&tableName="+tableName+"&affixTableName="+affixTableName;
			}
		}
	}
	xmlHttpFlow2.open("POST", url, true);
	xmlHttpFlow2.send(null);
}

//生成传真流水号
function getCzdbNum(deptId,year,recordId){
	createXMLHttpRequestFlow2();
	var url="/jsp/common/workflowServlet.jsp?method=getCzdbNum&deptId="+deptId+"&year="+year+"&recordId="+recordId;
	xmlHttpFlow2.onreadystatechange = function(){
		if (xmlHttpFlow2.readyState == 4) {
			if (xmlHttpFlow2.status == 200) {
				var results = trim(xmlHttpFlow2.responseText);
				document.getElementById("czdbNum").value = results;
			}
		}
	}
	xmlHttpFlow2.open("POST", url, true);
	xmlHttpFlow2.send(null);
}
//节点配置意见类型
function setWfleveNotion(ids,wfleveid){
	createXMLHttpRequestFlow2();
	var url="/jsp/common/workflowServlet.jsp?method=setWfleveNotion&ids="+ids+"&wfleveid="+wfleveid;
	xmlHttpFlow2.onreadystatechange = function(){
		if (xmlHttpFlow2.readyState == 4) {
			if (xmlHttpFlow2.status == 200) {
				var results = trim(xmlHttpFlow2.responseText);
				alert(results);
				window.opener.location.reload();
				window.close();
			}
		}
	}
	xmlHttpFlow2.open("POST", url, true);
	xmlHttpFlow2.send(null);
}
//取消节点配置意见
function delWfleveNotion(wfleveid){
	createXMLHttpRequestFlow2();
	var url="/jsp/common/workflowServlet.jsp?method=delWfleveNotion&wfleveid="+wfleveid;
	xmlHttpFlow2.onreadystatechange = function(){
		if (xmlHttpFlow2.readyState == 4) {
			if (xmlHttpFlow2.status == 200) {
				var results = trim(xmlHttpFlow2.responseText);
				alert(results);
				window.opener.location.reload();
				window.close();
			}
		}
	}
	xmlHttpFlow2.open("POST", url, true);
	xmlHttpFlow2.send(null);
}
//签收更正
function getFlowBySignInTwo(recordId){
	createXMLHttpRequestFlow2();
	var url="/jsp/common/workflowServlet.jsp?method=getFlowBySignInTwo";
	xmlHttpFlow2.onreadystatechange = function(){
		if (xmlHttpFlow2.readyState == 4) {
			if (xmlHttpFlow2.status == 200) {
				var results = trim(xmlHttpFlow2.responseText);
				if(results==""){
					alert("当前人没有可以起草的收文流程！");
				}else{
					var result = results.split("|$|");
					if(result.length > 3){
						window.open("/jsp/module/archives/selectFlowForSignIn.jsp?flows="+results+"&recordId="+recordId,"","status=no,maximize=yes,toolbar=no,menubar=no,location=no,top=200,left=200,resizable=yes,height=300,width=500");
					}else{
						results = results.substring(3,results.indexOf(","));
						updateFlowType(results,recordId,"yes");
					}
				}
				
			}
		}
	}
	xmlHttpFlow2.open("POST", url, true);
	xmlHttpFlow2.send(null);
}
//签收更新流程记录
function updateFlowType(flowType,recordId,type){
	createXMLHttpRequestFlow2();
	var url="/jsp/common/workflowServlet.jsp?method=updateFlowType&flowType="+flowType+"&recordId="+recordId;
	xmlHttpFlow2.onreadystatechange = function(){
		if (xmlHttpFlow2.readyState == 4) {
			if (xmlHttpFlow2.status == 200) {
				var results = trim(xmlHttpFlow2.responseText);
				if(type=="yes"){
					window.location.reload();
				}else{
					alert(results);
					window.close();
					window.opener.location.reload();
				}
			}
		}
	}
	xmlHttpFlow2.open("POST", url, true);
	xmlHttpFlow2.send(null);
}
//移至废件箱
function updateDelFlag(type,ids,delFlag,isSplit){
	if(isSplit==undefined || isSplit=='undefined'){
		isSplit = "";
	}
	createXMLHttpRequestFlow2();
	var url="/jsp/common/workflowServlet.jsp?method=updateDelFlag&type="+type+"&ids="+ids+"&delFlag="+delFlag+"&isSplit="+isSplit;
	xmlHttpFlow2.onreadystatechange = function(){
		if (xmlHttpFlow2.readyState == 4) {
			if (xmlHttpFlow2.status == 200) {
				var results = trim(xmlHttpFlow2.responseText);
				alert(results);
				window.location.reload();
			}
		}
	}
	xmlHttpFlow2.open("POST", url, true);
	xmlHttpFlow2.send(null);
}
//收文第一次打印时，设置收文IS_FIRST_PRINT字段为“no”
function updateIsFirstPrint(inIdForFirstPrint,setValue){
	if(setValue==undefined || setValue=='undefined'){
		setValue = "";
	}
	
	createXMLHttpRequestFlow2();
	var url="/jsp/common/workflowServlet.jsp?method=updateIsFirstPrint&inIdForFirstPrint="+inIdForFirstPrint+"&setValue="+setValue;
	xmlHttpFlow2.onreadystatechange = function(){
		if (xmlHttpFlow2.readyState == 4) {
			if (xmlHttpFlow2.status == 200) {
				//var results = trim(xmlHttpFlow2.responseText);
			}
		}
	}
	xmlHttpFlow2.open("POST", url, true);
	xmlHttpFlow2.send(null);
}
//授权管理人
function updateAdminUser(adminUser,ids,tableName,keyName,type){
	jQuery.post("/archives/gongwenCommonAction!updateAdminUser.action", {
						"adminUser" : adminUser,
						"ids" : ids,
						"tableName" : tableName,
						"keyName" : keyName,
						"type":type
						}, function(result) {
							alert(result);
							window.location.href = window.location.href;
						});
}
//意见补登
function addNewIdea(recordid,flowtype,tableName,tableId,
idea,username,userid,userdeptid,userdeptname,ideatime,notion){
	createXMLHttpRequestFlow2();
	var url="/jsp/common/workflowServlet.jsp?method=addNewIdea"+
	"&recordId="+recordid+"&flowTypeId="+flowtype+"&tableName="+tableName+"&tableId="+tableId+
	"&idea="+encodeURIComponent(idea)+"&username="+encodeURIComponent(username)+"&userid="+userid+"&userdeptid="+userdeptid+"&userdeptname="+encodeURIComponent(userdeptname)+"&ideatime="+ideatime+"&notion="+notion;
	xmlHttpFlow2.onreadystatechange = function(){
		if (xmlHttpFlow2.readyState == 4) {
			if (xmlHttpFlow2.status == 200) {
				var results = trim(xmlHttpFlow2.responseText);
				alert(results);
				window.location.reload();
			}
		}
	}
	xmlHttpFlow2.open("POST", url, true);
	xmlHttpFlow2.send(null);
}
//修改补登意见
function savenewIdea(ideaid,idea,username,userid,userdeptid,userdeptname,ideatime,notion,tableName,recordId){
	createXMLHttpRequestFlow2();
	var url="/jsp/common/workflowServlet.jsp?method=savenewIdea&ideaid="+ideaid+"&idea="+idea+"&username="+username+
	"&userid="+userid+"&userdeptid="+userdeptid+"&userdeptname="+userdeptname+"&ideatime="+ideatime+"&notion="+notion+
	"&tableName="+tableName+"&recordId="+recordId;
	xmlHttpFlow2.onreadystatechange = function(){
		if (xmlHttpFlow2.readyState == 4) {
			if (xmlHttpFlow2.status == 200) {
				var results = trim(xmlHttpFlow2.responseText);
				alert(results);
				window.location.reload();
			}
		}
	}
	xmlHttpFlow2.open("POST", url, true);
	xmlHttpFlow2.send(null);
}
//根据部门ID返回NAME给页面
function getUserDeptByUserId(userdeptid,userdeptname){
	createXMLHttpRequestFlow2();
	var url="/jsp/common/workflowServlet.jsp?method=getUserDeptByUserId&userdeptid="+userdeptid;
	xmlHttpFlow2.onreadystatechange = function(){
		if (xmlHttpFlow2.readyState == 4) {
			if (xmlHttpFlow2.status == 200) {
				var results = trim(xmlHttpFlow2.responseText);
				document.all(userdeptname).value = results;
			}
		}
	}
	xmlHttpFlow2.open("POST", url, true);
	xmlHttpFlow2.send(null);
}
function updateAdminUserAll(oldUserId,newUserId){
	createXMLHttpRequestFlow2();
	var url="/jsp/common/workflowServlet.jsp?method=updateAdminUserAll&oldUserId="+oldUserId+"&newUserId="+newUserId;
	xmlHttpFlow2.onreadystatechange = function(){
		if (xmlHttpFlow2.readyState == 4) {
			if (xmlHttpFlow2.status == 200) {
				var results = trim(xmlHttpFlow2.responseText);
				alert(results);
				window.location.reload();
			}
		}
	}
	xmlHttpFlow2.open("POST", url, true);
	xmlHttpFlow2.send(null);
}
//公文查询：选择公文种类，文号列表根据流程修改
function changeCodeForSearch(fileType,codeSelectName,defaultV){
	var selectObject = document.getElementById(codeSelectName);
	createXMLHttpRequestFlow2();
	var url="/jsp/common/workflowServlet.jsp?method=changeCodeForSearch&fileType="+fileType;
	xmlHttpFlow2.onreadystatechange = function(){
		if (xmlHttpFlow2.readyState == 4) {
			if (xmlHttpFlow2.status == 200) {
				var num = xmlHttpFlow2.responseXML.getElementsByTagName("num")[0].firstChild.nodeValue;
				selectObject.length=0;
				for(var i=0;i<num;i++){
					var codevalue = xmlHttpFlow2.responseXML.getElementsByTagName("message")[i].firstChild.nodeValue;
					var oOption = document.createElement("OPTION");
					selectObject.options.add(oOption);
					if(codevalue.indexOf("请选择")>-1){
						oOption.value = "";
					}else{
						oOption.value = codevalue;
					}
					oOption.innerText = codevalue;
					if(codevalue==defaultV){
						oOption.selected=true;
					}
				}
			}
		}
	}
	xmlHttpFlow2.open("POST", url, true);
	xmlHttpFlow2.send(null);
}
//删除补登意见人员配置
function deleteFlowUserLeader(ids){
	jQuery.post("/archives/gongwenCommonAction!deleteFlowUserLeader.action", {"ids" : ids}, function(result) {
					if(result=='true'){
						alert("删除成功！");
						window.location.href = window.location.href;
					}else{
						alert("删除失败！");
					}
					});
}
//清除分发过程没用附件
function delAffixForSend(outId){
	createXMLHttpRequestFlow2();
	var url="/jsp/common/workflowServlet.jsp?method=delAffixForSend&outId="+outId;
	xmlHttpFlow2.onreadystatechange = function(){
		if (xmlHttpFlow2.readyState == 4) {
			if (xmlHttpFlow2.status == 200) {
				var results = trim(xmlHttpFlow2.responseText);
			}
		}
	}
	xmlHttpFlow2.open("POST", url, true);
	xmlHttpFlow2.send(null);
}
//分发并办结修改附件后点击确定返回状态
function getAffixState(outId,deptId){
	createXMLHttpRequestFlow();
	var url="/jsp/common/workflowServlet.jsp?method=getAffixState&outId="+outId+"&deptId="+deptId;
	xmlHttpFlow.onreadystatechange = function(){
		if (xmlHttpFlow.readyState == 4) {
			if (xmlHttpFlow.status == 200) {
				var results = xmlHttpFlow.responseText;
				if(results.indexOf("已修改")>-1){
					window.opener.document.getElementById(deptId).innerHTML="<font color='red'>已修改</font>";
				}else{
					window.opener.document.getElementById(deptId).innerHTML="";
				}
			}
		}
	}
	xmlHttpFlow.open("POST", url, true);
	xmlHttpFlow.send(null);
}

//个人移至废件箱
function removeBox(str,tableNmae,tableId,cIP,cMAC,cCNAME){
	if(cIP=="undefined" && cIP==undefined){
		cIP = "";
	}
	
	if(cMAC=="undefined" && cMAC==undefined){
		cMAC = "";
	}
	
	if(cCNAME=="undefined" && cCNAME==undefined){
		cCNAME = "";
	}
	createXMLHttpRequestFlow2();
	var url="/jsp/common/workflowServlet.jsp?method=removeBox&str="+str+"&tablename="+tableNmae+"&tableId="+tableId+"&cIP="+cIP+"&cMAC="+cMAC+"&cCNAME="+cCNAME;
	xmlHttpFlow2.onreadystatechange = function(){
		if (xmlHttpFlow2.readyState == 4) {
			if (xmlHttpFlow2.status == 200) {
				var results = trim(xmlHttpFlow2.responseText);
				if(results.indexOf("部分成功")>-1){
					window.open("/jsp/module/archives/archives_remove_list.jsp?tablename="+tableNmae+"&tableId="+tableId+"&cIP="+cIP+"&cMAC="+cMAC+"&cCNAME="+cCNAME,"","status=no,maximize=no,toolbar=no,scrollbars=no,menubar=no,location=no,top=200,left=200,resizable=no,height=430,width=700");
				}else{
					alert(results);
					window.location.reload();
				}
			}
		}
	}
	xmlHttpFlow2.open("POST", url, true);
	xmlHttpFlow2.send(null);
}

//分发并办结修改附件后点击确定返回状态
function getAffixState2(outId,deptId,deptIds){
	createXMLHttpRequestFlow();
	var url="/jsp/common/workflowServlet.jsp?method=getAffixState&outId="+outId+"&deptId="+deptId;
	xmlHttpFlow.onreadystatechange = function(){
		if (xmlHttpFlow.readyState == 4) {
			if (xmlHttpFlow.status == 200) {
				var results = xmlHttpFlow.responseText;
				var deptstr = deptIds.split("|$|");
				if(deptId==deptIds){
					if(results.indexOf("已修改")>-1){
						document.getElementById(deptId).innerHTML="<font color='red'>已修改</font>";
					}else{
						document.getElementById(deptId).innerHTML="";
					}
				}else{
					if(results.indexOf("已修改")>-1){
						for(var i=0; i<deptstr.length;i++){
							if(deptstr[i]!="undefined" && deptstr[i]!=""){
								document.getElementById(deptstr[i]).innerHTML="<font color='red'>已修改</font>";
							}
						}
					}else{
						for(var i=0; i<deptstr.length;i++){
							if(deptstr[i]!="undefined" && deptstr[i]!=""){
								document.getElementById(deptstr[i]).innerHTML="";
							}
						}
					}
				}
				//var checks = document.getElementsByName("ckbAffix");
	 			//for(var v=0;v<checks.length;v++){
	 			//  checks[v].checked = false;
	 			//}
			}
		}
	}
	xmlHttpFlow.open("POST", url, true);
	xmlHttpFlow.send(null);
}

function delCgrs(cgrsId){
	if(cgrsId!="undefined" && cgrsId!=""){
		createXMLHttpRequestFlow();
		var url="/jsp/common/workflowServlet.jsp?method=deleteCgrs&cgrsId="+cgrsId;
		xmlHttpFlow.onreadystatechange = function(){
			if (xmlHttpFlow.readyState == 4) {
				if (xmlHttpFlow.status == 200) {
					var results = xmlHttpFlow.responseText;
				}
			}
		}
		xmlHttpFlow.open("POST", url, true);
		xmlHttpFlow.send(null);
	}
}

//公文页面加载
var GWdisabledImageZone;	
function showGWGifLoading(url_img) {
	var w = window.document.body.offsetWidth;
	var h = window.document.body.offsetHeight;
	GWdisabledImageZone = window.document.createElement('div');
	GWdisabledImageZone.setAttribute('id', 'GWdisabledImageZone');
	GWdisabledImageZone.style.position = "absolute";
	GWdisabledImageZone.style.zIndex = "1000";
	GWdisabledImageZone.style.left = "0px";
	GWdisabledImageZone.style.top = "0px";
	GWdisabledImageZone.style.width = "100%";
	GWdisabledImageZone.style.height = "100%";
	GWdisabledImageZone.style.backgroundColor = "#F2F2F2";
	var imageZone = window.document.createElement('img');
	imageZone.setAttribute('id','imageZone');
	imageZone.setAttribute('src', url_img);
	imageZone.style.position = "absolute";
	imageZone.style.top = h/2;
	imageZone.style.right = w/2;
	GWdisabledImageZone.appendChild(imageZone);
	window.document.body.appendChild(GWdisabledImageZone);
}
//公文页面加载完毕
function closeGWGifLoading() {
		if (GWdisabledImageZone != null) {
			setTimeout("GWdisabledImageZone.style.visibility = 'hidden';", 500);
		}
}
//恢复设置（分发并办结修改附件恢复设置）
function resumeAffixForSend(outId,deptids){
	createXMLHttpRequestFlow2();
	var url="/jsp/common/workflowServlet.jsp?method=resumeAffixForSend&outId="+outId+"&deptids="+deptids;
	xmlHttpFlow2.onreadystatechange = function(){
		if (xmlHttpFlow2.readyState == 4) {
			if (xmlHttpFlow2.status == 200) {
				var results = trim(xmlHttpFlow2.responseText);
				alert(results);
			}
		}
	}
	xmlHttpFlow2.open("POST", url, true);
	xmlHttpFlow2.send(null);
}
//批量设置(分发并办结修改附件批量设置)
function copyAllAffixForSend(outId,deptIdOK,deptIds){
	createXMLHttpRequestFlow2();
	var url="/jsp/common/workflowServlet.jsp?method=copyAllAffixForSend&outId="+outId+"&deptIdOK="+deptIdOK+"&deptIds="+deptIds;
	xmlHttpFlow2.onreadystatechange = function(){
		if (xmlHttpFlow2.readyState == 4) {
			if (xmlHttpFlow2.status == 200) {
				var results = trim(xmlHttpFlow2.responseText);
				 closely();
				//alert(results);
			}
		}
	}
	xmlHttpFlow2.open("POST", url, true);
	xmlHttpFlow2.send(null);
}
//批量设置(分发并办结修改附件批量设置)
function deleteAllAffixForSend(outId,deptIds){
	createXMLHttpRequestFlow2();
	var url="/jsp/common/workflowServlet.jsp?method=deleteAllAffixForSend&outId="+outId+"&deptIds="+deptIds;
	xmlHttpFlow2.onreadystatechange = function(){
		if (xmlHttpFlow2.readyState == 4) {
			if (xmlHttpFlow2.status == 200) {
				var results = trim(xmlHttpFlow2.responseText);
				alert(results);
			}
		}
	}
	xmlHttpFlow2.open("POST", url, true);
	xmlHttpFlow2.send(null);
}
//分发并办结修改附件后点击确定返回状态
function getAllAffixState(outId,deptId){
	createXMLHttpRequestFlow();
	var url="/jsp/common/workflowServlet.jsp?method=getAllAffixState&outId="+outId+"&deptId="+deptId;
	xmlHttpFlow.onreadystatechange = function(){
		if (xmlHttpFlow.readyState == 4) {
			if (xmlHttpFlow.status == 200) {
				var results = xmlHttpFlow.responseText;
				if(results.indexOf("已修改")>-1){
					window.opener.document.getElementById(deptId).innerHTML="<font color='red'>已修改</font>";
				}else{
					window.opener.document.getElementById(deptId).innerHTML="";
				}
			}
		}
	}
	xmlHttpFlow.open("POST", url, true);
	xmlHttpFlow.send(null);
}
function getAllAffixStateForLoad(outId,ckbAffix,sendAffixid){
	var checks = document.getElementsByName(ckbAffix);
	var ids = "";
	if(checks.length>0){
		for(var i=0;i<checks.length;i++){
			ids = ids+checks[i].value+",";
		}
		ids = ids.substring(0,ids.length-1);
	}
	createXMLHttpRequestFlow();
	var url="/jsp/common/workflowServlet.jsp?method=getAllAffixStateForLoad&outId="+outId+"&ids="+ids+"&sendAffixid="+sendAffixid;
	xmlHttpFlow.onreadystatechange = function(){
		if (xmlHttpFlow.readyState == 4) {
			if (xmlHttpFlow.status == 200) {
				var results = xmlHttpFlow.responseText;
				var str = ids.split(",");
				for(var k=0;k<str.length;k++){
					if(results.indexOf(str[k]+"已修改")>-1){
						document.getElementById(str[k]).innerHTML="<font color='red'>已修改</font>";
					}
				}
			}
		}
	}
	xmlHttpFlow.open("POST", url, true);
	xmlHttpFlow.send(null);
}

//更新正文和附件页数异步函数
var xmlHttpFilelist;
function createXMLHttpRequestFileList() {
    if (window.ActiveXObject) {
        xmlHttpFilelist = new ActiveXObject("Microsoft.XMLHTTP");
    } 
    else if (window.XMLHttpRequest) {
        xmlHttpFilelist = new XMLHttpRequest();
    }
}

function updateFilelist(id,pagenum,filetype){
	createXMLHttpRequestFileList();
	var url="/jsp/common/workflowServlet.jsp?method=updatePageNum&fileid="+id+"&pagenum="+pagenum+"&filetype="+filetype;
	xmlHttpFilelist.onreadystatechange = function(){
		if (xmlHttpFilelist.readyState == 4) {
			if (xmlHttpFilelist.status == 200) {
				var results = xmlHttpFilelist.responseText;
			}
		}
	}
	xmlHttpFilelist.open("POST", url, true);
	xmlHttpFilelist.send(null);
}
 