const hour=document.getElementById("hour")
const min=document.getElementById("min")
const sec=document.getElementById("sec")
const start=document.getElementById("start")
const stop=document.getElementById("stopbtn")
const pause=document.getElementById("pause")
let c=0;
let mins=0;
let hrs=0;
let timerId;
let istimer=false;
function seconds(){
        c++;
        if(c===60){
            c=0;
        minutes();
        }   
        sec.innerText=c<10?"0"+c:c;
};
function minutes()
{
    mins++;
    if(mins===60)
    {
        mins=0;
        hours();
    }
    min.innerText=mins<10?"0"+mins:mins;
}
function hours()
{
    hrs++;
    if(hrs===24)
    {
        hrs=0;
    }
    hour.innerText=hrs<10?"0"+hrs:hrs;
}
start.addEventListener("click",()=>{
    if(istimer)
        return;
    istimer=true;
    timerId=setInterval(()=>
    {
        seconds();
    },1000);
});
stopbtn.addEventListener("click",()=>{
    istimer=false;
    clearInterval(timerId);
    c=0;
    mins=0;
    hrs=0;
    sec.innerText="00";
    min.innerText="00";
    hour.innerText="00";
});
pause.addEventListener("click",()=>{
    if(!istimer)
        return;
    istimer=false;
    clearInterval(timerId);
});
