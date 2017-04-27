var btnTop=$(".uptop");//获取返回顶部的div
window.onscroll = function(){
     var t = document.documentElement.scrollTop || document.body.scrollTop;  //获取距离页面顶部的距离
     if( t >= 300 ) { //当距离顶部超过300px时
        btnTop.slideDown(500);
     } else { //如果距离顶部小于300px
        btnTop.slideUp(500);
     } 
} 
btnTop.click(function(){
	$("html,body").animate(
		{
			scrollTop:"0"
		},400
	)
	
	//document.documentElement.scrollTop=0;
})

$(function(){
	$("#beijing").click(function(e){
		$("#beijing ol").toggle();
		stopBubble(e);
	})
	document.onclick=function(){
		$("#beijing ol").hide();
	}
	//阻止冒泡
	function stopBubble(e){
        e=e||window.event;  //firefox,chrome,etc.||IE,opera
		if(e.stopPropagation){
		 e.stopPropagation();
		}
		else{
			e.cancelBubble=true;
		}
	}


	var lis = $("#beijing ol li");
	$.each(lis,function(index,val){
		$(val).on("click",function(){
			$("#beijing span").text("");
			$("#beijing span").text($(val).text());
		})
		
	})

})

//======================