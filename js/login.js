//登陆验证
function loginCheck(){
	var inData = document.getElementsByTagName('input');
	var userName = inData[0];
	var userPwd = inData[1];
	
	// 匹配用户名为4到16位中文数字字母下划线的组合  ^[\u4e00-\u9fa5_a-zA-Z0-9_]{4,16}$
	reg = /^[\u4e00-\u9fa5_a-zA-Z0-9_]{4,16}$/;     
	if(!reg.test(userName.value)){   	
		alert("用户名是4~16位中文,数字,字母,或下划线的组合!");
		userName.focus();
		return false;
	}
	//匹配密码为6~16位数字,字母,下划线的组合
	reg = /^\w{6,16}$/;
	if(!reg.test(userPwd.value)){  
		alert("密码是6~16位数字,字母,或下划线的组合!");
		userPwd.focus();
		return false;
	}
	return true;
}