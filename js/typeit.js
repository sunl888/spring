(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					/*打字机结束后定时跳转网页*/
					function jump(count){    
						window.setTimeout(function(){    
							count--;    
							if(count > 0) {
								jump(count);    
							} else {    
								location.href="home.html";    
							}    
						}, 1300);    
					}  
					jump(4);
					$("#base").css('display','block');					
					clearInterval(timer);
				}
			}, 100);
		});
		return this;
	};
})(jQuery);