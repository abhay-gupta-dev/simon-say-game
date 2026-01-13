let gameSeq=[];
let userSeq=[];
let level=0;
let started=false;
let btns=["red","yellow","green","purple"];
let h3=document.querySelector("h3");

document.addEventListener("keypress", function(){
    if(started===false){
        console.log("Game Started");
        started=true;
        Levelup();

    }
    
    
})
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");

    },250);

}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");

    },250);

}
function checkAnswer(idx){
    
    if(userSeq[idx]===gameSeq[idx]){
        console.log("Success");
        if(userSeq.length===gameSeq.length){
            setTimeout(Levelup,1000);
        }
    }else{
        h3.innerHTML=`Game Over! Final Score: <b>${level-1}</b><br> Press any key to Restart`;
        
        document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
         document.querySelector("body").style.backgroundColor="black";

    },150)
     reset();
    }

    

}
function Levelup(){
    userSeq=[];
    level++;
    h3.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random()*btns.length);
    let randColor=btns[randIdx];
    let randbtn=document.querySelector(`#${randColor}`);
    
    gameSeq.push(randColor);
    console.log(gameSeq);

    gameFlash(randbtn);
    

}

function btnpress(){
    let btn=this;
    userFlash(btn);
    console.log(btn);
    usercolor=btn.getAttribute("id");
    userSeq.push(usercolor);
    checkAnswer(userSeq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress)

}
function reset(){
    let gameSeq=[];
let userSeq=[];
let level=0;
let started=false;

}