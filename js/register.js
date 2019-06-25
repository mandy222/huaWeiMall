$(function() {
	var regPhone = /^1[34578]\d{9}$/;
	var regMail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	var regPasswd = /^[\w_-]{6,16}$/;

	$('#phoneNumInput').blur(function() {
		if ($('#phoneNumInput').val() == '') {
			$('#phoneNumTips').html('请输入您的手机号码');
		} else {
			var a = regPhone.test($('#phoneNumInput').val());
			if (!a) {
				$('#phoneNumTips').html('手机号码不正确');
			} else {
				$('#phoneNumTips').html('');
			}
		}
	})

	$('#emailInput').blur(function() {
		if ($('#emailInput').val() == '') {
			$('#emailTips').html('请输入您的邮件地址');
		} else {
			var a = regMail.test($('#emailInput').val());
			if (!a) {
				$('#emailTips').html('邮件地址不正确');
			} else {
				$('#emailTips').html('');
			}
		}
	})

	$('#passwdInput').blur(function() {
		if ($('#passwdInput').val() == '') {
			$('#passwdTips').html('请输入您的密码');
		} else {
			var a = regPasswd.test($('#passwdInput').val());
			if (!a) {
				$('#passwdTips').html('密码不正确，密码由6~16个字符组成');
			} else {
				$('#passwdTips').html('');
			}
		}
	})

	$('#againPasswdInput').blur(function() {
		if ($('#againPasswdInput').val() == '') {
			$('#againPasswdTips').html('请再次输入您的密码');
		} else {
			var a = $('#passwdInput').val();
			if ($('#againPasswdInput').val() != a) {
				$('#againPasswdTips').html('密码与确认密码不一致');
			} else {
				$('#againPasswdTips').html('');
			}
		}
	})

	$('#registerBtn').click(function() {
		if ($('#phoneNumInput').val() == '') {
			$('#phoneNumTips').html('请输入您的手机号码');
		}
		if ($('#emailInput').val() == '') {
			$('#emailTips').html('请输入您的邮件地址');
		}
		if ($('#passwdInput').val() == '') {
			$('#passwdTips').html('请输入您的密码');
		}
		if ($('#againPasswdInput').val() == '') {
			$('#againPasswdTips').html('请再次输入您的密码');
		} 
	})
})