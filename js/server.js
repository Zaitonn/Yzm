back=0;//声明全局变量
ip="mc.yzm.life";
port="55136";//此处填写ip.port
queryEnable=0;
function getTimeOut(){//超时处理
    if (back!=1&&back!=2){
        $("#server-motd").text("连接超时");
        $("#server-motd").css("color","#9e9e9e");
        $("#server-motd").css("font-style","oblique");
        $("#server-ping-ico").attr("src", "./img/ping_0.PNG");
        $("#server-delay").text("-ms");
        $("#server-online").text("-/-");
    }
}
function getServerInfo(){
    $.ajax({
        url:"https://motdpe.blackbe.xyz/api.php",//云黑motdapi
        data:{
            ip:ip,//服务器ip
            port:port//服务器端口
        },
        type:"get",
        success:function(result){
            back=1;
            // console.log(result)//调试输出
            // console.info("成功获取信息");
            $("#server-ip div:nth-child(1)").text("IP:"+ip);
            $("#server-ip div:nth-child(2)").text("端口:"+port);
            if (result.status=="online"){
                $("#server-motd").text("["+result.version+"]"+result.motd.replace(/§[0-9a-z]/g, ""));
                $("#server-motd").css("color","initial");
                $("#server-motd").css("font-style","initial");
                $("#server-online").text(result.online+"/"+result.max);
                $("#server-delay").text(result.delay+"ms");
                if (result.delay<50){
                    $("#server-ping-ico").attr("src","./img/ping_5.png");
                }
                else if(result.delay<100){
                    $("#server-ping-ico").attr("src","./img/ping_4.png");
                }
                else if(result.delay<250){
                    $("#server-ping-ico").attr("src","./img/ping_3.png");
                }
                else if(result.delay<500){
                    $("#server-ping-ico").attr("src","./img/ping_2.png");
                }
                else if(result.delay<1000){
                    $("#server-ping-ico").attr("src","./img/ping_1.png");
                }
                else{
                    $("#server-ping-ico").attr("src","./img/ping_0.png");
                }
                
            }
            else{
                $("#server-motd").text("服务器不在运行中");
                $("#server-motd").css("color","#9e9e9e");
                $("#server-motd").css("font-style","oblique");
                $("#server-ping-ico").attr("src", "./img/ping_0.png");
                $("#server-delay").text("-ms");
                $("#server-online").text("-/-");
            }
        },
        error:function(){//访问失败
            back=2;
            $("#server-motd").text("状态获取失败，请检查网络设置");
            $("#server-motd").css("color","#9e9e9e");
            $("#server-motd").css("font-style","oblique");
            $("#server-ping-ico").attr("src", "./img/ping_0.png");
            $("#server-delay").text("-ms");
            $("#server-online").text("-/-");
        },
            
    });
        setTimeout("getTimeOut()",10000)//超时
}
function addServer(){
    if (confirm("您仍需要经过审核并加入白名单后才可进入服务器！")==true){
        window.location.href = 'minecraft://?addExternalServer=Yzm|'+ip+':'+port;
    }
}
if (queryEnable){
    document.getElementById("server-add").addEventListener("click",addServer)
    $(document).ready(getServerInfo())//(页面加载完成后执行)
    setInterval("getServerInfo()","10000");//每10s访问一次api查询服务器状态
}
else{
    $("#server-motd").text("服务器已被管理员设置禁止访问");
    $("#server-motd").css("color","#9e9e9e");
    $("#server-motd").css("font-style","oblique");
    $("#server-ping-ico").attr("src", "./img/ping_0.png");
    $("#server-delay").text("-ms");
    $("#server-online").text("-/-");
    $("#server-ip div:nth-child(1)").text("IP:");
    $("#server-ip div:nth-child(2)").text("端口:");
}
