$(function() {
	// 表单验证
	var regHuaWeiNum = /^[a-zA-Z0-9_-]{4,50}$/;
	var regPhone = /^1[34578]\d{9}$/;
	var regMessageCode = /\d{6}/;
	var regMail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	var regPasswd = /^[\w_-]{6,16}$/;
	
	var flag = 0;

	$('#accountInput').blur(function() {
		if ($('#accountInput').val() == '') {
			$('#errorTips').html('请输入您的账号');
			$('#errorIcon').css('display', 'inline-block');
		} else {
			var a = regHuaWeiNum.test($('#accountInput').val());
			if (!a) {
				$('#errorIcon').css('display', 'inline-block');
				$('#errorTips').html('华为帐号限制在4~50个字符');
				flag = 1;
			} else {
				$('#errorTips').html('');
				$('#errorIcon').css('display', 'none');
				flag = 0;
			}
		}
	})

	$('#passwdInput').blur(function() {
		if ($('#accountInput').val() != '' && flag != 1 && $('#passwdInput').val() == '') {
			$('#errorTips').html('请输入您的密码');
			$('#errorIcon').css('display', 'inline-block');
		} else if ($('#accountInput').val() == '') {
			$('#errorTips').html('请输入您的账号');
			$('#errorIcon').css('display', 'inline-block');
		} else if(flag == 1) {
			$('#errorIcon').css('display', 'inline-block');
			$('#errorTips').html('华为帐号限制在4~50个字符');
		} else {
			var a = regPasswd.test($('#passwdInput').val());
			if (!a) {
				$('#errorIcon').css('display', 'inline-block');
				$('#errorTips').html('密码由6~16个字符组成');
				flag = 2;
			} else {
				$('#errorTips').html('');
				$('#errorIcon').css('display', 'none');
				flag = 0;
			}
		}
	})


	var clickNum = 0;
	$('#rememberCheckBox').click(function() {
		clickNum++;
		if (clickNum % 2 == 0) {
			$('#rememberCheckBox').css('backgroundImage', 'url(img/loginAndRegister/checkBoxIcon.png)')
		} else {
			$('#rememberCheckBox').css('backgroundImage', 'url(img/loginAndRegister/checkIcon.png)')
		}
	})

	$('#loginBtn').click(function() {
		if ($('#accountInput').val() == '') {
			$('#errorTips').html('请输入您的账号');
			$('#errorIcon').css('display', 'inline-block');
		} 
		else if(flag == 1 ) {
			$('#errorIcon').css('display', 'inline-block');
			$('#errorTips').html('华为帐号限制在4~50个字符');
		}  else if ($('#accountInput').val() != '' && $('#passwdInput').val() == '' && flag == 0) {
			$('#errorTips').html('请输入您的密码');
			$('#errorIcon').css('display', 'inline-block');
		} else if (flag == 2) {
			$('#errorIcon').css('display', 'inline-block');
			$('#errorTips').html('密码由6~16个字符组成');
		} else {
			$('#errorTips').html('');
			$('#errorIcon').css('display', 'none');
		}
	})

	// 扫码登陆
	$('#hoverArear').hover(
		function() {
			$('#codeBox').css('left', '0');
			$('#phoneIconBox').css('opacity', '1');
		},
		function() {
			$('#codeBox').css('left', '75px')
			$('#phoneIconBox').css('opacity', '0');
		}
	)

	// 登陆切换 
	$('#scanLogin').click(function() {
		$('#acountLoginBox').css('display', 'none');
		$('#scanLoginBox').css('display', 'block');
		$('#scanLogin').css('color', '#B40707');
		$('#acountLogin').css('color', '#333');

	})
	$('#acountLogin').click(function() {
		$('#acountLoginBox').css('display', 'block');
		$('#scanLoginBox').css('display', 'none');
		$('#scanLogin').css('color', '#333');
		$('#acountLogin').css('color', '#B40707');
	})

})