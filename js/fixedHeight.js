/**
 * Copyright © 2020 - 2021 Yunzhimo.
 * All Rights Reserved.
 */
maxHeight=document.documentElement.clientHeight;
maxWidth=document.documentElement.clientWidth;
function fixedHeight(){
    newHeight = document.documentElement.clientHeight;
    newWidth = document.documentElement.clientWidth;
    if(maxHeight<newHeight && maxWidth==newWidth){
        maxHeight=newHeight
    }
    if(maxHeight!=newHeight && maxWidth!==newWidth){
        maxHeight=document.documentElement.clientHeight;
        maxWidth=document.documentElement.clientWidth;        
    }
    document.documentElement.style.setProperty('--maxH', maxHeight + "px");
    // console.log(maxHeight,newHeight,maxWidth,newWidth)
}
setInterval("fixedHeight()",1000)