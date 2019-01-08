$(function(){
$(".sicu a").click(function (){
    $("#modal").addClass("active");
});
$("#modal button").click(function (){
    $("#modal").removeClass("active");
});});

start();
var imgs=2;
var now=0;
function start() {
    $(".slide>img").eq(0).siblings().css({"margin-Top":"-2000px"});
    setInterval(function(){slide();},2000);
}
function slide() {
    now==imgs?now=0:now+=1;
    $(".slide>img").eq(now-1).css("marginTop","-2000px");
    $(".slide>img").eq(now).css("marginTop","0px");
};


$(function(){
	$("ul.allmenu > li").mouseover(function(){
		$(this).children(".subme").stop().slideDown("fast");
    });
		
	$(".allmenu > li").mouseout(function(){
		$(this).children(".subme").stop().slideUp("fast");
    });
            });
