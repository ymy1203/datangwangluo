
//==================================
//大图轮播
	 var mySwiper = new Swiper('.lunbo1 .swiper-container', {
		autoplay: 3000,//可选选项，自动滑动
		// effect : 'fade',//淡入淡出
		loop: true,
		pagination: '.pagination',
		autoplayDisableOnInteraction: false,
		paginationClickable: true,
	});
	//鼠标移入与移除时暂停与开始轮播
	$(".swiper-container img").on({
		mouseenter:function(){
			mySwiper.stopAutoplay();
		},
		mouseleave:function(){
			mySwiper.startAutoplay();
		},
	});
//===========资讯ajax=========
//ajax请求
// var url = "http://115.182.107.203:8088/ylkj-api/c/article/grid";
var url = "ylkj-api/c/article/grid";
$(function(){
	$.ajax({
		type:"post",
		url:url,
		data:{
			typeCodes:[ "information","mediaReport" ],
			limit:3
		},
		dataType:"json",
		success:function(data,textStatus){
			var val = data.data;
			// console.log(val);
			$.each(val,function(index,value){
				var imgurl = value.smallImg;
				var ul = $("<ul><li class='ns_li2'><img src="
					+imgurl+
					"><p class='bantou'></p><p>"
					+value.title+
					"</p></li><li class='ns_li3'><a href='javascript:void(0)'>"
					+value.intro+
					"</a></li></ul>");
				$(".newscontent").append(ul);//民生写入
				//半透明
				$(".ns_li2 .bantou").fadeTo(0,0.7);
				// 将id纯入缓存；
				ul.on("click",function(){
					sessionStorage.setItem("idmm",value.id);
					sessionStorage.setItem("turnmm",$(".turndown").text());
					location.href="xiangqing.html";
				})
			});
		}
	});
});
//===========项目ajax=========
//ajax请求
// var url = "http://115.182.107.203:8088/ylkj-api/c/article/grid";
var url = "ylkj-api/c/article/grid";
$(function(){
	$.ajax({
		type:"post",
		url:url,
		data:{
			typeCodes:[ "hlwms","hlwcy" ],
			limit:6,
		},
		dataType:"json",
		success:function(data,textStatus){
			var val = data.data;
			$.each(val,function(index,value){
				var imgurl = value.middleImg;
				var divv = $("<div class='swiper-slide'>"
					+"<a href='javascript:void(0)'>"
					+"<img src="+imgurl+"></a></div>");
				$(".lunbo2 .swiper-wrapper").append(divv);
					// 将id纯入缓存；
			});
			var objectCarousel = new Swiper('.lunbo2 .swiper-container', {
				autoplay: 3000,//可选选项，自动滑动
				loop: true,//循环
				slidesPerView : 4,//轮播区域需要显示的slide数量
				spaceBetween : 20,//每个slide之间的空隙px
				autoplayDisableOnInteraction: false,//交互（拖拽）之后是否停止轮播
			});
			$(".arrow-left").on("click",function(){
				objectCarousel.swipePrev();
			});
			$(".arrow-right").on("click",function(){
				objectCarousel.swipeNext();
			});
				}
			});
});



//===========活动ajax=========
$(function(){
	$.ajax({
		type:"post",
		url:url,
		data:{
			typeCodes:[ "activity" ],
			limit:4
		},
		dataType:"json",
		success:function(data,textStatus){
			var val = data.data;
			// console.log(val);
			$.each(val,function(index,value){
				var time = new Date(value.publishTime);//获得年日月
				var month = time.getMonth()+1;
				var day = time.getDate();
				month = jia(month);//处理年日月，用函数使<10的加零
				day = jia(day);
				var time2 = time.getFullYear()+"-"+month+"-"+day;//处理年日月格式
				//处理万恶的后台给留的智障图片url
				var imgur2 = value.smallImg;
				var li = $("<li><dl><img src="
					+value.smallImg+
					"><dt>"
					+value.attr.activityStatus+
					"</dt></dl><dl><p>"
					+value.title+
					"</p><dd><span>活动时间："
					+time2+
					"</span><br><span>活动地点："
					+value.intro+
					"</span></dd></dl></li>");
				$(".act_box").append(li);//民生写入
					// 将id纯入缓存；
				li.on("click",function(){
					sessionStorage.setItem("turnmm",$(".turndown2").text());
					sessionStorage.setItem("idmm",value.id);
					location.href="xiangqing.html";
				})
			});
		}
	});
	// 使<10的加零
	function jia(val){
		val<10?val="0"+val:val=val;
		return val;
	};
});



