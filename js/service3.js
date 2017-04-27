//ajax请求
// var url = "http://115.182.107.203:8088/ylkj-api/c/article/grid";
var url = "ylkj-api/c/article/grid";
$(function(){
	$.ajax({
		type:"post",
		url:url,
		data:{
			typeCodes:[ "cyfw" ],
			limit:2000
		},
		dataType:"json",
		success:function(data,textStatus){
			var val = data.data;
			// console.log(val);
			$.each(val,function(index,value){
				// console.log(value.id);
				var imgurl = value.smallImg
				if(imgurl.indexOf("www")<0){
					imgurl = "http://115.182.107.203:8088"+imgurl;
				}
				var li = $("<li><a href='xiangqing.html'><img src="
					+imgurl+
					"><dd><h3>"
					+value.title+
					"</h3><p>"
					+value.subTitle+
					"</p></dd></a></li>");
				$(".cy ul").append(li);//写入
				//将id纯入缓存
				li.on("click",function(){
					sessionStorage.setItem("idmm",value.id);
					sessionStorage.setItem("turnmm",$(".col-e6").text());
				})
			});
		}
	});
	//======================
});




