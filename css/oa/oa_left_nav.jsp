<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">









<html>
	<head>
		<link href="/css/post2.0/oldblue/style.css" rel="stylesheet" type="text/css" />
		<script type="text/javascript" src="/js/jquery/jquery-1.9.1.js"></script>
		<script type="text/javascript">
$(function(){	
	//导航切换
	$(".menuson li").click(function(){
		$(".menuson li.active").removeClass("active")
		$(this).addClass("active");
	});
	
	$('.title').click(function(){
		var $ul = $(this).next('ul');
		$('dd').find('ul').slideUp();
		if($ul.is(':visible')){
			$(this).next('ul').slideUp();
		}else{
			$(this).next('ul').slideDown();
		}
	});
	
	//右侧显示模块内容
	showModelContent();
})

function titleClick(url,name,modelId){
	name = encodeURI(name);   
 	name = encodeURI(name);  
	if(url==null||url=="null"||url==""){      
      parent.rightframe.location="/jsp/indexpage/tips.jsp?node_name="+name;
    }else{
    	if(url.indexOf("?")>=0){
		  parent.rightframe.location=url+"&model_id="+modelId;
		}else{
		  parent.rightframe.location=url+"?model_id="+modelId;
		}
    }
}

/**
*显示模块内容
*/
function showModelContent(){
	$(".modelIdC").each(function(){
		if($(this).val()=='030'){
			var tagName = $(this).parent().get(0).tagName;
			if(tagName=='DIV'){
				$(this).parent().click();
			}
			if(tagName=='LI'){
				//li添加选中样式
				$(this).parent().addClass("active");
				//模拟liclick事件
				$(this).parent().find('a')[0].click();
				var $ul = $(this).parent().parent();
				if($ul.is(':visible')){
					$ul.slideUp();
				}else{
					$ul.slideDown();
				}
			}
		}
	});
}
</script>


	</head>

	<body style="background: #f0f9fd;min-width:187px;">
	<div id="content">
		<div class="lefttop">
			<span></span>公文管理
		</div>

		<dl class="leftmenu">

				
				 <dd>
					<div class="title" onclick="titleClick('/jsp/module/gongwen/common/flowStartList.jsp?sortType=FW,CZDB','发文','030003');">
						<input type="hidden" value="030003" class="modelIdC"/>
						<span><img src="/images/common/leftico01.png" />
						</span>发文
					</div>
					<ul class="menuson">
						
						<li onclick="titleClick('/archives/fwAction!queryList.action','发文草稿','030003002');">
							<input type="hidden" value="030003002" class="modelIdC"/>
							<cite></cite><a>发文草稿</a><i></i>
						</li>
						
						
						<li onclick="titleClick('/archives/gongwenCommonAction!todoList.action?queryCondition.gongwenType=FW','发文待办列表','030003003');">
							<input type="hidden" value="030003003" class="modelIdC"/>
							<cite></cite><a>发文待办列表</a><i></i>
						</li>
						
						
						<li onclick="titleClick('/archives/gongwenCommonAction!doList.action?queryCondition.gongwenType=FW','发文已办列表','030003004');">
							<input type="hidden" value="030003004" class="modelIdC"/>
							<cite></cite><a>发文已办列表</a><i></i>
						</li>
						
						
						<li onclick="titleClick('/archives/fwDocSend!getDylist.action','发文待阅列表','030003005');">
							<input type="hidden" value="030003005" class="modelIdC"/>
							<cite></cite><a>发文待阅列表</a><i></i>
						</li>
						
						
						<li onclick="titleClick('/archives/fwDocSend!getYylist.action','发文已阅列表','030003006');">
							<input type="hidden" value="030003006" class="modelIdC"/>
							<cite></cite><a>发文已阅列表</a><i></i>
						</li>
						
						
					</ul>
				</dd>
				 
				 <dd>
					<div class="title" onclick="titleClick(' /jsp/module/gongwen/common/flowStartList.jsp?sortType=SW','收文','030004');">
						<input type="hidden" value="030004" class="modelIdC"/>
						<span><img src="/images/common/leftico01.png" />
						</span>收文
					</div>
					<ul class="menuson">
						
						<li onclick="titleClick('/archives/swAction!queryList.action','收文草稿','030004002');">
							<input type="hidden" value="030004002" class="modelIdC"/>
							<cite></cite><a>收文草稿</a><i></i>
						</li>
						
						
						<li onclick="titleClick('/archives/gongwenCommonAction!todoList.action?queryCondition.gongwenType=SW','收文待办列表','030004003');">
							<input type="hidden" value="030004003" class="modelIdC"/>
							<cite></cite><a>收文待办列表</a><i></i>
						</li>
						
						
						<li onclick="titleClick('/archives/gongwenCommonAction!doList.action?queryCondition.gongwenType=SW','收文已办列表','030004004');">
							<input type="hidden" value="030004004" class="modelIdC"/>
							<cite></cite><a>收文已办列表</a><i></i>
						</li>
						
						
						<li onclick="titleClick('/archives/swDocSend!getDylist.action?docSend.seeFlag=N','收文待阅列表','030004005');">
							<input type="hidden" value="030004005" class="modelIdC"/>
							<cite></cite><a>收文待阅列表</a><i></i>
						</li>
						
						
						<li onclick="titleClick('/archives/swDocSend!getYylist.action?docSend.seeFlag=Y','收文已阅列表','030004006');">
							<input type="hidden" value="030004006" class="modelIdC"/>
							<cite></cite><a>收文已阅列表</a><i></i>
						</li>
						
						
					</ul>
				</dd>
				 
				 <dd>
					<div class="title" onclick="titleClick('/jsp/module/gongwen/common/flowStartList.jsp?sortType=QB','签报','030005');">
						<input type="hidden" value="030005" class="modelIdC"/>
						<span><img src="/images/common/leftico01.png" />
						</span>签报
					</div>
					<ul class="menuson">
						
						<li onclick="titleClick('/archives/archivesSign!queryList.action','签报草稿','030005002');">
							<input type="hidden" value="030005002" class="modelIdC"/>
							<cite></cite><a>签报草稿</a><i></i>
						</li>
						
						
						<li onclick="titleClick('/archives/gongwenCommonAction!todoList.action?queryCondition.gongwenType=QB','签报待办列表','030005003');">
							<input type="hidden" value="030005003" class="modelIdC"/>
							<cite></cite><a>签报待办列表</a><i></i>
						</li>
						
						
						<li onclick="titleClick('/archives/gongwenCommonAction!doList.action?queryCondition.gongwenType=QB','签报已办列表','030005004');">
							<input type="hidden" value="030005004" class="modelIdC"/>
							<cite></cite><a>签报已办列表</a><i></i>
						</li>
						
						
						<li onclick="titleClick('/archives/qbDocSend!getDylist.action?docSend.seeFlag=N','签报待阅列表','030005005');">
							<input type="hidden" value="030005005" class="modelIdC"/>
							<cite></cite><a>签报待阅列表</a><i></i>
						</li>
						
						
						<li onclick="titleClick('/archives/qbDocSend!getYylist.action?docSend.seeFlag=Y','签报已阅列表','030005006');">
							<input type="hidden" value="030005006" class="modelIdC"/>
							<cite></cite><a>签报已阅列表</a><i></i>
						</li>
						
						
					</ul>
				</dd>
				 
				 <dd>
					<div class="title" onclick="titleClick('/jsp/module/gongwen/common/flowStartList.jsp?sortType=CDB','催督办','030006');">
						<input type="hidden" value="030006" class="modelIdC"/>
						<span><img src="/images/common/leftico01.png" />
						</span>催督办
					</div>
					<ul class="menuson">
						
						<li onclick="titleClick('/archives/gongwenCommonAction!todoList.action?queryCondition.gongwenType=CDB','催督办待办列表','030006003');">
							<input type="hidden" value="030006003" class="modelIdC"/>
							<cite></cite><a>催督办待办列表</a><i></i>
						</li>
						
						
						<li onclick="titleClick('/archives/gongwenCommonAction!doList.action?queryCondition.gongwenType=CDB','催督办已办列表','030006004');">
							<input type="hidden" value="030006004" class="modelIdC"/>
							<cite></cite><a>催督办已办列表</a><i></i>
						</li>
						
						
						<li onclick="titleClick('/archives/cdbDocSend!getDylist.action?docSend.seeFlag=N','催督办待阅列表','030006005');">
							<input type="hidden" value="030006005" class="modelIdC"/>
							<cite></cite><a>催督办待阅列表</a><i></i>
						</li>
						
						
						<li onclick="titleClick('/archives/cdbDocSend!getYylist.action?docSend.seeFlag=Y','催督办已阅列表','030006006');">
							<input type="hidden" value="030006006" class="modelIdC"/>
							<cite></cite><a>催督办已阅列表</a><i></i>
						</li>
						
						
					</ul>
				</dd>
				 
				 <dd>
					<div class="title" onclick="titleClick('null','公文查询','030019');">
						<input type="hidden" value="030019" class="modelIdC"/>
						<span><img src="/images/common/leftico01.png" />
						</span>公文查询
					</div>
					<ul class="menuson">
						
						<li onclick="titleClick('/commonSpace/solr!init.action?archivesType=sw','收文查询','030019001');">
							<input type="hidden" value="030019001" class="modelIdC"/>
							<cite></cite><a>收文查询</a><i></i>
						</li>
						
						
						<li onclick="titleClick('/commonSpace/solr!init.action?archivesType=fw','发文查询','030019002');">
							<input type="hidden" value="030019002" class="modelIdC"/>
							<cite></cite><a>发文查询</a><i></i>
						</li>
						
						
						<li onclick="titleClick('/commonSpace/solr!init.action?archivesType=qb','签报查询','030019003');">
							<input type="hidden" value="030019003" class="modelIdC"/>
							<cite></cite><a>签报查询</a><i></i>
						</li>
						
						
					</ul>
				</dd>
				 
				 <dd>
					<div class="title" onclick="titleClick('/jsp/module/system/common/parse_common_tag.jsp','文件柜管理','030023');">
						<input type="hidden" value="030023" class="modelIdC"/>
						<span><img src="/images/common/leftico01.png" />
						</span>文件柜管理
					</div>
					<ul class="menuson">
						
						<li onclick="titleClick('/fcSort/fcSortAction!selectFcSortList.action','文件柜列表','030023001');">
							<input type="hidden" value="030023001" class="modelIdC"/>
							<cite></cite><a>文件柜列表</a><i></i>
						</li>
						
						
						<li onclick="titleClick('/fcSort/fcSortAction!create.action','个人文件柜类型添加','030023002');">
							<input type="hidden" value="030023002" class="modelIdC"/>
							<cite></cite><a>个人文件柜类型添加</a><i></i>
						</li>
						
						
						<li onclick="titleClick('/fcSort/fcSortAction!queryList.action','个人文件柜类型列表','030023003');">
							<input type="hidden" value="030023003" class="modelIdC"/>
							<cite></cite><a>个人文件柜类型列表</a><i></i>
						</li>
						
						
						<li onclick="titleClick('/fcSort/fcSortAction!queryOrder.action','个人文件柜类型排序','030023004');">
							<input type="hidden" value="030023004" class="modelIdC"/>
							<cite></cite><a>个人文件柜类型排序</a><i></i>
						</li>
						
						
					</ul>
				</dd>
				 
		</dl>
		</div>
	</body>
</html>

