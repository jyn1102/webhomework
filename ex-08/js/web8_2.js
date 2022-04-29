window.onload = function () {
    var first_box = document.getElementsByClassName("first_box")[0];
    var second_box = document.getElementsByClassName("second_box")[0];
    var third_box = document.getElementsByClassName("third_box")[0];
    var big_box = document.getElementsByClassName("big_box")[0];
    first_box.onmousedown = function () {
        first_box.style.backgroundColor = "lightgrey";
        second_box.style.backgroundColor = "#fff";
        third_box.style.backgroundColor = "#fff";
        big_box.innerHTML = "1";
    }
    second_box.onmousedown = function () {
        second_box.style.backgroundColor = "lightgrey";
        third_box.style.backgroundColor = "#fff";
        first_box.style.backgroundColor = "#fff";
        big_box.innerHTML = "2";
    }
    third_box.onmousedown = function () {
        third_box.style.backgroundColor = "lightgrey";
        first_box.style.backgroundColor = "#fff";
        second_box.style.backgroundColor = "#fff";
        big_box.innerHTML = "3";
    }
}
