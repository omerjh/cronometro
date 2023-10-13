var timer = '';
document.querySelector('#start').addEventListener('click',()=>{
    startTimer();
},false);

document.querySelector('#stop').addEventListener('click',()=>{
    clearInterval(timer);
},false);

function startTimer(){
    let minutes     = Number(document.querySelector('#minutes').innerText);
    let seconds     = Number(document.querySelector('#seconds').innerText);
    let milliseconds= Number(document.querySelector('#milliseconds').innerText);

    if(milliseconds < 100){
        milliseconds++;
    }else{
        milliseconds = 0;
        if(seconds < 60){
            seconds++;
        }else{
            seconds = 0;
            minutes++;
        }
    }

    document.querySelector('#minutes').innerText        = minutes;
    document.querySelector('#seconds').innerText        = seconds;
    document.querySelector('#milliseconds').innerText   = milliseconds;
    timer = setTimeout(()=>{startTimer()},10);
}