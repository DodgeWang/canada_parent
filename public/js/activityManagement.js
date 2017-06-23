$(function() {
    var page = 1;
    var size = 10;
    $.get("/classification/list", function(obj) {
        if (obj.status.code !== 0) {
            alert(obj.status.msg);
        } else {
            if (obj.data.length > 0) {
                for (var i = 0; i < obj.data.length; i++) {
                    var addDom = "<option value='" + obj.data[i].id + "'>" + obj.data[i].name + "</option>";
                    $('#classifySele').append(addDom);
                    $('#classifyEdit').append(addDom);
                }
            }
        }
    })

    getList(page, size, 0)
        //上一页
    $("#prev").click(function() {
        if (page === 1) return alert('已经是第一页');
        page -= 1;
        getList(page, size, 1);
    })

    //下一页
    $("#next").click(function() {
        getList(page + 1, size, 2);
    })

    function getList(pageNum, sizeNum, type) {
        $.get("/activity/list", { page: pageNum, size: sizeNum, classifyId: $('#classifySele').val() }, function(obj) {
            if (obj.status.code !== 0) {
                alert(obj.status.msg);
            } else {
                if (obj.data.length > 0) {
                    $("#pageBox").show();
                    $("#noDataBox").hide();
                    var htmlDom = '';
                    for (var i = 0; i < obj.data.length; i++) {
                        var title = obj.data[i].title;
                        var imgPath = obj.data[i].imgpath;
                        var url = obj.data[i].url;
                        var id = obj.data[i].id;
                        var classifyName = obj.data[i].name;
                        var htmlStr = "<tr>\
                               <td>" + ((pageNum - 1) * sizeNum + i + 1) + "</td>\
                               <td>" + title + "</td>\
                               <td>" + url + "</td>\
                               <td><img src='" + imgPath + "'/></td>\
                               <td>" + classifyName + "</td>\
                               <td>\
                                  <button class='green_button' onclick='edit(" + JSON.stringify(obj.data[i]) + ")'>修改</button>\
                                  <button class='red_button' onclick='deleteById(" + id + ")'>删除</button>\
                               </td>\
                               </tr>";

                        htmlDom += htmlStr;
                    }
                    $("#datalist tbody").html(htmlDom);
                    if (type === 2) page += 1;
                } else {
                    switch (type) {
                        case 0:
                            $("#datalist tbody").empty();
                            $("#pageBox").hide();
                            $("#noDataBox").show();
                            break;
                        case 2:
                            alert('已经是最后一页');
                            break;
                    }
                }
            }

        })
    }



    $('#classifySele').change(function() {
        page = 1;
        getList(page, size, 0)
    })


})

//通过ID删除活动
function deleteById(id) {
    var r = confirm("确定要删除此活动？")
    if (r == true) {
        $.get("/activity/delete", { id: id }, function(obj) {
            if (obj.status.code !== 0) {
                alert("删除失败！");
            } else {
                alert('删除成功！');
                window.location.reload();
            }
        })
    }
}

//打开修改页面
function edit(obj) {
    $("#coverCloth").height($(".contentbox").outerHeight())
    $("#coverCloth").width($(".contentbox").outerWidth())
    coverFun()
    $("#editBox input[name='activityId']").val(obj.id);
    $("#editBox input[name='title']").val(obj.title);
    $("#editBox input[name='url']").val(obj.url);
    $('#classifyEdit option').each(function() {
        if (Number($(this).val()) == obj.classifyId) {
            $(this).attr("selected", "selected");
        } else {
            $(this).removeAttr("selected");
        }
    })
}


//提交修改
$("#formSubmit").click(function() {
    console.log($("#classifyEdit").val())
})

//关闭修改页面
$("#coverCloth").click(function() {
    coverFun()
})

function coverFun() {
    $("#coverCloth").fadeToggle(300);
    $("#editBox").fadeToggle(300);
}