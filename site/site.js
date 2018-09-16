
function clock() {
    var d = new Date();
    var month_num = d.getMonth()
    var day = d.getDate();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();

    month = new Array("Jan", "Feb", "March", "Apr", "May", "June",
        "July", "Aug", "Sept", "Oct", "Nov", "Dec");

    if (day <= 9) day = "0" + day;
    if (hours <= 9) hours = "0" + hours;
    if (minutes <= 9) minutes = "0" + minutes;
    if (seconds <= 9) seconds = "0" + seconds;

    date_time = "Today - " + day + " " + month[month_num] + " " + d.getFullYear() +
        "Time - " + hours + ":" + minutes + ":" + seconds + '   ';
    if (document.layers) {
        document.layers.doc_time.document.write(date_time);
        document.layers.doc_time.document.close();
    }
    else
        document.getElementById("doc_time").innerHTML = date_time;
    setTimeout("clock()", 100);
}
clock();

function res() {
    var html = document.documentElement;
    var resolution = "Screen resolution " + html.clientWidth + "x" + html.clientHeight;
    if (document.layers) {
        document.layers.resolution.document.write(resolution);
        document.layers.resolution.document.close();
    }
    else {

        document.getElementById("resolution").innerHTML = resolution;
        setTimeout("res()", 2000);
    }
}
res();

function tableCreate() {
    var y = document.getElementById('y').value;
    var x = document.getElementById('x').value;
    if (x > 50 || y > 10) {
        alert("Too big value");
    }
    else {
        var tableArr = ['<table>'];

        for (var i = 0; i < x; i++) {
            tableArr.push('<tr>' + '</tr>');
            tableArr.join("")
            for (var p = 0; p < y; p++) {
                tableArr.push('<td>' + '<input>' + '</td>');
                tableArr.join("")
            }
        }
        tableArr.push('</table>');

        document.getElementById('table').innerHTML = tableArr.join('');
    }

}

function restartTimer(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        New_start();
    }
};

var t = new Date, s, n;
t.setHours(0, 0, 0, 0);
function Timer() {
    t = new Date(t.getTime() + (new Date).getTime() - s.getTime());
    document.getElementsByTagName("span")[0].innerHTML = t.toLocaleTimeString();
    s = new Date();
    n = setTimeout(arguments.callee, 100)
}
function New_start() {
    s = new Date();
    t.setHours(0, 0, 0, 0);
    Timer();
}
function Pause() {
    s ? (window.clearTimeout(n), s = !1) : s = new Date, Timer();
};
siteTime.addEventListener("mouseover", Pause);
siteTime.addEventListener("mouseout", Pause);




var controls = document.querySelectorAll('.controls');
for (var i = 0; i < controls.length; i++) {
    controls[i].style.display = 'inline-block';
}




var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 2000);

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function previousSlide() {
    goToSlide(currentSlide - 1);
}

function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].className = 'slide showing';
}


var playing = true;
var pauseButton = document.getElementById('pause');

function pauseSlideshow() {
    pauseButton.innerHTML = '&#9658;'; // play character
    playing = false;
    clearInterval(slideInterval);
}

function playSlideshow() {
    pauseButton.innerHTML = '&#10074;&#10074;'; // pause character
    playing = true;
    slideInterval = setInterval(nextSlide, 2000);
}

pauseButton.onclick = function () {
    if (playing) { pauseSlideshow(); }
    else { playSlideshow(); }
};

var next = document.getElementById('next');
var previous = document.getElementById('previous');

next.onclick = function () {
    pauseSlideshow();
    nextSlide();
};
previous.onclick = function () {
    pauseSlideshow();
    previousSlide();
}