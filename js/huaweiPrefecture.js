$(function() {
	// *********** 关闭广告 ****************
	$('#close').click(function(){
		$('#topAd').css('display', 'none');
	});

	// ************ 回到顶部 ***************
	// 控制显示隐藏
    function scrollDisplay(evName, boundary, cssName, cssNum1, cssNum2) {
	    $(window).scroll(function () {
	        if ($(window).scrollTop() >= boundary) {
	            evName.css(cssName, cssNum1);
	        } else {
	            evName.css(cssName, cssNum2);
	        }
	    });
    }
	$('#goTop').click(function() {
		$('html,body').animate({ scrollTop: 0 }, 500);
	})
	scrollDisplay($('#goTop'), 500,'display', 'block','none');

	// ************* 控制二级菜单显示隐藏 *****************
	$('#phoneSecondMenu').hover(
	  	function () {	  		
	    	$('#phoneSecondMenu').css('display', 'block');
	  	},
	  	function () {
	    	$('#phoneSecondMenu').slideUp();
	  	}
	);
	$('#phoneSelft').hover(
	  	function () {
	    	$('#phoneSecondMenu').slideDown();
	  	},
	  	function () {
			$('#phoneSecondMenu').css('display', 'none');
	  	}
	);

	// 透明度轮播
	// 参: 按钮 图片
	function silder(picBtn, silderPic) {
		var iNow = 0;
		var timer;

		inter();
		mouseEnterStop();
		mouseLeavePlay();

		// 点击小圆圈
		picBtn.each(function(index, element){
			// console.log(element);
			$(element).mouseenter(function() {
				clearInterval(timer); 
				changePic(index);
				inter(); 
				iNow = index;
			})
		})

		// 改变图片透明度 小圆圈背景色
		function changePic(num) {
			silderPic.each(function(index, element){
				picBtn.eq(index).removeClass('silderBtnActic');
				if (index == num) {
					$(element).css('opacity', '1');
					picBtn.eq(index).addClass('silderBtnActic');
				} 
				else {
					$(element).css('opacity', '0');
				}
			})
		}

		// 自动轮播
		function inter() {
    		timer = setInterval(function() {
    			iNow++;
    			if (iNow > silderPic.length-1) {
    				iNow = 0;
    			}
                changePic(iNow);
    		}, 2000);
    	}

    	beforeAndNext($('#before'), $('#next'), $('.silderPic'));
    	// 前后按钮
    	function beforeAndNext(before, next, silderPic) {
			// 向前
	    	$('#before').click(function() {
	    		iNow--;
	    		if (iNow < 0 ) {
	    			iNow = silderPic.length - 1;
	    		}
	    		clearInterval(timer);
	    		changePic(iNow);
	    		inter();
	    	})

	    	// 向后
	    	next.click(function(){
	    		iNow++;
	    		if (iNow > silderPic.length - 1 ) {
	    			iNow = 0;
	    		}
	    		clearInterval(timer);
	    		changePic(iNow);
	    		inter();
	    	})
		}

    	//鼠标进入图片，停止播放
		function mouseEnterStop(){
		    silderPic.on('mouseenter',function(){
		        clearInterval(timer);
		    })
		}

		//鼠标离开图片，继续播放
		function mouseLeavePlay(){
		    silderPic.on('mouseleave',function(){
		        inter();
		    })
		}    	
	}

	// ************ 透明度轮播 ***************
	silder($('.silderBtn'), $('.silderPic'));

	// ***************** 华为精品 ************
	$('.topGoods').each(function(index, element){
		$(element).hover(
			function() {
				$('.topGoods span').eq(index).css('width', '298.5px');
			},
			function() {
				$('.topGoods span').eq(index).css('width', '0px');
			}
		)
	});

	// *************** 笔记本电脑 ************
	// 控制边框滑动显示
	function topBorderShow(box, boxBorder, borderLength) {
		box.each(function(index, element){
			$(element).hover(
				function() {
					boxBorder.eq(index).css('width', borderLength);
				},
				function() {
					boxBorder.eq(index).css('width', '0px');
				}
			)
		});
	}
	topBorderShow($('.topGoods'), $('.topGoods span'), '298.5px');
	topBorderShow($('.changeBorder'), $('.changeBorder span'), '400px');

	// ************ 智能家居 ************
	topBorderShow($('.goodsSilderBox li'), $('.goodsSilderBox span'), '213px');
	
	// 水平轮播有终点
	function levelEndSilder(boxLength, brforeBtn, nextBtn, bigBox, goodsBox, maxLeft,photoNum) {
		// 向前	
		var levelEndSilderIndex = 0;
		var levelEndSilderBoxLeft;		
		brforeBtn.click(function() {					
			levelEndSilderIndex--;		
			changeBtnBgColor();
			changeLeft();
    	});

    	// 向后
    	nextBtn.click(function() {	
			levelEndSilderIndex++;
			changeBtnBgColor();	
			changeLeft();
		});
		function changeLeft() {
			levelEndSilderBoxLeft = levelEndSilderIndex * boxLength;
			if (levelEndSilderBoxLeft > maxLeft) {
				levelEndSilderBoxLeft = -maxLeft;
				levelEndSilderIndex--;
			} else if (levelEndSilderBoxLeft < 0) {
				levelEndSilderBoxLeft = 0;
				levelEndSilderIndex++;
			} 
			else {
				levelEndSilderBoxLeft = -levelEndSilderBoxLeft;
			}
    		bigBox.css('left', levelEndSilderBoxLeft + 'px');
		}
		function changeBtnBgColor() {
			if (levelEndSilderIndex >= goodsBox.length/photoNum -1  ) {
				brforeBtn.removeClass('sliderBtnsDisabled').addClass('.sliderBtns:hover');
			} else {					
				brforeBtn.addClass('sliderBtnsDisabled').removeClass('.sliderBtns:hover');
			}
			if (levelEndSilderIndex <= 0 ) {
				nextBtn.removeClass('sliderBtnsDisabled').addClass('.sliderBtns:hover');			
			} else {
				nextBtn.addClass('sliderBtnsDisabled').removeClass('.sliderBtns:hover');
			}
		}
	}
	levelEndSilder(1200, $('.before'), $('.next'), $('#smartHomeSliderBox'), $('#smartHomeSliderBox li'), 940, 6);

	// **************** 热销配件 ******************
	levelEndSilder(1200, $('.before'), $('.next'), $('#hotPartsSliderBox'), $('#hotPartsSliderBox li'), 500, 6);

	// 搜索框获取焦点与失去焦点
   	$('#searchBox').focus(function() {
   		$(this).css('border', '1px solid #DDD');
   		$('#firstSearchText').css('display','none');
   		$('#secondSearchText').css('display','none');
   		$('.searchHistory').css('display','block');
   	})
   
   	$('.searchHistory ul li').click(function() {
   		$('#searchBox').val($(this).html()).css('border', '1px solid #FFFFFFFF');  		
   		$('.searchHistory').css('display','none');

   	})
  
	$('#searchBox').blur(function() {
		 setTimeout(function() { 	// 解决blur事件和click事件冲突
	   		$(this).css('border', '1px solid #FFFFFFFF');
	   		$('.searchHistory').css('display','none');
	   		if($('#searchBox').val() == '') {
				$('#firstSearchText').css('display','block');
				$('#secondSearchText').css('display','block');
	   		} 		
   		},100);
   	});
})

