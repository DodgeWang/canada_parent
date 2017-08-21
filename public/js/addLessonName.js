$(function(){
	$("#formSubmit").click(function(){
		var lessonCode = $("input[name='lessonCode']").val();
        var lessonName = $("input[name='lessonName']").val();
		if(lessonCode === '' || lessonName === '') return alert('输入框不能为空！');

        var param = {
            code: lessonCode,
            name: lessonName
        }

		$.post("/lessonName/add",param,function(obj){
    		if(obj.status.code !== 0){
    			alert("添加失败,请重试！")
    		}else{
    			alert("添加成功！")
    			$("input[name='lessonCode']").val('');
                $("input[name='lessonName']").val('');
    		}
    	})
	})
})