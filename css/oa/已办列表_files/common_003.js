var xmlHttpDoc;
//var isSafari = navigator.userAgent.toLowerCase().match(/version\/([\d.]+).*safari/) ? true : false;
var czxt = navigator.platform;
function createXMLHttpRequestDoc() {
    if (window.ActiveXObject) {
        xmlHttpDoc = new ActiveXObject("Microsoft.XMLHTTP");
    } 
    else if (window.XMLHttpRequest) {
        xmlHttpDoc = new XMLHttpRequest();
    }else{
   		xmlHttpDoc = new XMLHttpRequest();
    }
}

function trim(stringToTrim) {	return stringToTrim.replace(/^\s+|\s+$/g,"");}

//文号关联套红模板  套红（主要用于收、发文）
function taohongDoc(moduleId,taohongOutWord,recordId, textId, readOnlyState, subflag, tableName,trueText,SealTextId,filetypid) {
	if (filetypid==undefined){
		filetypid = '';
	}
	if(recordId!=""){
		createXMLHttpRequestDoc();
		var outCode = document.getElementById(taohongOutWord).value;
		if(outCode!=null && outCode!=""){
			var url="/jsp/module/gongwen/qb/docServlet.jsp?method=taohong&outCode="+outCode;
			xmlHttpDoc.onreadystatechange = function(){
				if (xmlHttpDoc.readyState == 4) {
					if (xmlHttpDoc.status == 200) {
						if(trim(outCode)!=""){
							var results = xmlHttpDoc.responseText;
							if(trim(results)!=""){
								if(trim(results).indexOf("<:>")==-1){
									//alert(trim(results));
									results = trim(results).split("|$|");
									//alert(results[0]);
									wordTaoHongAndContent(moduleId,results[0],recordId,textId,readOnlyState,subflag,tableName,trueText,SealTextId,'',filetypid);
									DownLoadText(textId,trueText,SealTextId);
								}else{
									window.open("/jsp/module/gongwen/qb/selectMode.jsp?moduleId="+moduleId+"&recordId="+recordId+"&textId="+textId+"&readOnlyState="+readOnlyState+"&subflag="+subflag+"&tableName="+tableName+"&trueText="+trueText+"&SealTextId="+SealTextId+"&module=taohong&outCode="+outCode+"&filetypeid="+filetypid+"&templet=0",'','status=yes,maximize=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,top=20,left=50, resizable=yes,height=200,width=800');
								}
							}else{
								alert("根据文号未找到对应的模板");
							}
						}else{
							alert("请选择发文字号");
							return false;
						}
					}
				}
			}
			xmlHttpDoc.open("POST", url, true);
			xmlHttpDoc.send(null);
			
		}else{
			alert("请选择发文字号");
			return false;
		}
	}else{
		alert("请先保存基本信息!");
	}
}

//文号关联套红模板  套红（主要用于收、发文）
function taohongTemplet(moduleId,taohongOutWord,recordId, textId, readOnlyState, subflag, tableName,trueText,SealTextId,filetypid) {
	if (filetypid==undefined){
		filetypid = '';
	}
	if(recordId!=""){
		createXMLHttpRequestDoc();
		var outCode = document.getElementById(taohongOutWord).value;
		if(outCode!=null && outCode!=""){
			var url="/jsp/module/gongwen/qb/docServlet.jsp?method=taohong&outCode="+outCode;
			xmlHttpDoc.onreadystatechange = function(){
				if (xmlHttpDoc.readyState == 4) {
					if (xmlHttpDoc.status == 200) {
						if(trim(outCode)!=""){
							var results = xmlHttpDoc.responseText;
							if(trim(results)!=""){
								if(trim(results).indexOf("<:>")==-1){
									//alert(trim(results));
									results = trim(results).split("|$|");
									//alert(results[0]);
									wordTaoHongAndModel(moduleId,results[0],recordId,textId,readOnlyState,"false",subflag,tableName,trueText,SealTextId,'',filetypid);
									DownLoadText(textId,trueText,SealTextId);
								}else{
									window.open("/jsp/module/gongwen/qb/selectMode.jsp?moduleId="+moduleId+"&recordId="+recordId+"&textId="+textId+"&readOnlyState="+readOnlyState+"&subflag="+subflag+"&tableName="+tableName+"&trueText="+trueText+"&SealTextId="+SealTextId+"&module=taohong&outCode="+outCode+"&filetypeid="+filetypid+"&templet=1",'','status=yes,maximize=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,top=20,left=50, resizable=yes,height=200,width=800');
								}

							}else{
								alert("根据文号未找到对应的模板");
							}
						}else{
							alert("请选择发文字号");
							return false;
						}
					}
				}
			}
			xmlHttpDoc.open("POST", url, true);
			xmlHttpDoc.send(null);
		}else{
			alert("请选择发文字号");
			return false;
		}
	}else{
		alert("请先保存基本信息!");
	}
}


//文号关联稿纸模板  稿纸（主要用于收、发文）
function gaozhiDoc(moduleId, outCode, recordId, textId,pageText, readOnlyState, subflag, tableName,filetypeid,tablename) {
	if(recordId!=""){
		createXMLHttpRequestDoc();
		var url="/jsp/module/gongwen/qb/docServlet.jsp?method=gaozhi&outCode="+document.getElementById(outCode).value;
		xmlHttpDoc.onreadystatechange = function(){
			if (xmlHttpDoc.readyState == 4) {
				if (xmlHttpDoc.status == 200) {
					if(trim(outCode)!=""){
						var results = xmlHttpDoc.responseText;
						if(trim(results)!=""){
							if(trim(results).indexOf("<:>")==-1){
								results = trim(results).split("|$|");
							  //openArchivesPrint(moduleId,recordId,outCode,results,textId,readOnlyState,subflag,tableName,filetypeid,tablename,pageText);
								openArchivesPrint(moduleId,recordId,outCode,results[0],textId,readOnlyState,subflag,tableName,filetypeid,tablename,pageText);
							}else{
								window.open("/jsp/module/gongwen/qb/selectMode.jsp?moduleId="+moduleId+"&recordId="+recordId+"&textId="+textId+"&readOnlyState="+readOnlyState+"&subflag="+subflag+"&tableName="+tableName+"&filetypeid="+filetypeid+"&pageText="+pageText+"&module=gaozhi&tablename="+tablename+"&outCode="+outCode,'','status=yes,maximize=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,top=20,left=50, resizable=yes,height=200,width=800');
							}
						}else{
							alert("根据文号未找到对应的模板");
						}
					}else{
						alert('请选择发文字号');
						return false;
					}
				}
			}
		}
		xmlHttpDoc.open("POST", url, true);
		xmlHttpDoc.send(null);
	}else{
		alert("请先保存基本信息!");
	}
}
/*
 *	流程类型关联套红模板  套红（主要用于签报、催督办）
*/
function taohongFlowDoc(moduleId,flow_type,recordId,textId,readOnlyState,subflag,tableName,true_text,isSign){
	if (isSign==undefined){
			isSign = '';
	}
	if(recordId!=""){
		createXMLHttpRequestDoc();
		var url="/jsp/module/gongwen/qb/docServlet.jsp?method=taohong&flow_type="+flow_type;
		xmlHttpDoc.onreadystatechange = function(){
			if (xmlHttpDoc.readyState == 4) {
				if (xmlHttpDoc.status == 200) {
					if(flow_type!=""){
						var results = xmlHttpDoc.responseText;
						if(trim(results)!=""){
							if(trim(results).indexOf("<:>")==-1){
								results = trim(results).split("|$|");
								wordTaoHongAndContent(moduleId,results[0],recordId,textId,readOnlyState,subflag,tableName,true_text,'',isSign,flow_type);
								DownLoadText(textId,true_text,"");
							}else{
								//		taohongFlowDoc('archives_sign','<%=flow_type %>','<%=recordId%>','<%=textId%>','1','<%=subflag%>','FILELIST','<%=true_text %>','true');
								window.open("/jsp/module/gongwen/qb/selectMode.jsp?moduleId="+moduleId+"&recordId="+recordId+"&textId="+textId+"&readOnlyState="+readOnlyState+"&subflag="+subflag+"&tableName="+tableName+"&trueText="+true_text+"&filetypeid="+flow_type+"&module=signtaohong",'','status=yes,maximize=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,top=20,left=50, resizable=yes,height=200,width=800');
							}
						}else{
							alert("根据流程ID未找到对应的模板");
						}
					}else{
						alert('请选择发文字号');
						return false;
					}
				}
			}
		}

		xmlHttpDoc.open("POST", url, true);
		xmlHttpDoc.send(null);
	}else{
		alert("请先保存基本信息!");
	}
}


function taohongFlowTemplet(moduleId,flow_type,recordId,textId,readOnlyState,subflag,tableName,true_text,isSign){
	if (isSign==undefined){
			isSign = '';
	}
	if(recordId!=""){
		createXMLHttpRequestDoc();
		var url="/jsp/module/gongwen/qb/docServlet.jsp?method=taohong&flow_type="+flow_type;
		xmlHttpDoc.onreadystatechange = function(){
			if (xmlHttpDoc.readyState == 4) {
				if (xmlHttpDoc.status == 200) {
					if(flow_type!=""){
						var results = xmlHttpDoc.responseText;
						if(trim(results)!=""){
							if(trim(results).indexOf("<:>")==-1){
								results = trim(results).split("|$|");
								wordTaoHongAndModel(moduleId,results[0],recordId,textId,readOnlyState,"false",subflag,tableName,true_text,'',isSign,flow_type);
								//wordTaoHongAndContent(moduleId,results[0],recordId,textId,readOnlyState,subflag,tableName,true_text,'',isSign,flow_type);
							}else{
								window.open("/jsp/module/gongwen/qb/selectMode.jsp?moduleId="+moduleId+"&recordId="+recordId+"&textId="+textId+"&readOnlyState="+readOnlyState+"&subflag="+subflag+"&tableName="+tableName+"&trueText="+true_text+"&filetypeid="+flow_type+"&module=signtaohong"+"&templet=1",'','status=yes,maximize=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,top=20,left=50, resizable=yes,height=200,width=800');
							}
						}else{
							alert("根据流程ID未找到对应的模板");
						}
					}else{
						alert('请选择发文字号');
						return false;
					}
				}
			}
		}

		xmlHttpDoc.open("POST", url, true);
		xmlHttpDoc.send(null);
	}else{
		alert("请先保存基本信息!");
	}
}

/*
 *	流程类型关联稿纸模板  稿纸（主要用于签报、催督办）
 *	参数：
 		moduleId		模板ID
 		recordId		业务表主键
 		txtId			正文ID
 		readOnlyState	只读选项
 		subflag			流程代号
 		saveTable		保存的表名
 		tablename		业务表名称
*/
function gaozhiFlowDoc(moduleId,recordId,textId,paperText,readOnlyState,subflag,saveTable,flow_type,tablename){
	if(recordId!=""){
		
		createXMLHttpRequestDoc();
		var url="/jsp/module/gongwen/qb/docServlet.jsp?method=gaozhi&flow_type="+flow_type;
		xmlHttpDoc.onreadystatechange = function(){
			if (xmlHttpDoc.readyState == 4) {
				if (xmlHttpDoc.status == 200) {
					if(flow_type!=""){
						var results = xmlHttpDoc.responseText;
						if(trim(results)!=""){
							if(trim(results).indexOf("<:>")==-1){
								results = trim(results).split("|$|");
								openArchivesPrint(moduleId,recordId,'',results[0],textId,readOnlyState,subflag,saveTable,flow_type,tablename,paperText);
							}else{
								window.open("/jsp/module/gongwen/qb/selectMode.jsp?moduleId="+moduleId+"&recordId="+recordId+"&textId="+textId+"&readOnlyState="+readOnlyState+"&subflag="+subflag+"&tableName="+saveTable+"&filetypeid="+flow_type+"&pageText="+paperText+"&module=flowgaozhi&tablename="+tablename,'','status=yes,maximize=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,top=20,left=50, resizable=yes,height=200,width=800');
							}

						}else{
							alert("根据流程ID未找到对应的模板");
						}
					}else{
						alert('请选择发文字号');
						return false;
					}
				}
			}
		}
		xmlHttpDoc.open("POST", url, true);
		xmlHttpDoc.send(null);
	}else{
		alert("请先保存基本信息!");
	}
}


function taohongZhenwen(textId,trueTextId,title){
	createXMLHttpRequestDoc();
	var url="/jsp/module/gongwen/qb/docServlet.jsp?method=taohongzhengwen&trueTextId="+trueTextId;
	xmlHttpDoc.onreadystatechange = function(){
	if (xmlHttpDoc.readyState == 4) {
		if (xmlHttpDoc.status == 200) {
				var results = xmlHttpDoc.responseText;
				if(trim(results)!=""){
					mainText(trueTextId,title);
				}else {
					mainText(textId,title);
				}
			}
		}
	}
	xmlHttpDoc.open("POST", url, true);
	xmlHttpDoc.send(null);
}

function taohongZhenwenReadOnly(textId,trueTextId,title,sealText){
	if(sealText!=undefined){
		sealText = "";
	}
	createXMLHttpRequestDoc();
	var url="/jsp/module/gongwen/qb/docServlet.jsp?method=taohongzhengwen&trueTextId="+trueTextId+"&sealText="+sealText+"&textId="+textId;
	xmlHttpDoc.onreadystatechange = function(){
	if (xmlHttpDoc.readyState == 4) {
		if (xmlHttpDoc.status == 200) {
				var results = xmlHttpDoc.responseText;
				if(trim(results)!=""){
					if(trim(results)=="1"){
						mainTextReadOnly(sealText,title);
					}else {
						mainTextReadOnly(trueTextId,title);
					}
				}else{
						mainTextReadOnly(textId,title);
				}
			}
		}
	}
	xmlHttpDoc.open("POST", url, true);
	xmlHttpDoc.send(null);
}

/**
  *信访套红
  *信访套红公用方法
  *@author 孔繁禹
  */	
function daTaoHong(trueTextId){
		alert("taohong");
		var title = '信访套红';
		var url="/jsp/module/gongwen/qb/docServlet.jsp?method=taohongzhengwen&trueTextId="+trueTextId;
		createXMLHttpRequestDoc();
		alert(url);
		xmlHttpDoc.onreadystatechange = function(){
		if (xmlHttpDoc.readyState == 4) {
			if (xmlHttpDoc.status == 200) {
					var results = xmlHttpDoc.responseText;
					alert("res : "+results);
					if(trim(results)!=""){
						if(confirm("已经套红，是否重新套红？")){
							taohong();
						}else{
							mainText(trueTextId,title);
						}
					}else{
						//mainText(textId,title);
						taohong();
					}
				}
			}
		}
		xmlHttpDoc.open("POST", url, true);
		xmlHttpDoc.send(null);
	}
	
/**
  *信访套红
  *信访套红公用方法
  *@author 孔繁禹
  */	
function daTaoHong(trueTextId,title){
	var url="/jsp/module/gongwen/qb/docServlet.jsp?method=taohongzhengwen&trueTextId="+trueTextId;
	createXMLHttpRequestDoc();
		
	xmlHttpDoc.onreadystatechange = function(){
	if (xmlHttpDoc.readyState == 4) {
		if (xmlHttpDoc.status == 200) {
				var results = xmlHttpDoc.responseText; 
				if(trim(results)!=""){
					//mainText(trueTextId,title);
					
					if(confirm("已经套红，是否重新套红？")){
						taohong();
					}else{
						mainText(trueTextId,title);
					}
				}else{
					//mainText(textId,title);
					taohong();
				}
			}
		}
	}
	xmlHttpDoc.open("POST", url, true);
	xmlHttpDoc.send(null);
}
	
	/*
		打开正文模式
		参数：
			textId  	正文ID
			truetext	套红ID
			SealText	盖章ID
			tilte		标题
			read		是否按只读打开（不传默认为"1"，不按只读打开，0为只读）
	*/
	function openText(textId,truetext,SealText,title,read,subflag,printNumber,isFirstPrint,inId,isSign,dishi,isView){
	//alert("textId="+textId);
	//alert("truetext="+truetext);
	//alert("SealText="+SealText);
	// alert(read);
	//printNumber,isFirstPrint,inId,isSign,dishi
	if(isView==undefined){
		isView = "";
	}
	if(subflag==undefined){
		subflag = "01";
	}
	if(read==undefined){
		read = "1";
	}
	if(printNumber==undefined){
		printNumber = "";
	}
	if(isFirstPrint==undefined){
		printNumber = "";
	}
	if(inId==undefined){
		inId = "";
	}
	if(isSign==undefined){
		isSign = "";
	}
	if(dishi==undefined){
		dishi = "";
	}
	if(czxt.indexOf("Linux")>-1||czxt=="iPhone"||czxt=="iPad"||czxt.indexOf("Mac")>-1){
		DownLoadText(textId,truetext,SealText);
	}else{
		//加载页面时检查该文是否盖章或套红（如盖章按照盖章后的正文显示，要是套过红按照套红打开否则按正文打开）
		createXMLHttpRequestDoc();
		var url="/jsp/module/gongwen/qb/docServlet.jsp?method=openModel&trueTextId="+truetext+"&sealText="+SealText+"&textId="+textId;
		//alert("url:"+url);
		xmlHttpDoc.onreadystatechange = function(){
		if (xmlHttpDoc.readyState == 4) {
			if (xmlHttpDoc.status == 200) {
					var results = xmlHttpDoc.responseText;
					 //alert(results);
					if(trim(results)=="1"){
						editNormalWord('',SealText,'0','0',subflag,'',SealText,printNumber,isFirstPrint,inId,isSign);
						//document.getElementById("text").innerHTML = "<img src='<c:out value='${staticURL}'/>/images/doc.gif' width='15' height='15' /> <a href='#' class='red' onclick=editNormalWord('','<%=SealText%>','0','1','0','');>"+document.getElementById("title").value+".doc</a>";
						if(isView==""){
							DownLoadText(textId,truetext,SealText);
						}
					}else if(trim(results)=="2"){
						editNormalWord('',truetext,read,'1',subflag,'','','','','',isSign);
						//document.getElementById("text").innerHTML = "<img src='<c:out value='${staticURL}'/>/images/doc.gif' width='15' height='15' /> <a href='#' class='red' onclick=editNormalWord('','<%=truetext%>','0','1','0','');>"+document.getElementById("title").value+".doc</a>";
						if(isView==""){
							DownLoadText(textId,truetext,SealText);
						}
					}else if(trim(results)=="3"){
						if(inId!=""){
							editNormalWord('',textId,read,'1',subflag,'','','','no',inId);
							//DownLoadText(textId,truetext,SealText);
						}else{
							editNormalWord('',textId,read,'1',subflag,'');
							if(isView==""){
								DownLoadText(textId,truetext,SealText);
							}
							
						}
						//document.getElementById("text").innerHTML = "<img src='<c:out value='${staticURL}'/>/images/doc.gif' width='15' height='15' /> <a href='#' class='red' onclick=editNormalWord('','<%=textId%>','0','1','0','');>"+document.getElementById("title").value+".doc</a>";
					}else{
						mainText(textId,title);
						if(isView==""){
							DownLoadText(textId,truetext,SealText);
						}
						
					}
					
				}
			}
		}
		xmlHttpDoc.open("POST", url, true);
		xmlHttpDoc.send(null);
	}
	}
	/*
	打开历史正文，2008前
	参数：
		textId  	正文ID
		truetext	套红ID
		SealText	盖章ID
		tilte		标题
		read		是否按只读打开（不传默认为"1"，不按只读打开，0为只读）
*/
function openTextHis(textId,truetext,SealText,title,read,subflag,printNumber,isFirstPrint,inId,isSign,dishi,isView){
//alert("textId="+textId);
//alert("truetext="+truetext);
//alert("SealText="+SealText);
// alert(read);
//printNumber,isFirstPrint,inId,isSign,dishi
if(isView==undefined){
	isView = "";
}
if(subflag==undefined){
	subflag = "01";
}
if(read==undefined){
	read = "1";
}
if(printNumber==undefined){
	printNumber = "";
}
if(isFirstPrint==undefined){
	printNumber = "";
}
if(inId==undefined){
	inId = "";
}
if(isSign==undefined){
	isSign = "";
}
if(dishi==undefined){
	dishi = "";
}
if(czxt.indexOf("Linux")>-1||czxt=="iPhone"||czxt=="iPad"||czxt.indexOf("Mac")>-1){
	DownLoadText(textId,truetext,SealText);
}else{
	//加载页面时检查该文是否盖章或套红（如盖章按照盖章后的正文显示，要是套过红按照套红打开否则按正文打开）
	createXMLHttpRequestDoc();
	var url="/jsp/module/gongwen/qb/docServlet.jsp?method=openModel&trueTextId="+truetext+"&sealText="+SealText+"&textId="+textId;
	//alert("url:"+url);
	xmlHttpDoc.onreadystatechange = function(){
	if (xmlHttpDoc.readyState == 4) {
		if (xmlHttpDoc.status == 200) {
				var results = xmlHttpDoc.responseText;
				 //alert(results);
				if(trim(results)=="1"){
					editNormalWordNew('0','filelist_history',SealText,'FILENAME','FILEDATE','FILEBODY','','0','','','','','','');return false;
					//editNormalWord('',SealText,'0','0',subflag,'',SealText,printNumber,isFirstPrint,inId,isSign);
					//document.getElementById("text").innerHTML = "<img src='<c:out value='${staticURL}'/>/images/doc.gif' width='15' height='15' /> <a href='#' class='red' onclick=editNormalWord('','<%=SealText%>','0','1','0','');>"+document.getElementById("title").value+".doc</a>";
					if(isView==""){
						DownLoadText(textId,truetext,SealText);
					}
				}else if(trim(results)=="2"){
					editNormalWordNew('0','filelist_history',truetext,'FILENAME','FILEDATE','FILEBODY','','0','','','','','','');return false;
					//editNormalWord('',truetext,read,'1',subflag,'','','','','',isSign);
					//document.getElementById("text").innerHTML = "<img src='<c:out value='${staticURL}'/>/images/doc.gif' width='15' height='15' /> <a href='#' class='red' onclick=editNormalWord('','<%=truetext%>','0','1','0','');>"+document.getElementById("title").value+".doc</a>";
					if(isView==""){
						DownLoadText(textId,truetext,SealText);
					}
				}else if(trim(results)=="3"){
					if(inId!=""){
						editNormalWordNew('0','filelist_history',textId,'FILENAME','FILEDATE','FILEBODY','','0','','','','','','');return false;
						//editNormalWord('',textId,read,'1',subflag,'','','','no',inId);
						//DownLoadText(textId,truetext,SealText);
					}else{
						editNormalWordNew('0','filelist_history',textId,'FILENAME','FILEDATE','FILEBODY','','0','','','','','','');return false;
						//editNormalWord('',textId,read,'1',subflag,'');
						if(isView==""){
							DownLoadText(textId,truetext,SealText);
						}
						
					}
					//document.getElementById("text").innerHTML = "<img src='<c:out value='${staticURL}'/>/images/doc.gif' width='15' height='15' /> <a href='#' class='red' onclick=editNormalWord('','<%=textId%>','0','1','0','');>"+document.getElementById("title").value+".doc</a>";
				}else{
					editNormalWordNew('0','filelist_history',textId,'FILENAME','FILEDATE','FILEBODY','','0','','','','','','');return false;
					//mainText(textId,title);
					if(isView==""){
						DownLoadText(textId,truetext,SealText);
					}
					
				}
				
			}
		}
	}
	xmlHttpDoc.open("POST", url, true);
	xmlHttpDoc.send(null);
}
}
	function DownLoadText(textId,truetext,SealText){
		createXMLHttpRequestDoc();
		var url="/jsp/module/gongwen/qb/docServlet.jsp?method=openModel&trueTextId="+truetext+"&sealText="+SealText+"&textId="+textId;
		xmlHttpDoc.onreadystatechange = function(){
		if (xmlHttpDoc.readyState == 4) {
			if (xmlHttpDoc.status == 200) {
					var results = xmlHttpDoc.responseText;
					if(trim(results)=="1"){
					    if(czxt.indexOf("Linux")>-1){
					       androidOpen(SealText);
						}else if(czxt=="iPhone"||czxt=="iPad"||czxt.indexOf("Mac")>-1){
						   downloadmaintext(SealText);
						}else{
							insertDownload('');
						}
						//editNormalWord('',SealText,'0','1',subflag,'',SealText,printNumber,isFirstPrint,inId,isSign);
						//document.getElementById("text").innerHTML = "<img src='<c:out value='${staticURL}'/>/images/doc.gif' width='15' height='15' /> <a href='#' class='red' onclick=editNormalWord('','<%=SealText%>','0','1','0','');>"+document.getElementById("title").value+".doc</a>";
					}else if(trim(results)=="2"){
					    if(czxt.indexOf("Linux")>-1){
					       androidOpen(truetext);
					    }else if(czxt=="iPhone"||czxt=="iPad"||czxt.indexOf("Mac")>-1){
						   downloadmaintext(truetext);
						}else{
							insertDownload('');
						}
						//editNormalWord('',truetext,read,'1',subflag,'','','','','',isSign);
						//document.getElementById("text").innerHTML = "<img src='<c:out value='${staticURL}'/>/images/doc.gif' width='15' height='15' /> <a href='#' class='red' onclick=editNormalWord('','<%=truetext%>','0','1','0','');>"+document.getElementById("title").value+".doc</a>";
					}else if(trim(results)=="3"){
					    if(czxt.indexOf("Linux")>-1){
					       androidOpen(textId);
					    }else if(czxt=="iPhone"||czxt=="iPad"||czxt.indexOf("Mac")>-1){
						   downloadmaintext(textId);
						}else{
							insertDownload('');
						}
						//if(inId!=""){
						//	editNormalWord('',textId,read,'1',subflag,'','','','no',inId);
						//}else{
						//	editNormalWord('',textId,read,'1',subflag,'');
						//}
						//document.getElementById("text").innerHTML = "<img src='<c:out value='${staticURL}'/>/images/doc.gif' width='15' height='15' /> <a href='#' class='red' onclick=editNormalWord('','<%=textId%>','0','1','0','');>"+document.getElementById("title").value+".doc</a>";
					}else{
						//if(czxt.indexOf("Linux")>-1||czxt=="iPhone"||czxt=="iPad"||czxt.indexOf("Mac")>-1){
							//insertDownload('');
						//}else{
							insertDownload('');
						//}
						//mainText(textId,title);
					}
				}
			}
		}
		xmlHttpDoc.open("POST", url, true);
		xmlHttpDoc.send(null);
	}
	function androidOpen(id){
		window.open("/jsp/common/affix/affix_read_blob3.jsp?affix_id="+id+"&affixTableName=FILELIST");
	}
	//插入原文的下载
	function insertDownload(id){
		if(id!=""){
			document.getElementById("downloadText").innerHTML = "<a href='###' onClick=downloadmaintext('"+id+"');return false; class='redtext'>下载</a>";
		}else{
			document.getElementById("downloadText").innerHTML = "";
		}
		
	}

	function updateModelOther(FileName,ModelName,tiXiID,ModelType,tableName){
		createXMLHttpRequestDoc();
			var url="/jsp/module/gongwen/qb/docServlet.jsp?FileName="+FileName+"&ModelName="+ModelName+"&tiXiID="+tiXiID+"&method=modifymodel&ModelType="+ModelType+"&tableName="+tableName;
			xmlHttpDoc.onreadystatechange = function(){
				if (xmlHttpDoc.readyState == 4) {
					if (xmlHttpDoc.status == 200) {
						var results = xmlHttpDoc.responseText;
						alert(trim(results));
					}
				}
			}
		xmlHttpDoc.open("POST", url, true);
		xmlHttpDoc.send(null);
	}

/*
 *	流程类型关联套红模板  套红（主要用于邮政信息）
*/
function taohongFlowDocByFileName(moduleId,flow_type,recordId,textId,readOnlyState,subflag,tableName,true_text,filename){
	if(recordId!=""){
		createXMLHttpRequestDoc();
		var url="/jsp/module/gongwen/qb/docServlet.jsp?method=infomation&flow_type="+flow_type+"&filename="+filename;
		xmlHttpDoc.onreadystatechange = function(){
			if (xmlHttpDoc.readyState == 4) {
				if (xmlHttpDoc.status == 200) {
					if(flow_type!=""){
						var results = xmlHttpDoc.responseText;
						if(trim(results)!=""){
							if(trim(results).indexOf("<:>")==-1){
								results = trim(results).split("|$|");
								var retValue=wordTaoHongAndCont(moduleId,results[0],recordId,textId,readOnlyState,subflag,tableName,true_text,'','');
								if(retValue==1){
								document.location.reload();
								}
							}
						}else{
							alert("根据流程ID未找到对应的模板");
						}
					}else{
						alert('请选择发文字号');
						return false;
					}
				}
			}
		}

		xmlHttpDoc.open("POST", url, true);
		xmlHttpDoc.send(null);
	}else{
		alert("请先保存基本信息!");
	}
}

function taohongFlowDocByFileNameNew(isNew, filelistTableName, filelistIdValue, filelistIdField, filelistNameField, filelistBlobField, filelistFilesizeField, filelistFiletypeField, pagenumField, recordId, filetypid, modleId, viewStatus, toPage, tableName_temp, fileId_temp, idField_temp, filenameField_temp, blobField_temp,others){
				var url = "/MakeArchiveTempleteServlet?isNew="+isNew+"&filelistTableName="+filelistTableName+"&filelistIdValue="+filelistIdValue+
						"&filelistIdField="+filelistIdField+"&filelistNameField="+filelistNameField+"&filelistBlobField="+filelistBlobField+"&filelistFilesizeField="+filelistFilesizeField
						+"&filelistFiletypeField="+filelistFiletypeField+"&pagenumField="+pagenumField+"&recordId="+recordId+"&filetypid="+filetypid+"&modleId="+modleId+"&viewStatus="+viewStatus
						+"&toPage="+toPage+"&tableName_temp="+tableName_temp+"&fileId_temp="+fileId_temp+"&idField_temp="+idField_temp+"&filenameField_temp="+filenameField_temp+"&blobField_temp="+blobField_temp+"&others="+others;
				var  strStyle = "help:no;minimize:no;maximize:yes;border:thick;statusbar:no;" + "dialogWidth=1024;dialogHeight=768;center:yes;status:no;edge: raised";
				return window.showModalDialog(url,window,strStyle);				
}
			
/*
 *	流程类型关联套红模板  套红（主要用于信息局信息）
*/
function xxjFlowDocByFileName(moduleId,flow_type,recordId,textId,readOnlyState,subflag,tableName,true_text,result){
	if(recordId!=""){
	var url = "/jsp/common/document/makeXxjfile.jsp?modelId="+moduleId+"&modelName="+moduleId+"&keyValue="+recordId+"&textFile="+textId+"&viewStatus="+readOnlyState+"&subflag="+subflag+"&saveTableName="+tableName+"&trueText="+true_text+"&SealTextId=&isSign=&result="+result;
	var  strStyle = "help:no;minimize:no;maximize:yes;border:thick;statusbar:no;"+"dialogWidth=1024;dialogHeight=768;center:yes;status:no;edge: raised";
	var retValue= window.showModalDialog(url,"ModelDialog",strStyle);
		if(retValue==1){
		document.location.reload();
		}
	}else{
		//alert("请先保存基本信息!");
	}
}

/*
 *	流程类型关联稿纸模板  稿纸（主要用于签报、催督办）
 *	参数：
 		moduleId		模板ID
 		recordId		业务表主键
 		txtId			正文ID
 		readOnlyState	只读选项
 		subflag			流程代号
 		saveTable		保存的表名
 		tablename		业务表名称
*/
function huodongFlowDoc(moduleId,recordId,textId,paperText,readOnlyState,subflag,saveTable,flow_type,tablename){
	if(recordId!=""){
		createXMLHttpRequestDoc();
		var url="/jsp/module/gongwen/qb/docServlet.jsp?method=huodonggaozhi&flow_type="+flow_type;
		xmlHttpDoc.onreadystatechange = function(){
			if (xmlHttpDoc.readyState == 4) {
				if (xmlHttpDoc.status == 200) {
						var results = xmlHttpDoc.responseText;
						if(trim(results)!=""){
							if(trim(results).indexOf("<:>")==-1){
								results = trim(results).split("|$|");
								openArchivesPrint(moduleId,recordId,'',results[0],textId,readOnlyState,subflag,saveTable,flow_type,tablename,paperText);
							}else{
								window.open("/jsp/module/gongwen/qb/selectMode.jsp?moduleId="+moduleId+"&recordId="+recordId+"&textId="+textId+"&readOnlyState="+readOnlyState+"&subflag="+subflag+"&tableName="+saveTable+"&filetypeid="+flow_type+"&pageText="+paperText+"&module=flowgaozhi&tablename="+tablename,'','status=yes,maximize=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,top=20,left=50, resizable=yes,height=200,width=800');
							}

						}else{
							alert("根据您所在的独立单位未找到对应的模板");
						}
				}
			}
		}
		xmlHttpDoc.open("POST", url, true);
		xmlHttpDoc.send(null);
	}else{
		alert("请先保存基本信息!");
	}
}


