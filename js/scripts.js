/*animated cursor */
animatedCursor = {
	init : function() {
		if($('.nav-wrapper nav ul li').hasClass('active')){
			$('#nav-cursor').css('display','block');
			var activeWidth = $('.active').width();
			var paddingWidth = ($('.active').outerWidth(true) - activeWidth) / 2;
			var actleftPos = $('.active').position();
			var actleft = actleftPos.left + paddingWidth;
			$('.nav-wrapper nav ul').append("<div id='nav-cursor'></div>");
			$('#nav-cursor').css({"width":activeWidth,"left":actleft});
		}
		$('.nav-wrapper nav ul li').on('mouseover', function(e){
			$('#nav-cursor').css('display','block');
			var activeWidth = $(this).width();
			var paddingWidth = ($(this).outerWidth(true) - activeWidth) / 2;
			var actleftPos = $(this).position();
			var actleft = actleftPos.left + paddingWidth;
			$(".nav-wrapper nav ul").append("<div id='nav-cursor'></div>");
			$("#nav-cursor").animate({"width":activeWidth,"left":actleft}, "fast");
	    });
		$('.nav-wrapper nav ul li').on({
	        'mouseleave': function(e){
				$(this).removeClass('nav-active');
	        }
	    });
		$('.nav-wrapper nav ul').on({
	        'mouseleave': function(e){
				if(!$('.nav-wrapper nav ul li').hasClass('active')){
					console.log('ok');
					$('#nav-cursor').hide();
				}
				else {
					var activeWidth = $('.active').width();
					var paddingWidth = ($('.active').outerWidth(true) - activeWidth) / 2;
					var actleftPos = $('.active').position();
					var actleft = actleftPos.left + paddingWidth;
					$(".nav-wrapper nav ul").append("<div id='nav-cursor'></div>");
					$("#nav-cursor").animate({"width":activeWidth,"left":actleft}, "slow");
				}
			}
	    });


		document.querySelector( "#nav-toggle" )
		  .addEventListener( "click", function() {
			this.classList.toggle( "active" );
		 });
	}
};

/* mainmenu function */
mainMenu = {
	init : function() {
		var winWidth = $(window).width();
		if(winWidth<767) {
			$(".nav-wrapper nav").attr("style","").addClass("mobile-nav");
			var toggles = document.querySelectorAll("#nav-toggle");

			for (var i = toggles.length - 1; i >= 0; i--) {
			  var toggle = toggles[i];
			  toggleHandler(toggle);
			}

			function toggleHandler(toggle) {
			  toggle.addEventListener( "click", function(e) {
				e.preventDefault();
				(this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
			  });
			}
		} else {
			$(".nav-wrapper nav").attr("style","").removeClass("mobile-nav");
		}
	}

};

/* main menu animation */
menuAnimation = {
	init : function() {
		$("#nav-toggle").on("click",function() {
			$('nav').slideToggle();
			$("nav").toggleClass("openNav");
		});
	}
};

$(document).ready(function(){
	mainMenu.init();
	menuAnimation.init();
	animatedCursor.init();
});

/* Window resize function */
$(window).on("resize" , function(){
	mainMenu.init();
});
/* Window resize function */
