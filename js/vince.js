
$(document).ready(function(){

pingHeight=document.documentElement.clientHeight;
pingWidth=document.documentElement.clientWidth;
if(pingWidth<1300){pingWidth=1300}


change();


$(".close").click(function(){
$(".ficeng").css({"display":"none"})})
$(".video").click(function(){
$(".ficeng").css({"display":"block"})})

var moveForce = -30;
var rotateForce = -70;
var docX = $(document).width();
var docY = $(document).height();
$('.page_one').mousemove(function(e) {
var moveX1 = (e.pageX - docX/2) / (docX/2) * 70;
var moveY1 = (e.pageY - docY/2) / (docY/2) * 70;
var moveX2 = (e.pageX - docX/2) / (docX/2) * 50;
var moveY2 = (e.pageY - docY/2) / (docY/2) * 50;
var moveX3 = (e.pageX - docX/2) / (docX/2) * 30;
var moveY3 = (e.pageY - docY/2) / (docY/2) * 30;
$('.zhengone,.fengsha')
.css("transform", "translate("+moveX1+"px,"+moveY1+"px)")
.css("-ms-transform", "translate("+moveX1+"px,"+moveY1+"px)")
.css("-webkit-transform", "translate("+moveX1+"px,"+moveY1+"px)")
.css("-o-transform", "translate("+moveX1+"px,"+moveY1+"px)")
.css("-moz-transform", "translate("+moveX1+"px,"+moveY1+"px)")
$('.renwu')
.css("transform", "translate("+moveX2+"px,"+moveY2+"px)")
.css("-ms-transform", "translate("+moveX2+"px,"+moveY2+"px)")
.css("-webkit-transform", "translate("+moveX2+"px,"+moveY2+"px)")
.css("-o-transform", "translate("+moveX2+"px,"+moveY2+"px)")
.css("-moz-transform", "translate("+moveX2+"px,"+moveY2+"px)")
$('.video')
.css("transform", "translate("+moveX3+"px,"+moveY3+"px)")
.css("-ms-transform", "translate("+moveX3+"px,"+moveY3+"px)")
.css("-webkit-transform", "translate("+moveX3+"px,"+moveY3+"px)")
.css("-o-transform", "translate("+moveX3+"px,"+moveY3+"px)")
.css("-moz-transform", "translate("+moveX3+"px,"+moveY3+"px)")	
});

$('.slide').mousemove(function(e) {
var moveX1 = (e.pageX - docX/2) / (docX/2) * 70;
var moveY1 = (e.pageY - docY/2) / (docY/2) * 70;
var moveX3 = (e.pageX - docX/2) / (docX/2) * 30;
var moveY3 = (e.pageY - docY/2) / (docY/2) * 30;
$(this).find('.bannerthree')
.css("transform", "translate("+moveX1+"px,"+moveY1+"px)")
.css("-ms-transform", "translate("+moveX1+"px,"+moveY1+"px)")
.css("-webkit-transform", "translate("+moveX1+"px,"+moveY1+"px)")
.css("-o-transform", "translate("+moveX1+"px,"+moveY1+"px)")
.css("-moz-transform", "translate("+moveX1+"px,"+moveY1+"px)")
$(this).find('.bannertwo')
.css("transform", "translate("+moveX3+"px,"+moveY3+"px)")
.css("-ms-transform", "translate("+moveX3+"px,"+moveY3+"px)")
.css("-webkit-transform", "translate("+moveX3+"px,"+moveY3+"px)")
.css("-o-transform", "translate("+moveX3+"px,"+moveY3+"px)")
.css("-moz-transform", "translate("+moveX3+"px,"+moveY3+"px)")	
});









window.onresize = function(){
change()
};



function change(){
pingHeight=document.documentElement.clientHeight;
pingWidth=document.documentElement.clientWidth;
if(pingWidth<1300){pingWidth=1300}

$(".fix").html(pingHeight);
$(".section").css({"height":pingHeight});
$(".page_one").css({"height":pingHeight});
$(".page_two").css({"height":pingHeight});
$(".page_three").css({"height":pingHeight});
$(".slidesContainer").css({"height":pingHeight});
$(".head").css({"height":pingWidth/2000*50});
$(".head_left span").css({"lineHeight":pingWidth/2000*46+"px","fontSize":pingWidth/2000*15+"px"});
$(".head_two").css({"height":pingWidth/2000*40,"width":pingWidth/2000*40/55*144,"marginTop":pingWidth/2000*5});
$(".head_one").css({"height":pingWidth/2000*40,"width":pingWidth/2000*40/55*132,"marginTop":pingWidth/2000*5,"marginRight":pingWidth/2000*4});
$(".page_one .zhengwen").css({"height":pingHeight-(pingWidth/2000*50),"width":(pingHeight-(pingWidth/2000*50))/8*14});
$(".page_two .zhengwen").css({"height":pingHeight});
$(".page_three .zhengwen").css({"height":pingHeight});
$(".shipinqu").css({"marginTop":(pingHeight-500)/2});

}




})
