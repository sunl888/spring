//登陆验证
function loginCheck(){
	var inData = document.getElementsByTagName('input');
	var userName = inData[0];
	var userPwd = inData[1];
	
	// 匹配用户名为4到16位中文数字字母下划线的组合  ^[\u4e00-\u9fa5_a-zA-Z0-9_]{4,16}$
	reg = /^\w{4,16}$/;    
	if(!reg.test(userName.value)){   	
		alert("密码是4~16位数字,字母,或下划线的组合!");
		userName.focus();
		return false;
	}
	//匹配密码为4~16位数字,字母,下划线的组合
	reg = /^\w{4,16}$/;
	if(!reg.test(userPwd.value)){  
		alert("密码是4~16位数字,字母,或下划线的组合!");
		userPwd.focus();
		return false;
	}
	 return true;
}
function login(){
	var inData = document.getElementsByTagName('input');
	var userName = inData[0];
	var userPwd = inData[1];
	if(userPwd.value == '123456' && userName.value == 'admin'){
		alert('密码正确,正在跳转网页...');
		window.location.href='home.html';
		/**
		页面不跳转原因解决:
			以下条件满足则会出现此问题:
				IE6 浏览器
				事件绑定在a 标签且链接为空或为“javascript:;”或为“javascript:void(0);”
			解决方法:
				在onclick事件中加return false来阻止冒泡：
				<a href="javascript:void(0);" onclick="modify();return false;">修改</a>
				//或
				<a href="javascript:modify();">修改</a>
				同理IE6下onclick事件失效可以尝试加return false来解决问题
		*/
	}
}