const player=document.querySelector("#player");
const score=document.querySelector("h1");
const timer=document.querySelector("#timer");
const start=document.querySelector(".start");
const restart=document.querySelector(".restart");
const submit=document.querySelector(".submit");
const nick=document.querySelector("#nick");
const list=document.querySelector(".list");

/* formis shevseba */ 
let name;
submit.addEventListener("click",submitFun);
function submitFun(e) {
    
    e.preventDefault();
    name=nick.value;
    
}
/* formis shevseba */ 






let timelineSound=new Audio();
timelineSound.src="backSound.mp3";

let clickSound=new Audio();
clickSound.src="click1.wav";


start.addEventListener("click", gameStart);

/* tamashis mtavari nawili  */

function gameStart(){
    

    start.removeEventListener('click',gameStart);
    start.classList.remove("button");

    restart.classList.add("button-1");
    restart.addEventListener("click", restarter);

    function restarter(){
       location.reload(true);
    };

    timelineSound.play();

    let realScore=0;
    score.innerHTML="score:"+realScore;

    let realTimer=30;
    timer.innerHTML="timer:"+realTimer;

    let intervalCounter=500;
    let interval=setInterval(strartTimer,intervalCounter);

    player.addEventListener("click", fun);

    function fun() {
        clickSound.play();

        let a=Math.floor(20+Math.random()*100);
        player.style.width=a+"px";
        player.style.height=a+"px";


        let x=Math.floor(Math.random()*(500-a));
        let y=Math.floor(Math.random()*(450-a));
        player.style.left=x+"px";
        player.style.top=y+"px";

        realScore++;
        score.innerHTML="score:"+realScore;

    };

    function strartTimer(){
        realTimer--;
        timer.innerHTML="Timer:"+realTimer;
        if(realTimer<1){
            endGame();

        }         
    }        

    function endGame(){
        clearInterval(interval);
        Swal.fire('დრო ამოიწურა,  შენ დააგროვე '+realScore +' ქულა!')
        start.addEventListener("click", gameStart);
        timelineSound.pause();
        timelineSound.load();
        /* leaderboard shi shetana */
        let node = document.createElement("LI"); 
        node.innerHTML=
        list.appendChild(node);


        /* leaderboard shi shetana */

        realScore=0;
        start.classList.add("button");
        restart.classList.remove("button-1");
        restart.removeEventListener("click",  restarter);
        player.removeEventListener("click", fun);
    }


}

/* tamashis mtavari nawili  */


