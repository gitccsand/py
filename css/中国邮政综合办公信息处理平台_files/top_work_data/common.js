/**china post v2.0 js
*/
$(document).ready(function(){
	/**
	*绑定查询
	*/
	$(".query-title").click(function(){
		displayQuery();
	});
	$(".query-title img").attr("src","/images/common/zhedie_02.png");
	$(".query").show();
});

/**
*显示隐藏查询部分
*/
function displayQuery(){
	if($(".query").is(":hidden")){
		$(".query-title img").attr("src","/images/common/zhedie_02.png");
		$(".query").show();
	}else{
		$(".query-title img").attr("src","/images/common/zhedie_01.png");
		$(".query").hide();
	}
}