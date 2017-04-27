var map = new BMap.Map("baidumap");
map.centerAndZoom("青岛市动漫产业园C座",16);//索引地址
map.enableScrollWheelZoom(true);//鼠标滚轮放大缩小
//百度地图控件
// 比例尺
var scale = new BMap.ScaleControl({
	anchor:BMAP_ANCHOR_BOTTOM_RIGHT//比例尺位置，可以不写
});
map.addControl(scale);
//位置方向标
var nav = new BMap.NavigationControl({
	anchor:BMAP_ANCHOR_TOP_RIGHT,
	// type:BMAP_NAVIGATION_CONTROL_LARGE//PAN/SMALL//(可不写)
});
map.addControl(nav);
//百度地图类型
var type = new BMap.MapTypeControl();
map.addControl(type);
//地图覆盖物
var point = new BMap.Point(120.415,36.08777);
var marker = new BMap.Marker(point);
// map.addOverlay(marker);
//过去地址坐标
var geocoder = new BMap.Geocoder();
geocoder.getPoint("动漫产业园",function(point){
	var marker = new BMap.Marker(point);
	map.addOverlay(marker);
	var opts = {
		width:100,
		height:30,
		title:"青岛实训基地",
		// backgroundColor:"#000",//没用
		// lineHeight:30,
		// position:point,
		offset:new BMap.Size(10,-40)
	};
	marker.addEventListener("click",function(){
		var info = new BMap.InfoWindow("详细地址：银川西路67号。动漫产业园C座",opts);
		map.openInfoWindow(info,point);
	});
},"青岛市");