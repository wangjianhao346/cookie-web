$(function () {
    $.ajax({
        type: "GET",
        url: "http://localhost:8089/module", //访问的链接
        data: {},
        dataType: "json",  //数据格式设置为json
        success: function (data) {  //成功的回调函数
            console.log(data);
            console.log("success")
            for (let obj of data) {
                console.log(obj.moduleName);
                $('.nav-menu').append("<li><a id=\"" + obj.pid + "\" href=\"javascript:void(0)\">" + obj.moduleName + "</a></li>")
            }
        },
        error: function (error) {
            console.log(error);
            console.log("error")
        }
    });
});