//ajax请求
// var url = "http://115.182.107.203:8088/ylkj-api/c/article/grid";
var url = "ylkj-api/c/article/grid";
// $(function(){
	var dad = $(".ul_child").parent();
	var typ;
	//判断是哪个html文件运行的本次请求，从而给data不同的值
	if(dad.hasClass("gszx")){
		typ = "information"
	}else if(dad.hasClass("meiti")){
		typ = "mediaReport"
	}
	//公司资讯的AJAX
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
			var months = [];
			$.each(val,function(index,value){
				var time = new Date(value.publishTime);//获得年日月
				var month = time.getMonth()+1;
				var day = time.getDate();
				month2 = jia(month);//处理年日月，用函数使<10的加零
				day = jia(day);
				var time2 = time.getFullYear()+"-"+month2+"-"+day;//处理年日月格式
				var yuefen = yue(month);//月变成英语缩写
				var imgurl= value.smallImg.substring(1);//处理图片路径
				//处理相同月份时的情况下，只添加一次红色的英语月份导航
				months[index]=month;
				if(months[index]!=months[index-1]){
					var month_html = "<div class='moth'>"+yuefen+"<sapn class='moth_su'></sapn></div>";
				}else{
					month_html="";
				}
				var li = $("<li>"+month_html+"<dl class='day'>"
					+time2+
					"<img src='datang/images/travker/red.png'></dl><dl class='news'><dt><a href='xiangqing.html'><img src="
					+imgurl+
					"></a></dt><dd><p><a href='xiangqing.html'>"
					+value.title+
					"</a></p><span>"
					+value.intro+
					"<a href='xiangqing.html'>[阅读全文]</a></span></dd></dl></li>");
				$(".gszx ul").append(li);
				$(".meiti ul").append(li);
				// 将id纯入缓存；
				li.on("click",function(){
					sessionStorage.setItem("idmm",value.id);
					sessionStorage.setItem("turnmm",$(".col-e6").text());
				})
			})
		}

	});


	// 使<10的加零
	function jia(val){
		val<10?val="0"+val:val=val;
		return val;
	}
	//月份
	function yue(val){
		switch(val){
			case 1:					
			return "JAN";		
			break;
			case 2:					
			return "FEB";	
			break;
			case 3:
			return "MAR";
			case 4:
			return "APR";
			case 5:
			return "MAY";
			case 6:
			return "JUN";
			case 7:
			return "JUL";
			case 8:
			return "AUG";
			case 9:
			return "SEP";	
			case 10:
			return "OCT";
			case 11:
			return "NOV";
			case 12:
			return "DEC";
			break;	
			default:
			console.log("default")
						
		}
	}
// });
