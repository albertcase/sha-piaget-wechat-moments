document.addEventListener('touchmove' , function (ev){
  ev.preventDefault();
  return false;
} , false)



;(function($){
    $(function(){

        var basePath='http://wximg.gtimg.com/tmt/_events/20150510-promo-coach/dist/';
		var wa = new WxMoment.Analytics({
		    //projectName 请与微信商务团队确认
		    projectName: "20100510coach"
		}); 
		new WxMoment.Share({
		    //分享到朋友圈
		    'moment': {
		        'title': "母亲节，感谢人生的第一位导师"
		    },
		    //分享给好友
		    'friend': {
		        'title': "母亲节，感谢人生的第一位导师",
		        'desc': "你教会了我人生中的所有美好，感谢你，妈妈"
		    },
		    'global': {
		        'img_url': basePath + "/images/kv.jpg",
		        'link': window.location.href.split("?")[0].replace(/([&|\?]{1})ticket=[\w\-]+(&?)/, '$1').replace(/\?$/, '')
		    }
		});


		function _handTrace(opacity){
			if(opacity == 1){
				$("#mask,.active_trace").fadeIn()
			}else{
				$("#mask,.active_trace").fadeOut();
			}
		}

		

		setTimeout(function(){
			_handTrace(1);
		},300);

		setTimeout(function(){
			_handTrace(0);
		},1500);





        var vidArr = ["m0151xu7izy","b001672wkoe","a0016gys8ct"];
        var vPic = ["http://www.baidu.com/img/bdlogo.png","../imgs/poster.jpg","http://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Ross_Perot_Allan_Warren.jpg/167px-Ross_Perot_Allan_Warren.jpg"]
		var player;
		var videoWidth = document.body.clientWidth;
		var videoHeight = videoWidth * (1080 / 1920);

		$(".video").css({"height":videoHeight});

		var videoFun = function(n){
			var video = new tvp.VideoInfo(); 
			video.setVid(vidArr[n]);
			player = new tvp.Player(); 
			player.create({
				width: videoWidth + 'px',
				height: videoHeight + 'px',
				video: video,
				pic: vPic[n],
				modId:"mod_player" //mod_player是刚刚在页面添加的div容器 autoplay:true
			});

		}


		/* 戒指动画 */
		var v = 1;
		

		var animationListener = function(){
			$(".routeAni").removeClass('up');
			$(".routeAni").removeClass('down');
			console.log('do something');
		}

		var anim = document.getElementById("ring");
		anim.addEventListener("webkitAnimationEnd", animationListener, false);

		var l = $(".activeArea"),k = $("#home");

		touch.on(l, 'swipeup', function(event){
			  $(".routeAni").addClass('up');
			  v++;

			  if(v>vidArr.length-1){
			  	v=0;
			  };
			  videoFun(v);
		      event.preventDefault();
		});

		touch.on(l, 'swipedown', function(event){
			  $(".routeAni").addClass('down');
			  v--;

			  if(v<0){
			  	v=2;
			  };

			  videoFun(v);
		      event.preventDefault();
		});


		/* home-ring */
		var animationListener_home = function(){
			$(".p_animate").removeClass('up');
			videoFun(1);
		    $(".container").hide().css({"opacity":0});
		    $("#video").show().animate({"opacity":1},1200);
	        event.preventDefault();
		}

		var anim_home = document.getElementById("ring_home");
		anim_home.addEventListener("webkitAnimationEnd", animationListener_home, false);

		touch.on(k, 'swipeup', function(event){
			  $(".p_animate").addClass('up');  
		});






		function _loading(){
			var loader = new WxMoment.Loader();
			    //添加一个资源
			    loader.addImage('../imgs/active_trace.png');
			    loader.addImage('../imgs/bg.jpg');
			    loader.addImage('../imgs/btn_tips.png');
			    loader.addImage('../imgs/hand.png');
			    loader.addImage('../imgs/handTips.png');
			    loader.addImage('../imgs/holder_bg.jpg');
			    loader.addImage('../imgs/join_btn.png');
			    loader.addImage('../imgs/poster.jpg');
			    loader.addImage('../imgs/logo.png');
			    loader.addImage('../imgs/pro.png');
			    loader.addImage('../imgs/pro-home.png');
			    loader.addImage('../imgs/slide_tips.png');
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
		}

		_loading();

 	})

})(jQuery)













