//ajax请求
// var url = "http://115.182.107.203:8088/ylkj-api/c/article/grid";
var url = "ylkj-api/c/article/grid";
$(function(){
	//判断是民生还是产业请求的ajax，
	//从而给DATA不同的值；
	var dad = $(".child_dad").parent();
	var typ;
	if(dad.hasClass("xiangmu")){
		typ = "hlwms"
	}else if(dad.hasClass("neirong")){
		typ = "hlwcy"
	}
	// console.log(dad);
	$.ajax({
		type:"post",
		url:url,
		data:{
			typeCodes:[ typ ],
			limit:2000
		},
		dataType:"json",
		success:function(data,textStatus){
			var val = data.data;
			// console.log(val);
			$.each(val,function(index,value){
				var imgurl = "http://115.182.107.203:8088"+value.smallImg;
				var li = $("<li><dt><img src="
					+imgurl+
					"></dt><dd><h2>项目名称："
					+value.title+
					"<br>"
					+value.subTitle+
					"</h2><p><span>项目简介：</span>"
					+value.intro+
					"</p></dd></li>");
					$(".xiangmu ul").append(li);//民生写入
					$(".neirong ul").append(li);//产业写入
				li.on("click",function(){
					sessionStorage.setItem("idmm",value.id);
					sessionStorage.setItem("turnmm",$(".col-e6").text());
					location.href="xiangqing.html";
				})
			})
		}

	});
});

