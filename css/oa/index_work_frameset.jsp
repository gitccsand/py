


 
<html>
<head>
<title>中国邮政综合办公信息处理平台</title>
	<script type="text/javascript">
		function createXmlHttpRequest(){
			if(window.ActiveXObject){
				xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
			}else if(window.XMLHttpRequest){
				xmlHttp= new XMLHttpRequest();
			}
		}
		/**
		*	更新用户状态	off:下线		on:上线
		**/
		function _switchOnlineUserInfo(state){
			createXmlHttpRequest();
			xmlHttp.open("POST","/jsp/common/online_state.jsp?flag="+state,true);
			xmlHttp.send(null);
		}
		window.onbeforeunload = function (){
			_switchOnlineUserInfo("off");
		}
		window.onload = function(){
			_switchOnlineUserInfo("on");
		}
	</script>
</head>
<frameset rows="88,*" cols="*" frameborder="no" border="0" framespacing="0" id="fram">
  <frame src="/jsp/indexpage/top_work.jsp" name="topFrame" scrolling="no" id="topFrame" title="topFrame"/>
  <frameset rows="" cols="187,9,*" framespacing="0" frameborder=no border="0" id="frameset2" name="frameset2">
    <frame name="leftframe" src="/jsp/indexpage/left_nav.jsp?id=030" scrolling="auto"/>
    <frame name="middle" src="/jsp/indexpage/middle.jsp" scrolling="no" noresize/>
    <frame name="rightframe" src="" scrolling="auto" id="rightframe">
  </frameset>
</frameset>
<noframes><body>
</body></noframes>
</html>
