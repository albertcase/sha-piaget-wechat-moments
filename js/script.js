function Piaget(config) {
	//console.log(config)
	var _this = this;
	_this._hTrace = config.htrace;

    // this.onBefore = config.onBefore || function () {
    //     };

    //this.index = 0;
   
    _this._loading();
    setTimeout(function(){
    	_this._handTrace("1");
    },1000);

    setTimeout(function(){
    	_this._handTrace("0");
    },2500);
}


Piaget.prototype = {
	_loading: function(){
		var loader = new WxMoment.Loader();
	    //添加一个资源
	    loader.addImage('../imgs/active_trace.png');
	    loader.addImage('../imgs/bg.jpg');
	    loader.addImage('../imgs/hand.png');
	    loader.addImage('../imgs/logo.png');
	    loader.addImage('../imgs/pro.png');
	    loader.addImage('../imgs/slogan_cn.png');
	    loader.addImage('../imgs/slogan_en.png');

	    //监听资源加载完成事件
	    loader.addCompletionListener(function () {
	    	$(".loading").hide();
	    	$("#dreambox").animate({"opacity":1});
	        console.log('加载完成');
	    });

		loader.addProgressListener(function(e) {
				var percent = Math.round( e.completedCount / e.totalCount * 100 );
				$(".loading").css({"width":percent+"%"});
				$(".loading").html(percent+"%");
		});
		
	    //启动资源加载管理器
	    loader.start();
	},
    _handTrace: function (opacity) {
    	if(opacity == 1){
    		console.log(this._hTrace);
    		$(this._hTrace).fadeIn()
    	}else{
    		$(this._hTrace).fadeOut();
    	}
    	
    }
};

//module.exports = PageSlider;