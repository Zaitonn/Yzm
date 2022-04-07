/**
 * Copyright © 2020 - 2021 Yunzhimo.
 * All Rights Reserved.
 */
var listenTarget = document.getElementById("index");
let enterPos
function getCursorPercentage(){//获取鼠标指针x坐标的百分比
    CursorPercentage=Math.random();
    var xpos;
    var event = event || window.event;
    if (event.offsetX) {
        xpos=event.offsetX-enterPos;
    } else if (event.layerX) {
        xpos=event.layerX-enterPos;
    }
    var windowWidth = document.documentElement.clientWidth;
    CursorPercentage = ( (xpos/windowWidth*1.1+0.5) * 100 ).toFixed(1);
    if(window.isNaN(CursorPercentage)){
        CursorPercentage = ( (-enterPos/windowWidth*0.8+0.5) * 100 ).toFixed(1);
    }//div左侧有一小段读取不到鼠标位置，自动处理以优化体验
    // console.log(CursorPercentage);
    return CursorPercentage;
}
function CursorEnter(){
    var event = event || window.event;
    if (event.offsetX) {
        enterPos=event.offsetX;
    } else if (event.layerX) {
        enterPos=event.layerX;
    }
    $(".index-bg-img").removeAttr("style","");
}
function CursorMoving(){
    $(".index-bg-img").css("transition","0s");
    var CursorPercentage=getCursorPercentage();
    if (CursorPercentage<0){
        CursorPercentage=0
    }
    if (CursorPercentage>100){
        CursorPercentage=100
    }
    $(".index-bg-img").css("background-position",CursorPercentage + "% center");//计算背景图片的位置    
    $("#index-bg-img-1").css("opacity",(100 - (getCursorPercentage()-10)*3) + "%");
    $("#index-bg-img-2").css("opacity",(100 - (getCursorPercentage()-40)*3) + "%");
    $("#index-bg-img-3").css("opacity",(100 - (getCursorPercentage()-65)*3) + "%");
    //计算透明度
}
function CursorOut(){
    $("#index-bg-img-1").css("opacity",0 + "%");
    $("#index-bg-img-2").css("opacity",70 + "%");
    $("#index-bg-img-3").css("opacity",100 + "%");
    $(".index-bg-img").css("transition","0.5s");
    $(".index-bg-img").css("background-position","center center");
}
listenTarget.addEventListener('mouseenter',CursorEnter)
listenTarget.addEventListener('mousemove',CursorMoving)
listenTarget.addEventListener('mouseout',CursorOut)
//鼠标
function getFingerPercentage(){
    var xpos;
    var event = event || window.event;
    xpos = event.targetTouches[0].pageX;
    var windowWidth = document.documentElement.clientWidth;
    FingerPercentage = ( (xpos/windowWidth) * 100 ).toFixed(0);
    // console.log(FingerPercentage);
    return FingerPercentage;
}
function FingerStart(){
    $(".index-bg-img").css("background-position-x",50 + "%");//计算背景图片的位置
}
function FingerMoving(){
    var FingerPercentage=getFingerPercentage();
    if (FingerPercentage<0){
        FingerPercentage=0
    }
    if (FingerPercentage>100){
        FingerPercentage=100
    }
    $("#index-bg-img-1").css("opacity",(100-(getFingerPercentage()-10)*3)/100);
    $("#index-bg-img-2").css("opacity",(100-(getFingerPercentage()-40)*3)/100);
    $("#index-bg-img-3").css("opacity",(100-(getFingerPercentage()-65)*3)/100);
    $(".index-bg-img").css("transition","opacity 0");
}
listenTarget.addEventListener('touchmove',FingerMoving);
listenTarget.addEventListener('touchstart',FingerStart)
