// Basic JS to change the navbar element style after scroll

var hm = document.getElementById('hm');
var cn = document.getElementById('cn');
var ab = document.getElementById('ab');


window.onscroll = function () {


    if (window.pageYOffset >= 20) {
        hm.style.color = "white";
        ab.style.color = "white";
        cn.style.color = "white";

    } else {
        hm.style.color = "black";
        ab.style.color = "black";
        cn.style.color = "black";

    }


}