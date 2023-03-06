
let hr = 00;
let min = 00;
let sec = 00;
let count = 00;

let timer = false;

function start() {
    if(!timer){
    timer = true;

    hr = hr = parseInt(document.getElementById("hour").innerHTML);;
    min = parseInt(document.getElementById("minute").innerHTML);
    sec = parseInt(document.getElementById("second").innerHTML);
    count = parseInt(document.getElementById("count").innerHTML);

    stopwatch();
}
}
function stop() {
    timer = false;
}

function reset() {
    timer=false
    document.getElementById("hour").innerHTML="00";
    document.getElementById("minute").innerHTML="00";
    document.getElementById("second").innerHTML="00";
    document.getElementById("count").innerHTML="00";
}

function stopwatch() {
    
    if (timer == true) {
        count += 1;
        
        if (count == 100) {
            sec += 1;
            count = 00;
        }

        if (sec == 60) {
            min += 1;
            sec = 00;
        }

        if (min == 60) {
            hr += 1;
            sec = 00;
        }
        document.getElementById("hour").innerHTML = hr;
        document.getElementById("minute").innerHTML = min;
        document.getElementById("second").innerHTML = sec;
        document.getElementById("count").innerHTML = count;
        setTimeout("stopwatch()", 10)

    }
}

