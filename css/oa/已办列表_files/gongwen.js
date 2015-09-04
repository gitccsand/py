	/**
	 * jqueryForm提交
	 * _formId：	表单form元素的ID属性
	 * _url：		跳转的url
	 * _dataType：	返回数据的类型('xml','script','json' )
	 * _handle：	提交后返回调用的方法
	 * 调用方法如：jquerySubmit("frm","*.action","json",callback);
	 */
	function jquerySubmit(_formId,_url,_dataType,_handle){
		if(_formId=='' || _formId==undefined) return;
		if(_url=='' || _url==undefined) return;
		if(_dataType=='' || _dataType==undefined) _dataType='script';
		var options = {
		    beforeSubmit:  showRequest,
		    success:       function(responseText,statusText){
		    	if(isJbox)jbox.closeTip();
				if (statusText == 'success') {
					if($.isFunction(_handle)){
						_handle(responseText);
					}
					
				}else{
					jbox.tip("操作失败");
				}
		    },
		    url:       _url,
			type:      'post',
			dataType:  _dataType
		};
		$("#"+_formId).ajaxSubmit(options);
	}
	
	/**
	 * jqueryForm提交前调用方法
	 */
	var isJbox;
	function showRequest(){
		if(typeof($.jBox)!='undefined'){
			isJbox = true;
			jbox.loading("数据操作中，请稍候...", 'loading');
		}
	}
	
 
	// 延后处理
	function commonLaterDo(gongWenInfo) {
	         gongwenCommon.saveYanhouInfo(gongWenInfo,function(message){
	              if(true==message) {
	                   alert("延后处理成功");
	                   window.location.reload();
	                   return false;
	              } else {
	                   alert("延后处理失败");
	                   window.location.reload();
	                   return false;
	              }
	         });
	}
	
	//取消在办状态
	function commonCancelDb(gongWenInfo,message){
             gongwenCommon.saveCancelDbInfo(gongWenInfo,function(mes){
	              if(true==mes) {
	                    alert("取消在办成功"+message);
	                    jbox.closeTip();
	                    return false;
	              } else {
	                    alert("取消在办失败"+message);
	                    jbox.closeTip();
	                    return false;
	              }
             });
	}
	
	//待办转办
	function commonChangeDb(gongWenInfo){  
             gongwenCommon.saveChangedDbInfo(gongWenInfo,function(message){
	              if(true==message) {
	                   alert("待办转办成功");
	                   window.location.reload();
	              } else {
	                   alert("待办转办失败");
	                   return false;
	              }
        	 });
	}  
	
	/**
	 * 功能：打补登意见列表
	 * gongWenId :公文ID,指的是收，发，签的ID;
	 * flowTypeId:流程类型ID;
	 * gongwentype:指的是，收，发，签哪种;
	 * budengideaType:意见是哪种（1:意见补登  2：补登集团领导意见 3：补登部室领导意见）
	 */
	 
	function budengidea(gongwenId,flowTypeId,subflag,gongwenType,buDengIdeaType,flowWriteId) {
	    var style = "status=no,maximize=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,top=20,left=50, resizable=yes,height=400,width=1000";
	    window.open("/archives/gongwenCommonAction!buDengIdeaList.action?flowWriteId="+flowWriteId+"&subflag="+subflag+"&gongwenId="+gongwenId+"&flowTypeId="+flowTypeId+"&buDengIdeaType="+buDengIdeaType+"&gongwenType="+gongwenType,'',style);
	}
	
	//保存意见
	function saveTempIdea(gongwenId,gongwenType,ideaField,fileTypeId,idea,subflag,flowWriteId){
	     if(""!=ideaField){
      	       if(ideaField.indexOf(",")==-1){ //只有一个意见域
      	              $.ajax({
      	                 type:"post",
      	                 data:{"flowTypeId":fileTypeId,"gongwenId":gongwenId,"gongwenType":gongwenType,"idea":idea,"subflag":subflag,"flowWriteId":flowWriteId,"ideaFiled":ideaField},
      	                 url:"/archives/gongwenCommonAction!saveTempIdea.action",
      	                 success:function(message) {
                                     if("true"==message) {          
				                          window.document.idea.location.reload();
				                      }
				          }
      	              });
      	       } else { // 有多个意见域 TODO
      	       
      	       }
	     }
	}
		
	/* 功能：打开附件
	 *gongwenId:公文ID，包括收，发，签
	 *gongwenType:公文类型，包括收，发，签
	 *orgId:创建公文时的组织ID
	 *affixFileType:附件类型 
	 *status:状态：(yes:编辑,no:只读)
	*/
	function openAffixList(gongwenId,gongwenType,orgId,subflag,affixFileType,status) {
		  var style = "modal=yes,width=1000,top=150,left=250,height=450,resizable=yes,scrollbars=yes";
		  var paramInfo = "?gongwenId="+gongwenId+"&gongwenType="+gongwenType+"&subflag="+subflag+"&orgId="+orgId+"&affixFileType="+affixFileType+"&status="+status;
		  window.open("/archives/gongwenCommonAction!getAffixList.action"+paramInfo,"affixwindow",style);     
	}
	
    // 定义待办， 已办列表中传阅与撤销传阅按钮方法
    var CyMethods = {
            //传阅
			CY : function(userid,username,orgid,url,checkboxfield,isReload) {
			    var len = $("input[type='checkbox'][name='"+checkboxfield+"']:checked").length;
				if (len>0) {
				    var baseIds = "";
				    var message = "";
				    $.each($("input[type='checkbox'][name='"+checkboxfield+"']:checked"),function(index,o){
				          var gongwenId = $(o).nextAll("#gongwenid").val();
				          var typesort = $(o).nextAll("#typesort").val();
				          if(typesort=='noflow'){
				              var rtitle = $(o).nextAll("#rtitle").val();
				              message = message + rtitle+",";
				          }
				          baseIds = baseIds+gongwenId+",";
				    });
					baseIds = baseIds.substring(0, baseIds.length - 1);
				    if(message!=""){
					   message = message.substring(0,message.length-1);
					   message = message + '\n由于所选的文件包含是来文或刚签收的文件,该待办不支持传阅';
					   alert(message);
					   return false;
					}
					selectCYNew("userid", "username", "userdeptid", "userdeptname","remindField", "0", orgid);
					var uids = document.getElementById(userid).value;
					var unames = document.getElementById(username).value;
					var remindValue = document.getElementById("remindField").value;
					var userdeptids = document.getElementById("userdeptid").value;
					if (uids != "") {
					    $.ajax({
					       type:"post",
					       data:{"docSend.baseIds":baseIds,"docSend.inUserIds":uids,"docSend.inDeptIds":userdeptids},
					       url:url,
					       success:function save_callback(data){
					                       document.getElementById(userid).value="";
				                           document.getElementById(username).value="";
					                       document.getElementById("remindField").value="";
				                           document.getElementById("userdeptid").value="";
				                           document.getElementById("userdeptname").value="";
					                       if(data=='true'){
					                             alert('传阅成功'+message);
					                             if(typeof isReload != 'undefined'){
					                             window.location.href = window.location.href;
					                             }
					                             return false;
					                       }else {
					                              alert('传阅失败');
					                              return false;
					                       }
					                }
					       });
					}
				} else {
					alert("请选择您要传阅的记录！");
				}
			}, // 撤销传阅
			cleanCY : function(url,checkboxfield) {
			    var len = $("input[type='checkbox'][name='"+checkboxfield+"']:checked").length;
			     var message = "";
			    if(len==0) {
			        alert("请选择您要撤销传阅的记录！");
			    } else if(len>1){
			       alert("您只能选择一条记录撤销！");
			    } else if(len==1) {
			        var baseId = "";
			        $.each($("input[type='checkbox'][name='"+checkboxfield+"']:checked"),function(index,o){
				          var gongwenId = $(o).nextAll("#gongwenid").val();
				          var typesort = $(o).nextAll("#typesort").val();
				          if(typesort=='noflow'){
				              var rtitle = $(o).nextAll("#rtitle").val();
				              message = message + rtitle+",";
				          }
				          baseId = baseId+gongwenId;
				    });
				    if(message!=""){
					   message = message.substring(0,message.length-1);
					   message = message + '\n由于所选的文件包含是来文或刚签收的文件,该待办不支持撤销传阅';
					   alert(message);
					   return false;
					}
				    if(baseId!=""){
				            window.open(url+"?docSend.baseId=" + baseId,
										'EditJuOutArchives',
										'status=no,maximize=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,top=0,left=50, resizable=yes,height=500,width=1000');
				    }
			    }
			}
    }
  	/*功能：移至废件箱
  	 * infos 指的是：filetypeid + ',' + gongwenId + ',' + title;
  	 */
    function moveBox(infos,tableName,tableId,txtIPAddr,txtMACAddr,txtDNSName,userId,orgId) {
    	$.ajax({
            type : 'POST',
            dataType : 'json',
            url : "/wasteBox/wasteBoxAction!removeBox.action?infos="+ encodeURI(encodeURI(infos)) + "&tableName=" + tableName + 
            "&tableId=" + tableId + "&txtIPAddr=" + txtIPAddr + "&txtMACAddr=" + txtMACAddr + "&txtDNSName=" + txtDNSName + "&userId=" + userId + "&orgId=" + orgId,
            success : function(obj) {
            	if (obj.msgCode == '999') {
            		jbox.alert("操作失败！");
            	} else {
            		if(obj.message != null && obj.message != "" && obj.message.indexOf("部分成功")>-1){
            			var wasteBoxListStr = "";
            			
            				for(var i in obj.wasteBoxList){
            					wasteBoxListStr = wasteBoxListStr + "title:"+obj.wasteBoxList[i].title+";";
            					wasteBoxListStr = wasteBoxListStr + "reason:"+obj.wasteBoxList[i].reason+";";
            					wasteBoxListStr = wasteBoxListStr + "disable:"+obj.wasteBoxList[i].disable+";";
            					wasteBoxListStr = wasteBoxListStr + "values:"+obj.wasteBoxList[i].values+"*";
            			    }
            			wasteBoxListStr = wasteBoxListStr.substr(0,wasteBoxListStr.length-1);
            			wasteBoxListStr  = encodeURI(wasteBoxListStr);
            			wasteBoxListStr = encodeURI(wasteBoxListStr);
        			    var style = "status=no,maximize=no,toolbar=no,scrollbars=no,menubar=no,location=no,top=200,left=200,resizable=yes,height=350,width=700";
        				window.open("/wasteBox/wasteBoxAction!removeList.action?tableName="+obj.tableName+"&tableId="+obj.tableId+"&wasteBoxList="+wasteBoxListStr,"",style);
        			}else{
        				window.location.reload();
        			}
            	}
            }
        });
 	}
  
    function saveInfoCallBack(obj) {
    	if (obj.MsgCode == '999') {
    		jbox.alert("操作失败！");
    	} else {
    		if(obj.message != null && obj.message != "" && obj.message.indexOf("部分成功")>-1){
				//alert(data.returnMessage);
			    var style = "status=no,maximize=no,toolbar=no,scrollbars=no,menubar=no,location=no,top=200,left=200,resizable=yes,height=350,width=700";
				window.open("/jsp/module/gongwen/wastebox/archives_remove_list.jsp?tableName="+obj.tableName+"&tableId="+obj.tableId+"&results="+obj.wasteBoxList,"",style);
			}else{
				window.location.reload();
			}
    	}
    }
 		
    //收回
    function commonTakeBack(gongwenId,flowTypeId,curUserId,tableName,tableId) {
    	jbox.loading("数据操作中，请稍候...", 'loading');
         gongwenCommon.takeBack(gongwenId,flowTypeId,curUserId,tableName,tableId,function(message){
             alert(message);
             jbox.closeTip();
             if(message=='收回成功'){
             	if(tableName == 'YZ_ARCHIVES_OUT'){
             		window.location = "/archives/gongwenCommonAction!todoList.action?queryCondition.gongwenType=FW";
             	}else if(tableName == 'YZ_ARCHIVES_IN'){
             		window.location = "/archives/gongwenCommonAction!todoList.action?queryCondition.gongwenType=SW";
             	}else if(tableName == 'YZ_ARCHIVES_SIGN'){
             		window.location = "/archives/gongwenCommonAction!todoList.action?queryCondition.gongwenType=QB";
             	}else if(tableName == 'YZ_SUPERVISE'){
             		window.location = "/archives/gongwenCommonAction!todoList.action?queryCondition.gongwenType=CDB";
             	}
             }
         });
    }
    
    /*功能：移至文件柜
     * type : 指的是待办(db)或者已办(yb)
     * ids  : 指的是待办ID或者已办ID集合，中间以逗号隔开
     * str  : 没有用
     */
    function commonOpenFill(type,ids,str){
       var style = 'status=no,maximize=no,scrollbars=yes,toolbar=no,menubar=no,location=no,top=50,left=150, resizable=yes,height=570,width=910';
	   window.open('/fcSort/fcSortAction!queryFcList.action?type='+type+'&valu='+str+'&ids='+ids,'EditJuOutArchives',style);
	}
 
    /*功能：公文页面中的提示信息按钮
     * flowTypeName ：流程名称
     * flowTypeId ： 流程ID
     * gongwenId： 公文ID（指收，发，签）
     */
	function commonShowTooltip(flowTypeName,flowTypeId,gongwenId){
	    var style = 'status=no,maximize=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,top=0,left=50, resizable=yes,height=200,width=850';
        window.open('/archives/gongwenCommonAction!getTooltip.action?flowTypeName='+flowTypeName+'&flowTypeId='+flowTypeId+'&gongwenId='+gongwenId,'',style);
	}
	
	/* 功能：公文页面撤办
	 * str = flowType, recordId, title
	 * tableName 主业务表名称
	 * tableId 主业务表主键
	 * txtIPAddr 本机IP地址
	 * txtMACAddr 本机MAC地址
	 * txtDNSName 本机DNS名称
	 */
	function cheban(str, tableName, tableId){
		jbox.loading("数据操作中，请稍候...", 'loading');
		var txtIPAddr = document.getElementById('txtIPAddr').value;
		var txtMACAddr = document.getElementById('txtMACAddr').value;
		var txtDNSName = document.getElementById('txtDNSName').value;
		if(confirm("您确认要撤办吗？")){
			gongwenCommon.suspendFlow(str,tableName,tableId,txtIPAddr,txtMACAddr,txtDNSName,"","",function(backMessage){
				alert(backMessage);
				jbox.closeTip();
				if(typeof (window.opener.refAndClose) !='undefined'){
					window.opener.refAndClose();
				}
					window.close();
			});
		}else{
			jbox.closeTip();
		}
	}
	function delYRZWfileList(commonId,type){
		if(typeof type != 'undefined' && type !='' && typeof commonId != 'undefined' && commonId != ''){
		$.ajax({
			   url: "/archives/fwAction!delYRZWfileList.action",
			   data: {"commonId":commonId,"type":type},
			   success: function(msg) {
			   	msg = eval('(' + msg + ')');
	   			if(msg.object == "success"){
			   		alert("删除成功!");
					window.location.reload();
			   	}
			}});
		}
	}
	
	//添加常用意见
	function addnotion(){
		var flag = ischeckForm(document.forms["frm"].elements["notion"].value);	//意见
		if(flag){
		 	alert("输入的内容含有非法字符 ' \ | \" <> / : * ? & ");
		 	return false;
		}
		var notion = document.getElementById("notion").value;
		var ideamessage = "";
		if(document.getElementById("showNotion") != null){
			ideamessage = document.getElementById("showNotion").value;
		}
		if(notion=="请填写意见"){
			document.getElementById("notion").value="";
		}else if(notion==null || notion == ''){
			alert("意见不能为空！");
			return false;
		}else if(notion==ideamessage){
			alert(ideamessage+"！");
			return false;
		}else{
			var style = "status=no,maximize=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,top=20,left=50, resizable=yes,height=400,width=1000";
	    	window.open("/common/commonNotion!saveInfo.action?content="+notion+"&queryListFlag=true",'',style);
		}
	}
	
	function addDelHQ(){
		var flowreadId = jQuery("#flowReadId").val();
	    var style = 'status=no,maximize=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,top=0,left=50, resizable=yes,height=1000,width=1000';
        window.open('/archives/gongwenCommonAction!getStartExamineUser.action?flowReadId='+flowreadId,'',style);
	}
	
	
	