const x = ['play', 'pause', 'reset', 'timer'];
for(i=0; i<x.length; i++){x[i] = document.getElementById(x[i])};
let [hour, minute, second, milisecond ] = [0, 0 , 0, 0];
let int = null;

function clock(){
    for(var i = 0; i <10; i++){
    milisecond++;
    if (milisecond>=1000){
        second++;
        milisecond=0;
        if(second>=60){
            minute++;
            second = 0;
            if(minute>=60){
                hour++;
                minute=0;
            }
        }
    }
    
    let ms =  milisecond<10 ? `00${milisecond}`: milisecond<100 ? `0${milisecond}` : `${milisecond}`;
    let s =  second<10 ? `0${second}` : `${second}`;
    let m =  minute<10 ? `0${minute}` : `${minute}`;
    let h = hour<10 ? `0${hour}` : `${hour}`;

    timer.innerText =`${h} : ${m} : ${s} : ${ms}`;
    };
};

button=(show,hide)=>{
    show.style.display = 'inline-block';
    hide.style.display ='none';
};

play.onclick = () =>{
    int!= null ? clearInterval(int): '' ;
    int= setInterval(clock,10);
    button(pause,play);
};

pause.onclick = () =>{
    clearInterval(int);
    button(play,pause);
};

reset.onclick = () => {
    clearInterval(int);
    [hour, minute, second, milisecond ] = [0, 0 , 0, 0];
    timer.innerHTML = '00 : 00 : 00 : 000';
    button(play,pause);
};

//boostrap
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})