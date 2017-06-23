$(function() {
    $.get("/classification/list", function(obj) {
        if (obj.status.code !== 0) {
            alert(obj.status.msg);
        } else {
            if (obj.data.length > 0) {
                for (var i = 0; i < obj.data.length; i++) {
                    var addDom = "<option value='" + obj.data[i].id + "'>" + obj.data[i].name + "</option>";
                    $('#classifySele').append(addDom);
                }
            }
        }
    })




    $("#formSubmit").click(function() {
        ajaxFileUpload();
    })
})


function ajaxFileUpload() {
    $.ajaxFileUpload({
        url: '/activity/add', //用于文件上传的服务器端请求地址
        secureuri: false, //是否需要安全协议，一般设置为false
        fileElementId: 'imgfile', //文件上传域的ID
        dataType: 'json', //返回值类型 一般设置为json
        data:{
            name:'wangdaiqiang',
            title:"haha"
        },
        success: function(data, status) //服务器成功响应处理函数
            {
                console.log(data)
            },
        error: function(data, status, e) //服务器响应失败处理函数
            {
                alert(e);
            }
    })
    return false;
}