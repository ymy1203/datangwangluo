//轮播====
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


//=======
//点击轮播
var left = $(".turn_left");
var rig = $(".turn_right");
var aa = 0;
rig.on("click",function(){
	aa = aa-200;
	if(aa<=-1000){
		aa=-1000;
	}
	// console.log(aa);
	// $(".logo").css({
	// 	"marginLeft":""+aa+"px",
	// });
	$(".logo").animate({
		marginLeft:aa
	},500);
})
left.on("click",function(){
	aa = aa+200;
	if(aa>=0){
		aa=0;
	}
	// console.log(aa);
	// $(".logo").css({
	// 	"marginLeft":""+aa+"px",
	// });
	$(".logo").animate({
		marginLeft:aa
	},500);
})



//百度地图
var map = new BMap.Map("baidumap");
map.centerAndZoom("青岛市动漫产业园C座",16);//索引地址
map.enableScrollWheelZoom(true);//鼠标滚轮放大缩小
//百度地图控件
var geocoder = new BMap.Geocoder();
geocoder.getPoint("动漫产业园",function(point){
	var marker = new BMap.Marker(point);
	map.addOverlay(marker);
	var opts = {
		width:100,
		height:30,
		title:"青岛实训基地",
		offset:new BMap.Size(10,-40)
	};
	marker.addEventListener("click",function(){
		var info = new BMap.InfoWindow("详细地址：银川西路67号。动漫产业园C座",opts);
		map.openInfoWindow(info,point);
	});
},"青岛市");