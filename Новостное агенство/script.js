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
	$("#mailing").click(function(){
		$("#popup-container").fadeIn(500, scrollDisable);
		$(".fixed-container").css({"margin-left": "291.5px"})
		$("#popup").animate({
			"width": "400px",
			"height": "600px"
		}, 400);
	});
	$("#popup-container").click(function(event){
		if(event.target == this){
			$(this).fadeOut(500, scrollEnable);
			$("#popup").animate({
			    "width": 0,
			    "height": 0
		    }, 400);
		}
	})
	$("#mobile-menu").click(function(){
		$("#menu-container").slideDown(500, scrollDisable);
		$("#mobile-menu").css({"display": "none"});
		$("#mobile-close").css({"display": "block"});
		$("#mobile-logo").css({"margin-left": "30px"});
	});
	$("#mobile-close").click(function(){
		$("#menu-container").slideUp(500, scrollEnable);
		$("#mobile-menu").css({"display": "block"});
		$("#mobile-close").css({"display": "none"});
		$("#mobile-logo").css({"margin-left": "26px"});
	});
	$("#currency-button").click(function(){
		$.get(
			"http://data.fixer.io/api/latest",
			{"access_key": "303e5fab21d775f1b1b861b4e04d051b"},
			function(response){
				$("#currency-item-RUB").html(response.rates.RUB);
				$("#currency-item-USD").html(response.rates.USD);
				$("#currency-item-GBP").html(response.rates.GBP);
				$("#currency-item-CHF").html(response.rates.CHF);
			}
		)
	});
});