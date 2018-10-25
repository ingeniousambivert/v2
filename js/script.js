// Basic JS to change the color of navbar element style after scroll
/*
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
    hm.style.color = "black";
    ab.style.color = "black";
    cn.style.color = "black";
    hm.style.borderColor = "black";
    ab.style.borderColor = "black";
    cn.style.borderColor = "black";
}

navText();
*/
/*
// To detect a mobile device and change the color of the element accordingly
function navTextSR() {
    if (window.screen) {
        var wd = screen.width;
        var ht = screen.height; {
            if (wd < 300 && ht < 500) {
                hm.style.color = "white";
                ab.style.color = "white";
                cn.style.color = "white";
                hm.style.borderColor = "white";
                ab.style.borderColor = "white";
                cn.style.borderColor = "white";
            } else {
                navText();
            }
        }
    }

    */



// Type JS


// To generate random quotes

function randomQ() {
    var q = new Array()

    q[1] = "We have seen that computer programming is an art, because it applies accumulated knowledge to the world, because it requires skill and ingenuity, and especially because it produces objects of beauty. - Paul Graham";
    q[2] = "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning. - Rich Cook";
    q[3] = "A good programmer is someone who always looks both ways before crossing a one-way street. - Keith Weinberg";
    q[4] = "Computer science education cannot make anybody an expert programmer any more than studying brushes and pigment can make somebody an expert painter. - Eric S. Raymond ";
    q[5] = "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to code. - Linus Torvalds";
    q[6] = "You might not think programmers are artists, but programming is extremely creative profession. Its logic-based creativity. - John Romero";
    q[7] = "Everyone should learn how to program a computer because it teaches you how to think. - Steve Jobs";
    q[8] = "First solve the problem , then write the code. - John Johnson";
    q[9] = "The most important property of a program is whether it accomplishes the intention of its user. - C.A.R Hoare";
    q[10] = "Truth can only be found in one place: the code. - Robert C. Martin";
    var ry = Math.floor(Math.random() * q.length);
    if (ry == 0)
        ry = 1;
    document.getElementById("quote").innerHTML = q[ry];

}
randomQ();


// Bootstrap Charts
//line
var ctxL = document.getElementById("lineChart").getContext('2d');
var myLineChart = new Chart(ctxL, {
    type: 'line',
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
                label: "My First dataset",
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: [
                    'rgba(105, 0, 132, .2)',
                ],
                borderColor: [
                    'rgba(200, 99, 132, .7)',
                ],
                borderWidth: 2
            },
            {
                label: "My Second dataset",
                data: [28, 48, 40, 19, 86, 27, 90],
                backgroundColor: [
                    'rgba(0, 137, 132, .2)',
                ],
                borderColor: [
                    'rgba(0, 10, 130, .7)',
                ],
                borderWidth: 2
            }
        ]
    },
    options: {
        responsive: true
    }
});