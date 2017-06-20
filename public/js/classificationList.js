$(function() {
    $.get("/classification/list", function(obj) {
        if (obj.status.code !== 0) {
            alert(obj.status.msg);
        } else {
            if(obj.data.length>0){
               for(var i=0;i<obj.data.length;i++){
               	  var htmlStr = "<tr><td>"+(i+1)+"</td><td>"+obj.data[i].name+"</td><td>"+obj.data[i].id+"</td></tr>"  
               	  $("#datalist").append(htmlStr)
               }
            }
        }
    })
})