let centiseconds = 0;
let seconds = 0;
let minutes = 0;

//variables do display a "0"

let displaySeconds = 0;
let displayMinutes = 0;

//variables to start timer

let interval = null;
let status = "stopped"

//function to increase stopwatch
function stopwatchTimer() {
    
    centiseconds++;
    
    if (centiseconds >= 100) {
        centiseconds = 0;
        seconds++;
       
       if (seconds >= 60) {
         seconds = 0;
         minutes++;
    } 
    
    // display a "O" in front of numbers that are < 10.    
    
       
    if (seconds < 10) {
        displaySeconds = "0" + seconds.toString();
    }
    else {
        displaySeconds = seconds;
    }    

    if (minutes < 10) {
        displayMinutes = "0" + minutes.toString();
    }
    else {
        displayMinutes = minutes;
    }
    }

    document.getElementById("stopwatch").innerHTML = displayMinutes + ":" + displaySeconds + "," + centiseconds;
}

function startStop() {
    if(status === "stopped") {
        interval = window.setInterval(stopwatchTimer, 10);
        document.getElementById("start-stop-button").innerHTML = "Stop";
        status = "started";
    }
    else{
        window.clearInterval(interval);
        document.getElementById("start-stop-button").innerHTML = "Start";
        status = "stopped";
    }
} 

function resetTimer() {
    window.clearInterval(interval);
    centiseconds = 0;
    seconds = 0;
    minutes = 0;
    document.getElementById("stopwatch").innerHTML = "00:00,00";
    document.getElementById("start-stop-button").innerHTML = "Start";


}
