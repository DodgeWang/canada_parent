// $(function() {
    var page = 1;
    var size = 12;

    userList(page, size, 0)
    //上一页
    $("#prev").click(function() {
        if (page === 1) return alert('已经是第一页');
        page -= 1;
        userList(page, size, 1);
    })

    //下一页
    $("#next").click(function() {
        userList(page + 1, size, 2);
    })


    function userList(pageNum, sizeNum, type) {
        $.get("/user/list", { page: pageNum, size: sizeNum }, function(obj) {
            console.log(obj)
            if (obj.status.code !== 0) {
                alert(obj.status.msg);
            } else {
                if (obj.data.length > 0) {
                    $("#pageBox").show();
                    $("#noDataBox").hide();
                    var htmlDom = '';
                    for (var i = 0; i < obj.data.length; i++) {
                        var username = obj.data[i].username;
                        var id = obj.data[i].id;
                        var htmlStr = "<tr>\
                                    <td>" + ((pageNum - 1) * sizeNum + i + 1) + "</td>\
                                    <td>" + username + "</td>\
                                    <td>\
                                      <button class='orange_button' onclick='resetPass(" + id + ")'>重置密码</button>\
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




    //更新用户
    $("#updateUser").click(function() {
        $.get("/user/updateUser", {}, function(obj) {
            if (obj.status.code !== 0) {
                alert("更新失败");
            } else {
                userList(1, size, 0);
                alert('更新用户成功！');
            }
        })
    })



// })


//重置密码
function resetPass(id) {
    var r = confirm("确定重置此用户密码？")
    if (r == true) {
        $.post("/user/resetPassword", { userId: id }, function(obj) {
            if (obj.status.code !== 0) {
                alert(obj.status.msg);
            } else {
                alert('密码重置成功！')
            }
        })
    }
}


//删除用户
    function deleteById(id){
        var r = confirm("确定删除此用户？")
        if (r == true) {
            $.get("/user/delete", { userId: id }, function(obj) {
                if (obj.status.code !== 0) {
                    alert(obj.status.msg);
                } else {
                    alert('用户删除成功');
                    userList(page, size, 0)
                }
            })
        }
    }

//学生成绩按钮点击
// function achievement(id){
//     $("#formMark").val('');
//     $("#fromMarkId").val('');
//     $("#fromUserId").val('');

//     $("#coverCloth").height($(".contentbox").outerHeight())
//     $("#coverCloth").width($(".contentbox").outerWidth())
//     $("#fromUserId").val(id);
//     coverFun();
//     $.get("/user/languageMark", { userId: id }, function(obj) {
//         if (obj.status.code !== 0) {
//             alert(obj.status.msg);
//         } else {
//             if(obj.data != null){
//                 $("#formMark").val(obj.data.mark);
//                 $("#fromMarkId").val(obj.data.id);
//             }else{
//                 $("#fromMarkId").val('0');
//             }
//         }
//     })
// }


//成绩编辑框提交
// $("#formSubmit").click(function() {
//         var param = {
//             user_id: $("#fromUserId").val(),
//             mark_id: $("#fromMarkId").val(),
//             mark: $("#formMark").val()
//         };
//         $.post("/user/editMark", param, function(obj) {
//             if (obj.status.code !== 0) {
//                 alert("修改失败,请重试！");
//             } else {
//                 alert("修改成功！");
//                 coverFun()
//             }
//         })
// })


// function coverFun() {
//     $("#coverCloth").fadeToggle(300)
//     $("#editBox").fadeToggle(300)
// }

// $("#coverCloth").click(function() {
//     coverFun()
// })

