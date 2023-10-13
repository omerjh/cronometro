var timer = '';
document.querySelector('#start').addEventListener('click',()=>{
    changeButtons(document.querySelector('#start').innerText)
},false);

document.querySelector('#stop').addEventListener('click',()=>{
    changeButtons(document.querySelector('#stop').innerText)
},false);


function startTimer(){
    let minutes     = Number(document.querySelector('#minutes').innerText);
    let seconds     = Number(document.querySelector('#seconds').innerText);
    let milliseconds= Number(document.querySelector('#milliseconds').innerText);

    if(milliseconds < 99){
        milliseconds++;
    }else{
        milliseconds = 0;
        if(seconds < 59){
            seconds++;
        }else{
            seconds = 0;
            minutes++;
        }
    }

    minutes     = minutes.toString().padStart(2, '0')
    seconds     = seconds.toString().padStart(2, '0')
    milliseconds= milliseconds.toString().padStart(2, '0')

    // minutes     += minutes < 10 ? '0'+minutes : '';
    // seconds     += seconds < 10 ? '0'+seconds : '';
    // milliseconds+= milliseconds < 10 ? '0'+milliseconds : '';

    document.querySelector('#minutes').innerText        = minutes;
    document.querySelector('#seconds').innerText        = seconds;
    document.querySelector('#milliseconds').innerText   = milliseconds;
    timer = setTimeout(()=>{startTimer()},10);
}

function stopTimer(){
    clearInterval(timer);
}

function restartTimer(){
    clearInterval(timer);
    document.querySelector('#minutes').innerText        = '00';
    document.querySelector('#seconds').innerText        = '00';
    document.querySelector('#milliseconds').innerText   = '00';
}

function changeButtons(action){
    let btnStart = document.querySelector('#start');
    let btnStop = document.querySelector('#stop');

    if(action == 'Iniciar' || action == 'Continuar'){
        startTimer();
        btnStart.innerText  = 'Pausar';
        btnStop.innerText   = 'Detener';
    }
    else if(action == 'Pausar' || action == 'Detener'){
        stopTimer();
        btnStart.innerText  = 'Continuar';
        btnStop.innerText   = 'Reiniciar';
    }
    else if(action == 'Reiniciar'){
        restartTimer()
        btnStart.innerText  = 'Iniciar';
        btnStop.innerText   = 'Detener';
    }
}