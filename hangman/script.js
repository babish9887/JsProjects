
const textdiv = document.getElementById("text");
const buttons=document.querySelectorAll(".btns");
const hintdiv=document.getElementById("hint");
const hangman=document.querySelector(".hangmanpic");
const scoreboard=document.querySelector(".scoreboard");
const win=document.getElementById("win");
const loose=document.getElementById("loose");
const msg=document.querySelector(".correctword");
const msg2=document.querySelector(".word");
let word="", hint="";

 function getrandomword() {
        const random = wordList[Math.floor(Math.random() * wordList.length)];
        word = random.word.toUpperCase();
        hint = random.hint; 
    }
    getrandomword();
function randomwordshow(){
    word.split('').forEach(element => {
        const ap = document.createElement("span");
        ap.textContent = element;
        textdiv.appendChild(ap);
        ap.style="color:transparent";
        hintdiv.innerHTML="<b>Hint : </b> "+ hint;

    });
}

var count=0;
var check=0;
var pic=0;
var temp=0;
buttons.forEach(button => {
    button.addEventListener('click', () =>{
        check=0;
        temp=0;
    
       for(let i=0;i<word.length;i++){
        if(button.textContent==word[i]){
            check=1;
            temp=1;
        }
        else 
            check=0;
        if(check==1){
            const specificspan=document.querySelector('#text span:nth-child('+(i+1)+')');
            specificspan.style="color:black";
            specificspan.style="border:none";
            count++;
            }
        if(check==0){
                hangman.style.backgroundImage="url(images/hangman-"+pic+".svg)";
                
             }
        }
        if(temp==0){
            pic++;
            hangman.style.backgroundImage="url(images/hangman-"+pic+".svg)";
        }
        if(pic==6){
            scoreboard.style.display="flex";
            loose.style.display="block";
            msg.innerHTML="<p>The correct word was: <span>"+word+"</span></p>";
            
        }
        if(count==word.length){
            scoreboard.style.display="flex";
            win.style.display="block";
            msg2.innerHTML="<p>You found the word: <span>"+word+"</span></p>";
        }
 

    });
});

function restart(){
    scoreboard.style.display="none";
     count=0;
    check=0;
     pic=0;
    temp=0;
    const childDivs = textdiv.querySelectorAll("span");
  
    childDivs.forEach(function(childDiv) {
      textdiv.removeChild(childDiv);
    });
    hangman.style.backgroundImage="url(images/hangman-0.svg)";

 getrandomword();
 randomwordshow();
}
randomwordshow();
