// var url = "http://115.182.107.203:8088/ylkj-api/c/article/detail";
var url = "ylkj-api/c/article/detail";
var idmm = sessionStorage.getItem("idmm");
var turnmm = sessionStorage.getItem("turnmm");
// console.log(turnmm);
$(function(){
	$.ajax({
		type:"post",
		url:url,
		data:{
			id:idmm,
		},
		dataType:"json",
		success:function(data){
			var val = data.data;
				var divv = $("<div class='title'>"
					+val.title+
					"</div><div class='title2'><p>"
					+val.subTitle+
					"</p></div><div class='text'><p>"
					+val.content+val.intro+
					"</p></div>");
				$(".center").append(divv);
		}
	});
});
$(function(){
	var navlis = $(".header ul li");
	$.each(navlis,function(index,val){
		var navas = $(val.lastChild)
		if(navas.text()==turnmm){
			console.log(index)
			navas.css({
				color:"red",
			})
		}
	})
})