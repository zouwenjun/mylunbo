var imgs=[
   // {"img":"images/banner_5.jpg"},
    {"img":"images/banner_1.jpg"},
    {"img":"images/banner_2.jpg"},
    {"img":"images/banner_3.jpg"},
    {"img":"images/banner_4.jpg"},
   // {"img":"images/banner_0.jpg"}

];
var slider={
	$ulImages:null,//图片ul
	$ulIndex:null,//下标ul
	DURATION:200,//图片滑动完成时间
	WAIT:2000,
	$index:0,
	init(){
		var me=this;
		me.$width=1200;
		me.$ulImages=$("#imgs");
		me.$ulIndex=$("#indexs");
		me.initView();
		me.autoMove();
		
		me.$ulImages.on("mouseover","li>img",function(e){
			var $tar=$(e.target);
			
			// var i=$tar.index("#imgs img");
			me.$ulImages.stop(true);
			
			me.$index=$tar.index("#imgs img");
			
			me.$index==imgs.length&&(me.$index=0);
			me.$ulImages.css("left",-me.$index*me.$width);
			
		});
		me.$ulImages.on("mouseout ","li>img",function(e){
			var $tar=$(e.target);
			
			// var i=$tar.index("#imgs img");
			me.$ulImages.stop(true);
			
			me.$index=$tar.index("#imgs img");
			
			me.$index==imgs.length&&(me.$index=0);
			me.$ulImages.css("left",-me.$index*me.$width);
			// console.log(me.$index);
			me.changeHover();
			me.autoMove();
		});
		me.$ulIndex.on("mouseover","li",function(e){
			me.$ulImages.stop(true);
			var $tarli=$(e.target);
			var ii=$tarli.index("#indexs li");//我的鼠标的悬停位置
			var si=$(".hover").index("#indexs li");

			// console.log(me.$index);
			
			me.$index+=(ii-si)-1;
			console.log(me.$index);
				me.changeHover();
				me.$ulImages.stop(true).animate(
					{left:-me.$index*me.$width
					},me.DURATION);
				me.autoMove();
		});

		
		
		
	},
	autoMove(){
		var me=this;
		me.$index++;
		me.$ulImages.animate({"null":1},2000,
			function(){
			me.$ulImages.animate({left:-me.$index*me.$width},me.DURATION,function(){
				if(me.$index==imgs.length){
					me.$index=0;
					me.$ulImages.css("left",-me.$index*me.$width);
				}/*else if(me.$index==imgs.length){};*/
				
				me.changeHover();
				me.autoMove();
			});
			
		           })
	},
	changeHover(){
		var me=this;
		me.$ulIndex.children().eq(me.$index).addClass("hover").siblings().removeClass("hover");

	},
	
	initView(){
		
		var me=this;
		for(var i=0,htmlImages="",htmlIndexs="";i<imgs.length;i++ ){
			htmlImages+=`<li><img src="${imgs[i].img}" ></li>`;
			htmlIndexs+=`<li>${i+1}</li>`;

		};
		this.$ulImages.html(htmlImages).css({"width":imgs.length*this.$width});
		me.$ulIndex.html(htmlIndexs).children(":nth-child(1)").addClass("hover");
	}
};
slider.init();
