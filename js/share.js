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
	        new WxMoment.OrientationTip();
	        var video = new WxMoment.Video({
        		vid: "b001672wkoe"
    		});

    		var videoWidth = document.documentElement.clientWidth - 20;
			var videoHeight = videoWidth * (1080 / 1920);
			$("#WxMomentVideo").css({"width": videoWidth, "height": videoHeight});
