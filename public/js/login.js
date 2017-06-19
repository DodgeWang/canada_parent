$(function() {
    $('#login-sub').click(function() {
        var username = $("input[name='username']").val();
        var password = $("input[name='password']").val();
        $.post("/admin/login", {
                username: username,
                password: password
            },
            function(obj) {
                console.log(obj);
                // if(obj.)
                if (obj.status.code !== 0) {
                    alert(obj.status.msg);
                } else {
                    window.open('/index', '_self')
                }
            }, "json");
    })
})