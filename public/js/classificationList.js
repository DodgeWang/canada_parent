$(function() {
    $.get("/classification/list", function(obj) {
        if (obj.status.code !== 0) {
            alert(obj.status.msg);
        } else {
            if(obj.data.length>0){
               for(var i=0;i<obj.data.length;i++){
               	  var name = obj.data[i].name;
                  var homeShow = (obj.data[i].homeshow===1?"<span style='color:green'>YES</span>":"<span style='color:red'>NO</span>")
               	  var nameStr = '"'+name+'"';
               	  var id = obj.data[i].id;
               	  var htmlStr = "<tr>\
                      <td>"+(i+1)+"</td>\
                      <td>"+name+"</td>\
                      <td>"+homeShow+"</td>\
                      <td>\
                        <button class='green_button' onclick='edit("+id+","+nameStr+")'>修改</button>\
                      </td>\
                    </tr>"  

               	  $("#datalist").append(htmlStr)
               }
            }
        }
    })
    
    $("#coverCloth").click(function(){
    	coverFun()
    })

    $("#formSubmit").click(function(){

    	var name = $("#editBox input[name='name']").val();
    	var id = $("#editBox input[name='classifiId']").val();
    	if(name === '' || id === '') return alert("输入框内容不能为空！");
    	$.post("/classification/revise",{id:id,name:name},function(obj){
    		if(obj.status.code !== 0){
    			alert("修改失败,请重试！")
    		}else{
    			alert("修改成功！")
    			coverFun();
    			window.location.reload(); 
    		}
    	})
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

