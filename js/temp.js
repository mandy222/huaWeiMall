   	// 控制锚点定位
    function clickGoSomeDistan(clickBtn, distan, index) {
    	clickBtn.click(function() {	
			$('html,body').animate({ scrollTop: distan }, 500);
			$('.pointBtnsBorder').eq(index).css({'height':'18px','transition':'.5s'});
			$('.pointBtnsLinks').eq(index).css('color', '#333');
			for (var i = 0; i < $('.pointBtnsBorder').length; i++) {
				if (i != index) {
					$('.pointBtnsBorder').eq(i).css({'height':'0px','transition':'.5s'});
					$('.pointBtnsLinks').eq(i).css('color', '#999');
				}	
			}			
		})
    }

    // 控制锚点显示隐藏
    function scrollDisplay(evName, boundary, cssName, cssNum1, cssNum2) {
	    $(window).scroll(function () {
	        if ($(window).scrollTop() >= boundary) {
	            evName.css(cssName, cssNum1);
	        } else {
	            evName.css(cssName, cssNum2);
	        }
	    });
    }

    // 锚点选中状态自动改变
    function autoChange(min, max, index) {
    	$(document).scroll(function () {
	        if ($(document).scrollTop() >= min && $(document).scrollTop() <= max) {
	           	$('.pointBtnsBorder').eq(index).css({'height':'18px','transition':'.5s'});
				$('.pointBtnsLinks').eq(index).css('color', '#333');
	        } else {
	            $('.pointBtnsBorder').eq(index).css({'height':'0px','transition':'.5s'});
				$('.pointBtnsLinks').eq(index).css('color', '#999');
	        }
	    });
    }
    
    // ************* 右边锚点 *********
	scrollDisplay($('#rightPoint'), 2000,'right','0px','-270px');

	var clickCrollTopInf = [2200, 3480, 4150, 4830, 5760, 6850, 7800];
	for (var i = 0; i < clickCrollTopInf.length; i++) {
		clickGoSomeDistan($('.pointBtns').eq(i), clickCrollTopInf[i], i);
	}

    var scrollTopInf = [2000, 3200, 4000, 4630, 5560, 6750, 7500, 8500];

    for (var i = 0; i <= $('.pointBtnsBorder').length; i++) {
    	autoChange(scrollTopInf[i], scrollTopInf[i+1], i);    	
    }

    // var  phoneTop = $('#mobilePhone').offset().top;
	// var  computerTop = $('#personalComputer').offset().top;
	// var  tableTop = $('#wellTablet').offset().top;
	// var  smartWearTop = $('#smartWear').offset().top;
	// var  smartHomeTop = $('#smartHome').offset().top;
	// var  hotPartsTop = $('#hotParts').offset().top;
	// var  brandPartsTop = $('#brandParts').offset().top;
	// var pointTop = [phoneTop, computerTop, tableTop, smartWearTop, smartHomeTop, hotPartsTop, brandPartsTop];