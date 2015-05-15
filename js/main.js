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
		        'title': "姚晨与陈哲艺擦出了怎样的艺术火花？跟我一起欣赏他们的新片吧！"
		    },
		    //分享给好友
		    'friend': {
		        'title': "姚晨与陈哲艺擦出了怎样的艺术火花？跟我一起欣赏他们的新片吧！",
		        'desc': "姚晨与陈哲艺擦出了怎样的艺术火花？跟我一起欣赏他们的新片吧！"
		    },
		    'global': {
		        'img_url': basePath + "/imgs/share.jpg",
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
        var vPic = ["../imgs/poster1.jpg","../imgs/poster2.jpg","../imgs/poster3.jpg"]
        var vText = ["","姚晨携手陈哲艺拍摄伯爵艺术大片<br />独家花絮抢先观看",""]
        var ringTips = ["上转：观赏姚晨短片花絮<br />下转：开启全球广告大片","上转：观赏伯爵艺术短片<br />下转：开启全球广告大片",""]

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

			$(".videoText p").html(vText[n]);
			$(".active_tips").html(ringTips[n]);
		}


		/* 戒指动画 */
		var v = 0;
		
		var animationListener = function(){
			$(".routeAni").removeClass('up');
			$(".routeAni").removeClass('down');
			//console.log('do something');
		}

		var anim = document.getElementById("ring");
		anim.addEventListener("webkitAnimationEnd", animationListener, false);

		var l = $(".activeArea"),k = $("#home");

		touch.on(l, 'swipeup', function(event){

			$(".routeAni").addClass('up');
			if(v==2)return;
			if(v==0){
			  videoFun("1");
			  v=1;
			  $(".footer").show();
			}else if(v==1){
				videoFun("0");
				v=0;
				$(".footer").hide();
			}else{
			  videoFun("2");
			  v=2;
			  $(".footer").show();
			}
			
		    event.preventDefault();
		});

		touch.on(l, 'swipedown', function(event){
			$(".routeAni").addClass('down');

			if(v==2)return;
			if(v==0){
			  videoFun("1");
			  v=1;
			}else{
				videoFun("2");
				v=2;
			}
			$(".footer").show();
		    event.preventDefault();
		});


		/* home-ring */
		var animationListener_home = function(){
			$(".p_animate").removeClass('up');
			videoFun(0);
		    $(".container").hide().css({"opacity":0});
		    $("#video").show().animate({"opacity":1},1200);
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
			    loader.addImage('../imgs/poster1.jpg');
			    loader.addImage('../imgs/poster2.jpg');
			    loader.addImage('../imgs/poster3.jpg');
			    loader.addImage('../imgs/logo.png');
			    loader.addImage('../imgs/pro.png');
			    loader.addImage('../imgs/pro-home.png');
			    loader.addImage('../imgs/slide_tips.png');
			    loader.addImage('../imgs/slogan_cn.png');
			    loader.addImage('../imgs/slogan_en.png');
			    loader.addImage('../imgs/share.jpg');

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













