window.onload = function() {
    pageframe()
}
window.onresize = function() {
    pageframe();
}

function pageframe() {
    var win_Width = window.innerWidth;
    var win_Height = window.innerHeight;
    document.getElementById("page-right").style.width = win_Width - 180 + "px";
    document.getElementById("page-right").style.height = win_Height + "px";
    document.getElementById("page-left").style.height = win_Height + "px";

    document.getElementById("page-content").style.height = win_Height - 66 + "px";
    document.getElementById("page-content").style.width = win_Width - 180 + "px";
    document.getElementById("page-menu").style.height = win_Height - 100 + "px";
}

document.getElementById("UserSettingButton").onclick = function() {
    var setbox = document.getElementById("UserSettingBox");
    if (setbox.getAttribute("isshow") == "true") {
        setbox.style.display = "none";
        setbox.setAttribute("isshow", "false");
    } else {
        setbox.style.display = "block";
        setbox.setAttribute("isshow", "true")
    }
}