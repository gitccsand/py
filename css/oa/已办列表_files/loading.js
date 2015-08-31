var oHandlePopup;
var oLoadPopup;
function showLoading(oText)
{
	var _loadDIV = document.createElement('div');
	_loadDIV.setAttribute('id','loadDIV');
	_loadDIV.style.position = "absolute";
	_loadDIV.style.zIndex = "1000";
	_loadDIV.style.left = "0px";
	_loadDIV.style.top = "0px";
	_loadDIV.style.width = "100%";
	_loadDIV.style.height = "100%";
	//_loadDIV.innerHTML = "sdfsafdsajfd;lksajf;lkdsjflksjflkdsaf";
	_loadDIV.style.visibility = 'visible';
	//document.body.appendChild(_loadDIV);
	window.parent.document.body.appendChild(_loadDIV);
	
	
	if(!oText)
		oText="加载中...";
		var str = "<table width='397' border='0' align='center' cellpadding='0'cellspacing='0'>"
		+"<tr><td height='27' background='/images/loading-top.gif'>"
		+"<table width='380' height='27' border='0' align='center' cellpadding='0'cellspacing='0'>"
		+"<tr><td height='27' width='300'>&nbsp;&nbsp;"
		+"<img valign='bottom' src='/images/tishi.gif' width='14' height='14'/>"
		+"<span id='tipMsg' style='font-size:12px;'>&nbsp;&nbsp;"+oText+"</span></td>"
		+"<td align='right' width='80' style=;cursor:hand;' onclick='parent.parent.closeLoading();'>X&nbsp;</td></tr></table>"
		+"</td></tr>"
		+"<tr><td height='78' align='center' background='/images/loading-bottom.gif'>"
		+"<img src='/images/progress.gif' width='161' height='11'/><br/>"
		+"<span style='font-size:12px;'></span></td></tr>"
		+"</table>";
	if(!oHandlePopup)
	{
	oHandlePopup = window.createPopup();
	oHandlePopup.document.body.onblur=function()
	{
		oHandlePopup.show(0, 0, 0, 0,top.document.body);
		
		this.focus();
		this.onload();
	};
	oHandlePopup.document.body.onload=function()
	{
		
		if(!oLoadPopup){
			oLoadPopup=oHandlePopup.document.parentWindow.createPopup();
			with (oLoadPopup.document.body){
				style.backgroundColor="#F3F3F3";
				style.border="ridge 0px";
				topmargin=0;
				leftmargin=0;
				innerHTML=str;
			}
		}
		var width=398;
		var height=107;
		var windowWidth=top.document.body.offsetWidth;
		var windowHeight=top.document.body.offsetHeight;
		oLoadPopup.show((windowWidth-width)/2,(windowHeight-height)/2-20,width,height,oHandlePopup.document.body);
	}
	}
oHandlePopup.show(0, 0, 0,0,top.document.body);
oHandlePopup.document.body.focus();
}
function closeLoading(){
	if(oHandlePopup)
	{
		oHandlePopup.document.body.onblur=function(){};
		oHandlePopup.hide();
		oHandlePopup=null;
		oLoadPopup=null;
	}
}

function closeHuanChong() {
	setTimeout("closeJinDuTiao();",100);
}
function closeJinDuTiao() {
	if (document.getElementById("rightframe").contentWindow.document.readyState == "complete") {
		if (document.getElementById("rightframe").contentWindow.document.getElementById("TypeList") == null) {
			closeLoading();
			return;
		}
	  	if (document.getElementById("rightframe").contentWindow.document.getElementById("TypeList").contentWindow.document.readyState != "complete") {
	    	setTimeout("closeJinDuTiao();",100);
	  	} else {
	  		closeLoading();
	  	}
  	} else {
  		setTimeout("closeJinDuTiao();",100);
  	}
}
