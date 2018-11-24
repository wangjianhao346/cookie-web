$(function () {
    $.ajax({
        type:"GET",
        url:"http://localhost:8089/admin", //访问的链接
        data:{},
        dataType:"json",  //数据格式设置为json
        success:function(data){  //成功的回调函数
            console.log(data);
            console.log("success")
        },
        error: function (error) {
            console.log(error);
            console.log("error")
        }
    });
});