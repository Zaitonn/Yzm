/**
 * Copyright © 2020 - 2021 Yunzhimo.
 * All Rights Reserved.
 */

function Random(min,max){
    while (max-min>0.01 && min>=0){
        var random = Math.random().toFixed(2);
        if ( random > min && random < max){
            return random;
        }
    }
}/*随机数模块 用法：Random(最小值,最大值) */
function randomBg(){
    windowHeight = document.documentElement.clientHeight;
    windowWidth = document.documentElement.clientWidth;
    if (windowHeight<windowWidth){
        var length = windowHeight;
    }
    else{
        var length = windowWidth;
    }
    var random = Random(0.2,0.5);
    $("#index-bg-radius-1").css("width",length*random+ "px");
    $("#index-bg-radius-1").css("height",length*random+ "px");
    $("#index-bg-radius-1").css("top",windowHeight*Random(0.1,0.4)+ "px");
    $("#index-bg-radius-1").css("left",windowWidth*Random(0,0.2)+ "px");
    /* 对第一个div修改属性 */
    var random = Random(0.4,0.6);
    $("#index-bg-radius-2").css("width",length*random+ "px");
    $("#index-bg-radius-2").css("height",length*random+ "px");
    $("#index-bg-radius-2").css("top",windowHeight*Random(0.4,0.7)+ "px");
    $("#index-bg-radius-2").css("left",windowWidth*Random(0.2,0.4)+ "px");
    /* 对第二个div修改属性 */
    var random = Random(0.2,0.6);
    $("#index-bg-radius-3").css("width",length*random+ "px");
    $("#index-bg-radius-3").css("height",length*random+ "px");
    $("#index-bg-radius-3").css("top",windowHeight*Random(0.2,0.5)+ "px");
    $("#index-bg-radius-3").css("left",windowWidth*Random(0.6,0.8)+ "px");
    /* 对第三个div修改属性 */
    var random = Random(0.4,0.6);
    $("#index-bg-radius-4").css("width",length*random+ "px");
    $("#index-bg-radius-4").css("height",length*random+ "px");
    $("#index-bg-radius-4").css("top",windowHeight*Random(0.01,0.3)+ "px");
    $("#index-bg-radius-4").css("left",windowWidth*Random(0.3,0.7)+ "px");
    /* 对第四个div修改属性 */
    
    
}
function reset(){
    windowHeight2 = document.documentElement.clientHeight;
    windowWidth2 = document.documentElement.clientWidth;
    if(windowHeight2 != windowHeight && windowWidth2 != windowWidth){
        randomBg;
    }
}
$(document).ready(randomBg())
$(document).ready(setInterval(reset(),200))
