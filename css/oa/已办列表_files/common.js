// 获取element的简化函数
function $(e) {
	return document.getElementById(e);
}
//var isSafari = navigator.userAgent.toLowerCase().match(/version\/([\d.]+).*safari/) ? true : false;
var czxt = navigator.platform;
// 验证字符串中是否含有限制字符 add by wolf
function validateChar(mValue){
	iCharpos=mValue.search("['/\\\\|\"<>`~\^]");
	if(iCharpos>=0){
		//alert("输入的内容含有非法字符 '/\\|\"<>`~\^");
		return false;
	}
	return true;
}

//验证特殊字符，注意：此方法允许用户输入"/"字符 (公文组)
function ischeckForm(checkValue){
	var re = /['\\\\|\"<*?/:&>]/gi;
	if(re.test(checkValue)){
		return true;
	}
	return false;
}

function viewTotalNotion(flowtype,recordId,title,deleteflag,sort){
	if(sort=='undefined'){
		sort = '';
	}
	window.open('/jsp/common/total_Notion.jsp?flowtype='+flowtype+'&recordId='+recordId+'&title='+title+'&deleteflag='+deleteflag+'&sort='+sort,'','status=no,maximize=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,top=0,left=50, resizable=yes,height=700,width=900');
}
function viewTotalNotionHis(flowtype,recordId,title,deleteflag,sort){
	if(sort=='undefined'){
		sort = '';
	}
	window.open('/jsp/common/total_NotionHistoryDB.jsp?flowtype='+flowtype+'&recordId='+recordId+'&title='+title+'&deleteflag='+deleteflag+'&sort='+sort,'','status=no,maximize=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,top=0,left=50, resizable=yes,height=700,width=900');
}
//去前后空格
function trimQH(stringToTrim) {
	return stringToTrim.replace(/^\s+|\s+$/g,"");
}

//替换所有
function replaceAll(strOrg,strFind,strReplace){
 var index = 0;
 while(strOrg.indexOf(strFind,index) != -1){
  strOrg = strOrg.replace(strFind,strReplace);
  index = strOrg.indexOf(strFind,index);
 }
 return strOrg;
}

//全选
function selectAllCheckBox(obj,obj2,o){  
  	var flag='';
  	if(obj==null){//无记录
		alert("此页面没有可选择项目!"); 
		return false;
  	}else
	if (obj.length==undefined){//只有一条记录
		if (obj.disabled == true){
			alert("此页面没有可选择项目!"); 
			return false;
		}
		obj.checked=obj2.checked;	    
  	}else{//存在多条记录
		for (var i=0;i<obj.length;i++){
			if (obj[i]==undefined){
				alert("此页面没有可选择项目!"); 
				return false;
			}
			if (obj[i].disabled == false){
				obj[i].checked  = o.checked;  		  	     
				flag='1';		  	        
			}   
		}
		if (flag==''){
			alert("此页面没有可选择项目!");  
			return false;
		}
  	}
}

//打开一个模式对话框
//height, width 高度和宽度
//url 链接地址
function openModelWindow(url, width, height) {
	var returnValue, strStyle;
	strStyle = "help:no;minimize:yes;maximize:yes;border:thick;statusbar:no;"
		+ "dialogWidth=" + width + ";dialogHeight=" + height + ";center:yes;status:no;edge: raised";
	//returnValue = window.showModalDialog(url, "ModelDialog",  strStyle);
	returnValue = window.showModelessDialog(url,window,  strStyle);
	//window.open(url,'',"status=no,toolbar=no,scrollbars=yes,menubar=no,location=no,top=0,left=5, resizable=no,height=700,width=1000");
	return returnValue;
}


//****************************************************************
// Code by Yahao
// Description: sInputString 为输入字符串，iType为类型，分别为
// 0 - 去除前后空格; 1 - 去前导空格; 2 - 去尾部空格
//****************************************************************

function cTrim(sInputString,iType)
{
	var sTmpStr = ' '
	var i = -1
	
	if(iType == 0 || iType == 1)
	{
		while(sTmpStr == ' ')
		{
			++i
			sTmpStr = sInputString.substr(i,1)
		}
		sInputString = sInputString.substring(i)
	}
	
	if(iType == 0 || iType == 2)
	{
		sTmpStr = ' '
		i = sInputString.length
		while(sTmpStr == ' ')
		{
			--i
			sTmpStr = sInputString.substr(i,1)
		}
		sInputString = sInputString.substring(0,i+1)
	}
	return sInputString
}

//'************************************************
//Purpose: 判断输入是否含有为中文
//Inputs:String
//Returns:True,False
//'************************************************
function CheckChinese(str){
	if(escape(str).indexOf("%u")!=-1){ 
		return true;
	}
	return false;
}

//'************************************************
// Purpose:根据select的ID删除其下所有option
// param:selId
// author:kongFanYu
// example:<input type="button" value="test" onclick="delObjChild('paperFileTypeI');">
//'************************************************
function delObjChild(selId){           		// delete the children of Node obj 
    var kids = $(selId).childNodes; 		// Get the list of children
    if(kids){								// if this object exist
    	//alert(kids);
	    var numkids = kids.length;  		// Figure out how many children there are
	    if(numkids > 0){					// if childNodes length > zero
	    	//alert(numkids);
		    for(var i = numkids - 1; i >= 0; i--) {  		// Loop backward through the children
		        var c = $(selId).removeChild(kids[i]);    	// Remove a child
		        //n.appendChild(c);                  		// Put it back at its new position
		    }
	    }
    }
}

// 赋默认值给select框 
/* selId:    当前要赋值的select框的ID
   objValue: select框要选中的option的值
   author:   kongFanYu
*/
function setSelsValue(selId,objValue){
	if(objValue != '' && objValue != null && objValue != 'none'){
		//var obj = $(selId);
		var obj = document.getElementById(selId);
		if(obj){
			if(obj.options.length){
				for(var i=0;i<obj.options.length;i++){
					if(objValue == obj.options[i].value){
						obj.options[i].selected = "selected";
						break;
					}
				}
			}
		}
	}
}

//排序用 
/* cells:    当前排序列号
   orderBy:  当前排序字段 例：'order by TITLE'
   url:      表单action的url 例：'xxxx.jsp'
   formObj:  表单对象
*/
 function order(cells,orderBy,URL,formObj){
  var x = formObj.cells.value;
	if(x == cells){
		var orderAD = formObj.orderAD.value;
		if(orderAD=='asc'){
		  formObj.orderAD.value='desc';
		} else{
		  formObj.orderAD.value='asc';
		}
	}else{
		formObj.orderBy.value=orderBy;
		formObj.cells.value=cells;
	}
	formObj.action=URL;
	formObj.submit();
 }

//分页跳转页面用
/*需要在form1中增加rows隐藏域，该隐藏域记录当前每页的分页行数 
* 其他参数不需要关心,调用地方是自动生成的.
*/
  function go(totalPage,URL,formname){
		var pagenumber = document.forms[formname].elements["pagenumber"].value;
		if(!parseInt(pagenumber)){
				alert("页数必须为数字型！");
				return false;
		}
		pagenumber = parseInt(pagenumber);
		var objForm = document.forms[formname];
		if(pagenumber==""||pagenumber<=0||pagenumber>totalPage){
			alert("请输入正确的页码");
			return false;
		}else{
			pagenumber = Math.round(pagenumber);
			var rowsNum = document.forms[formname].elements["rows"].value;
			objForm.action = URL+"&start="+(pagenumber-1)*rowsNum;
			objForm.submit();
		}
	}

//隐藏查询条件table
function shrinkage(tabObj,phObj,stateObj){
	if(tabObj.style.display==""){
		tabObj.style.display="none";
		phObj.innerHTML="<img src='/images/sys_ico_open.gif' border='0' style='cursor:pointer' title='点击展开' width='16' height='16'>";
		stateObj.value="shrink";
	}else{
		tabObj.style.display="";
		phObj.innerHTML="<img src='/images/sys_ico_close.gif' border='0' style='cursor:pointer' title='点击折叠' width='16' height='16'>";
		stateObj.value="unwind";
	}
}

//使用MD5进行加密
	function MD5(sMessage) {
		function RotateLeft(lValue, iShiftBits) { return (lValue<<iShiftBits) | (lValue>>>(32-iShiftBits)); }
		function AddUnsigned(lX,lY) {
			var lX4,lY4,lX8,lY8,lResult;
			lX8 = (lX & 0x80000000);
			lY8 = (lY & 0x80000000);
			lX4 = (lX & 0x40000000);
			lY4 = (lY & 0x40000000);
			lResult = (lX & 0x3FFFFFFF)+(lY & 0x3FFFFFFF);
			if (lX4 & lY4) return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
			if (lX4 | lY4) {
				if (lResult & 0x40000000) return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
				else return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
			} else return (lResult ^ lX8 ^ lY8);
		}
		function F(x,y,z) { return (x & y) | ((~x) & z); }
		function G(x,y,z) { return (x & z) | (y & (~z)); }
		function H(x,y,z) { return (x ^ y ^ z); }
		function I(x,y,z) { return (y ^ (x | (~z))); }
		function FF(a,b,c,d,x,s,ac) {
			a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
			return AddUnsigned(RotateLeft(a, s), b);
		}
		function GG(a,b,c,d,x,s,ac) {
			a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
			return AddUnsigned(RotateLeft(a, s), b);
		}
		function HH(a,b,c,d,x,s,ac) {
			a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
			return AddUnsigned(RotateLeft(a, s), b);
		}
		function II(a,b,c,d,x,s,ac) {
			a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
			return AddUnsigned(RotateLeft(a, s), b);
		}
		function ConvertToWordArray(sMessage) {
			var lWordCount;
			var lMessageLength = sMessage.length;
			var lNumberOfWords_temp1=lMessageLength + 8;
			var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1 % 64))/64;
			var lNumberOfWords = (lNumberOfWords_temp2+1)*16;
			var lWordArray=Array(lNumberOfWords-1);
			var lBytePosition = 0;
			var lByteCount = 0;
			while ( lByteCount < lMessageLength ) {
				lWordCount = (lByteCount-(lByteCount % 4))/4;
				lBytePosition = (lByteCount % 4)*8;
				lWordArray[lWordCount] = (lWordArray[lWordCount] | (sMessage.charCodeAt(lByteCount)<<lBytePosition));
				lByteCount++;
			}
			lWordCount = (lByteCount-(lByteCount % 4))/4;
			lBytePosition = (lByteCount % 4)*8;
			lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80<<lBytePosition);
			lWordArray[lNumberOfWords-2] = lMessageLength<<3;
			lWordArray[lNumberOfWords-1] = lMessageLength>>>29;
			return lWordArray;
		}
		function WordToHex(lValue) {
			var WordToHexValue="",WordToHexValue_temp="",lByte,lCount;
			for (lCount = 0;lCount<=3;lCount++) {
				lByte = (lValue>>>(lCount*8)) & 255;
				WordToHexValue_temp = "0" + lByte.toString(16);
				WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length-2,2);
			}
			return WordToHexValue;
		}
		var x=Array();
		var k,AA,BB,CC,DD,a,b,c,d
		var S11=7, S12=12, S13=17, S14=22;
		var S21=5, S22=9 , S23=14, S24=20;
		var S31=4, S32=11, S33=16, S34=23;
		var S41=6, S42=10, S43=15, S44=21;
		// Steps 1 and 2. Append padding bits and length and convert to words
		x = ConvertToWordArray(sMessage);
		// Step 3. Initialise
		a = 0x67452301; b = 0xEFCDAB89; c = 0x98BADCFE; d = 0x10325476;
		// Step 4. Process the message in 16-word blocks
		for (k=0;k<x.length;k+=16) {
		AA=a; BB=b; CC=c; DD=d;
		a=FF(a,b,c,d,x[k+0], S11,0xD76AA478);
		d=FF(d,a,b,c,x[k+1], S12,0xE8C7B756);
		c=FF(c,d,a,b,x[k+2], S13,0x242070DB);
		b=FF(b,c,d,a,x[k+3], S14,0xC1BDCEEE);
		a=FF(a,b,c,d,x[k+4], S11,0xF57C0FAF);
		d=FF(d,a,b,c,x[k+5], S12,0x4787C62A);
		c=FF(c,d,a,b,x[k+6], S13,0xA8304613);
		b=FF(b,c,d,a,x[k+7], S14,0xFD469501);
		a=FF(a,b,c,d,x[k+8], S11,0x698098D8);
		d=FF(d,a,b,c,x[k+9], S12,0x8B44F7AF);
		c=FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);
		b=FF(b,c,d,a,x[k+11],S14,0x895CD7BE);
		a=FF(a,b,c,d,x[k+12],S11,0x6B901122);
		d=FF(d,a,b,c,x[k+13],S12,0xFD987193);
		c=FF(c,d,a,b,x[k+14],S13,0xA679438E);
		b=FF(b,c,d,a,x[k+15],S14,0x49B40821);
		a=GG(a,b,c,d,x[k+1], S21,0xF61E2562);
		d=GG(d,a,b,c,x[k+6], S22,0xC040B340);
		c=GG(c,d,a,b,x[k+11],S23,0x265E5A51);
		b=GG(b,c,d,a,x[k+0], S24,0xE9B6C7AA);
		a=GG(a,b,c,d,x[k+5], S21,0xD62F105D);
		d=GG(d,a,b,c,x[k+10],S22,0x2441453);
		c=GG(c,d,a,b,x[k+15],S23,0xD8A1E681);
		b=GG(b,c,d,a,x[k+4], S24,0xE7D3FBC8);
		a=GG(a,b,c,d,x[k+9], S21,0x21E1CDE6);
		d=GG(d,a,b,c,x[k+14],S22,0xC33707D6);
		c=GG(c,d,a,b,x[k+3], S23,0xF4D50D87);
		b=GG(b,c,d,a,x[k+8], S24,0x455A14ED);
		a=GG(a,b,c,d,x[k+13],S21,0xA9E3E905);
		d=GG(d,a,b,c,x[k+2], S22,0xFCEFA3F8);
		c=GG(c,d,a,b,x[k+7], S23,0x676F02D9);
		b=GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);
		a=HH(a,b,c,d,x[k+5], S31,0xFFFA3942);
		d=HH(d,a,b,c,x[k+8], S32,0x8771F681);
		c=HH(c,d,a,b,x[k+11],S33,0x6D9D6122);
		b=HH(b,c,d,a,x[k+14],S34,0xFDE5380C);
		a=HH(a,b,c,d,x[k+1], S31,0xA4BEEA44);
		d=HH(d,a,b,c,x[k+4], S32,0x4BDECFA9);
		c=HH(c,d,a,b,x[k+7], S33,0xF6BB4B60);
		b=HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);
		a=HH(a,b,c,d,x[k+13],S31,0x289B7EC6);
		d=HH(d,a,b,c,x[k+0], S32,0xEAA127FA);
		c=HH(c,d,a,b,x[k+3], S33,0xD4EF3085);
		b=HH(b,c,d,a,x[k+6], S34,0x4881D05);
		a=HH(a,b,c,d,x[k+9], S31,0xD9D4D039);
		d=HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);
		c=HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);
		b=HH(b,c,d,a,x[k+2], S34,0xC4AC5665);
		a=II(a,b,c,d,x[k+0], S41,0xF4292244);
		d=II(d,a,b,c,x[k+7], S42,0x432AFF97);
		c=II(c,d,a,b,x[k+14],S43,0xAB9423A7);
		b=II(b,c,d,a,x[k+5], S44,0xFC93A039);
		a=II(a,b,c,d,x[k+12],S41,0x655B59C3);
		d=II(d,a,b,c,x[k+3], S42,0x8F0CCC92);
		c=II(c,d,a,b,x[k+10],S43,0xFFEFF47D);
		b=II(b,c,d,a,x[k+1], S44,0x85845DD1);
		a=II(a,b,c,d,x[k+8], S41,0x6FA87E4F);
		d=II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);
		c=II(c,d,a,b,x[k+6], S43,0xA3014314);
		b=II(b,c,d,a,x[k+13],S44,0x4E0811A1);
		a=II(a,b,c,d,x[k+4], S41,0xF7537E82);
		d=II(d,a,b,c,x[k+11],S42,0xBD3AF235);
		c=II(c,d,a,b,x[k+2], S43,0x2AD7D2BB);
		b=II(b,c,d,a,x[k+9], S44,0xEB86D391);
		a=AddUnsigned(a,AA); b=AddUnsigned(b,BB); c=AddUnsigned(c,CC); d=AddUnsigned(d,DD);
	   }
	   var temp= WordToHex(a)+WordToHex(b)+WordToHex(c)+WordToHex(d);
      return temp.toLowerCase();
	}


//
function showLoading(oText)
{	if(!oText)
		oText="加载中...";
	var str="<body><table cellpadding='0' cellspacing='0'  border=0 width=100% height=100%><tr bgcolor='#3399FF' style='font-size:12px;color:#ffffff' height=24><td font-size:12px>&nbsp;"+
			 oText
			+"</td><td align=right><input type=button onclick='parent.parent.closeLoading()' value='X'></td></tr>"+
			"<tr bgcolor='#FFFFEC'><td colspan=2 valign=middle align=center>"+
			"<marquee style='border:1px solid #000000' direction='right' width='300' height='8' scrollamount='10' scrolldelay='10' bgcolor='#ECF2FF'>"+
			"<table cellspacing='1' cellpadding='0' height='8'>"+
			"<tr>"+
			"<td bgcolor=#3399FF width=8 height='8' style='font-size:12px;'></td>"+
			"<td height='8' style='font-size:12px;'></td>"+
			"<td bgcolor=#3399FF width=8 height='8' style='font-size:12px;'></td>"+
			"<td height='8' style='font-size:12px;' ></td>"+
			"<td bgcolor=#3399FF width=8 height='8' style='font-size:12px;'></td>"+
			"<td height='8'></td>"+
			"<td bgcolor=#3399FF width=8 height='8' style='font-size:12px;'></td>"+
			"<td></td>"+
			"</tr></table></marquee>"+
			"</td></tr></table></body>";
	if(!oHandlePopup)
	{
	oHandlePopup = window.createPopup();
  //alert(oHandlePopup+'<====oHandlePopup');
  //alert("oHandlePopup.document.body"+oHandlePopup.document.body);
	oHandlePopup.document.body.onblur=function()
	{
		oHandlePopup.show(0, 0, 0, 0,top.document.body);
		
		this.focus();
		this.onload();
	};
	oHandlePopup.document.body.onload=function()
	{//alert('2222');
		
		if(!oLoadPopup)
		{	
			//var text=oText;
			//alert(this.oText)
			//alert("oHandlePopup1517==>"+oHandlePopup);
			oLoadPopup=oHandlePopup.document.parentWindow.createPopup();
			
			//alert(str)
			with (oLoadPopup.document.body) 
			{
			style.backgroundColor="#F3F3F3";
			style.border="ridge 1px";
			topmargin=0;
			leftmargin=0;
			innerHTML=str;
			//pop.document.write(str);
			}
		}
		var width=350;
		var height=60;
		var windowWidth=top.document.body.offsetWidth;
		var windowHeight=top.document.body.offsetHeight;
		oLoadPopup.show((windowWidth-width)/2,(windowHeight-height)/2-20,width,height,oHandlePopup.document.body);
	}
	}
oHandlePopup.show(0, 0, 0,0,top.document.body);
oHandlePopup.document.body.focus();
}

//关闭窗口；
function closeLoading(){
	if(oHandlePopup)
	{
		oHandlePopup.document.body.onblur=function(){};
		oHandlePopup.hide();
		oHandlePopup=null;
		oLoadPopup=null;
	}
}

//返回复选中复选框的值,用逗号隔开
//remind 复选框的名字
function check(strSelName){
	var obj=document.forms[0].elements[strSelName];
	//var obj=document.getElementById(strSelName);
  var flag=false;
  var temp="";
    if(obj!=null){
	var length = obj.length;
	if (length){
		if(length>0) {
			for (var m=0;m<obj.length;m++){	
				if(obj[m].checked ==true){
					if(flag) temp+=",";
					temp+=obj[m].value;
					flag=true;
				}
			}
		}else {
			if(obj.checked==true) {
				temp=obj.value;
			}
		}
	}else{
	    if(obj.checked==true){
			temp=obj.value;
		}else{
		  return;
		}
	}
	}else{
	  return;
	}
  return temp;
}

//批量checkbox
function checkMoreDel(urlDossier,formname,checkboxName){
	var j = 0;
	var formObj = document.forms[formname];
	var checkboxObj = document.forms[formname].elements[checkboxName];
	if(checkboxObj){
		if(checkboxObj.length){
			for(i=0;i<checkboxObj.length;i++){
				if(checkboxObj[i] != null && checkboxObj[i].checked){
					j++;
				}
			}
		}
		else
		{
			if(checkboxObj.checked){
				j++;
			}
		}
		if(j>0)
		{
			if(confirm("您确定要删除所选数据吗？")){
					formObj.action=urlDossier;
					formObj.submit();
			}else{
					return false;
			}
		}
		else
		{
			alert("没有选择记录！");
		}
	}
	else
	{
		alert("没有记录！");
	}
}

/**
 * 功能:选择用户
 * @param  strSelID 存放选择后用户ID的隐藏域名称
 * @param  strSelName 存放选择后用户名称的文本框名称
 * @param  type 选择用户类型：1为单选，其他值为任选  
 */
function selectFlowUser(strSelID, strSelName, type, orgId) {
	if (orgId==undefined){
			orgId = '';
	}
	var strStyle;
	var strSelectID,strSelectName;
	var objSelID,objSelName;
	var returnValue;
	var arrRetrun;
	objSelID = document.getElementById(strSelID);
	objSelName = document.getElementById(strSelName);
	strSelectID = "";
	strSelectID = objSelID.value;
	strSelectName = objSelName.value;
	var str;
	var i;
 	str = window.showModalDialog("/jsp/common/tree/select_user/main_frame.jsp?type="+type+"&ID="+strSelectID+"&Name="+strSelectName+"&orgId="+orgId, "MyDialog", "dialogWidth:600px;dialogHeight:400px;status:0;help:0;scroll:0");	
	if (type == 1) {
		if (null != str) {
			i = str.indexOf(",");
			if (i > 0) {
				alert("只能选择一位,请重选!");
				return false;
			}
		}
	}
	if (type == 3) {
		if (null != str) {
			i = str.indexOf(",");
			if (i > 0) {
				alert("只能选择一位,请重选!");
				return false;
			}
		}
	}
	if (null != str) {
		i = str.indexOf("|");
		var userName = str.substring(0,i);
		var userIDS = str.substring(i+1);		   
		objSelID.value = userIDS;
		objSelName.value = userName;
	}	
    return str;
}

//用户树 根据独立实体限制
function selectFlowUserNew(strSelID, strSelName, type, orgId,isretrunDeptId) {
	if (orgId==undefined){
			orgId = '';
	}
	if (isretrunDeptId==undefined){
		isretrunDeptId = '';
	}
	var strStyle;
	var strSelectID,strSelectName;
	var objSelID,objSelName;
	var returnValue;
	var arrRetrun;
	objSelID = document.getElementById(strSelID);
	objSelName = document.getElementById(strSelName);
	strSelectID = "";
	strSelectID = objSelID.value;
	strSelectName = objSelName.value;
	var str;
	var i;
	if(czxt.indexOf("Linux")>-1||czxt=="iPhone"||czxt=="iPad"||czxt.indexOf("Mac")>-1){
		var top = screen.availHeight/2 - 400/2;
		var left = screen.availWidth/2 - 600/2;
		var strStyle = "status=no, maximize=no, scrollbars=no, toolbar=no, menubar=no, location=no, top="+top+", left="+left+", resizable=no, height=400px,width=600px";
		window.open("/jsp/common/tree/select_user_new/main_frame.jsp?type="+type+"&ID="+strSelectID+"&Name="+strSelectName+"&orgId="+orgId+"&TO_ID="+strSelID+"&TO_NAME="+strSelName+"&isretrunDeptId="+isretrunDeptId, "", strStyle);
	}else{
 		str = window.showModalDialog("/jsp/common/tree/select_user_new/main_frame.jsp?type="+type+"&ID="+strSelectID+"&Name="+strSelectName+"&orgId="+orgId+"&isretrunDeptId="+isretrunDeptId, "MyDialog", "dialogWidth:600px;dialogHeight:400px;status:0;help:0;scroll:0");	
	}
	
	if (type == 1) {
		if (null != str) {
			i = str.indexOf(",");
			if (i > 0) {
				alert("只能选择一位,请重选!");
				return false;
			}
		}
	}
	if (type == 3) {
		if (null != str) {
			i = str.indexOf(",");
			if (i > 0) {
				alert("只能选择一位,请重选!");
				return false;
			}
		}
	}
	
	if (null != str) {
		if(isretrunDeptId==''){
			i = str.indexOf("|");
			var userName = str.substring(0,i);
			var userIDS = str.substring(i+1);		   
			objSelID.value = userIDS;
			objSelName.value = userName;
		}else{
			var array = str.split("|");
			var userName = array[0];
			var userIDS = array[1];
			objSelID.value = userIDS;
			objSelName.value = userName;
			document.getElementById("Outdeptid").value = array[2];
		}
	}	
    return str;
}
//用户树 根据独立实体限制
function selectUserContactUser(strSelID, strSelName, type, orgId) {
	if (orgId==undefined){
			orgId = '';
	}
	var strStyle;
	var strSelectID,strSelectName;
	var objSelID,objSelName;
	var returnValue;
	var arrRetrun;
	objSelID = document.getElementById(strSelID);
	objSelName = document.getElementById(strSelName);
	strSelectID = "";
	strSelectID = objSelID.value;
	strSelectName = objSelName.value;
	var str;
	var i;
 	//str = window.showModalDialog("/jsp/common/tree/select_user_contactUser/main_frame.jsp?type="+type+"&ID="+strSelectID+"&Name="+strSelectName+"&orgId="+orgId, "MyDialog", "dialogWidth:600px;dialogHeight:400px;status:0;help:0;scroll:0");	
	if(czxt.indexOf("Linux")>-1||czxt=="iPhone"||czxt=="iPad"||czxt.indexOf("Mac")>-1){
		var top = screen.availHeight/2 - 400/2;
		var left = screen.availWidth/2 - 600/2;
		var strStyle = "status=no, maximize=no, scrollbars=no, toolbar=no, menubar=no, location=no, top="+top+", left="+left+", resizable=no, height=400px,width=600px";
		window.open("/jsp/common/tree/select_user_contactUser/main_frame.jsp?type="+type+"&TO_ID="+strSelID+"&TO_NAME="+strSelName+"&ID="+strSelectID+"&Name="+strSelectName+"&orgId="+orgId, "", strStyle);
	}else{
 		str = window.showModalDialog("/jsp/common/tree/select_user_contactUser/main_frame.jsp?type="+type+"&ID="+strSelectID+"&Name="+strSelectName+"&orgId="+orgId, "MyDialog", "dialogWidth:600px;dialogHeight:400px;status:0;help:0;scroll:0");	
	}
	if (type == 1) {
		if (null != str) {
			i = str.indexOf(",");
			if (i > 0) {
				alert("只能选择一位,请重选!");
				return false;
			}
		}
	}
	if (type == 3) {
		if (null != str) {
			i = str.indexOf(",");
			if (i > 0) {
				alert("只能选择一位,请重选!");
				return false;
			}
		}
	}
	if (null != str) {
		i = str.indexOf("|");
		var userName = str.substring(0,i);
		var userIDS = str.substring(i+1);		   
		objSelID.value = userIDS;
		objSelName.value = userName;
	}	
    return str;
}

/**
 * 功能:根据部门ID选择部门直属用户
 * @param  strSelID 存放选择后用户ID的隐藏域名称
 * @param  strSelName 存放选择后用户名称的文本框名称
 * @param  type 选择用户类型：1为单选，其他值为任选  
 * @param  deptId 选择用户所在部门
 */
function selectFlowUserbyDept(strSelID, strSelName, type, deptId) {
	if (deptId==undefined){
			deptId = '';
	}
	var sendSpanObj = document.getElementById("sendSpan");
	
	var strStyle;
	var strSelectID,strSelectName;
	var objSelID,objSelName;
	var returnValue;
	var arrRetrun;
	objSelID = document.getElementById(strSelID);
	objSelName = document.getElementById(strSelName);
	strSelectID = "";
	strSelectID = objSelID.value;
	strSelectName = objSelName.value;
	var str;
	var i;
 	str = window.showModalDialog("/jsp/common/tree/select_user_by_dept/main_frame.jsp?type="+type+"&ID="+strSelectID+"&Name="+strSelectName+"&orgId="+deptId, "MyDialog", "dialogWidth:600px;dialogHeight:400px;status:0;help:0;scroll:0");	
	if (type == 1) {
		if (null != str) {
			i = str.indexOf(",");
			if (i > 0) {
				alert("只能选择一位,请重选!");
				return false;
			}
		}
	}
	
	if (type == 3) {
		if (null != str) {
			i = str.indexOf(",");
			if (i > 0) {
				alert("只能选择一位,请重选!");
				return false;
			}
		}
	}
	
	if(str != null && str.length > 1){
		if(sendSpanObj){
			sendSpanObj.style.display = 'none';
		}
	}else{
		if(sendSpanObj){
			sendSpanObj.style.display = '';
		}
	}
	if (null != str) {
		i = str.indexOf("|");
		var userName = str.substring(0,i);
		var userIDS = str.substring(i+1);		   
		objSelID.value = userIDS;
		objSelName.value = userName;
	}	
    return str;
}


/**
 * 功能:选择用户(传阅专用)
 * @param  strSelID 存放选择后用户ID的隐藏域名称
 * @param  strSelName 存放选择后用户名称的文本框名称
 * @param  type 选择用户类型：1为单选，其他值为任选  
 */
function selectFlowperusal (strSelID, strSelName, type, orgId) {
	if (orgId==undefined){
			orgId = '';
	}
	var strStyle;
	var strSelectID,strSelectName;
	var objSelID,objSelName;
	var returnValue;
	var arrRetrun;
	objSelID = document.getElementById(strSelID);
	objSelName = document.getElementById(strSelName);
	strSelectID = "";
	strSelectID = objSelID.value;
	strSelectName = objSelName.value;
	var str;
	var i;
 	str = window.showModalDialog("/jsp/common/tree/circulating_for_perusal/main_frame.jsp?type="+type+"&ID="+strSelectID+"&Name="+strSelectName+"&orgId="+orgId, "MyDialog", "dialogWidth:600px;dialogHeight:400px;status:0;help:0;scroll:0");	
	if (type == 1) {
		if (null != str) {
			i = str.indexOf(",");
			if (i > 0) {
				alert("只能选择一位,请重选!");
				return false;
			}
		}
	}
	if (type == 3) {
		if (null != str) {
			i = str.indexOf(",");
			if (i > 0) {
				alert("只能选择一位,请重选!");
				return false;
			}
		}
	}
	if (null != str) {
		i = str.indexOf("|");
		var userName = str.substring(0,i);
		var userIDS = str.substring(i+1);		   
		objSelID.value = userIDS;
		objSelName.value = userName;
	}	
    return str;
}


/**
 *功能:选择部门
 *strSelID 存放选择后部门ID的文本框名称
 *strSelName 存放选择后用户名称的文本框名称
 *type 选择用户类型：0为多选,1为单选
 */
function selectFlowDept(strSelID, strSelName, type, orgId,formName) {
	if (orgId==undefined){
			orgId = '';
	}
	if (formName==undefined){
			formName = '';
	}
	var strStyle;
	var strSelectID,strSelectName;
	var objSelID,objSelName;
	var returnValue;
	var arrRetrun;
	objSelID = document.getElementById(strSelID);
	objSelName = document.getElementById(strSelName);
	strSelectID = "";
	strSelectID = objSelID.value;
	strSelectName = objSelName.value;
	var str;
	var i;
	//if(formName==''){
	//	str = window.showModalDialog("/jsp/common/tree/select_dept/main_frame.jsp?type="+type+"&ID="+strSelectID+"&Name="+strSelectName+"&orgId="+orgId, "MyDialog", "dialogWidth:600px;dialogHeight:400px;status:0;help:0;scroll:0");	
	//}else{
	//	str = window.showModalDialog("/jsp/common/tree/select_dept/main_frame.jsp?type="+type+"&strSelID="+strSelID+"&strSelName="+strSelName+"&orgId="+orgId+"&formName="+formName, window, "dialogWidth:600px;dialogHeight:400px;status:0;help:0;scroll:0");	
	//}
	
	if(czxt.indexOf("Linux")>-1||czxt=="iPhone"||czxt=="iPad"||czxt.indexOf("Mac")>-1){
		var top = screen.availHeight/2 - 400/2;
		var left = screen.availWidth/2 - 600/2;
		var strStyle = "status=no, maximize=no, scrollbars=no, toolbar=no, menubar=no, location=no, top="+top+", left="+left+", resizable=no, height=400px,width=600px";
		if(formName==''){
			window.open("/jsp/common/tree/select_dept/main_frame.jsp?type="+type+"&ID="+strSelectID+"&Name="+strSelectName+"&orgId="+orgId+"&TO_ID="+strSelID+"&TO_NAME="+strSelName, "", strStyle);
		}else{
			window.open("/jsp/common/tree/select_dept/main_frame.jsp?type="+type+"&strSelID="+strSelID+"&strSelName="+strSelName+"&orgId="+orgId+"&formName="+formName+"&TO_ID="+strSelID+"&TO_NAME="+strSelName, "", strStyle);
		}
	}else{
	
		if(formName==''){
			str = window.showModalDialog("/jsp/common/tree/select_dept/main_frame.jsp?type="+type+"&ID="+strSelectID+"&Name="+strSelectName+"&orgId="+orgId, "MyDialog", "dialogWidth:600px;dialogHeight:400px;status:0;help:0;scroll:0");	
		}else{
			str = window.showModalDialog("/jsp/common/tree/select_dept/main_frame.jsp?type="+type+"&strSelID="+strSelID+"&strSelName="+strSelName+"&orgId="+orgId+"&formName="+formName, window, "dialogWidth:600px;dialogHeight:400px;status:0;help:0;scroll:0");	
		}
	}
	
 	if (type == 1) {
		if (null != str) {
			i = str.indexOf(",");
			if (i > 0) {
				alert("只能选择一个部门，请重选");
				return false;
			}
		}
	}
	if (type == 3) {
		if (null != str) {
			i = str.indexOf(",");
			if (i > 0) {
				alert("只能选择一个部门，请重选");
				return false;
			}
		}
	}
	if (null != str){
		i = str.indexOf("|");
		var userName = str.substring(0,i);
		var userIDS = str.substring(i+1);		   	  
		objSelID.value = userIDS;
		objSelName.value = userName;	  
	}
	return str;
}
//部门树，根据独立实体限制
function selectFlowDeptNew(strSelID, strSelName, type, orgId) {
	if (orgId==undefined){
			orgId = '';
	}
	var strStyle;
	var strSelectID,strSelectName;
	var objSelID,objSelName;
	var returnValue;
	var arrRetrun;
	objSelID = document.getElementById(strSelID);
	objSelName = document.getElementById(strSelName);
	strSelectID = "";
	strSelectID = objSelID.value;
	strSelectName = objSelName.value;
	var str;
	var i;
 	//str = window.showModalDialog("/jsp/common/tree/select_dept_new/main_frame.jsp?type="+type+"&ID="+strSelectID+"&Name="+strSelectName+"&orgId="+orgId, "MyDialog", "dialogWidth:600px;dialogHeight:400px;status:0;help:0;scroll:0");	
	if(czxt.indexOf("Linux")>-1||czxt=="iPhone"||czxt=="iPad"||czxt.indexOf("Mac")>-1){
		var top = screen.availHeight/2 - 400/2;
		var left = screen.availWidth/2 - 600/2;
		var strStyle = "status=no, maximize=no, scrollbars=no, toolbar=no, menubar=no, location=no, top="+top+", left="+left+", resizable=no, height=400px,width=600px";
		window.open("/jsp/common/tree/select_dept_new/main_frame.jsp?type="+type+"&ID="+strSelectID+"&Name="+strSelectName+"&orgId="+orgId+"&TO_ID="+strSelID+"&TO_NAME="+strSelName, "", strStyle);
		
	}else{
 		str = window.showModalDialog("/jsp/common/tree/select_dept_new/main_frame.jsp?type="+type+"&ID="+strSelectID+"&Name="+strSelectName+"&orgId="+orgId, "MyDialog", "dialogWidth:600px;dialogHeight:400px;status:0;help:0;scroll:0");	
	}
	if (type == 1) {
		if (null != str) {
			i = str.indexOf(",");
			if (i > 0) {
				alert("只能选择一个部门，请重选");
				return false;
			}
		}
	}
	if (type == 3) {
		if (null != str) {
			i = str.indexOf(",");
			if (i > 0) {
				alert("只能选择一个部门，请重选");
				return false;
			}
		}
	}
	if (null != str){
		i = str.indexOf("|");
		var userName = str.substring(0,i);
		var userIDS = str.substring(i+1);		   	  
		objSelID.value = userIDS;
		objSelName.value = userName;	  
	}
	return str;
}
/**
 *功能:选择部门
 *strSelID 存放选择后部门ID的文本框名称
 *比selectFlowDept（）多2个按钮,"集团"，"本省"
 */
function selectFlowDeptHaveButton(strSelID, strSelName, type, orgId,fromName) {
	if (orgId==undefined){
			orgId = '';
	}
	if (fromName==undefined){
			fromName = '';
	}
	var strStyle;
	var strSelectID,strSelectName;
	var objSelID,objSelName;
	var returnValue;
	var arrRetrun;
	objSelID = document.getElementById(strSelID);
	objSelName = document.getElementById(strSelName);
	strSelectID = "";
	strSelectID = objSelID.value;
	strSelectName = objSelName.value;
	var str;
	var i;
 	str = window.showModalDialog("/jsp/common/tree/select_dept_button/main_frame.jsp?type="+type+"&orgId="+orgId+"&strSelID="+strSelID+"&strSelName="+strSelName+"&fromName="+fromName, window, "dialogWidth:600px;dialogHeight:400px;status:0;help:0;scroll:0");	
	if (type == 1) {
		if (null != str) {
			i = str.indexOf(",");
			if (i > 0) {
				alert("只能选择一个部门，请重选");
				return false;
			}
		}
	}
	if (type == 3) {
		if (null != str) {
			i = str.indexOf(",");
			if (i > 0) {
				alert("只能选择一个部门，请重选");
				return false;
			}
		}
	}
	if (null != str){
		i = str.indexOf("|");
		var userName = str.substring(0,i);
		var userIDS = str.substring(i+1);		   	  
		objSelID.value = userIDS;
		objSelName.value = userName;	  
	}
	return str;
}


/**
 *功能:选择部门
 *strSelID 存放选择后部门ID的文本框名称
 *比selectFlowDept（）多2个按钮,"集团"，"本省"
 */
function selectOrgidHaveButton(strSelID, strSelName, type, orgId,fromName) {
	if (orgId==undefined){
			orgId = '';
	}
	if (fromName==undefined){
			fromName = '';
	}
	var strStyle;
	var strSelectID,strSelectName;
	var objSelID,objSelName;
	var returnValue;
	var arrRetrun;
	objSelID = document.getElementById(strSelID);
	objSelName = document.getElementById(strSelName);
	strSelectID = "";
	strSelectID = objSelID.value;
	strSelectName = objSelName.value;
	var str;
	var i;
 	str = window.showModalDialog("/jsp/common/tree/select_orgid_button/main_frame.jsp?type="+type+"&orgId="+orgId+"&strSelID="+strSelID+"&strSelName="+strSelName+"&fromName="+fromName, window, "dialogWidth:600px;dialogHeight:400px;status:0;help:0;scroll:0");	
	if (type == 1) {
		if (null != str) {
			i = str.indexOf(",");
			if (i > 0) {
				alert("只能选择一个部门，请重选");
				return false;
			}
		}
	}
	if (type == 3) {
		if (null != str) {
			i = str.indexOf(",");
			if (i > 0) {
				alert("只能选择一个部门，请重选");
				return false;
			}
		}
	}
	if (null != str){
		i = str.indexOf("|");
		var userName = str.substring(0,i);
		var userIDS = str.substring(i+1);		   	  
		objSelID.value = userIDS;
		objSelName.value = userName;	  
	}
	return str;
}
function selectLeadFlowDeptForFw(strSelID, strSelName, type, orgId, ZBDeptId, flowfiletypeid, isShowZB) {
    if (orgId==undefined){
			orgId = '';
	}
	if (ZBDeptId==undefined){
			ZBDeptId = '';
	}
	if (flowfiletypeid==undefined){
			flowfiletypeid = '';
	}
	if (isShowZB==undefined){
			isShowZB = '1';
	}
	var strStyle;
	var strSelectID,strSelectName;
	var objSelID,objSelName;
	var returnValue;
	var arrRetrun;
	
	objSelID = document.getElementById(strSelID);
	objSelName = document.getElementById(strSelName);
	strSelectID = "";
	strSelectID = objSelID.value;
	strSelectName = objSelName.value;
	var str;
	var i;
 	//---------------------兼容safari add by panglei 2011-1-17 begin---------------------------------
	if(czxt.indexOf("Linux")>-1||czxt=="iPhone"||czxt=="iPad"||czxt.indexOf("Mac")>-1){
		var top = screen.availHeight/2 - 400/2;
		var left = screen.availWidth/2 - 600/2;
		var strStyle = "status=no, maximize=no, scrollbars=no, toolbar=no, menubar=no, location=no, top="+top+", left="+left+", resizable=no, height=400px,width=600px";
		window.open("/jsp/common/tree/select_leaddept/main_frame.jsp?type=0&TO_ID="+strSelID+"&TO_NAME="+strSelName+"&ID="+strSelectID+"&Name="+strSelectName+"&orgId="+orgId+"&ZBDeptId="+ZBDeptId+"&flowfiletypeid="+flowfiletypeid+"&isShowZB="+isShowZB, "", strStyle);
	}else{
		strSelectID = document.getElementById(strSelID).value;
		strSelectName = document.getElementById(strSelName).value;
		var strStyle = "help:no; minimize:no; maximize:no; border:thick; statusbar:no; dialogWidth=600px; dialogHeight=400px; center:yes; status:no; edge: raised";
		var str= window.showModalDialog("/jsp/common/tree/select_leaddept/main_frame.jsp?type="+type+"&ID="+strSelectID+"&Name="+strSelectName+"&orgId="+orgId+"&ZBDeptId="+ZBDeptId+"&flowfiletypeid="+flowfiletypeid+"&isShowZB="+isShowZB, "MyDialog", "dialogWidth:600px;dialogHeight:400px;status:0;help:0;scroll:0");	
		if((str=="undefined")||(str==null)){
			return str;
			window.close();
		} else {
			var names = str.substring(0,str.indexOf("|"));
			var ids = str.substring(str.indexOf("|")+1);
			if(ids!=''){
				 var oldOjbectIds = objSelID.value+",";
			     var objectIds = ids.split(',');
			     var objectNames = names.split(',');
			     if(objSelID.value!=''){
			        objSelID.value = objSelID.value + ",";
			     } 
			     if(objSelName.value !=''){
			        objSelName.value = objSelName.value  + ",";
			     }
			     for(var j=0;j<objectIds.length;j++){
			          if(oldOjbectIds.indexOf(objectIds[j]+",")==-1){
			             objSelID.value = objSelID.value + objectIds[j] + ",";
			             objSelName.value = objSelName.value + objectNames[j]+",";
			          }
			     }
			     objSelID.value = objSelID.value.substring(0,objSelID.value.length-1);
			     objSelName.value = objSelName.value.substring(0,objSelName.value.length-1);
		    }
		}
		return str;
	}
}

/**
 *功能:选择部门
 *strSelID 存放选择后部门ID的文本框名称
 *strSelName 存放选择后用户名称的文本框名称
 *type 选择用户类型：0为多选,1为单选
 *isShowZB 是否显示主办：0为不显示,1为显示
 */
function selectLeadFlowDept(strSelID, strSelName, type, orgId, ZBDeptId, flowfiletypeid, isShowZB) {
	if (orgId==undefined){
			orgId = '';
	}
	if (ZBDeptId==undefined){
			ZBDeptId = '';
	}
	if (flowfiletypeid==undefined){
			flowfiletypeid = '';
	}
	if (isShowZB==undefined){
			isShowZB = '1';
	}
	var strStyle;
	var strSelectID,strSelectName;
	var objSelID,objSelName;
	var returnValue;
	var arrRetrun;
	
	objSelID = document.getElementById(strSelID);
	objSelName = document.getElementById(strSelName);
	strSelectID = "";
	strSelectID = objSelID.value;
	strSelectName = objSelName.value;
	var str;
	var i;
 	//---------------------兼容safari add by panglei 2011-1-17 begin---------------------------------
	if(czxt.indexOf("Linux")>-1||czxt=="iPhone"||czxt=="iPad"||czxt.indexOf("Mac")>-1){
		var top = screen.availHeight/2 - 400/2;
		var left = screen.availWidth/2 - 600/2;
		var strStyle = "status=no, maximize=no, scrollbars=no, toolbar=no, menubar=no, location=no, top="+top+", left="+left+", resizable=no, height=400px,width=600px";
		window.open("/jsp/common/tree/select_leaddept/main_frame.jsp?type=0&TO_ID="+strSelID+"&TO_NAME="+strSelName+"&ID="+strSelectID+"&Name="+strSelectName+"&orgId="+orgId+"&ZBDeptId="+ZBDeptId+"&flowfiletypeid="+flowfiletypeid+"&isShowZB="+isShowZB, "", strStyle);
	}else{
		strSelectID = document.getElementById(strSelID).value;
		strSelectName = document.getElementById(strSelName).value;
		var strStyle = "help:no; minimize:no; maximize:no; border:thick; statusbar:no; dialogWidth=600px; dialogHeight=400px; center:yes; status:no; edge: raised";
		var str= window.showModalDialog("/jsp/common/tree/select_leaddept/main_frame.jsp?type="+type+"&ID="+strSelectID+"&Name="+strSelectName+"&orgId="+orgId+"&ZBDeptId="+ZBDeptId+"&flowfiletypeid="+flowfiletypeid+"&isShowZB="+isShowZB, "MyDialog", "dialogWidth:600px;dialogHeight:400px;status:0;help:0;scroll:0");	
		if((str=="undefined")||(str==null)){
			return str;
			window.close();
		} else {
			document.getElementById(strSelName).value = str.substring(0,str.indexOf("|"));
			document.getElementById(strSelID).value = str.substring(str.indexOf("|")+1);
		}
		return str;
	}
	
	//---------------------兼容safari add by panglei 2011-1-17 end---------------------------------
	
	//---------------------兼容safari 注释 by panglei 2011-1-17 begin---------------------------------
 	//str = window.showModalDialog("/jsp/common/tree/select_leaddept/main_frame.jsp?type="+type+"&ID="+strSelectID+"&Name="+strSelectName+"&orgId="+orgId+"&ZBDeptId="+ZBDeptId+"&flowfiletypeid="+flowfiletypeid+"&isShowZB="+isShowZB, "MyDialog", "dialogWidth:600px;dialogHeight:400px;status:0;help:0;scroll:0");	
	//if (type == 1) {
	//	if (null != str) {
	//		i = str.indexOf(",");
	//		if (i > 0) {
	//			alert("只能选择一个部门，请重选");
	//			return false;
	//		}
	//	}
	//}
	//if (type == 3) {
	//	if (null != str) {
	//		i = str.indexOf(",");
	//		if (i > 0) {
	//			alert("只能选择一个部门，请重选");
	//			return false;
	//		}
	//	}
	//}
	//if (null != str){
	//	i = str.indexOf("|");
	//	var userName = str.substring(0,i);
	//	var userIDS = str.substring(i+1);		   	  
	//	objSelID.value = userIDS;
	//	objSelName.value = userName;	  
	//}
	//return str;
	//---------------------兼容safari 注释 by panglei 2011-1-17 end---------------------------------
}

/**
* 选择群组
* strSelID 存放选择后部门ID的文本框名称
* strSelName 存放选择后用户名称的文本框名称
* type 选择用户类型：1为单选，其他值为任选 
*/
function selectGroup(strSelID, strSelName, type, orgId) {
	if (orgId==undefined){
			orgId = '';
	}
	var strStyle;
	var strSelectID,strSelectName;
	var objSelID,objSelName;
	var returnValue;
	var arrRetrun;
	objSelID = document.getElementById(strSelID);
	objSelName = document.getElementById(strSelName);
	strSelectID = "";
	strSelectID = objSelID.value;
	strSelectName = objSelName.value;
	var str;
	var i;
 	str = window.showModalDialog("/jsp/common/tree/select_group/main_frame.jsp?type="+type+"&ID="+strSelID+"&Name="+strSelName+"&orgId="+orgId, window, "dialogWidth:600px;dialogHeight:400px;status:0;help:0;scroll:0");	
	if (type == 1) {
		if (null != str) {
			i = str.indexOf(",");
			if (i > 0) {
				alert("只能选择一位,请重选!");
				return false;
			}
		}
	}
	if (type == 3) {
		if (null != str) {
			i = str.indexOf(",");
			if (i > 0) {
				alert("只能选择一位,请重选!");
				return false;
			}
		}
	}
	if (null != str) {
		i = str.indexOf("|");
		var userName = str.substring(0,i);
		var userIDS = str.substring(i+1);		   
		objSelID.value = userIDS;
		objSelName.value = userName;
	}	
    return str;
}

/**
 *功能:选择组织体系
 *strSelID 存放选择后部门ID的文本框名称
 *strSelName 存放选择后用户名称的文本框名称
 *type 选择用户类型：1为单选，其他值为任选 
 */
function selectOrgId(strSelID, strSelName, type, orgId) {
	if (orgId==undefined){
			orgId = '';
	}
	var strStyle;
	var strSelectID,strSelectName;
	var objSelID,objSelName;
	var returnValue;
	var arrRetrun;
	objSelID = document.getElementById(strSelID);
	objSelName = document.getElementById(strSelName);
	strSelectID = "";
	strSelectID = objSelID.value;
	strSelectName = objSelName.value;
	var str;
	var i;
 	str = window.showModalDialog("/jsp/common/tree/select_org/main_frame.jsp?type="+type+"&ID="+strSelectID+"&Name="+strSelectName+"&orgId="+orgId, "MyDialog", "dialogWidth:600px;dialogHeight:400px;status:0;help:0;scroll:0");	
	if (type == 1) {
		if (null != str) {
			i = str.indexOf(",");
			if (i > 0) {
				alert("只能选择一个组织体系，请重选");
				return false;
			}
		}
	}
	if (type == 3) {
		if (null != str) {
			i = str.indexOf(",");
			if (i > 0) {
				alert("只能选择一个组织体系，请重选");
				return false;
			}
		}
	}
	if (null != str){
		i = str.indexOf("|");
		var userName = str.substring(0,i);
		var userIDS = str.substring(i+1);
		objSelID.value = userIDS;
		objSelName.value = userName;	  
	}	
	return str;
}

/**
 *功能:选择业务角色
 *strSelID 存放选择后部门ID的文本框名称
 *strSelName 存放选择后用户名称的文本框名称
 *type 选择用户类型：1为单选，其他值为任选 
 */
function selectRoleTree(strSelID, strSelName, type, orgId) {
	if (orgId==undefined){
			orgId = '';
	}
	var strStyle;
	var strSelectID,strSelectName;
	var objSelID,objSelName;
	var returnValue;
	var arrRetrun;
	objSelID = document.getElementById(strSelID);
	objSelName = document.getElementById(strSelName);
	strSelectID = "";
	strSelectID = objSelID.value;
	strSelectName = objSelName.value;
	var str;
	var i;
 	str = window.showModalDialog("/jsp/common/tree/select_role/main.jsp?type="+type+"&ID="+strSelectID+"&Name="+strSelectName+"&orgId="+orgId, "MyDialog", "dialogWidth:600px;dialogHeight:400px;status:0;help:0;scroll:0");	
	if (type == 1) {
		if (null != str) {
			i = str.indexOf(",");
			if (i > 0) {
				alert("只能选择一个组织体系，请重选");
				return false;
			}
		}
	}
	if (type == 3) {
		if (null != str) {
			i = str.indexOf(",");
			if (i > 0) {
				alert("只能选择一个组织体系，请重选");
				return false;
			}
		}
	}
	if (null != str){
		i = str.indexOf("|");
		var userName = str.substring(0,i);
		var userIDS = str.substring(i+1);
		objSelID.value = userIDS;
		objSelName.value = userName;	  
	}	
	return str;
}

/**
 * 功能:选择人事管理用户
 * @param  strSelID 存放选择后用户ID的隐藏域名称
 * @param  strSelName 存放选择后用户名称的文本框名称
 * @param  strDeptId 存放选择后部门ID的文本框名称
 * @param  strDeptName 存放选择后部门名称的文本框名称
 * @param  type 选择用户类型：1为单选，其他值为任选
 * @param  deptRealId 部门唯一主键ID值
 * @param  curDeptId 当前人部门ID，用来控制只列出当前部门领导用
 */
function selectFlowUserAndDept(strSelID, strSelName, strDeptId, strDeptName, type, orgId, deptRealId, curDeptId) {
	if (orgId==undefined){
			orgId = '';
	}
	if (deptRealId==undefined){
			deptRealId = '';
	}
	if (curDeptId==undefined){
			curDeptId = '';
	}
	var strStyle;
	var strSelectID,strSelectName,strSelectDeptID,strSelectDeptName,strDeptRealID;
	var objSelID,objSelName,objDeptId,objDeptName,objDeptRealId;
	var returnValue;
	var arrRetrun;
	objSelID = document.getElementById(strSelID);
	objSelName = document.getElementById(strSelName);
	objDeptId = document.getElementById(strDeptId);
	objDeptName = document.getElementById(strDeptName);
	//objDeptRealId = document.getElementById(deptRealId);
	strSelectID = objSelID.value;
	strSelectName = objSelName.value;
	strSelectDeptID = objDeptId.value;
	strSelectDeptName = objDeptName.value;
	//strDeptRealID = objDeptRealId.value;
	var str;
	var i;
	var strReturns;
 	str = window.showModalDialog("/jsp/common/tree/select_user_and_dept/main_frame.jsp?type="+type+"&ID="+strSelectID+"&Name="+strSelectName+"&inputDeptId="+strSelectDeptID+"&inputDeptName="+strSelectDeptName+"&orgId="+orgId+"&curDeptId="+curDeptId, "MyDialog", "dialogWidth:600px;dialogHeight:400px;status:0;help:0;scroll:0");
	if (type == 1) {
		if (null != str) {
			i = str.indexOf(",");
			if (i > 0) {
				alert("只能选择一位,请重选!");
				return false;
			}
		}
	}
	if (null != str) {
		strReturns = str.split("<:>");
		objSelID.value = strReturns[1];
		objSelName.value = strReturns[0];
		objDeptId.value = strReturns[2];
		objDeptName.value = strReturns[3];
		
		//objDeptRealId.value = strReturns[4];
	}
  return str;
}

/**
 * 功能:选择新闻发布目录
 * @param  strSelID 存放选择后用户ID的隐藏域名称
 * @param  strSelName 存放选择后用户名称的文本框名称
 * @param  type 选择用户类型：1为单选，其他值为任选  
 */
function selectNewsDir(keyName, strSelID, strSelName) {
	var strSelectID;
	var objSelID,objSelName;
	objSelID = document.getElementById(strSelID);
	objSelName = document.getElementById(strSelName);
	strSelectID = objSelID.value;
	var str;
	var i;
 	str = window.showModalDialog("/jsp/common/tree/news/main_frame.jsp?key_name="+keyName+"&dirId="+strSelectID, "MyDialog", "dialogWidth:600px;dialogHeight:400px;status:0;help:0;scroll:0");	
	if (null != str) {
		i = str.indexOf(",");
		if (i > 0) {
			alert("只能选择一个目录,请重选!");
			return false;
		}
	}
	if (null != str) {
		i = str.indexOf("|");
		var dirName = str.substring(0,i);
		var dirId = str.substring(i+1);		   
		objSelID.value = dirId;
		objSelName.value = dirName;
	}
}

/**
 * 功能:选择移动目录
 * @param  strSelID 存放选择后用户ID的隐藏域名称
 * @param  strSelName 存放选择后用户名称的文本框名称
 * @param  type 选择用户类型：1为单选，其他值为任选  
 */
function selectMoveDir(keyName, strSelID, strSelName, curID) {
	var strSelectID;
	var objSelID,objSelName,objCurId;
	objSelID = document.getElementById(strSelID);
	objSelName = document.getElementById(strSelName);
	objCurId = document.getElementById(curID);
	strSelectID = objSelID.value;
	strCurId = objCurId.value;
	var str;
	var i;
 	str = window.showModalDialog("/jsp/common/tree/select_move_dir/main_frame.jsp?key_name="+keyName+"&dirId="+strSelectID+"&curId="+strCurId, "MyDialog", "dialogWidth:600px;dialogHeight:400px;status:0;help:0;scroll:0");	
	if (null != str) {
		i = str.indexOf(",");
		if (i > 0) {
			alert("只能选择一个目录,请重选!");
			return false;
		}
	}
	if (null != str) {
		i = str.indexOf("|");
		var dirName = str.substring(0,i);
		var dirId = str.substring(i+1);		   
		objSelID.value = dirId;
		objSelName.value = dirName;
	}
}

/**
 *功能:选择部门为分发
 *strSelID 存放选择后部门ID的文本框名称
 *strSelName 存放选择后用户名称的文本框名称
 *type 选择用户类型：0为多选,1为单选
 *codeId 文号ID 
 */
function selectFlowDeptForSend(strSelID, strSelName, type, codeId) {
	if (codeId==undefined){
			codeId = '';
	}
	var strStyle;
	var strSelectID,strSelectName;
	var objSelID,objSelName;
	var returnValue;
	var arrRetrun;
	objSelID = document.getElementById(strSelID);
	objSelName = document.getElementById(strSelName);
	strSelectID = "";
	strSelectID = objSelID.value;
	strSelectName = objSelName.value;
	var str;
	var i;
 	str = window.showModalDialog("/jsp/common/tree/select_dept_for_send/main_frame.jsp?type="+type+"&ID=&Name=&codeId="+codeId, "MyDialog", "dialogWidth:600px;dialogHeight:400px;status:0;help:0;scroll:0");	
	if (type == 1) {
		if (null != str) {
			i = str.indexOf(",");
			if (i > 0) {
				alert("只能选择一个部门，请重选");
				return false;
			}
		}
	}
	if (null != str){
		i = str.indexOf("|");
		var userName = str.substring(0,i);
		var userIDS = str.substring(i+1);
		objSelID.value = userIDS;
		objSelName.value = userName;	  
	}
	return str;
}

/**
 *功能:选择部门为分发
 *strSelID 存放选择后部门ID的文本框名称
 *strSelName 存放选择后用户名称的文本框名称
 *type 选择用户类型：0为多选,1为单选
 *codeId 文号ID 
 */
function selectFlowDeptForSend2(strSelID, strSelName, type, codeId , recordId) {
	if (codeId==undefined){
			codeId = '';
	}
	var strStyle;
	var strSelectID,strSelectName;
	var objSelID,objSelName;
	var returnValue;
	var arrRetrun;
	objSelID = document.getElementById(strSelID);
	objSelName = document.getElementById(strSelName);
	strSelectID = "";
	strSelectID = objSelID.value;
	strSelectName = objSelName.value;
	var str;
	var i;
 	str = window.showModalDialog("/jsp/common/tree/select_dept_for_send2/main_frame.jsp?type="+type+"&ID=&Name=&codeId="+codeId+"&recordId="+recordId, window, "dialogWidth:600px;dialogHeight:400px;status:0;help:0;scroll:0");	
	if (str=="yes")
	{
		var win=window.opener;
		if(win!=null&&win!="undefined")
		{
			if(!win.closed){
				if(window.opener.parent.location.href.indexOf('/system/loginAction.do')!=-1 || window.opener.parent.location.href.indexOf('/jsp/index.jsp')!=-1){
					win.parent.location.reload();
					window.close();
				}else{
					win.location.href=win.location.href;
					window.close();
				}
		     }
		}
	}
	return str;
}

/**
 *功能:选择部门
 *strSelID 存放选择后部门ID的文本框名称
 *strSelName 存放选择后用户名称的文本框名称
 *type 选择用户类型：0为多选,1为单选
 */
function selectOrgDept(strSelID, strSelName, type, orgId) {
	if (orgId==undefined){
			orgId = '';
	}
	var strStyle;
	var strSelectID,strSelectName;
	var objSelID,objSelName;
	var returnValue;
	var arrRetrun;
	objSelID = document.getElementById(strSelID);
	objSelName = document.getElementById(strSelName);
	strSelectID = "";
	strSelectID = objSelID.value;
	strSelectName = objSelName.value;
	var str;
	var i;
 	str = window.showModalDialog("/jsp/common/tree/select_org_dept/main_frame.jsp?type="+type+"&ID="+strSelectID+"&Name="+strSelectName+"&orgId="+orgId, "MyDialog", "dialogWidth:600px;dialogHeight:400px;status:0;help:0;scroll:0");	
	if (type == 1) {
		if (null != str) {
			i = str.indexOf(",");
			if (i > 0) {
				alert("只能选择一个部门，请重选");
				return false;
			}
		}
	}
	if (type == 3) {
		if (null != str) {
			i = str.indexOf(",");
			if (i > 0) {
				alert("只能选择一个部门，请重选");
				return false;
			}
		}
	}
	if (null != str){
		i = str.indexOf("|");
		var userName = str.substring(0,i);
		var userIDS = str.substring(i+1);		   	  
		objSelID.value = userIDS;
		objSelName.value = userName;	  
	}
	return str;
}

/**
 *功能:打开多项对话框,选择主抄送
 *strSelID 存放选择后数据ID的文本框名称
 *strSelName 存放选择后数据名称的文本框名称
 *tableName 要查询代码所在的表名
 *primaryField 主键字段
 *nameField 名称字段
 *maxSelectedNum 最大查询数量 
 */
function selectMultiZCS(strSelID,strSelName,maxSelectedNum,tableName,primaryField,nameField,orderName,validName)
{
	if (maxSelectedNum==undefined){
			maxSelectedNum = '-1';
	}
	if (tableName==undefined){
			tableName = 'YZ_ARCHIVES_OFFICE';
	}
	if (primaryField==undefined){
			primaryField = 'OFFICE_ID';
	}
	if (nameField==undefined){
			nameField = 'OFFICE_NAME';
	}
	if (orderName==undefined){
			orderName = 'DD_ORDER';
	}
	if (validName==undefined){
			validName = 'VALID';
	}
	
	var strSelectID,strSelectName;
	var objSelID,objSelName;
	objSelID=document.getElementById(strSelID);
	objSelName=document.getElementById(strSelName);
	strSelectID=objSelID.value;

	var strStyle = "status=no,maximize=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,top=300,left=300,resizable=yes,height=270,width=430";
	if(document.getElementById("code")){   //文号关联用
		var code =document.getElementById("code").value;
	}else{   //发文起草用
		code = "out";
	}
	window.open("/jsp/common/multiselect/getCommoncodeaboutarchives.jsp?returnName="+strSelName+"&returnValue="+strSelID+"&tableName="+tableName+"&maxSelectedNum="+maxSelectedNum+"&primaryField="+primaryField+"&nameField="+nameField+"&selectID="+strSelectID+"&orderName="+orderName+"&validName="+validName+"&code="+code,"",strStyle);
		
	//window.showModalDialog("/jsp/common/multiselect/getCommoncodeaboutarchives.jsp?returnName="+strSelName+"&returnValue="+strSelID+"&tableName="+tableName+"&maxSelectedNum="+maxSelectedNum+"&primaryField="+primaryField+"&nameField="+nameField+"&selectID="+strSelectID+"&orderName="+orderName+"&validName="+validName, "MyDialog", "dialogWidth:430px;dialogHeight:270px;status:0;help:0;scroll:0");

}


/**
 * 功能:选择用户 for ESA 电子签章
 * @param  strSelID 存放选择后用户ID的隐藏域名称
 * @param  strSelName 存放选择后用户名称的文本框名称
 * @param  strDeptId 存放选择后部门ID的文本框名称
 * @param  strDeptName 存放选择后部门名称的文本框名称
 * @param  type 选择用户类型：1为单选，其他值为任选
 * @param  deptRealId 部门唯一主键ID值
 */
function selectForESAUser(strSelID, strSelName, strDeptId, strDeptName, type, orgId, deptRealId) {
	if (orgId==undefined){
			orgId = '';
	}
	if (deptRealId==undefined){
			deptRealId = '';
	}
	
	var strStyle;
	var strSelectID,strSelectName,strSelectDeptID,strSelectDeptName,strDeptRealID;
	var objSelID,objSelName,objDeptId,objDeptName,objDeptRealId;
	var returnValue;
	var arrRetrun;
	objSelID = document.getElementById(strSelID);
	objSelName = document.getElementById(strSelName);
	objDeptId = document.getElementById(strDeptId);
	objDeptName = document.getElementById(strDeptName);
	
	//objDeptRealId = document.getElementById(deptRealId);
	strSelectID = objSelID.value;
	strSelectName = objSelName.value;
	strSelectDeptID = objDeptId.value;
	strSelectDeptName = objDeptName.value;
	//strDeptRealID = objDeptRealId.value;
	var str;
	var i;
	var strReturns;
 	str = window.showModalDialog("/esaweb/tree/select_user_and_dept/main_frame.jsp?type="+type+"&ID="+strSelectID+"&Name="+strSelectName+"&inputDeptId="+strSelectDeptID+"&inputDeptName="+strSelectDeptName+"&orgId="+orgId, "MyDialog", "dialogWidth:600px;dialogHeight:400px;status:0;help:0;scroll:0");
	if (type == 1) {
		if (null != str) {
			i = str.indexOf(",");
			if (i > 0) {
				alert("只能选择一位,请重选!");
				return false;
			}
		}
	}
	if (null != str) {
		strReturns = str.split("<:>");
		objSelID.value = strReturns[1];
		objSelName.value = strReturns[0];
		objDeptId.value = strReturns[2];
		objDeptName.value = strReturns[3];
		
		//objDeptRealId.value = strReturns[4];
	}
  return str;
}


/**
 * 功能:选择部门 for ESA 电子签章
 * @param  strSelID 存放选择后用户ID的隐藏域名称
 * @param  strSelName 存放选择后用户名称的文本框名称
 * @param  strDeptId 存放选择后部门ID的文本框名称
 * @param  strDeptName 存放选择后部门名称的文本框名称
 * @param  type 选择用户类型：1为单选，其他值为任选
 * @param  deptRealId 部门唯一主键ID值
 */
function selectForESADept(strSelID, strSelName, type, orgId) {
	if (orgId==undefined){
			orgId = '';
	}
	var strStyle;
	var strSelectID,strSelectName;
	var objSelID,objSelName;
	var returnValue;
	var arrRetrun;
	objSelID = document.getElementById(strSelID);
	objSelName = document.getElementById(strSelName);
	strSelectID = "";
	strSelectID = objSelID.value;
	strSelectName = objSelName.value;
	var str;
	var i;
 	str = window.showModalDialog("/esaweb/tree/select_dept/main_frame.jsp?type="+type+"&ID="+strSelectID+"&Name="+strSelectName+"&orgId="+orgId, "MyDialog", "dialogWidth:600px;dialogHeight:400px;status:0;help:0;scroll:0");	
	if (type == 1) {
		if (null != str) {
			i = str.indexOf(",");
			if (i > 0) {
				alert("只能选择一个部门，请重选");
				return false;
			}
		}
	}
	if (type == 3) {
		if (null != str) {
			i = str.indexOf(",");
			if (i > 0) {
				alert("只能选择一个部门，请重选");
				return false;
			}
		}
	}
	if (null != str){
		i = str.indexOf("|");
		var userName = str.substring(0,i);
		var userIDS = str.substring(i+1);		   	  
		objSelID.value = userIDS;
		objSelName.value = userName;	  
	}
	return str;
}

/**
 * 功能:选择用户
 * @param  strSelID 存放选择后用户ID的隐藏域名称
 * @param  strSelName 存放选择后用户名称的文本框名称
 * @param  type 选择用户类型：1为单选，其他值为任选  
 */
function selectFlowUserForEmail(strSelID, strSelName, type, orgId) {
	if (orgId==undefined){
			orgId = '';
	}
	var strStyle;
	var strSelectID,strSelectName;
	var objSelID,objSelName;
	var returnValue;
	var arrRetrun;
	objSelID = document.getElementById(strSelID);
	objSelName = document.getElementById(strSelName);
	strSelectID = "";
	strSelectID = objSelID.value;
	strSelectName = objSelName.value;
	var str;
	var i;
 	str = window.showModalDialog("/jsp/common/tree/select_user_email/main_frame.jsp?type="+type+"&ID="+strSelectID+"&Name="+strSelectName+"&orgId="+orgId, "MyDialog", "dialogWidth:600px;dialogHeight:400px;status:0;help:0;scroll:0");	
	if (type == 1) {
		if (null != str) {
			i = str.indexOf(",");
			if (i > 0) {
				alert("只能选择一位,请重选!");
				return false;
			}
		}
	}
	if (type == 3) {
		if (null != str) {
			i = str.indexOf(",");
			if (i > 0) {
				alert("只能选择一位,请重选!");
				return false;
			}
		}
	}
	if (null != str) {
		i = str.indexOf("|");
		var userName = str.substring(0,i);
		var userIDS = str.substring(i+1);		   
		objSelID.value = userIDS;
		objSelName.value = userName;
	}	
    return str;
}
/**
 *功能:分发与抄送合并
 *strSelID 存放选择后部门ID的文本框名称
 *strSelName 存放选择后用户名称的文本框名称
 *type 选择用户类型：0为多选,1为单选
 */
function selectSendAll(strSelID,strSelName,type,deptID,deptName,codeId,orgId,repeatSend,recordId,notion)
{
	if (repeatSend == undefined){
		repeatSend = '';
	}
	if (notion == undefined){
		notion = '';
	}
	notion = replaceAll(notion,'"','“');
	notion = replaceAll(notion,"'",'’');
	var strStyle;
	var strSelectID,strSelectName;
	var objSelID,objSelName;
	var returnValue;
	var arrRetrun;
	objSelID = document.getElementById(strSelID);
	objSelName = document.getElementById(strSelName);
	strSelectID = "";
	strSelectID = objSelID.value;
	strSelectName = objSelName.value;
	var str;
 	//str = window.showModalDialog("/jsp/common/tree/select_send_all/main_frame.jsp?type="+type+"&ID="+strSelectID+"&Name="+strSelectName+"&orgId="+orgId+"&deptID="+deptID+"&deptName="+deptName+"&codeId="+codeId+"&recordId="+recordId+"&repeatSend="+repeatSend+"&notion="+notion, "MyDialog", "dialogWidth:800px;dialogHeight:550px;status:0;help:0;scroll:1");
 	if(czxt.indexOf("Linux")>-1||czxt=="iPhone"||czxt=="iPad"||czxt.indexOf("Mac")>-1){
		var top = screen.availHeight/2 - 400/2;
		var left = screen.availWidth/2 - 600/2;
		var strStyle = "status=no, maximize=no, scrollbars=no, toolbar=no, menubar=no, location=no, top="+top+", left="+left+", resizable=no, height=550px,width=800px";
		window.open("/jsp/common/tree/select_send_all/main_frame.jsp?type="+type+"&ID="+strSelectID+"&Name="+strSelectName+"&orgId="+orgId+"&deptID="+deptID+"&deptName="+deptName+"&codeId="+codeId+"&recordId="+recordId+"&repeatSend="+repeatSend+"&notion="+notion+"&TO_ID="+strSelID+"&TO_NAME="+strSelName, "", strStyle);
		
	}else{
 		str = window.showModalDialog("/jsp/common/tree/select_send_all/main_frame.jsp?type="+type+"&ID="+strSelectID+"&Name="+strSelectName+"&orgId="+orgId+"&deptID="+deptID+"&deptName="+deptName+"&codeId="+codeId+"&recordId="+recordId+"&repeatSend="+repeatSend+"&notion="+notion, "MyDialog", "dialogWidth:800px;dialogHeight:550px;status:0;help:0;scroll:1");
 	}
 	if (str != undefined){
	 	var win=window.opener;
		if(win!=null&&win!="undefined")
		{
			if(!win.closed){
				if(window.opener.parent.location.href.indexOf('/system/loginAction.do')!=-1 || window.opener.parent.location.href.indexOf('/jsp/index.jsp')!=-1 || window.opener.parent.location.href.indexOf('/jsp/index_pt.jsp')!=-1){
					win.parent.location.reload();
					window.close();
				}else{
					win.location.href=win.location.href;
					window.close();
				}
			}
		}
	}
 	return str;
}
	var lockRoundNum = Math.random(100);
	var recLockXmlHttp;
	function createLockHtmlXml(){
		if(window.ActiveXObject){
			recLockXmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
		}else if(window.XMLHttpRequest){
			recLockXmlHttp = new XMLHttpRequest();
		}
	}
	/**
	*	点击工具栏上的[X]按钮、或ALT+F4关闭时触发 =>解除锁定
	*	tableName: 		表名
	*	keyID:			主键名称
	*	recordID:		主键值
	**/
	function recordUnLock(tableName,keyID,keyValue){
		lockRoundNum = lockRoundNum +1;
		createLockHtmlXml();
		var strURL = "/jsp/common/recordUnlock.jsp?tableName="
			+tableName+"&keyID="+keyID+"&keyValue="+keyValue+"&roundNum="+lockRoundNum;
		recLockXmlHttp.open("GET",strURL,true);
		recLockXmlHttp.send(null);
	}
	//同上，解锁时只解当前用户
	function recordUnLock2(tableName,keyID,keyValue){
		lockRoundNum = lockRoundNum +1;
		createLockHtmlXml();
		var strURL = "/jsp/common/recordUnlock2.jsp?tableName="
			+tableName+"&keyID="+keyID+"&keyValue="+keyValue+"&roundNum="+lockRoundNum;
		recLockXmlHttp.open("GET",strURL,true);
		recLockXmlHttp.send(null);
	}
	
	//不解锁
	//function recordUnLock2(tableName,keyID,keyValue){
		
	//}
	
/**
 * 功能:选择群组 and 用户
 * @param  userId 存放选择后用户ID的隐藏域名称
 * @param  userName 存放选择后用户名称的文本框名称
 * @param  strDeptId 存放选择后部门ID的文本框名称
 * @param  strDeptName 存放选择后部门名称的文本框名称
 * @param  type 单选、多选
 * @param  orgId 所属组织体系ID
 * @param  remindField 存放选择后提醒的文本框名称
 * groupTypeId 群组类型ID
 * isDependent 部门类型，以“，”隔开
 * deptId2 部门第2级结点ID串，以“，”隔开
 * deptId3 部门第3级结点ID串，以“，”隔开
 * roleIds 业务角色ID串 格式为|$|111|$|222|$|33|$|444|$|
 * isShowSuperUser : '0'为不显示上级用户，'1'为显示上级用户
 * isDummy : '0'为只列出真实用户，'1'为只列出虚拟用户，'2'为列出所有用户
 * showBotton : '0'为用户树，'1'为群组树，'2'部门树，'3'角色树，''为所有
 */
function selectFourTreeUserAndDept(userId,userName,strDeptId,strDeptName,remindField,type,orgId,groupTypeId,isDependent,deptId2,deptId3,roleIds,isShowSuperUser,isDummy,showBotton){
	if (orgId==undefined){
			orgId = '';
	}
	if (groupTypeId==undefined){
			groupTypeId = '';
	}
	if (isDependent==undefined){
			isDependent = '';
	}
	if (deptId2==undefined){
			deptId2 = '';
	}
	if (deptId3==undefined){
			deptId3 = '';
	}
	if (roleIds==undefined){
			roleIds = '';
	}
	if (isShowSuperUser==undefined){
			isShowSuperUser = '';
	}
	if (isDummy==undefined){
			isDummy = '0';
	}
	if (showBotton==undefined || showBotton==''){
			showBotton = '0,1,2,3';
	}
	var strReturns;
	var objSelID,objSelName,objDeptId,objDeptName,objRemindField;
	objSelID = document.getElementById(userId);
	objSelName = document.getElementById(userName);
	objDeptId = document.getElementById(strDeptId);
	objDeptName = document.getElementById(strDeptName);
	objRemindField = document.getElementById(remindField);
	var strSelectID,strSelectName,strSelectDeptID,strSelectDeptName;
	strSelectID = document.getElementById(userId).value;
	strSelectName = document.getElementById(userName).value;
	strSelectDeptID = document.getElementById(strDeptId).value;
	strSelectDeptName = document.getElementById(strDeptName).value;
	var strStyle = "help:no;minimize:no;maximize:no;border:thick;statusbar:no;dialogWidth=600px;dialogHeight=400px;center:yes;status:no;edge: raised";
	var returnValue= window.showModalDialog("/jsp/common/tree/select_user_and_dept_four/main_frame.jsp?type="+type+"&orgId="+orgId+"&ID="+strSelectID+"&Name="+strSelectName+"&inputDeptId="+strSelectDeptID+"&inputDeptName="+strSelectDeptName+"&deptId2="+deptId2+"&deptId3="+deptId3+"&isDependent="+isDependent+"&roleIds="+roleIds+"&isShowSuperUser="+isShowSuperUser+"&groupTypeId="+groupTypeId+"&isDummy="+isDummy+"&showBotton="+showBotton, "", strStyle);	
	if((returnValue=="undefined")||(returnValue==null)){
		return returnValue;
		window.close();
	}
	else
	{
		strReturns = returnValue.split("<:>");
		objSelID.value = strReturns[1];
		objSelName.value = strReturns[0];
		objDeptId.value = strReturns[2];
		objDeptName.value = strReturns[3];
		objRemindField.value = strReturns[4];
	}
	return returnValue;
}

/**
 * 功能:选择用户
 * @param  strSelID 存放选择后用户ID的隐藏域名称
 * @param  strSelName 存放选择后用户名称的文本框名称
 * @param  type 选择用户类型：1为单选，其他值为任选  
 * 王悦
 */
function selectGeneralFlowUser(strSelID, strSelName, type, orgId, curDeptId) {
	if (orgId==undefined){
			orgId = '';
	}
	var strStyle;
	var strSelectID,strSelectName;
	var objSelID,objSelName;
	var returnValue;
	var arrRetrun;
	objSelID = document.getElementById(strSelID);
	objSelName = document.getElementById(strSelName);
	strSelectID = "";
	strSelectID = objSelID.value;
	strSelectName = objSelName.value;
	var str;
	var i;
 	str = window.showModalDialog("/jsp/common/tree/select_general_user/main_frame.jsp?type="+type+"&ID="+strSelID+"&Name="+strSelName+"&orgId="+orgId+"&curDeptId="+curDeptId, window, "dialogWidth:600px;dialogHeight:400px;status:0;help:0;scroll:0");	
	if (type == 1) {
		if (null != str) {
			i = str.indexOf(",");
			if (i > 0) {
				alert("只能选择一位,请重选!");
				return false;
			}
		}
	}
	if (type == 3) {
		if (null != str) {
			i = str.indexOf(",");
			if (i > 0) {
				alert("只能选择一位,请重选!");
				return false;
			}
		}
	}
	if (null != str) {
		i = str.indexOf("|");
		var userName = str.substring(0,i);
		var userIDS = str.substring(i+1);		   
		objSelID.value = userIDS;
		objSelName.value = userName;
	}	
    return str;
}

/**
* 选择私有群组
* strSelID 存放选择后用户ID的文本框名称
* strSelName 存放选择后用户名称的文本框名称
* type 选择用户类型：1为单选，其他值为任选 
*
* author: 王悦
*/
function selectPrivateGroup(strSelID, strSelName, type, userId) {
	if (userId==undefined){
			userId = '';
	}
	var strStyle;
	var strSelectID,strSelectName;
	var objSelID,objSelName;
	var returnValue;
	var arrRetrun;
	objSelID = document.getElementById(strSelID);
	objSelName = document.getElementById(strSelName);
	strSelectID = "";
	strSelectID = objSelID.value;
	strSelectName = objSelName.value;
	var str;
	var i;
	if(czxt.indexOf("Linux")>-1||czxt=="iPhone"||czxt=="iPad"||czxt.indexOf("Mac")>-1){
		var top = screen.availHeight/2 - 400/2;
		var left = screen.availWidth/2 - 600/2;
		var strStyle = "status=no, maximize=no, scrollbars=yes, toolbar=no, menubar=no, location=no, top="+top+", left="+left+", resizable=no, height=400px,width=800px";
		window.open("/jsp/common/tree/select_private_group/main_frame.jsp?type="+type+"&ID="+strSelID+"&Name="+strSelName+"&userId="+userId+"&TO_ID="+strSelID+"&TO_NAME="+strSelName, "", strStyle);
	}else{
 	    str = window.showModalDialog("/jsp/common/tree/select_private_group/main_frame.jsp?type="+type+"&ID="+strSelID+"&Name="+strSelName+"&userId="+userId, window, "dialogWidth:600px;dialogHeight:400px;status:0;help:0;scroll:0");	
	}
	if (type == 1) {
		if (null != str) {
			i = str.indexOf(",");
			if (i > 0) {
				alert("只能选择一位,请重选!");
				return false;
			}
		}
	}
	if (type == 3) {
		if (null != str) {
			i = str.indexOf(",");
			if (i > 0) {
				alert("只能选择一位,请重选!");
				return false;
			}
		}
	}
	if (null != str) {
		i = str.indexOf("|");
		var userName = str.substring(0,i);
		var userIDS = str.substring(i+1);
		objSelID.value = userIDS;
		objSelName.value = userName;
	}
    return str;
}

/**
* 选择某部门下的用户及所有子部门的用户
* strSelID 存放选择后用户ID的文本框名称
* strSelName 存放选择后用户名称的文本框名称
* type 选择用户类型：1为单选，其他值为任选 
* deptId 根部门Id
* deptName 根部门名称
* author: 王悦
*/
function selectUserOfDept(strSelID, strSelName, type, deptId, deptName){
	if (deptId==undefined&&deptName==undefined){
			userId = '';
			deptName = '';
	}
	var strStyle;
	var strSelectID,strSelectName;
	var objSelID,objSelName;
	var returnValue;
	var arrRetrun;
	objSelID = document.getElementById(strSelID);
	objSelName = document.getElementById(strSelName);
	strSelectID = "";
	strSelectID = objSelID.value;
	strSelectName = objSelName.value;
	var str;
	var i;
 	str = window.showModalDialog("/jsp/common/tree/select_user_of_dept/main_frame.jsp?type="+type+"&ID="+strSelID+"&Name="+strSelName+"&deptId="+deptId+"&deptName="+deptName, window, "dialogWidth:600px;dialogHeight:400px;status:0;help:0;scroll:0");	
	if (type == 1) {
		if (null != str) {
			i = str.indexOf(",");
			if (i > 0) {
				alert("只能选择一位,请重选!");
				return false;
			}
		}
	}
	if (type == 3) {
		if (null != str) {
			i = str.indexOf(",");
			if (i > 0) {
				alert("只能选择一位,请重选!");
				return false;
			}
		}
	}
	if (null != str) {
		i = str.indexOf("|");
		var userName = str.substring(0,i);
		var userIDS = str.substring(i+1);		   
		objSelID.value = userIDS;
		objSelName.value = userName;
	}	
    return str;
}

/**
 *功能:选择某组织体系下的所有部门，不能选择组织体系，只能选择部门
 *strSelID 存放选择后部门ID的文本框名称
 *strSelName 存放选择后用户名称的文本框名称
 *type 选择用户类型：0为多选,1为单选
 *author: 王悦
 */
function selectFlowDeptOfOrg(strSelID, strSelName, type, orgId, orgName) {
	if (orgId==undefined){
			orgId = '';
	}
	var strStyle;
	var strSelectID,strSelectName;
	var objSelID,objSelName;
	var returnValue;
	var arrRetrun;
	objSelID = document.getElementById(strSelID);
	objSelName = document.getElementById(strSelName);
	strSelectID = "";
	strSelectID = objSelID.value;
	strSelectName = objSelName.value;
	var str;
	var i;
 	str = window.showModalDialog("/jsp/common/tree/select_dept_of_org/main_frame.jsp?type="+type+"&ID="+strSelID+"&Name="+strSelName+"&deptId="+orgId+"&orgName="+orgName, window, "dialogWidth:600px;dialogHeight:400px;status:0;help:0;scroll:0");	
	if (type == 1) {
		if (null != str) {
			i = str.indexOf(",");
			if (i > 0) {
				alert("只能选择一个部门，请重选");
				return false;
			}
		}
	}
	if (type == 3) {
		if (null != str) {
			i = str.indexOf(",");
			if (i > 0) {
				alert("只能选择一个部门，请重选");
				return false;
			}
		}
	}
	if (null != str){
		i = str.indexOf("|");
		var userName = str.substring(0,i);
		var userIDS = str.substring(i+1);		   	  
		objSelID.value = userIDS;
		objSelName.value = userName;	  
	}
	return str;

}

/**
 *功能:选择某组织体系下的所有用户，部门，群组，组织体系或角色，（主要是集团，总行，省公司，省分行及其他独立单位）
 *strSelID 存放选择后ID的文本框名称
 *strSelName 存放选择后名称的文本框名称
 *userDeptId   存放选择用户后用户所属部门的ID的文本框名称
 *userDeptName 存放选择用户后用户所属部门的名称的文本框名称
 *selectType 选择类型1.用户；2，部门；3，群组；4，组织体系；5，业务角色
 *type 选择类型：0为多选,1为单选
 *mode 集团和总行的选择模式: 1.集团和总行--只列出集团的人员或部门等（不包括其下属省公司或省分行）；2.集团和总行--同1，并包含其下属省公司或省分行；
 *                       3.除集团外，按三级限制分别是集团（机关、直属）、省（机关、直属）、市局（机关、直属），集团能看见所有省的，省只能看见本体系的，市局只能看到本独立单位的；
 						 4.只列出集团、总行或各省公司、省分行的机关部门人员，并带回所属部门，不列独立单位；
 						 11.会议通知: ; 21.工作通知: 集团只要看到各省机关和直属单位即可;
 *module 模块及其树的使用排序 
 *orgId 组织体系Id
 *isLD 是否显示领导 0、显示；1、不显示；
 *author: 王悦
 */
function selectUserDeptGroupOrgRoleOfOrg(strSelID, strSelName, userDeptId, userDeptName, selectType, type, mode, orgId) {
	if (orgId==undefined){
			orgId = '';
	}
	if(selectType==''||selectType==undefined){
		selectType = '1';
	}
	var strStyle;
	var strSelectID,strSelectName,strUserDeptId,strUserDeptName;
	var objSelID,objSelName,objUserDeptId,objUserDeptName;
	var returnValue;
	var arrRetrun;
	objSelID = document.getElementById(strSelID);
	objSelName = document.getElementById(strSelName);
	objUserDeptId = document.getElementById(userDeptId);
	objUserDeptName = document.getElementById(userDeptName);
	if(userDeptId!=''||userDeptName!=''){
		if((objUserDeptId==null||objUserDeptName==null)){
			alert("找不到"+userDeptId+"组件或"+userDeptName+"组件！");
			return false;
		}
	}
	strSelectID = "";
	strSelectID = objSelID.value;
	strSelectName = objSelName.value;
	if(objUserDeptId!=null&&objUserDeptId!='undefined'){
		strUserDeptId = objUserDeptId.value;
	}
	if(objUserDeptName!=null&&objUserDeptName!='undefined'){
		strUserDeptName = objUserDeptName.value;
	}
	var str;
	var i;
	if(czxt.indexOf("Linux")>-1||czxt=="iPhone"||czxt=="iPad"||czxt.indexOf("Mac")>-1){
		var top = screen.availHeight/2 - 400/2;
		var left = screen.availWidth/2 - 600/2;
		var strStyle = "status=no, maximize=no, scrollbars=yes, toolbar=no, menubar=no, location=no, top="+top+", left="+left+", resizable=no, height=400px,width=800px";
		window.open("/jsp/common/tree/select_user_dept_group_org_role/main_frame.jsp?type="+type+"&selectType="+selectType+"&mode="+mode+"&ID="+strSelID+"&Name="+strSelName+"&userDeptId="+userDeptId+"&userDeptName="+userDeptName+"&orgId="+orgId+"&TO_ID="+strSelID+"&TO_NAME="+strSelName, "", strStyle);
	}else{
 	    str = window.showModalDialog("/jsp/common/tree/select_user_dept_group_org_role/main_frame.jsp?type="+type+"&selectType="+selectType+"&mode="+mode+"&ID="+strSelID+"&Name="+strSelName+"&userDeptId="+userDeptId+"&userDeptName="+userDeptName+"&orgId="+orgId, window, "dialogWidth:600px;dialogHeight:400px;status:0;help:0;scroll:0");
	}
	if (type == 1) {
		if (null != str) {
			i = str.indexOf(",");
			if (i > 0) {
				alert("只能选择一个部门，请重选");
				return false;
			}
		}
	}
	if (type == 3) {
		if (null != str) {
			i = str.indexOf(",");
			if (i > 0) {
				alert("只能选择一个部门，请重选");
				return false;
			}
		}
	}
	if (null != str){
		if(selectType=='1'){
			var values = str.split('&');
			var userValues = values[0];
			var deptIds = values[1];
			
			if(strUserDeptId==undefined){
				i = userValues.indexOf("|");
				var userName = userValues.substring(0,i);
				var userIDS = userValues.substring(i+1);		   	  
				objSelID.value = userIDS;
				objSelName.value = userName;
			}else{
				createXMLRequest();
	     		var url = "/jsp/common/tree/select_user_dept_group_org_role/deptId_to_deptName.jsp?deptIds="+deptIds;
	     		xmlHttp.open("GET",url,true);
	     		xmlHttp.onreadystatechange=function(){
	     			if(xmlHttp.readyState==4){
						if(xmlHttp.status==200){
							var deptName = xmlHttp.responseText;
							i = userValues.indexOf("|");
							var userName = userValues.substring(0,i);
							var userIDS = userValues.substring(i+1);		   	  
							objSelID.value = userIDS;
							objSelName.value = userName;
							objUserDeptId.value = deptIds;
							objUserDeptName.value = deptName.substr(deptName.indexOf('|')+1,deptName.length);
						}
					}
	     		}
	     		xmlHttp.send(null);
		 		
			}
		}else{
			i = str.indexOf("|");
			var userName = str.substring(0,i);
			var userIDS = str.substring(i+1);		   	  
			objSelID.value = userIDS;
			objSelName.value = userName;	
		}
	}
	return str;
}
var xmlHttp;
function createXMLRequest(){
	if(window.ActiveXObject){
		xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	else if(window.XMLHttpRequest){
		xmlHttp = new XMLHttpRequest();
	}
}

/**
 *功能:选择某组织体系下的所有用户，部门，群组，组织体系或角色，（主要是集团，总行，省公司，省分行及其他独立单位）
 *strSelID 存放选择后ID的文本框名称
 *strSelName 存放选择后名称的文本框名称
 *strDeptId   存放选择用户后用户所属部门的ID的文本框名称(若不为空，则带回)
 *strDeptName 存放选择用户后用户所属部门的名称的文本框名称
 *selectType 选择类型1.用户；2，部门；3，群组；4，组织体系；5，业务角色
 *type 选择类型：0为单选,1为多选
 * 选择模式:      0. 本体系或本独立单位的
 *				公共：
 *              01. 邮政和银行的所有体系
 *			    02. 邮政或银行的所有体系
 *				03.	当前用户本部门
 *				集团和总行：
 *				04. 邮政和银行到省一级单位
 *				05. 邮政或银行到省一级单位
 *				06. 集团、省公司和总行、省分行一级；总行、省分行和集团、省公司一级
 *				07. 集团、省公司和总行；总行、省分行和集团
 *				08. 集团机关、直属和总行机关、直属
 *				09. 集团机关、直属或总行机关、直属
 *				10. 集团和总行机关直属单位：
 *              11. 邮政和银行到省一级单位
 *              12. 邮政或银行到省一级单位
 *              13. 集团、省公司和总行、省分行一级；总行、省分行和集团、省公司一级
 *              14. 集团、省公司和总行；总行、省分行和集团
 *              15. 集团机关、直属和总行机关、直属
 *              16. 集团机关、直属或总行机关、直属
 *				17. 本直属单位
 *              省公司、直辖市：
 *				18. 省邮政和集团或省分行和总行
 * 				19. 省公司和省分行的所有有单位
 * 				20. 省公司或省分行的所有有单位
 * 				21. 省市县三级:省机关、省直属能看见全省单位，市机关、市直属能看到本市单位，县
 * 				22. 省、独立单位:省机关能看到本体系的，其他独立单位只能看本单位的
 *               
 *module 模块名(暂时不用此参数)  模块：会议通知；会议申请；工作通知；单位通讯录；通知公告；新闻发布；
 *                  邮政信息；部门专栏；政策法规；标准化专栏；电子期刊；网上调查；大事记;
 *
 *moduleOrder 模块中的树(代号)  参照com.sinosoft.module.generalwork.systree.common.JTreeBase 
 *                         
 *orgId 组织体系Id 判断集团总行、集团总行直属和省公司的依据之一
 *deptId 当前用户的部门Id
 *isLD 是否显示领导 0、显示；1、不显示；
 *author: 王悦
 */
function selectGeneralTrees(strSelID, strSelName, strDeptId, strDeptName, selectType, type, moduleOrder, deptId, orgId) {
	if (orgId==undefined){
			orgId = '';
			alert("未知组织体系！");
			return false;
	}
	if(selectType==''||selectType==undefined){
		selectType = '1';
	}
	var strStyle;
	var strSelectID,strSelectName,strUserDeptId,strUserDeptName;
	var objSelID,objSelName,objUserDeptId,objUserDeptName;
	var returnValue;
	var arrRetrun;
	objSelID = document.getElementById(strSelID);
	objSelName = document.getElementById(strSelName);
	objUserDeptId = document.getElementById(strDeptId);
	objUserDeptName = document.getElementById(strDeptName);
	if(strDeptId!=''){
		if(objUserDeptId==null){
			alert("找不到"+strDeptId+"组件！");
			return false;
		}
	}
	if(strDeptName!=''){
		if(objUserDeptName==null){
			alert("找不到"+strDeptName+"组件！");
			return false;
		}
	}
	strSelectID = "";
	strSelectID = objSelID.value;
	strSelectName = objSelName.value;
	if(objUserDeptId!=null&&objUserDeptId!='undefined'){
		strUserDeptId = objUserDeptId.value;
	}
	if(objUserDeptName!=null&&objUserDeptName!='undefined'){
		strUserDeptName = objUserDeptName.value;
	}
	var str;
	var i;
 	//str = window.showModalDialog("/jsp/common/tree/select_tree_program/main_frame.jsp?type="+type+"&selectType="+selectType+"&module="+module+"&moduleOrder="+moduleOrder+"&ID="+strSelectID+"&Name="+strSelectName+"&userDeptId="+strUserDeptId+"&userDeptName="+strUserDeptName+"&orgId="+orgId+"&deptId="+deptId+"&strDeptId="+strDeptId+"&strDeptName"+strDeptName, "MyDialog", "dialogWidth:600px;dialogHeight:400px;status:0;help:0;scroll:0");	
 	str = window.showModalDialog("/jsp/common/tree/select_tree_program/main_frame.jsp?type="+type+"&selectType="+selectType+"&moduleOrder="+moduleOrder+"&ID="+strSelID+"&Name="+strSelName+"&strDeptId="+strDeptId+"&strDeptName"+strDeptName+"&orgId="+orgId+"&deptId="+deptId, window, "dialogWidth:600px;dialogHeight:400px;status:0;help:0;scroll:0");	
	if (type == 0) {
		if (null != str) {
			i = str.indexOf(",");
			if (i > 0) {
				alert("只能选择一个部门，请重选");
				return false;
			}
		}
	}
	if (type > 1) {
		if (null != str) {
			i = str.indexOf(",");
			if (i > 0) {
				alert("只能选择一个部门，请重选");
				return false;
			}
		}
	}
	if (null != str){
		if(selectType=='1'){
			var values = str.split('&');
			var userValues = values[0];
			var deptIds = values[1];
			
			if(strUserDeptId==undefined){
				i = userValues.indexOf("|");
				var userName = userValues.substring(0,i);
				var userIDS = userValues.substring(i+1);		   	  
				objSelID.value = userIDS;
				objSelName.value = userName;
			}else{
				createXMLRequest();
	     		var url = "/jsp/common/tree/select_user_dept_group_org_role/deptId_to_deptName.jsp?deptIds="+deptIds;
	     		xmlHttp.open("GET",url,true);
	     		xmlHttp.onreadystatechange=function(){
	     			if(xmlHttp.readyState==4){
						if(xmlHttp.status==200){
							var deptName = xmlHttp.responseText;
							i = userValues.indexOf("|");
							var userName = userValues.substring(0,i);
							var userIDS = userValues.substring(i+1);		   	  
							objSelID.value = userIDS;
							objSelName.value = userName;
							objUserDeptId.value = deptIds;
							objUserDeptName.value = deptName.substr(deptName.indexOf('|')+1,deptName.length);
						}
					}
	     		}
	     		xmlHttp.send(null);
			}
		}else{
			i = str.indexOf("|");
			var userName = str.substring(0,i);
			var userIDS = str.substring(i+1);		   	  
			objSelID.value = userIDS;
			objSelName.value = userName;	
		}
	}
	return str;
}

/**
 * 功能:选择发布目录(当前用户有权限的目录)
 * @param  keyName 业务目录表关键字
 * @param  strSelID 存放选择后用户ID的隐藏域名称
 * @param  strSelName 存放选择后用户名称的文本框名称
 * @param  purCode 权限编号
 * @param  type 选择用户类型：1为单选，其他值为任选  
 * @author 王悦
 */
function selectNewsDirByUserPur(keyName, strSelID, strSelName, purCode) {
	var strSelectID;
	var objSelID,objSelName;
	objSelID = document.getElementById(strSelID);
	objSelName = document.getElementById(strSelName);
	strSelectID = objSelID.value;
	var str;
	var i;
 	str = window.showModalDialog("/jsp/common/tree/news_dir/main_frame.jsp?key_name="+keyName+"&dirId="+strSelID+"&purCode="+purCode, window, "dialogWidth:600px;dialogHeight:400px;status:0;help:0;scroll:0");	
	if (null != str) {
		i = str.indexOf(",");
		if (i > 0) {
			alert("只能选择一个目录,请重选!");
			return false;
		}
	}
	if (null != str) {
		i = str.indexOf("|");
		var dirName = str.substring(0,i);
		var dirId = str.substring(i+1);		   
		objSelID.value = dirId;
		objSelName.value = dirName;
	}
}

/**
 *功能:选择方案或方案中的某个部门
 *strSelID 存放选择后方案ID的文本框名称
 *strSelName 存放选择后方案名称的文本框名称
 *DeptId   存放选择方案后所包含部门的ID的文本框名称
 *DeptName 存放选择方案后所包含部门的名称的文本框名称
 *selectType 选择类型1.方案；2，部门；3，用户；
 *type 选择类型：0为多选,1为单选
 *userDeptId 当前用户所在的部门 
 *orgId 组织体系Id
 *author: 王悦
 */
function selectProgramOrDeptOrUser(strSelID, strSelName, DeptId, DeptName, selectType, type, userDeptId, orgId, modeltype) {
	if (orgId==undefined){
			orgId = '';
	}
	if(selectType==''||selectType==undefined){
		selectType = '1';
	}
	var strStyle;
	var strSelectID,strSelectName,strUserDeptId,strUserDeptName;
	var objSelID,objSelName,objDeptId,objDeptName;
	var returnValue;
	var arrRetrun;
	//objSelID = document.getElementById(strSelID);
	//objSelName = document.getElementById(strSelName);
	objDeptId = document.getElementById(DeptId);;
	objDeptName = document.getElementById(DeptName);
	//if(userDeptId!=''||userDeptName!=''){
		if((objDeptId==null||objDeptName==null)){
			alert("找不到"+DeptId+"组件或"+DeptName+"组件！");
			return false;
		}
	//}
	strSelectID = "";
	strSelectID = objDeptId.value;
	strSelectName = objDeptName.value;
	if(objDeptId!=null&&objDeptId!='undefined'){
		strUserDeptId = objDeptId.value;
	}
	if(objDeptName!=null&&objDeptName!='undefined'){
		strDeptName = objDeptName.value;
	}
	var str;
	var i;
	if(czxt.indexOf("Linux")>-1||czxt=="iPhone"||czxt=="iPad"||czxt.indexOf("Mac")>-1){
		var top = screen.availHeight/2 - 400/2;
		var left = screen.availWidth/2 - 600/2;
		var strStyle = "status=no, maximize=no, scrollbars=yes, toolbar=no, menubar=no, location=no, top="+top+", left="+left+", resizable=no, height=400px,width=800px";
		window.open("/jsp/common/tree/select_program_dept_user/main_frame.jsp?type="+type+"&selectType="+selectType+"&ID="+DeptId+"&Name="+DeptName+"&userDeptId="+userDeptId+"&orgId="+orgId+"&modeltype="+modeltype+"&TO_ID="+DeptId+"&TO_NAME="+DeptName, "", strStyle);
	}else{
 	    str = window.showModalDialog("/jsp/common/tree/select_program_dept_user/main_frame.jsp?type="+type+"&selectType="+selectType+"&ID="+DeptId+"&Name="+DeptName+"&userDeptId="+userDeptId+"&orgId="+orgId+"&modeltype="+modeltype, window, "dialogWidth:600px;dialogHeight:400px;status:0;help:0;scroll:0");	
	}
	//alert("str="+str);
	if (type == 1) {
		if (null != str) {
			i = str.indexOf(",");
			if (i > 0) {
				alert("只能选择一个部门，请重选");
				return false;
			}
		}
	}
	if (type == 3) {
		if (null != str) {
			i = str.indexOf(",");
			if (i > 0) {
				alert("只能选择一个部门，请重选");
				return false;
			}
		}
	}
	if (null != str){
		i = str.indexOf("|");
			var userName = str.substring(0,i);
			var userIDS = str.substring(i+1);		   	  
			objDeptId.value = userIDS;
			objDeptName.value = userName;	
	}
	return str;
}


var xmlHttp;
function createXMLRequest(){
	if(window.ActiveXObject){
		xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	else if(window.XMLHttpRequest){
		xmlHttp = new XMLHttpRequest();
	}
}

/**
 *功能:选择部门 流程管理-》流程业务类型管理-》 所属部门
 *strSelID 存放选择后部门ID的文本框名称
 *strSelName 存放选择后用户名称的文本框名称
 *type 选择用户类型：0为多选,1为单选
 */
function selectFlowDeptForDollar(strSelID, strSelName, type, orgId) {
	if (orgId==undefined){
			orgId = '';
	}
	var strStyle;
	var strSelectID,strSelectName;
	var objSelID,objSelName;
	var returnValue;
	var arrRetrun;
	objSelID = document.getElementById(strSelID);
	objSelName = document.getElementById(strSelName);
	strSelectID = "";
	strSelectID = objSelID.value;
	strSelectName = objSelName.value;
	var str;
	var i;
 	str = window.showModalDialog("/jsp/common/tree/select_dept_for_dollar/main_frame.jsp?type="+type+"&ID="+strSelectID+"&Name="+strSelectName+"&orgId="+orgId, "MyDialog", "dialogWidth:600px;dialogHeight:400px;status:0;help:0;scroll:0");	
	if (type == 1) {
		if (null != str) {
			i = str.indexOf(",");
			if (i > 0) {
				alert("只能选择一个部门，请重选");
				return false;
			}
		}
	}
	if (type == 3) {
		if (null != str) {
			i = str.indexOf(",");
			if (i > 0) {
				alert("只能选择一个部门，请重选");
				return false;
			}
		}
	}
	if (null != str){
		i = str.indexOf("|");
		var userName = str.substring(0,i);
		var userIDS = str.substring(i+1);		   	  
		objSelID.value = userIDS;
		objSelName.value = userName;	  
	}
	return str;
}
//用户树 根据独立实体限制(意见补登用)
//buttonType 1:意见补登（根据独立实体限制）  2：补登集团领导意见 3：补登部室领导意见
function selectFlowUserNotion(strSelID, strSelName, strDeptId, strDeptName, type, orgId, deptRealId, curDeptId,buttonType) {
	if (orgId==undefined){
			orgId = '';
	}
	if (deptRealId==undefined){
			deptRealId = '';
	}
	if (curDeptId==undefined){
			curDeptId = '';
	}
	var strStyle;
	var strSelectID,strSelectName,strSelectDeptID,strSelectDeptName,strDeptRealID;
	var objSelID,objSelName,objDeptId,objDeptName,objDeptRealId;
	var returnValue;
	var arrRetrun;
	objSelID = document.getElementById(strSelID);
	objSelName = document.getElementById(strSelName);
	objDeptId = document.getElementById(strDeptId);
	objDeptName = document.getElementById(strDeptName);
	//objDeptRealId = document.getElementById(deptRealId);
	strSelectID = objSelID.value;
	strSelectName = objSelName.value;
	strSelectDeptID = objDeptId.value;
	strSelectDeptName = objDeptName.value;
	//strDeptRealID = objDeptRealId.value;
	var str;
	var i;
	var strReturns;
 	str = window.showModalDialog("/jsp/common/tree/select_user_notion/main_frame.jsp?type="+type+"&ID="+strSelectID+"&Name="+strSelectName+"&inputDeptId="+strSelectDeptID+"&inputDeptName="+strSelectDeptName+"&orgId="+orgId+"&curDeptId="+curDeptId+"&buttonType="+buttonType, "MyDialog", "dialogWidth:600px;dialogHeight:400px;status:0;help:0;scroll:0");
	if (type == 1) {
		if (null != str) {
			i = str.indexOf(",");
			if (i > 0) {
				alert("只能选择一位,请重选!");
				return false;
			}
		}
	}
	if (null != str && str.length>0) {
		strReturns = str.split("<:>");
		objSelID.value = strReturns[1];
		objSelName.value = strReturns[0];
		objDeptId.value = strReturns[2];
		objDeptName.value = strReturns[3];
		
		//objDeptRealId.value = strReturns[4];
	}else{
	   strSelectID = "";
	   strSelectName = "";
	   strSelectDeptID = "";
	  strSelectDeptName = "";
	}
  return str;
}

function appendZcs(strSelID,strSelName,type,strTypeName,orgId){
   //获得对象
	var objSelID = document.getElementById(strSelID);
	var objSelName = document.getElementById(strSelName);
	var objTypeID = document.getElementById(strTypeName);
	 var str = selectZcs(strSelID,strSelName,type,strTypeName,orgId);
	 if (null != str) {
			var strAry = str.split("|");
			objSelID.value = objSelID.value + strAry[1];
			objSelName.value = objSelName.value + strAry[0];
			objTypeID.value = objTypeID.value + strAry[2]; 
	 }
}

/**
*strSelID:保存树节点ID
*strSelName：保存树节点名称
*type：1单选，0多选
*strTypeName：保存方案、部门区分值，0方案，1部门。
**/

function selectZcs(strSelID,strSelName,type,strTypeName,orgId){
	//返回值格式
	//str格式：总行,安徽省邮政公司,各地市分行,合肥市分行|210562,210583,210563,049002|0,0,1,1
	//格式说明：部门名称|部门ID|部门类型（0方案、1部门）
	
	//alert("主抄送测试树");
	//保存IDS的对象值
	var strSelectID = "";
	//保存中文名的对象值
	var strSelectName;
	//保存类型IDS的对象值
	var strTypeID = "";
	//保存IDS的对象
	var objSelID;
	//保存中文名的对象
	var objSelName;
	//保存类型IDS的对象
	var objTypeID;
	//获得对象
	objSelID = document.getElementById(strSelID);
	objSelName = document.getElementById(strSelName);
	objTypeID = document.getElementById(strTypeName);
	//获得值
	strSelectID = objSelID.value;
	strSelectName = objSelName.value;
	strTypeID =objTypeID.value;
	//以前旧数据，没有存主送抄送类型的情况默认是主送抄送
	if(strSelectID!="" && strTypeID ==""){
		var ids = strSelectID.split(",");
		for(var i=0;i<ids.length;i++){
			strTypeID = strTypeID +'0,';
		}
		if(strTypeID!=""){
			strTypeID = strTypeID.substring(0,strTypeID.length-1);
		}
	}
	
	var str;
 	if(czxt.indexOf("Linux")>-1||czxt=="iPhone"||czxt=="iPad"||czxt.indexOf("Mac")>-1){
		var top = screen.availHeight/2 - 400/2;
		var left = screen.availWidth/2 - 600/2;
		var strStyle = "status=no, maximize=no, scrollbars=yes, toolbar=no, menubar=no, location=no, top="+top+", left="+left+", resizable=no, height=400px,width=800px";
		window.open("/jsp/common/tree/select_zcs/main_frame.jsp?type="+type+"&TO_ID="+strSelID+"&TO_NAME="+strSelName+"&TO_TYPE="+strTypeName+"&ID="+strSelectID+"&Name="+strSelectName+"&strTypeID="+strTypeID+"&orgId="+orgId, "", strStyle);
	}else{
		var src = "/jsp/common/tree/select_zcs/main_frame.jsp?type="+type+"&ID="+strSelectID+"&Name="+strSelectName+"&strTypeID="+strTypeID+"&orgId="+orgId;
 		str = window.showModalDialog(src, "MyDialog", "dialogWidth:800px;dialogHeight:400px;status:0;help:0;scroll:1");
	}
	
 	if (str != undefined){
	 	var win=window.opener;
		if(win!=null&&win!="undefined")
		{
			if(!win.closed){
				if(window.opener.parent.location.href.indexOf('/system/loginAction.do')!=-1 || window.opener.parent.location.href.indexOf('/jsp/index.jsp')!=-1){
					win.parent.location.reload();
					 
					//window.close();
				}else{
				    //win.location.href=win.location.href;
						 
					//window.close();
				}
			}
		}
	}
	
//	if (null != str) {
//		//alert("str:"+str);
//		var strAry = str.split("|");
//		if(strAry[1]!=''){
//		     var oldOjbectIds = objSelID.value+",";
//		     var objectIds = strAry[1].split(',');
//		     var objectNames = strAry[0].split(',');
//		     var objectTypes = strAry[2].split(',');
//		     if(objSelID.value!=''){
//		        objSelID.value = objSelID.value + ",";
//		     } 
//		     if(objSelName.value !=''){
//		        objSelName.value = objSelName.value  + ",";
//		     }
//		     if(objTypeID.value!=''){
//		        objTypeID.value  = objTypeID.value  + ",";
//		     }
//		     for(var j=0;j<objectIds.length;j++){
//		          if(oldOjbectIds.indexOf(objectIds[j])==-1){
//		             objSelID.value = objSelID.value + objectIds[j] + ",";
//		             objSelName.value = objSelName.value + objectNames[j]+",";
//		             objTypeID.value  = objTypeID.value  +objectTypes[j]+",";
//		          }
//		     }
//		     objSelID.value = objSelID.value.substring(0,objSelID.value.length-1);
//		     objSelName.value = objSelName.value.substring(0,objSelName.value.length-1);
//		     objTypeID.value = objTypeID.value .substring(0,objTypeID.value.length-1);
//		}
//		
//	}
	if (null != str) {
		var strAry = str.split("|");
		objSelID.value = strAry[1];
	     objSelName.value = strAry[0];
	     objTypeID.value = strAry[2];
	}
 	return str;
}
/**
*strSelID:保存树节点ID
*strSelName：保存树节点名称
*type：1单选，0多选
*strTypeName：保存方案、部门区分值，0方案，1部门。
**/
//抄送树
function selectChs(strSelID,strSelName,type,strTypeName,orgId){
	//返回值格式
	//str格式：总行,安徽省邮政公司,各地市分行,合肥市分行|210562,210583,210563,049002|0,0,1,1
	//格式说明：部门名称|部门ID|部门类型（0方案、1部门）
	
	//alert("主抄送测试树");
	//保存IDS的对象值
	var strSelectID = "";
	//保存中文名的对象值
	var strSelectName;
	//保存类型IDS的对象值
	var strTypeID = "";
	//保存IDS的对象
	var objSelID;
	//保存中文名的对象
	var objSelName;
	//保存类型IDS的对象
	var objTypeID;
	//获得对象
	objSelID = document.getElementById(strSelID);
	objSelName = document.getElementById(strSelName);
	objTypeID = document.getElementById(strTypeName);
	//获得值
	strSelectID = objSelID.value;
	strSelectName = objSelName.value;
	strTypeID =objTypeID.value;
	//以前旧数据，没有存主送抄送类型的情况默认是主送抄送
	if(strSelectID!="" && strTypeID ==""){
		var ids = strSelectID.split(",");
		for(var i=0;i<ids.length;i++){
			strTypeID = strTypeID +'0,';
		}
		if(strTypeID!=""){
			strTypeID = strTypeID.substring(0,strTypeID.length-1);
		}
	}
	
	var str;
 	if(czxt.indexOf("Linux")>-1||czxt=="iPhone"||czxt=="iPad"||czxt.indexOf("Mac")>-1){
		var top = screen.availHeight/2 - 400/2;
		var left = screen.availWidth/2 - 600/2;
		var strStyle = "status=no, maximize=no, scrollbars=yes, toolbar=no, menubar=no, location=no, top="+top+", left="+left+", resizable=no, height=400px,width=800px";
		window.open("/jsp/common/tree/select_chs/main_frame.jsp?type="+type+"&TO_ID="+strSelID+"&TO_NAME="+strSelName+"&TO_TYPE="+strTypeName+"&ID="+strSelectID+"&Name="+strSelectName+"&strTypeID="+strTypeID+"&orgId="+orgId, "", strStyle);
	}else{
		var src = "/jsp/common/tree/select_chs/main_frame.jsp?type="+type+"&ID="+strSelectID+"&Name="+strSelectName+"&strTypeID="+strTypeID+"&orgId="+orgId;
		str = window.showModalDialog(src, "MyDialog", "dialogWidth:800px;dialogHeight:400px;status:0;help:0;scroll:1");
	}
 	
 	if (str != undefined){
	 	var win=window.opener;
		if(win!=null&&win!="undefined")
		{
			if(!win.closed){
				if(window.opener.parent.location.href.indexOf('/system/loginAction.do')!=-1 || window.opener.parent.location.href.indexOf('/jsp/index.jsp')!=-1){
					win.parent.location.reload();
					//window.close();
				}else{
					//win.location.href=win.location.href;
					//window.close();
				}
			}
		}
	}
	
//	if (null != str) {
//		var strAry = str.split("|");
//		if(strAry[1]!=''){
//		     var oldOjbectIds = objSelID.value+",";
//		     var objectIds = strAry[1].split(',');
//		     var objectNames = strAry[0].split(',');
//		     var objectTypes = strAry[2].split(',');
//		     if(objSelID.value!=''){
//		        objSelID.value = objSelID.value + ",";
//		     } 
//		     if(objSelName.value !=''){
//		        objSelName.value = objSelName.value  + ",";
//		     }
//		     if(objTypeID.value!=''){
//		        objTypeID.value  = objTypeID.value  + ",";
//		     }
//		     for(var j=0;j<objectIds.length;j++){
//		          if(oldOjbectIds.indexOf(objectIds[j])==-1){
//		             objSelID.value = objSelID.value + objectIds[j] + ",";
//		             objSelName.value = objSelName.value + objectNames[j]+",";
//		             objTypeID.value  = objTypeID.value  +objectTypes[j]+",";
//		          }
//		     }
//		     objSelID.value = objSelID.value.substring(0,objSelID.value.length-1);
//		     objSelName.value = objSelName.value.substring(0,objSelName.value.length-1);
//		     objTypeID.value = objTypeID.value .substring(0,objTypeID.value.length-1);
//		}
//	}
	if (null != str) {
		var strAry = str.split("|");
		objSelID.value = strAry[1];
	     objSelName.value = strAry[0];
	     objTypeID.value = strAry[2];
	}
 	return str;
}
//加入,sendselect 值为'1'时将本地用户和部门信息加入选择树
function selectCYNew(userId,userName,strDeptId,strDeptName,remindField,type,orgId,groupTypeId,isDependent,deptId2,deptId3,roleIds,isShowSuperUser,isDummy,showBotton,sendselect){
	if (orgId==undefined){
			orgId = '';
	}
	if (groupTypeId==undefined){
			groupTypeId = '';
	}
	if (isDependent==undefined){
			isDependent = '';
	}
	if (deptId2==undefined){
			deptId2 = '';
	}
	if (deptId3==undefined){
			deptId3 = '';
	}
	if (roleIds==undefined){
			roleIds = '';
	}
	if (isShowSuperUser==undefined){
			isShowSuperUser = '';
	}
	if (isDummy==undefined){
			isDummy = '0';
	}
	if (showBotton==undefined || showBotton==''){
			showBotton = '0,1,2,3';
	}
	var strReturns;
	var returnValue;
	var objSelID,objSelName,objDeptId,objDeptName,objRemindField;
	objSelID = document.getElementById(userId);
	objSelName = document.getElementById(userName);
	objDeptId = document.getElementById(strDeptId);
	objDeptName = document.getElementById(strDeptName);
	objRemindField = document.getElementById(remindField);
	var strSelectID,strSelectName,strSelectDeptID,strSelectDeptName;
	if(sendselect != undefined && sendselect=='1'){
	strSelectID = document.getElementById(userId).value;
	strSelectName = document.getElementById(userName).value;
	strSelectDeptID = document.getElementById(strDeptId).value;
	strSelectDeptName = document.getElementById(strDeptName).value;
	}
	var strStyle = "help:no;minimize:no;maximize:no;border:thick;statusbar:no;dialogWidth=600px;dialogHeight=400px;center:yes;status:no;edge: raised";
	if(czxt.indexOf("Linux")>-1||czxt=="iPhone"||czxt=="iPad"||czxt.indexOf("Mac")>-1){
	   var top = screen.availHeight/2 - 400/2;
	   var left = screen.availWidth/2 - 600/2;
	   var strStyle = "status=no, maximize=no, scrollbars=no, toolbar=no, menubar=no, location=no, top="+top+", left="+left+", resizable=no, height=400px,width=600px";
	   window.open("/jsp/common/tree/select_cy/main_frame.jsp?type="+type+"&orgId="+orgId+"&ID="+strSelectID+"&Name="+strSelectName+"&inputDeptId="+strSelectDeptID+"&inputDeptName="+strSelectDeptName+"&deptId2="+deptId2+"&deptId3="+deptId3+"&isDependent="+isDependent+"&roleIds="+roleIds+"&isShowSuperUser="+isShowSuperUser+"&groupTypeId="+groupTypeId+"&isDummy="+isDummy+"&showBotton="+showBotton, "", strStyle);	
	}else{
	   returnValue= window.showModalDialog("/jsp/common/tree/select_cy/main_frame.jsp?type="+type+"&orgId="+orgId+"&ID="+strSelectID+"&Name="+strSelectName+"&inputDeptId="+strSelectDeptID+"&inputDeptName="+strSelectDeptName+"&deptId2="+deptId2+"&deptId3="+deptId3+"&isDependent="+isDependent+"&roleIds="+roleIds+"&isShowSuperUser="+isShowSuperUser+"&groupTypeId="+groupTypeId+"&isDummy="+isDummy+"&showBotton="+showBotton, "", strStyle);	
	   if((returnValue=="undefined")||(returnValue==null) || (returnValue==undefined)){
			objSelID.value = "";
			objSelName.value = "";
			objDeptId.value = "";
			objDeptName.value = "";
			objRemindField.value = "";
			return returnValue;
			window.close();
		}else{
			strReturns = returnValue.split("<:>");
			objSelID.value = strReturns[1];
			objSelName.value = strReturns[0];
			objDeptId.value = strReturns[2];
			objDeptName.value = strReturns[3];
			objRemindField.value = strReturns[4];
		}
		return returnValue;
	}
}

/**
 * 功能:选择移动目录
 * @param  strSelID 存放选择后用户ID的隐藏域名称
 * @param  strSelName 存放选择后用户名称的文本框名称
 * @param  type 选择用户类型：1为单选，其他值为任选  
 */
function selectModule(strSelID, strSelName, type) {
	var objSelID,objSelName;
	var strSelectID,strSelectName;
	objSelID = document.getElementById(strSelID);
	objSelName = document.getElementById(strSelName);
	strSelectID = objSelID.value;
	strSelectName = objSelName.value;
	var str;
	var i;
 	str = window.showModalDialog("/jsp/common/tree/select_model/main_frame.jsp?modelIds="+strSelectID+"&modelName="+strSelectName, "MyDialog", "dialogWidth:600px;dialogHeight:400px;status:0;help:0;scroll:0");	
	if (type == 1) {
		if (null != str) {
			i = str.indexOf(",");
			if (i > 0) {
				alert("只能选择一个模块,请重选!");
				return false;
			}
		}
	}
	if (null != str) {
		i = str.indexOf("|");
		var name = str.substring(0,i);
		var id = str.substring(i+1);		   
		objSelID.value = id;
		objSelName.value = name;
	}
}
	/**
	* 档案管理
	* 将机构问题自动回写为当前用户所在独立实体的内设部门
	* 
	*/

	function questionType(deptId,obj){
		if(obj){
			if(obj.options.length){
			    var itemCount = obj.options.length;//取长度 
			    if(itemCount>0){
				   for(var k=1;k<=itemCount;k++){
				   		//alert(obj.options[k]);
				   		if(obj.options[k] != null){
							var objValue = obj.options[k].value;
							if(userDeptID.indexOf(objValue) != -1){
								obj.options[k].selected = "selected";
								break;
							}
						}
				 	}
			   }
		   }
		}
     }
     
    /**
     * 档案管理
     * 只显示本组织体系下独立单位
     */
     function selectFlowDeptQz(strSelID, strSelName,type,orgId) {
     if (orgId==undefined){
			orgId = '';
	}
	var strStyle;
	var strSelectID,strSelectName;
	var objSelID,objSelName;
	var returnValue;
	var arrRetrun;
	objSelID = document.getElementById(strSelID);
	objSelName = document.getElementById(strSelName);
	strSelectID = "";
	strSelectID = objSelID.value;
	strSelectName = objSelName.value;
	var str;
	var i;
 	str = window.showModalDialog("/jsp/module/system/tree/select_flowdept_qz/main_frame.jsp?type="+type+"&ID="+strSelectID+"&Name="+strSelectName+"&orgId="+orgId, "MyDialog", "dialogWidth:600px;dialogHeight:400px;status:0;help:0;scroll:0");	
	if (type == 1) {
		if (null != str) {
			i = str.indexOf(",");
			if (i > 0) {
				alert("只能选择一个部门，请重选");
				return false;
			}
		}
	}
	if (type == 3) {
		if (null != str) {
			i = str.indexOf(",");
			if (i > 0) {
				alert("只能选择一个部门，请重选");
				return false;
			}
		}
	}
	if (null != str){
		i = str.indexOf("|");
		var userName = str.substring(0,i);
		var userIDS = str.substring(i+1);		   	  
		objSelID.value = userIDS;
		objSelName.value = userName;	  
	}	
	return str;
}

/*创建消息框
* meg:消息内容
* top：消息距窗口上部的距离
* left:窗口距离窗口左侧的距离
*/
	function showWaitMeg(meg,top,left){
		//alert(meg);
		var bgcolor = '';//'#D0D0D0';
		if(meg == null || meg == ''){
			meg = "请稍等。。。";
		}
		if(!top){
			if(top == null || top == ''){
				top = '50';
			}
		}
		if(!left){
			if(left == null || left == ''){
				left = '30';
			}
		}
		
		var str = "";
		var megsendingObj = document.getElementById("megsending");
		var megcoverObj = document.getElementById("megcover");
		
		//判断对象是否存在
		if(megsendingObj){
			//alert("1");
			$j("#megbox").html(meg);
		}else{
			//str += "<iframe style='position:absolute;z-index:-1;' frameborder='0' ></iframe>";
			//设置消息提示的容器开始
			str += "<div id='megsending' style='position:absolute; top:"+top+"; left:"+left+"; z-index:99999; visibility:hidden'><TABLE WIDTH=100%   BORDER=0   CELLSPACING=0   CELLPADDING=0><TR><td   width=30%></td><TD bgcolor=#ff9900>";
			str += "<TABLE WIDTH=100% height=70 BORDER=0 CELLSPACING=2 CELLPADDING=0>";
			str += "<TR><td bgcolor=#eeeeee align=center id='megbox'>"+meg+"<br><br>";
			//str += "</td></tr>";
			//str += "<tr><td bgcolor=#eeeeee align=center>";
			//设置滚动条提示开始
			str += "<marquee style='border:1px solid #000000' direction='right' width='300' height='8' scrollamount='10' scrolldelay='10' bgcolor='#ECF2FF'>";
			str += "<table cellspacing='1' cellpadding='0' height='8'>";
			str += "<tr>";
			str += "<td bgcolor=#3399FF width=8 height='8' style='font-size:12px;'></td>";
			str += "<td height='8' style='font-size:12px;'></td>";
			str += "<td bgcolor=#3399FF width=8 height='8' style='font-size:12px;'></td>";
			str += "<td height='8' style='font-size:12px;' ></td>";
			str += "<td bgcolor=#3399FF width=8 height='8' style='font-size:12px;'></td>";
			str += "<td height='8'></td>";
			str += "<td bgcolor=#3399FF width=8 height='8' style='font-size:12px;'></td>";
			str += "<td></td>";
			str += "</tr></table></marquee>";
			//设置滚动条提示完毕
			str += "</td></tr>";
			str += "</table></td><td   width=30%></td></tr></table></div>   ";
			//设置消息提示的容器完毕
			
			//设置背景遮罩容器
			str += "<div id='megcover' style='position:absolute; top:0; left:0; z-index:99998; visibility:hidden'><TABLE WIDTH=100% height=650 BORDER=0   CELLSPACING=0   CELLPADDING=0 bgcolor="+bgcolor+"><TR><TD align=center><br></td></tr></table></div> ";
			
			//附加到窗体
			jQuery(document.body).append(str);
			megsending.style.visibility="visible";
			megcover.style.visibility="visible";
		}
		//隐藏页面中所有select控件。		
		HideSelect();
	}
	//删除消息框
	function removeWaitMeg(){
		var megsendingObj = document.getElementById("megsending");
		var megcoverObj = document.getElementById("megcover");
		if(megsendingObj){
			megsending.style.visibility="hidden";
			$j("#megsending").remove();   
		}
		if(megcoverObj){
			megcover.style.visibility="hidden";
			$j("#megcover").remove();
		}
	}
	//隐藏select控件
	function HideSelect(){
	   var items = document.getElementsByTagName('SELECT');
	   var l=document.getElementsByTagName('SELECT').length;
	   for(var i=0;i<l;i++)
	   {
	    //items[i].disabled = 'disabled';
	    items[i].style.display = 'none';
	   }
	}
	//显示select控件
	function ShowSelect(){
	    var items = document.getElementById.tags('SELECT');
	    var l=document.getElementById.tags('SELECT').length;
	    for(var i=0;i<l;i++)
	    {
	     //items[i].display='';
	     items[i].style.display = '';
	    }
	}

	
	/*新增链接
	* author 赵硕
	* recordId   业务主键ID
	* linksType  链接类型如“部门专栏”
	* keyname 主键在表单中的名称
	* formName 表单名称
	*/
	function linksAdd(recordId,linksType,keyname,formName){
			if(document.forms[formName].elements[keyname].value == null || document.forms[formName].elements[keyname].value == "" ){
				alert("请先保存基本信息再新增链接");
				return false;
			}
			var h = 300;
			var w = 460;
			var top  = (screen.height - h)/2;
			var left = (screen.width - w)/2;
	  
		window.open("/information/deptinfo/deptLinksAction.do?method=create&linksId="+recordId+"&linksType="+linksType+"&isopen=1","新增链接","status=yes,toolbar=no,scrollbars=yes,menubar=no,location=no,top="+top+",left="+left+", resizable=no,height=200px,width=500px");
	}
	
	//编辑链接
	/*author 赵硕
	  selectName  selectName为下拉框名称
	  remindInfo 如果你没有选择下拉框中的某一项，弹出的提示信息  例如 “编辑链接！”
	  linksType 链接类型，如 “部门专栏”
	*/
	function editLink(selectName,status,remindInfo,linksType){ 
	       title=remindInfo;
	       var obj = document.getElementById(selectName);
		   var affixId = '';
		   var docType = '';
		   for(i=0;i<obj.length;i++){
			   if(obj.options[i].selected){
				  affixId = obj.options[i].value;
				  docType = obj.options[i].text;
	
	    		  var linkName = "";
	    		  var linkId = "";
	    	      if(affixId!=null){
	    	    	var tmpFileNames=affixId.split("<->");
	    	    	linkName = tmpFileNames[1];
	    	    	linkId = tmpFileNames[0];
	    	      }
			   }
	       }
	       	var h = 300;
			var w = 460;
			var top  = (screen.height - h)/2;
			var left = (screen.width - w)/2;
		   if(affixId==""){
			   alert(remindInfo); 	
			   return false;	
		   }
		   window.open("/information/deptinfo/deptLinksAction.do?method=edit&id="+linkId+"&linksType="+linksType+"&isopen=1","修改链接","status=yes,toolbar=no,scrollbars=yes,menubar=no,location=no,top="+top+",left="+left+", resizable=no,height=200px,width=500px");	         
	}
	/*
	  链接查看
	  author 赵硕
	  selectName  selectName为下拉框名称
	  remindInfo 如果你没有选择下拉框中的某一项，弹出的提示信息  例如 “请选择要查看的链接”
	*/
	function readLink(selectName,remindInfo){ 
		var obj = document.getElementById(selectName);
		var affixId = '';
		var docUrl = '';
		for(i=0;i<obj.length;i++){
			if(obj.options[i].selected){
				affixId = obj.options[i].value;
	    		  var linkId = '';
	    	      if(affixId!=null){
	    	    	var tmpFileNames=affixId.split("<->");
	    	    	docUrl = tmpFileNames[1];
	    	    	linkId = tmpFileNames[0];
	    	      }
			}
		}
		if(affixId==""){
			alert(remindInfo); 
		}
		else{
			window.open(docUrl);
			
		}
	}
	/* 
	   删除链接
	   author 赵硕
	   操作对象：多选下拉框
	   selectName:下拉框名称。
	*/
	function deleteLink(selectName){
		var affixId="";
		var newObj = document.getElementById(selectName);
		for(i=0;i<newObj.length;i++){
			if(newObj.options[i].selected){
				affixId = newObj.options[i].value;
	    		  var linkId = '';
	    	      if(affixId!=null){
	    	    	var tmpFileNames=affixId.split("<->");
	    	    	linkId = tmpFileNames[0];
	    	      }
			}
		}
		if(affixId==""){
			alert("未选择记录,不能删除!"); 
		}
		else{
			if(confirm("您真的要删除所选的链接吗？"))
				{
					document.forms["frm"].action = "/information/deptinfo/deptLinksAction.do?method=delete&linkId="+linkId;
					document.forms["frm"].submit();			    
				}else{
	
	                return false;
				}
			
			}
	}


     
     
     