// Basic JS to change the navbar element style after scroll

var hm = document.getElementById('hm');
var cn = document.getElementById('cn');
var ab = document.getElementById('ab');


window.onscroll = function () {


    if (window.pageYOffset >= 51) {
        hm.style.color = "white";
        ab.style.color = "white";
        cn.style.color = "white";
        hm.style.borderColor = "white";
        ab.style.borderColor = "white";
        cn.style.borderColor = "white";

    } else {
        hm.style.color = "black";
        ab.style.color = "black";
        cn.style.color = "black";
        hm.style.borderColor = "black";
        ab.style.borderColor = "black";
        cn.style.borderColor = "black";

    }


}


function navText() {
    {
        hm.style.color = "black";
        ab.style.color = "black";
        cn.style.color = "black";
        hm.style.borderColor = "black";
        ab.style.borderColor = "black";
        cn.style.borderColor = "black";
    }
    if (window.screen) {
        var width = screen.width;
        var height = screen.height;

        if (width < 400 && height < 600) {
            hm.style.color = "white";
            ab.style.color = "white";
            cn.style.color = "white";
            hm.style.borderColor = "white";
            ab.style.borderColor = "white";
            cn.style.borderColor = "white";

        }


    }
}