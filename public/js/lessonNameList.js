// $(function() {
    var page = 1;
    var size = 20;

    lessonList(page, size, 0)
        //上一页
    $("#prev").click(function() {
        if (page === 1) return alert('已经是第一页');
        page -= 1;
        lessonList(page, size, 1);
    })

    //下一页
    $("#next").click(function() {
        lessonList(page + 1, size, 2);
    })


    function lessonList(pageNum, sizeNum, type) {
        $.get("/lessonName/list", { page: pageNum, size: sizeNum }, function(obj) {
            if (obj.status.code !== 0) {
                alert(obj.status.msg);
            } else {
                if (obj.data.length > 0) {
                    $("#pageBox").show();
                    $("#noDataBox").hide();
                    var htmlDom = '';
                    for (var i = 0; i < obj.data.length; i++) {
                        var htmlStr = "<tr>\
                                    <td>" + ((pageNum - 1) * sizeNum + i + 1) + "</td>\
                                    <td>" + obj.data[i].code + "</td>\
                                    <td>" + obj.data[i].name + "</td>\
                                    <td>\
                                      <button class='green_button' onclick='edit("+ JSON.stringify(obj.data[i]) +")'>修改</button>\
                                      <button class='red_button' onclick='deleteById(" + obj.data[i].id + ")'>删除</button>\
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


    $("#coverCloth").click(function() {
        coverFun()
    })

    $("#formSubmit").click(function() {
        var id = $("#editBox input[name='lessonId']").val();
        var lessonCode = $("#editBox input[name='lessonCode']").val();
        var lessonName = $("#editBox input[name='lessonName']").val();
        if(lessonCode === '' || lessonName === '' || lessonName === '') return alert("输入框内容不能为空！");
        var param = {
            id: id,
            code: lessonCode,
            name: lessonName
        }  
        $.post("/lessonName/edit", param, function(obj) {
            if (obj.status.code !== 0) {
                alert("修改失败,请重试！");
            } else {
                alert("修改成功！");
                // window.location.reload();
                lessonList(page, size, 0);
                coverFun()
            }
        })
    })

// })

//修改
function edit(data) {
    $("#coverCloth").height($(".contentbox").outerHeight())
    $("#coverCloth").width($(".contentbox").outerWidth())
    coverFun()
    $("#editBox input[name='lessonId']").val(data.id);
    $("#editBox input[name='lessonCode']").val(data.code);
    $("#editBox input[name='lessonName']").val(data.name);
}

function coverFun() {
    $("#coverCloth").fadeToggle(300)
    $("#editBox").fadeToggle(300)
}

//删除
function deleteById(id){
  var r = confirm("确定要删除此课程？")
    if (r == true) {
        $.get("/lessonName/delete", { id: id }, function(obj) {
            if (obj.status.code !== 0) {
                alert("删除失败！");
            } else {
                alert('删除成功！');
                // window.location.reload();
                lessonList(page, size, 0);
                coverFun()
            }
        })
    }
}