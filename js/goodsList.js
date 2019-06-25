$(function() {
	var computerGoodsInf = [
							{
								"src": "img/goodsList/goods01.png",
								"name": "HUAWEI MateBook D",
								"price": "￥4999",
								"evaluationPerson": "2222"
							},
							{
								"src": "img/goodsList/goods02.png",
								"name": "HUAWEII Mate 20 X",
								"price": "￥4999",
								"evaluationPerson": "5433"
							},
							{
								"src": "img/goodsList/goods03.png",
								"name": "FreeBuds 2系列",
								"price": "￥779",
								"evaluationPerson": "543"
							},
							{
								"src": "img/goodsList/goods04.png",
								"name": "HUAWEII Mate 20 Pro",
								"price": "￥7779",
								"evaluationPerson": "2432"
							},
							{
								"src": "img/goodsList/goods05.png",
								"name": "HUAWEII Mate 20 Pro",
								"price": "￥7779",
								"evaluationPerson": "22322"
							},
							{
								"src": "img/goodsList/goods06.png",
								"name": "荣耀V10",
								"price": "￥1779",
								"evaluationPerson": "1222"
							},
							{
								"src": "img/goodsList/goods07.png",
								"name": "HUAWEII Mate 20 X",
								"price": "￥4999",
								"evaluationPerson": "7852"
							},
							{
								"src": "img/goodsList/goods08.jpg",
								"name": "荣耀畅玩8A",
								"describ":"新品震撼开售",
								"price": "￥779",
								"evaluationPerson": "2562"
							},
							{
								"src": "img/goodsList/goods09.jpg",
								"name": "荣耀V10",
								"price": "￥1779",
								"evaluationPerson": "1222"
							},
							{
								"src": "img/goodsList/goods10.png",
								"name": "HUAWEII Mate 20 X",
								"price": "￥4999",
								"evaluationPerson": "7852"
							},
							{
								"src": "img/goodsList/goods11.jpg",
								"name": "HUAWEI MateBook D",
								"price": "￥4999",
								"evaluationPerson": "2222"
							},
							{
								"src": "img/goodsList/goods12.jpg",
								"name": "HUAWEII Mate 20 X",
								"price": "￥4999",
								"evaluationPerson": "5433"
							},
							{
								"src": "img/goodsList/goods13.png",
								"name": "FreeBuds 2系列",
								"price": "￥779",
								"evaluationPerson": "543"
							},
							{
								"src": "img/goodsList/goods14.png",
								"name": "HUAWEII Mate 20 Pro",
								"price": "￥7779",
								"evaluationPerson": "2432"
							},
							{
								"src": "img/goodsList/goods15.png",
								"name": "HUAWEII Mate 20 Pro",
								"price": "￥7779",
								"evaluationPerson": "22322"
							},
							{
								"src": "img/goodsList/goods16.png",
								"name": "荣耀V10",
								"price": "￥1779",
								"evaluationPerson": "1222"
							},
							{
								"src": "img/goodsList/goods17.png",
								"name": "HUAWEII Mate 20 X",
								"price": "￥4999",
								"evaluationPerson": "7852"
							},
							{
								"src": "img/goodsList/goods18.png",
								"name": "荣耀畅玩8A",
								"describ":"新品震撼开售",
								"price": "￥779",
								"evaluationPerson": "2562"
							},
							{
								"src": "img/goodsList/goods19.jpg",
								"name": "荣耀V10",
								"price": "￥1779",
								"evaluationPerson": "1222"
							},
							{
								"src": "img/goodsList/goods20.jpg",
								"name": "HUAWEII Mate 20 X",
								"price": "￥4999",
								"evaluationPerson": "7852"
							}];

	// 动态创建商品函数
	function createGoods(arrayInfo, fatherBox) {
		$.each(arrayInfo, function(index, data){
			var goodsStr = `<div class="goodsBox">
								<img src="${data.src}" alt="">
								<p class="goodsName"><a href="" title="">${data.name}</a></p>
								<p class="goodsPrice">${data.price}</p>
								<p class="buyBtn">
									<a href="goodsDetails.html" title=""><span class="selectBuy">选购</span></a>
									<span class="evaluationPerson">${data.evaluationPerson}人评价</span>
								</p>
							</div>`;
	    	fatherBox.append(goodsStr);
		});
	}

	// 去除动态创建商品的左外边距
	function removeLeftMargin(goodsClassName, num){
		$.each(computerGoodsInf, function(index, data){
	    	if (index%num == 4 ) {
	    		goodsClassName.eq(index).css('marginRight', '0');
	    	}
		});
	}

	// *********** 动态创建 *****************
	createGoods(computerGoodsInf,$('#goodsList'));
	removeLeftMargin($('.goodsBox'), 5);
	
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