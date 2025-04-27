let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","purple","green"];
let started=false;
let level=0;
let h2=document.querySelector("h2");
let h3=document.querySelector("h3");
let highestScore=level;
const popSound= new Audio('sound/pop_sound.mp3');
const winSound =new Audio('sound/win.mp3');
const buzzSound= new Audio('sound/buzz.mp3');

document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        levelUp();
    }
});
function levelUp(){
    userSeq=[];
level++;
h2.innerText=`Level ${level}`;
h3.innerText=`Highest Socre ${level}`;
let randIdx=Math.floor(Math.random()*3);
let randColor=btns[randIdx];
let randBtn=document.querySelector(`.${randColor}`);
gameSeq.push(randColor); 
console.log(gameSeq);
flashBtn(randBtn);
} 
function playClick(){
    popSound.play();
}
function flashBtn(btn){
btn.classList.add("active");
playClick();
setTimeout(function(){
    btn.classList.remove("active");
},1000) 

}
function flashUserBtn(btn){
    btn.classList.add("active_user");
    setTimeout(function(){
        btn.classList.remove("active_user");
    },1000) 
    }
function btnPress(){
    playClick();
let btn=this;
flashUserBtn(btn);
userColor=btn.getAttribute("id");
console.log(userColor);
userSeq.push(userColor);
checkBtn(userSeq.length-1);
}
function checkBtn(idx){
 console.log("curr lvl:",level);
if(userSeq[idx]===gameSeq[idx]){
    if(userSeq.length==gameSeq.length){
        winSound.play();
        setTimeout(()=>{
            levelUp();
            winSound.play();
        },2000)
    }
}
else{
    buzzSound.play();
     let highestScore=level;
     h3.innerHTML=`Your Highest Score: <b>${highestScore}`
    h2.innerHTML=`GAME OVER!<br> Your score was <b>${level}</b>  <br>Press any key to start`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },500)
    restart();
}
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function restart(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}