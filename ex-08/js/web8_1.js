var clientH = 600;
var clientW = 1600;
var w = '300';
var h = '300';
window.onload = function () {
    var item = document.getElementsByClassName("item");
    for (var i = 0; i < item.length; i++) {
        item[i].onmousedown = function (e) {
            if (!(document.getElementsByClassName("newitem")[0])) {
                event.stopPropagation();
                var body = document.getElementsByTagName("body")[0];
                var newdiv = document.createElement("div");
                newdiv.className = "newitem";
                body.appendChild(newdiv);
                newdiv.style.opacity = 0;
                newdiv.style.position = "absolute";
                newdiv.style.width = w + "px";
                newdiv.style.height = h + "px";
                newdiv.style.top = (clientH - h) / 2 + "px";
                newdiv.style.left = (clientW - w) / 2 + "px";
                newdiv.style.zIndex = 1101;
                newdiv.style.outline = 1 + "px" + " solid " + "#000";
                var color = window.getComputedStyle(this, null).getPropertyValue("background").split(")")[0] + ")";
                newdiv.style.backgroundColor = color;
                var total = document.getElementsByClassName("total")[0];
                total.style.filter = "blur(5px)";
                var i = 0,
                    num = 0.01;

                function danru() {
                    newdiv.style.opacity = i;
                    i = i + num;
                    if (i >= 1)
                        clearInterval(t);
                }
                if ((document.getElementsByClassName("newitem")[0])) {
                    var t = setInterval(danru, 5);
                }
            }
        }
    }
    document.onmousedown = function (e) {
        var newitem = document.getElementsByClassName("newitem")[0];
        var total = document.getElementsByClassName("total")[0];
        var body = document.getElementsByTagName("body")[0];
        var i = 1,
            num = 0.01;
        var i1 = 5,
            num1 = 5 / 80;

        function danchu() {
            newitem.style.opacity = i;
            total.style.filter = "blur(" + i1 + "px)";
            i1 = i1 - num1;
            i = i - num;
            if (i <= 0) {
                clearInterval(t);
                body.removeChild(newitem);
            }
        }
        if ((document.getElementsByClassName("newitem")[0])) {
            var t = setInterval(danchu, 5);
        }
    }

}
