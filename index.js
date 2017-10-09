var imgs=[
   {"img":"images/banner_5.jpg"},
    {"img":"images/banner_1.jpg"},
    {"img":"images/banner_2.jpg"},
    {"img":"images/banner_3.jpg"},
    {"img":"images/banner_4.jpg"},
   {"img":"images/banner_0.jpg"}

];

var slider={
$width:null,
$ulImgs:null,//保存id为imgs的ul;
$ulIndexs:null,//保存id为indexsul;
DURATION:500,//保存单词轮播滑动时间；
WAIT:3000,//时间间隔
MOVED:1,
	init(){
		var me=this;
		me.$width=$(window).width();
		me.$ulImgs=$("#imgs");
		me.$ulIndexs=$("#indexs");
		me.initView();//初始化界面；
		me.autoMove();
		var index=0;


	},
	initView(){
		var me=this;
		for(var i=0,htmlImages="",htmlIndex="";i<imgs.length;i++){
			htmlImages+=`<li><img src="${imgs[i].img}" ></li>`;
			htmlIndex+=`<li>${i}</li>`;
		}

		this.$ulImgs.html(htmlImages).css("width",imgs.length*this.$width);
	$(" img").css("width",this.$width);
	$(".slider").css("width",this.$width);
	var $len=imgs.length;//保证其在追加第一个元素后，最后一个子元素是没加之前的哪个
	me.$ulImgs.css("left",-me.$width);
	this.$ulIndexs.html(htmlIndex);
		 this.$ulIndexs.children(":nth-child(2)")
	            .addClass("hover");
	            // this.$ulImgs.css("left",-this.$width);

	},
	autoMove(){
		var me=this;
		
		
		me.showImage();
	},
	showImage(){
		var me=this;
			var timer=setInterval(animation,2000);
			function animation(){
				
				if(me.MOVED<1){me.MOVED=4}else if(me.MOVED>4){me.MOVED=1};
				var ee=-me.MOVED*me.$width;
				me.$ulImgs.animate({left:ee},me.DURATION);
				console.log(me.MOVED);
				me.MOVED++;
				me.changeHover();
				
			}
	},
	changeHover(){
		this.$ulIndexs.children().eq(this.MOVED-1).addClass("hover").siblings().removeClass("hover");
	}
	
}
	 

slider.init();