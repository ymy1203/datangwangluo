
// 移动效果
$(document).ready(function(){
	$(".yunfuwu-all li").hover(function(){
		$(this).find(".hide").stop().animate({left:'0',opacity: 0.9}, 500);
	},function(){
		$(this).find(".hide").stop().animate({left:'380',opacity: 0}, {duration: "fast"});
		$(this).find(".hide").animate({left:'-380',opacity: 0}, {duration: 0});
	});
});
