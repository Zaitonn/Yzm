/**
 * Copyright © 2020 - 2021 Yunzhimo.
 * All Rights Reserved.
 */

scroll2=0
function HideByScroll(){
    var header = document.getElementById("header");
    var headerHeight=header.offsetHeight;
    if(headerHeight<0.3*document.documentElement.clientHeight){
        $(".nav-button").css("height",headerHeight+"px");
    }
    var scroll1 = document.documentElement.scrollTop || document.body.scrollTop;
    /*兼容Safari及其他浏览器*/
    var difference = scroll1-scroll2;/*作差法求页面移动方向和距离*/
    // console.log(difference)
    if (difference<0 || scroll1<=50){
        $("#header").css("top","0px");
    }
    else if(difference>20){
        $("#header").css("top","-"+headerHeight+"px");
    }
    scroll2 = scroll1;
    if (scroll1<=50){
        $("#header").css("background","#ffffff20");
    }
    else{
        $("#header").css("background","#ffffffee");

    } 
    

}
$(document).ready(setInterval("HideByScroll()",100))
