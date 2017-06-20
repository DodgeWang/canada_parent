$(function(){
	$("#formSubmit").click(function(){
		var classifiName = $("input[name='classifiName']").val();
		if(classifiName === '') return alert('分类名不能为空');
	})
})
