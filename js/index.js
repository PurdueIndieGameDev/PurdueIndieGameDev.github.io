$(document).scroll(function()
{
		var scroll = $(document).scrollTop();//gets how much we have scrolled
	    var emSize = parseFloat($("body").css("font-size"));//convert em (what we used in css) to px
		$("#title").css("top", (10*emSize-scroll*0.4)+"px");//scale down the scroll factor by 0.4
		//10 was our original emSize in css. So it's 10em - how much we scrolled*slow factor = slower scrolling!
});