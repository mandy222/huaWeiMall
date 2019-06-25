$(function() {
	// 动态创建小商品 
	function createLittleGoods(arrayInfo,boxNewClass, goodsNewClass, describNewClass, fatherBox) {
		$.each(arrayInfo, function(index, data){
			var goodsStr = `<div class="${boxNewClass} levelSilderBox">
										<a href="" title="">
											<div class="goods ${goodsNewClass} levelSilderLittleBox">
												<img src="${data.src}" alt="">
												<span class="${describNewClass} levelSilderBoxDescrib">${data.describ}</span>
											</div>
											<p class="goodsName goodsText">${data.name}</p>
											<p class="price goodsText">${data.price}</p>
										</a>
									</div>`;
	    	fatherBox.append(goodsStr);
		});
	}

	// 动态创建大商品
	function createBigGoods(arrayInfo, goodsNewClass, fatherBox) {
		$.each(arrayInfo, function(index, data){
			var goodsStr = `<div class="goods ${goodsNewClass} almostGoodsBox">
								<a href="">
									<img src="${data.src}" alt="">
									<p class="goodsName goodsText">${data.name}</p>
									<p class="goodsDescrib goodsText">${data.describ}</p>
									<p class="price goodsText">${data.price}</p>
								</a>
							</div>`;
	    	fatherBox.append(goodsStr);
		});
	}

	// 遍历节点移除公共类 
	function removeEveryDotClass(className, removedClassName) {
		className.each(function(index, element){
			$(element).removeClass(removedClassName);
		});
	}

	// 去除动态创建商品的左外边距
	function removeLeftMargin(goodsClassName, num1, num2, num3){
		$.each(mobilePhoneInf, function(index, data){
	    	if (index == num1 || index == num2 || index == num3 ) {
	    		goodsClassName.eq(index).css('marginLeft', '0');
	    	}
		});
	}

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

	// 水平轮播有终点
	// 参：一次要移动的距离 前按钮 后按钮 移动的盒子 每个商品盒子 最大移动距离 一行几个商品
	function levelEndSilder(boxLength, brforeBtn, nextBtn, bigBox, goodsBox, maxLeft, photoNum) {
		// 向前	
		var levelEndSilderIndex = 0;
		var levelEndSilderBoxLeft;		
		brforeBtn.click(function() {					
			levelEndSilderIndex--;		
			levelEndSilderBtnDisplay();
			changeLeft();
    	});

    	// 向后
    	nextBtn.click(function() {	
			levelEndSilderIndex++;
			levelEndSilderBtnDisplay();	
			changeLeft();
		});

		function changeLeft() {
			levelEndSilderBoxLeft = levelEndSilderIndex * boxLength;
			if (levelEndSilderBoxLeft > maxLeft) {
				levelEndSilderBoxLeft = -maxLeft;
				nextBtn.css('display', 'none');
			} else {
				levelEndSilderBoxLeft = -levelEndSilderBoxLeft;
			}
    		bigBox.css('left', levelEndSilderBoxLeft + 'px');
		}

		function levelEndSilderBtnDisplay() {
			if (levelEndSilderIndex >= goodsBox.length/photoNum -1  ) {
				nextBtn.css('display', 'none');
			} else {
				nextBtn.css('display', 'block');	
			}
			if (levelEndSilderIndex <= 0 ) {
				brforeBtn.css('display', 'none');
			} else {
				brforeBtn.css('display', 'block');	
			}
		}
	}

	// 公告栏信息轮播
	function noticeSilder(){	
		var noticeTimer;
		inter();
		mouseEnterStop();
		mouseLeavePlay();
		function inter(){
				noticeTimer =  setInterval(function() {
				noticIndex++;		
				if (noticIndex >= $('.markNotics').length) {
					noticIndex = 0;
					$('#markNoticsTextBox').css('transition','');
				} else {
					$('#markNoticsTextBox').css('transition','1s');
				}
				var nowTop = -noticIndex * 40;
				$('#markNoticsTextBox').css('top', nowTop + 'px');
			},1500);
		}
		
		//鼠标点击信息，停止播放
		function mouseEnterStop(){
		    $('.markNotics').on('mouseenter',function(){
		        clearInterval(noticeTimer);
		    })
		}

		//鼠标离开信息，继续播放
		function mouseLeavePlay(){
		    $('.markNotics').on('mouseleave',function(){
		        inter();
		    })
		}
	}

    // *********** 关闭首页广告 ****************
	$('#close').click(function(){
		$('#topAd').css('display', 'none');
	});

    // ********** 首页透明度轮播 *************
	silder($('.silderBtn'), $('.silderPic'));

	// *********** 首页广告透明度轮播 *************
	silder($('.adSilderBtn'), $('.adPic'));

	// *********** 精品推荐 *************	
	createLittleGoods(recommendGoodsInfo,'recommendationGoodsBox', 'recommendGoods', 'recommendGoodsDescrib', $('#recommendationBox'));
	removeEveryDotClass($('.recommendationGoodsBox'), 'levelSilderBox'); // 保持大小不变，除去下面两个小的轮播的样式
	removeEveryDotClass($('.recommendGoods'), 'levelSilderLittleBox');
	removeEveryDotClass($('.recommendGoodsDescrib'), 'levelSilderBoxDescrib');
	levelEndSilder(1206,$('#recommendBefore'),$('#recommendNext'),$('#recommendationBox'),$('.recommendationGoodsBox'),3630,5);

	// **************** more 智能穿戴 ******************
	createLittleGoods(moreSmartWearInfo,'moreSmartWearGoodsBox', 'moreSmartWearGoods', 'moreSmartWearDescrib', $('#moreSmartWearBox'));
	levelEndSilder(1210,$('#moreSmartWearBefore'),$('#moreSmartWearNext'),$('#moreSmartWearBox'),$('.moreSmartWearGoodsBox'),1616,6);

	// ************ 公告栏信息轮播 ***********
	var lastNotic = noticInf[0];
	$('.markNotics').eq($('.markNotics').length-1).html(lastNotic);
	$.each(noticInf, function(index, data){
		if (index < 4) {
			$('.markNotics').eq(index).html(data);
		}		
	});
	var noticIndex = 0;
	noticeSilder();

	// **************** more 智能家居 ******************
	createLittleGoods(moreSmartHomeInfo,'moreSmartWearHomeBox', 'moreSmartHomeGoods', 'moreSmartHomeDescrib', $('#moreSmartHomeBox'));
	levelEndSilder(1210,$('#moreSmartHomeBefore'),$('#moreSmartHomeNext'),$('#moreSmartHomeBox'),$('.moreSmartHomeGoodsBox'),1616);

	// *********** 热销单品 *************
	createBigGoods(hotItemGoodsInf, 'hotItemGoods', $('#hotItem'));

	// **************** 手机 ******************
	createBigGoods(mobilePhoneInf, 'mobilePhoneGoods', $('#mobilePhoneBox'));
	removeLeftMargin($('.mobilePhoneGoods'), 4, 9, 14);

	// **************** 笔记本电脑 ******************
	createBigGoods(personalComputerInf, 'personalComputerGoods', $('#personalComputerBox'));
	removeLeftMargin($('.personalComputerGoods'), 4, 4, 4);

	// **************** 精品平板 ******************
	createBigGoods(wellTabletInf, 'wellTabletGoods', $('#wellTabletBox'));
	removeLeftMargin($('.wellTabletGoods'), 4, 4, 4);

	// **************** 智能穿戴 ******************
	createBigGoods(smartWearInf, 'smartWearGoods', $('#smartWearBox'));
	removeLeftMargin($('.smartWearGoods'), 3, 3, 3);

	// **************** 智能家居 ******************
	createBigGoods(smartHomeInf, 'smartHomeGoods', $('#smartHomeBox'));
	removeLeftMargin($('.smartHomeGoods'), 3, 3, 3);

	// **************** 热销配件 ******************
	createBigGoods(hotPartsInf, 'hotPartsGoods', $('#hotPartsBox'));
	removeLeftMargin($('.hotPartsGoods'), 3, 3, 3);

	// **************** more 热销配件 ******************
	createLittleGoods(moreHotPartsInfo,'moreHotPartsHomeBox', 'moreHotPartsGoods', 'moreHotPartsDescrib', $('#moreHotPartsBox'));
	levelEndSilder(1210,$('#moreHotPartsBefore'),$('#moreHotPartsNext'),$('#moreHotPartsBox'),$('.moreHotPartsGoodsBox'),1616);

	// **************** 品牌配件 ******************
	createBigGoods(brandPartsInf, 'brandPartsGoods', $('#brandPartsBox'));
	removeLeftMargin($('.brandPartsGoods'), 3, 3, 3);

	// **************** more 品牌配件 ******************
	createLittleGoods(moreBrandPartsInfo,'moreBrandPartsHomeBox', 'moreBrandPartsGoods', 'moreBrandPartsDescrib', $('#moreBrandPartsBox'));
	levelEndSilder(1210,$('#moreBrandPartsBefore'),$('#moreBrandPartsNext'),$('#moreBrandPartsBox'),$('.moreBrandPartsGoodsBox'),1616);
    
    // ************ 回到顶部 ***************
	clickPoint($('#goTop'), 0);
	scrollDisplay($('#goTop'), 500,'display', 'block','none');
	
	// 锚点实现
	// 01.点击，实现跳转
	// 02.根据scrollTop值自动改变相应的样式
	// 03.控制锚点的显示和隐藏
	function clickPoint(point, skinTop) {
		point.click(function(ev) {
			ev.preventDefault(); // 解决闪烁问题
			$('html,body').animate({ scrollTop: skinTop }, 500);
		})
	}

	// 自动改变样式
	// 参：要改变的index值 需要遍历的按钮 需要改变的字体 需要改变的边框
	function changePointStyle(nowIndex, btnClass, fontClas, btnBorderClass) {
		btnClass.each(function(index, element) {
			// console.log(btnBorderClass)
			if (nowIndex == index) {
				btnBorderClass.eq(index).css({'height':'18px','transition':'.5s'});
				fontClas.eq(index).css('color', '#333');
			} else {
				btnBorderClass.eq(index).css({'height':'0px','transition':'.5s'});
				fontClas.eq(index).css('color', '#999');
			}
		})
	}

	function autoChangePointStyle() {
		$(document).scroll(function() {	
			for (var i = 0; i < pointTop.length; i++) {
				if ($(document).scrollTop() > pointTop[i]-10 ) {
					changePointStyle(i, $('.pointBtns'), $('.pointBtnsLinks'), $('.pointBtnsBorder'));        	
		        } 
			}
		})
	}
	
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
    function scrollDisplayDrop(evName, boundary, cssName, cssNum1) {
	    $(window).scroll(function () {
	        if ($(window).scrollTop() >= boundary) {
	            evName.css(cssName, cssNum1);
	        }
	    });
    }

    // **************** 右侧锚点 **********************
    var pointTop = [2100, 3380, 4040, 4710, 5665, 6770, 7710];
	for (var i = 0; i < $('.pointBtns').length; i++) {
		clickPoint($('.pointBtns').eq(i), pointTop[i]);
	}
    autoChangePointStyle();
    scrollDisplay($('#rightPoint'), 2000,'right','0px','-270px');
    scrollDisplayDrop($('#rightPoint'), 8300,'right','-270px');


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