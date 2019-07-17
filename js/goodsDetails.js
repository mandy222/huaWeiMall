$(function() {
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

	// *********** 放大镜 *******************
	// 水平轮播有终点
	function levelEndSilder(boxLength, brforeBtn, nextBtn, bigBox, goodsBox, maxLeft,photoNum) {
		// 向前	
		var levelEndSilderIndex = 0;
		var levelEndSilderBoxLeft;		
		brforeBtn.click(function() {					
			levelEndSilderIndex--;	
			changeHistiryBtnStyle();	
			changeLeft();
    	});

    	// 向后
    	nextBtn.click(function() {	
			levelEndSilderIndex++;
			changeHistiryBtnStyle();
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

		function changeHistiryBtnStyle() {
			if (levelEndSilderIndex >= goodsBox.length/photoNum -1  ) {
				brforeBtn.removeClass('historyBtnDisabled').addClass('historyBeforeAbled');
			} else {					
				brforeBtn.addClass('historyBtnDisabled').removeClass('historyBeforeAbled');
			}
			if (levelEndSilderIndex <= 0 ) {
				nextBtn.removeClass('historyBtnDisabled').addClass('historyNextAbled');		
			} else {
				nextBtn.addClass('historyBtnDisabled').removeClass('historyNextAbled');
			}
		}
	}	
	levelEndSilder(370, $('#before'), $('#next'), $('#zoomToolbtnsBox'), $('.zoomToolbtns'), 76, 5);
			
	$('#originalPicBox').mouseover(
		function() {
		    $('#square').css('display', 'block');
		  }
	);
	$('#originalPicBox').mouseleave(
		function() {
		    $('#square').css('display', 'none');
		  }
	);
	$('#originalPicBox').hover(
		function () {
		    $('#square').css('display', 'block');
		    $('#zoomToolBox').css('display', 'block');
		  },
		  function () {
		    $('#square').css('display', 'none');
		    $('#zoomToolBox').css('display', 'none');
		  }
	);
	
	$('#originalPicBox').mousemove(function(ev){
		var newLeft = Math.floor(ev.pageX - $('#originalPicBox').offset().left - 100);
		var newTop =  Math.floor(ev.pageY - $('#originalPicBox').offset().top - 100);

		if(newTop < 0){
			newTop = 0;
		}
		if(newLeft < 0){
			newLeft = 0;
		}
		if(newTop > 250){
			newTop = 250;
		}
		if(newLeft > 250){
			newLeft = 250;
		}

		$('#square').css({
			'top': newTop,
			'left': newLeft
		});

		$('#zoomToolBox img').css({
			'top': -newTop * 2,
			'left': -newLeft * 2
		});
	});

	// ************** 商品详情（放大镜隔壁） ********
	// 商品数量的改变
	$('#addGoods').click(function() {
		var nowNum = $('#goodsNum').val();
		nowNum++;
		$('#goodsNum').val(nowNum);
		$('#subGoods').removeClass('sliderBtnsDisabled');
	})

	$('#subGoods').click(function() {
		var nowNum = $('#goodsNum').val();
		nowNum--;
		if (nowNum <= 1) {
			nowNum = 1;
			$('#subGoods').addClass('sliderBtnsDisabled');
		} else {
			$('#subGoods').removeClass('sliderBtnsDisabled');
		}
		$('#goodsNum').val(nowNum);
	})

	// 改变按钮样式和tab按钮图片和原图、大图第一张图
	// 参：点击的按钮 原来选择的按钮 按钮类 按钮图片 原图 大图 图片路径前部分 图片路径后缀
	function chooseGoods(oneGoods, otherGoods, btnsClass, btnsPicClass, originalPic, bigPic, picSrcBefore, picSrcAfter) {
		oneGoods.click(function() {
			oneGoods.addClass('active');
			otherGoods.removeClass('active');
			btnsClass.each(function(index, element) {
				var picNum = index+1;
				btnsPicClass.eq(index).attr('src', picSrcBefore + picNum + picSrcAfter);	
				originalPic.attr('src', picSrcBefore + '1' + picSrcAfter);		
				bigPic.attr('src', picSrcBefore + '1' + picSrcAfter);		
			})	
			zoomToolSilder(btnsClass, originalPic, bigPic, picSrcBefore, picSrcAfter);
		})
	}

	// 实现tab切换
	// 按钮类 原图 放大图片 图片路径前部分 图片路径后缀
	function zoomToolSilder(btnsClass, originalPic, bigPic, picSrcBefore, picSrcAfter){
		btnsClass.mouseenter(function() {
			var nowIndex = btnsClass.index(this);
			btnsClass.each(function(index, element) {
				if (index == nowIndex ) {
					$(element).css('border', '1px solid #ca141d');
					var picNum = index+1;
					originalPic.attr('src', picSrcBefore + picNum + picSrcAfter);
					bigPic.attr('src', picSrcBefore + picNum + picSrcAfter);
				} else {
					$(element).css('border', '1px solid white');
				}
			})			
		})
	}
	
	// 解决第一次tab切换
	zoomToolSilder($('.zoomToolbtns'), $('#originalPicBox img'), $('#zoomToolBox img'), 'img/goodsDetails/zoomTool0', '.png');
	
	chooseGoods($('#silverGoods'), $('#goldGoods'), $('.zoomToolbtns'), $('.zoomToolbtnsPic'), $('#originalPicBox img'), $('#zoomToolBox img'), 'img/goodsDetails/zoomTool0', '.png');
	chooseGoods($('#goldGoods'), $('#silverGoods'), $('.zoomToolbtns'), $('.zoomToolbtnsPic'), $('#originalPicBox img'), $('#zoomToolBox img'), 'img/goodsDetails/zoomTool20', '.png');
	
	// ****************** 导航栏吸顶 *********************
	var distant = $('#bottomNav').offset().top;
	$(document).scroll(function() {	
		var ceilingDistan = $(document).scrollTop();
		if (ceilingDistan > distant ) {
        	$('#bottomNav').css({'position': 'fixed','box-shadow':'0 1px 2px #ddd', 'top':'0'});
        	$('#addBuycarBtn').css('visibility', 'visible');
        } else {
        	$('#bottomNav').css({'position': 'static','box-shadow':'none'});
        	$('#addBuycarBtn').css('visibility', 'hidden');
        }    
	})

	// *************** 导航栏样式随滚动距改变 ************************
	// 01.获取大组件的位置
	// 02.滚动到一定位置，改变相应的样式
	var goodsDetailsTop = $('#goodsDetails').offset().top;
	var standardParameterTop = $('#standardParameter').offset().top;
	var afterSaleTop = $('#afterSale').offset().top;
	var userCommentTop = $('#userComment').offset().top;

	function changeNavStyle(index) {
		$('.bottomNavLink').eq(index).css('border-bottom','1.5px solid #ca141d').siblings().css('border-bottom','1.5px solid white');
		$('.bottomNavLink a').eq(index).css('color','#ca141d');
		$('.bottomNavLink').eq(index).siblings().children().css('color','#a4a4a4');
	}

	$(document).scroll(function() {
		if ($(document).scrollTop() > goodsDetailsTop-2 && $(document).scrollTop() < standardParameterTop-2) {
			changeNavStyle(0);
		}		
		if ($(document).scrollTop() > standardParameterTop-2 && $(document).scrollTop() < afterSaleTop-2) {
			changeNavStyle(1);
		}				
		if ($(document).scrollTop() > afterSaleTop-2 && $(document).scrollTop() < userCommentTop-2) {
			changeNavStyle(2);
		}				
		if ($(document).scrollTop() > userCommentTop-2) {
			changeNavStyle(3);
		}
	});
	

	// *********** 浏览记录轮播 **********************
	levelEndSilder(1100, $('#historyBefore'), $('#historyNext'), $('#historySilderBox'), $('.historyGoods'), 870, 5);

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

