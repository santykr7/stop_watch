// Getting all elements
let [sec,min,hrs] = [0,0,0]
let timerDisplay = document.getElementById("timer")
let stopper = null;


//function to increase timer
function stopwatch() {
    sec++ ;
    if(sec == 60){
        sec = 0;
        min++;
        if(min==60) {
            min = 0;
            hrs++
        }
    }
    // declaring variable for double digit format in stopwwatch
            let h = hrs < 10 ? "0"+hrs : hrs;
            let m = min < 10 ? "0"+min : min;
            let s = sec < 10 ? "0"+sec : sec;
// for displaying on screen 
    timerDisplay.innerHTML = h + ":" + m + ":" + s;
}

//function to start the timer
function start () {
    if(stopper!==null) {
        clearInterval(stopper);
    }
    stopper = setInterval(stopwatch,1000);
}

//function for pause or stop the stopwatch
function stop () {
    clearInterval(stopper)
}

//function to reset timer
function reset () {
    clearInterval(stopper);
    [sec,min,hrs] = [0,0,0];
    timerDisplay.innerHTML = "00:00:00";
    
}