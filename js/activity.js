//ajax请求
// var url = "http://115.182.107.203:8088/ylkj-api/c/article/grid";
var url = "/ylkj-api/c/article/grid";
$(function(){
	$.ajax({
		type:"post",
		url:url,
		data:{
			typeCodes:[ "activity" ],
			limit:2000
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
				var imgurl = value.smallImg
				if(imgurl.indexOf("www")<0){
					imgurl = "http://115.182.107.203:8088"+imgurl;
				}
				var li = $("<li><dt><img src="
					+imgurl+
					"><span>"
					+value.attr.activityStatus+
					"</span></dt><dd><h3>"
					+value.title+
					"</h3><p>活动时间："
					+time2+
					"</p><p>活动地点："
					+value.intro+
					"</p></dd></li>");
				$(".all_cen ul").append(li);//民生写入
					// 将id纯入缓存；
				li.on("click",function(){
					sessionStorage.setItem("idmm",value.id);
					sessionStorage.setItem("turnmm",$("#avv").text());
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
//select点击事件
var sels = $("#beijing ol li");
sels.on("click",function(){
	var aa = $(this).val();
	var bb =  $(".all_cen dt span");
	console.log(bb);
	$.each(bb,function(index,val){
		var dadli = $(val).parents("li");
		if(aa==1){
			dadli.show();
		}
		if(aa==2){
			if($(val).html()!="未开始"){
				var dadli = $(val).parents("li");
				dadli.hide();
			}
		}
		if(aa==3){
			var dadli = $(val).parents("li");
			if($(val).html()!="进行中"){
				dadli.hide();
			}else{
				dadli.show();
			}
		}
		if(aa==4){
			var dadli = $(val).parents("li");
			if($(val).text()!="已结束"){
				dadli.hide();
			}else{
				dadli.show();
			}
		}
	})
})