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


// Chart JS

var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
    'September', 'October',
    'November', 'December'
];
var config = {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            borderColor: window.chartColors.red,
            backgroundColor: window.chartColors.red,
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ],
        }, {
            label: 'My Second dataset',
            borderColor: window.chartColors.blue,
            backgroundColor: window.chartColors.blue,
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ],
        }, {
            label: 'My Third dataset',
            borderColor: window.chartColors.orange,
            backgroundColor: window.chartColors.orange,
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ],
        }, {
            label: 'My Fourth dataset',
            borderColor: window.chartColors.yellow,
            backgroundColor: window.chartColors.yellow,
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ],
        }, {
            label: 'My Fourth dataset',
            borderColor: window.chartColors.green,
            backgroundColor: window.chartColors.green,
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ],
        }, {
            label: 'My Fourth dataset',
            borderColor: window.chartColors.purple,
            backgroundColor: window.chartColors.purple,
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ],
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'To help you gauge my skills'
        },
        tooltips: {
            mode: 'index',
        },
        hover: {
            mode: 'index'
        },
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Month'
                }
            }],
            yAxes: [{
                stacked: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Value'
                }
            }]
        }
    }
};

window.onload = function () {
    var ctx = document.getElementById('canvas').getContext('2d');
    window.myLine = new Chart(ctx, config);
};

document.getElementById('randomizeData').addEventListener('click', function () {
    config.data.datasets.forEach(function (dataset) {
        dataset.data = dataset.data.map(function () {
            return randomScalingFactor();
        });

    });

    window.myLine.update();
});

var colorNames = Object.keys(window.chartColors);
document.getElementById('addDataset').addEventListener('click', function () {
    var colorName = colorNames[config.data.datasets.length % colorNames.length];
    var newColor = window.chartColors[colorName];
    var newDataset = {
        label: 'Dataset ' + config.data.datasets.length,
        borderColor: newColor,
        backgroundColor: newColor,
        data: [],
    };

    for (var index = 0; index < config.data.labels.length; ++index) {
        newDataset.data.push(randomScalingFactor());
    }

    config.data.datasets.push(newDataset);
    window.myLine.update();
});

document.getElementById('addData').addEventListener('click', function () {
    if (config.data.datasets.length > 0) {
        var month = MONTHS[config.data.labels.length % MONTHS.length];
        config.data.labels.push(month);

        config.data.datasets.forEach(function (dataset) {
            dataset.data.push(randomScalingFactor());
        });

        window.myLine.update();
    }
});

document.getElementById('removeDataset').addEventListener('click', function () {
    config.data.datasets.splice(0, 1);
    window.myLine.update();
});

document.getElementById('removeData').addEventListener('click', function () {
    config.data.labels.splice(-1, 1); // remove the label first

    config.data.datasets.forEach(function (dataset) {
        dataset.data.pop();
    });

    window.myLine.update();
});