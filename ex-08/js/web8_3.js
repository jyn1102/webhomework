window.onload = function () {
    var addbtn = document.getElementsByClassName("addbtn")[0];
    var deletebtn = document.getElementsByClassName("deletebtn");
    var lines = document.getElementsByClassName("lines");
    var total = document.getElementsByClassName("total")[0];
    var number = document.getElementsByClassName("number");
    addbtn.onmousedown = function () {
        if (!(document.getElementsByClassName("lines")[0])) {
            var newdata = document.createElement("div");
            newdata.className = "lines";
            var newnumber = document.createElement("div");
            newnumber.className = "number";
            newnumber.innerHTML = "1";
            var newdelbtn = document.createElement("div");
            newdelbtn.className = "deletebtn";
            newdelbtn.innerHTML = "Delete";
            total.insertBefore(newdata, addbtn);
            newdata.appendChild(newnumber);
            newdata.appendChild(newdelbtn);
        } else {
            var line = lines[0].cloneNode(true);
            total.insertBefore(line, addbtn);
            var j = 1;
            for (var i = 0; i < number.length; i++) {
                number[i].innerHTML = j;
                j++;
            }
        }
    }
    total.addEventListener('click', function (e) {
        var t = e.target;
        if (t.innerHTML == "Delete") {
            t.parentNode.parentNode.removeChild(t.parentNode);
            for (let r = 0; r < v.length; r++) {
                v[r].firstChild.innerHTML = r + 1;
            }
        }

    });

}
