// start of block 
var blcoc=0;
for (let cal = 0; cal <=49; cal++) {

    var blcor=0;
    for (let row = 0; row <=49; row++) {
        var block=document.createElement("div");
        block.className="block";
        document.getElementsByClassName("main")[0].appendChild(block);
        block.style.top=blcor+"%";
        block.style.left=blcoc+"%";
        blcor+=2;
    }

    blcoc+=2;   
} 

// start of start 
var tim;
var star=0;
function start() {
    if (star==0) {
        tim=setInterval(time,50*(Math.pow(2,speed)));
        document.getElementsByClassName("start")[0].style.backgroundColor="#ff9999";
        document.getElementsByClassName("start")[0].innerHTML="RESTART";
        document.getElementsByClassName("mainstart")[0].style.display="none";
        star=1;
        // console.log(star);
    }
    else if (star==1 || star==2) {
        location.reload();
    }
    
}

var snake=[1,51,101];
var snak;
var ad=101;
var cont=50;
var score=0;

var hiscore=localStorage.getItem("hiscore_snake49");

if (hiscore!=null) {
    document.getElementsByClassName("hightscore")[0].innerHTML="HIGHT SCORE: "+hiscore;
}



// end of block 

 // start food 
 var food;
 foodpo();
 function foodpo() {
    food=Math.floor((Math.random())*2500);
    if (food>=2450 || food<=49 || food%50==49 || food%50==0) {
        foodpo();
    }
    for (let sna = 0; sna <=snake.length-1; sna++) {
        // console.log(snake[sna]);
        if (food==snake[sna]) {
            foodpo();
        }
        
    }
    document.getElementsByClassName("block")[food].style.backgroundColor="red";
    // console.log(food);
}
    // end food

// start control 


function down() {
    if (cont==50||cont==-50) {
        cont=1;
        time();
    }
}
function up() {
    if (cont==50||cont==-50) {
        cont=-1;
        time();
    }    
}
function right() {
    if (cont==1||cont==-1) {
        cont=50;
        time();
    }   
}
function left() {
    if (cont==1||cont==-1) {
        cont=-50;
        time();
    }    
}
    // end control 

    // start keboare function 
    var ke;
    window.addEventListener("keydown",kepr);
    function kepr() {
        ke=event.keyCode;
        // console.log(ke);
        if (ke==37) {
            left();
        }
        if (ke==38) {
            up();
        }
        if (ke==39) {
            right();
        }
        if (ke==40) {
            down();
        }
    }
    // end key board function 

    // start speed 
    var speed=3;
    
        function spee() {
            if (star==0) {
                if (speed==1) {
                    speed=6;
                }
                speed-=1;
                document.getElementsByClassName("speed")[0].innerHTML="SPEED:"+speed;
            }
            else{
                document.getElementsByClassName("speed")[0].innerHTML="SPEED can change before start";
            }
        }
    // end speed 

    // start clear 
    function clea() {
        localStorage.setItem("hiscore_snake49", 0);
        document.getElementsByClassName("hightscore")[0].innerHTML="HIGHT SCORE: "+0;
    }
    // dnd clear 

function time() {
    // console.log("ca");

    // start snake    
    ad +=cont;
    snak=0;

    // start side problem 
if (ad>=2450 && cont==50) {
    ad -= 2400;
}
if (ad<=50 && cont==-50) {
    ad += 2400;
}
if (ad%50==49 && cont==1) {
    ad -= 48;
}
if (ad%50==0 && cont==-1) {
    ad += 48;
}
// end side problem 

document.getElementsByClassName("block")[snake[0]].style.backgroundColor="";

// start food collition 
if (snake[snake.length-1]==food) {
    foodpo();

    // start score 
    score+=1;
    document.getElementsByClassName("cuscore")[0].innerHTML="SCORE: "+score;
    if (hiscore<=score || hiscore==null) {
        localStorage.setItem("hiscore_snake49", score);
        hiscore=localStorage.getItem("hiscore_snake49");
        document.getElementsByClassName("hightscore")[0].innerHTML="HIGHT SCORE: "+hiscore;
        // console.log(hiscore);
    }
    // end csore 
}
else{
    snake.shift();
}
// end food collition 


snake.push(ad);
for (let sna = 0; sna <=snake.length-1; sna++) {
    document.getElementsByClassName("block")[snake[snak]].style.backgroundColor="green";   
    
    // start collition 
    if (snake[snake.length-1]==snake[snak-1]) {
        pose();
        document.getElementsByClassName("mainstart")[0].style.display="flex";
        document.getElementsByClassName("mainstart")[0].style.backgroundColor="#ff9999";
        document.getElementsByClassName("mainstart")[0].innerHTML="GAME OVER CLICK HERE TO RESTART";
        document.getElementsByClassName("mainstart")[0].style.opacity=".6";
        
    }
    // end collition 
    snak++;
}

// console.log(snake);
// end snake

}

function pose() {
    if (star==1) {
        clearInterval(tim);
        // console.log("cal");
        document.getElementsByClassName("pose")[0].innerHTML="CONTINUE";
        document.getElementsByClassName("pose")[0].style.backgroundColor="#4da6ff";
        star=2;
    }
    else if (star==2) {
        document.getElementsByClassName("pose")[0].innerHTML="POSE";
        document.getElementsByClassName("pose")[0].style.backgroundColor="#ffff99";
        tim=setInterval(time,50*(Math.pow(2,speed)));
        star=1;
    }
}
// end of start 

 
