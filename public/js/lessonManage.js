$(function(){
	$.get("/lesson/list", {}, function(obj) {
        if (obj.status.code !== 0) {
                alert(obj.status.msg);
        } else {
                if (obj.data.length > 0) {
                    $("#noDataBox").hide();
                    var htmlDom = '';
                    for (var i = 0; i < obj.data.length; i++) {
                        var htmlStr = "<tr>\
                                    <td>" + obj.data[i].p + "</td>\
                                    <td>" + obj.data[i].start_date + ' - ' + obj.data[i].end_date + "</td>\
                                    <td>" + obj.data[i].start_time + ' - ' + obj.data[i].end_time + "</td>\
                                    <td>" + obj.data[i].weekly + "</td>\
                                    <td>\
                                      <button class='green_button' onclick='edit(" + obj.data[i].id + ")'>修改</button>\
                                    </td>\
                                  </tr>";

                        htmlDom += htmlStr;
                    }
                    $("#datalist tbody").html(htmlDom);
                } else {
                	$("#noDataBox").show();  
                }
        }
	})

    $("#coverCloth").click(function(){
    	coverFun()
    })

    $("#formSubmit").click(function(){
    	alert($("#mytime").val())
    })
})

function edit(id,name){
    $("#coverCloth").height($(".contentbox").outerHeight())
    $("#coverCloth").width($(".contentbox").outerWidth())
    coverFun()
    $("#editBox input[name='name']").val(name);
    $("#editBox input[name='classifiId']").val(id);
}

function coverFun(){
	$("#coverCloth").fadeToggle(300)
    $("#editBox").fadeToggle(300)
}