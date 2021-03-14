$(function(){
	function scrollDisable()
	{
		$("html, body").css({
			"overflow": "hidden"
		});
	}
	function scrollEnable()
	{
		$("html, body").css({
			"overflow": "auto"
		});
	}
	$("#head-line-button, #mobile-head-line-call-button").click(function(){
		$("#popup-container").fadeIn(500, scrollDisable);
		$("#popup").animate({
			"width": "300px",
			"height": "100px"
		}, 400);
	});
	$("#popup-container").click(function(event){
		if(event.target == this){
			$(this).fadeOut(500, scrollEnable);
			$("#popup").animate({
			    "width": "300px",
			    "height": "100px"
		    }, 400);
		}
	});
	$(function(){
        $("#head-line-menu, #header, #services, #portfolio, #footer-left").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr("href"),
            top = $(id).offset().top;
            $("body,html").animate({scrollTop: top}, 1500);
        });
    });
});