document.addEventListener('touchmove' , function (ev){
  ev.preventDefault();
  return false;
} , false)



;(function($){
    $(function(){
       //var video;

        var vidArr = ["m0151xu7izy","b001672wkoe","a0016gys8ct"];
        var vPic = ["http://www.baidu.com/img/bdlogo.png","../imgs/poster.jpg","http://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Ross_Perot_Allan_Warren.jpg/167px-Ross_Perot_Allan_Warren.jpg"]
		var player;

		var videoFun = function(n){
			var video = new tvp.VideoInfo(); 
			video.setVid(vidArr[n]);
			player =new tvp.Player(); 
			player.create({
				width:"100%",
				height:"180",
				video:video,
				pic: vPic[n],
				modId:"mod_player" //mod_player是刚刚在页面添加的div容器 autoplay:true
			});

		}

		videoFun(1);


		/* 戒指动画 */
		var v = 1;
		

		var animationListener = function(){
			$(".routeAni").removeClass('up');
			$(".routeAni").removeClass('down');
			console.log('do something');
		}

		var anim = document.getElementById("ring");
		anim.addEventListener("webkitAnimationEnd", animationListener, false);



		var l = $("#video");
		touch.on(l, 'swipeup', function(event){
			  $(".routeAni").addClass('up');
			  if(v>=vidArr.length-1)return;
			  v++;
			  videoFun(v);
		      event.preventDefault();
		});

		touch.on(l, 'swipedown', function(event){
			  $(".routeAni").addClass('down');
			  if(v==0)return;
			  v--;
			  videoFun(v);
		      event.preventDefault();
		});



 	})

})(jQuery)













