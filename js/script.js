 // MDB Lightbox Init
 $(function () {
     $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
 });

 // Basic JS to change the navbar element style after scroll

 var nav = document.getElementById('nav');
 var navt = document.getElementById('navt');
 var hm = document.getElementById('hm');
 var cn = document.getElementById('cn');
 var ab = document.getElementById('ab');


 nav.style.background = "transparent";
 navt.style.display = "none";

 window.onscroll = function () {

     if (window.pageYOffset >= 122) {
         navt.style.display = "none";

         if (window.pageYOffset >= 125) {
             nav.style.opacity = 1;
             hm.style.color = "white";
             ab.style.color = "white";
             cn.style.color = "white";
         }

         if (window.pageYOffset >= 700) {
             nav.style.opacity = 1;
             nav.style.background = "transparent";
             hm.style.color = "white";
             ab.style.color = "white";
             cn.style.color = "white";
         }
         if (window.pageYOffset >= 1000) {
             nav.style.opacity = 1;
             nav.style.background = "transparent";
             hm.style.color = "white";
             ab.style.color = "white";
             cn.style.color = "white";
         }
         if (window.pageYOffset >= 1300) {
             nav.style.opacity = 1;
             nav.style.background = "transparent";
             hm.style.color = "white";
             ab.style.color = "white";
             cn.style.color = "white";
         }
         if (window.pageYOffset >= 1450) {
             nav.style.opacity = 1;
             nav.style.background = "transparent";
             hm.style.color = "white";
             ab.style.color = "white";
             cn.style.color = "white";
         }
         if (window.pageYOffset >= 1600) {
             nav.style.opacity = 1;
             nav.style.background = "transparent";
             hm.style.color = "white";
             ab.style.color = "white";
             cn.style.color = "white";
         }
         if (window.pageYOffset >= 1750) {
             nav.style.opacity = 1;
             nav.style.background = "transparent";
             hm.style.color = "white";
             ab.style.color = "white";
             cn.style.color = "white";
         }
         if (window.pageYOffset >= 1880) {
             nav.style.opacity = 1;
             nav.style.background = "transparent";
             hm.style.color = "white";
             ab.style.color = "white";
             cn.style.color = "white";
         }
         if (window.pageYOffset >= 1950) {
             nav.style.opacity = 1;
             nav.style.background = "transparent";
             hm.style.color = "white";
             ab.style.color = "white";
             cn.style.color = "white";
         }
         if (window.pageYOffset >= 2130) {
             nav.style.opacity = 1;
             nav.style.background = "transparent";
             hm.style.color = "white";
             ab.style.color = "white";
             cn.style.color = "white";
         }

         if (window.pageYOffset >= 2190) {
             nav.style.background = "transparent";
             hm.style.color = "white";
             ab.style.color = "white";
             cn.style.color = "white";
         }
         if (window.pageYOffset >= 2250) {
             nav.style.background = "transparent";
             hm.style.color = "white";
             ab.style.color = "white";
             cn.style.color = "white";
         }
         if (window.pageYOffset >= 2330) {
             nav.style.background = "transparent";
             navt.style.display = "inline-block";
             navt.style.opacity = "0.3";
             hm.style.color = "white";
             ab.style.color = "white";
             cn.style.color = "white";

         }
         if (window.pageYOffset >= 2350) {
             nav.style.background = "transparent";
             navt.style.display = "inline-block";
             navt.style.opacity = "0.5";
             hm.style.color = "white";
             ab.style.color = "white";
             cn.style.color = "white";

         }
         if (window.pageYOffset >= 2360) {
             nav.style.background = "transparent";
             navt.style.display = "inline-block";
             navt.style.opacity = "1.0";
             hm.style.color = "white";
             ab.style.color = "white";
             cn.style.color = "white";

         }
     } else {
         nav.style.background = "transparent";
         nav.style.opacity = 1.0;
         navt.style.display = "none";
         hm.style.color = "white";
         ab.style.color = "white";
         cn.style.color = "white";

     }

 }