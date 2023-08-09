let btns=document.querySelectorAll(".btns");
let restartbtn=document.getElementById("restart");
var score=document.getElementById("score");
var xp=document.getElementById("xwala");
var op=document.getElementById("owala");

let winpattern = [[0, 1, 2], [0, 3, 6],[0, 4, 8],[1, 4, 7],[2, 5, 8],  [2, 4, 6], [3, 4, 5], [6, 7, 8]];
var turn=Math.floor(Math.random() * 10);
let count=0;
let xturn= firsturn();
function firsturn(){ 
        if(turn%2==0)
           return true;
       else 
           return false;
   }
btns.forEach((el) => {
    el.addEventListener("click", () =>{
        if(xturn){
            xturn=false;
            el.innerText="X";
            el.style="color: #545454";
            el.disabled=true;
        }else{
            xturn=true;
            el.innerText="O";
            el.style="color: white ";
            el.disabled=true;
        }
        count+=1;
        if(count==9){
            score.style="display:block; animation: animate 0.2s linear 1;";
    
            score.innerHTML = "<p><span>X</span>O</p>  <br><h1>DRAW!</h1>";
            
        }  
    winchecker();
    });
});
function winchecker(){
    for(let i of winpattern){
        let [e1, e2, e3]=[btns[i[0]].innerText, btns[i[1]].innerText, btns[i[2]].innerText];
        if(e1 != "" && e2!="" && e3!="")
            if(e1==e2 && e2==e3){
                btns.forEach((el) => {el.disabled=true});
                score.style="display:block; animation: animate 0.2s linear 1;";
                if (e1 === "X") {
                    score.innerHTML = "<p><span>X</span></p><br><h1>WINNER!</h1>";
                    
                } else {
                    score.innerHTML = "<p>O</p><br><h1>WINNER!</h1>";
                }
            }
    }
}
function restart(){
    count=0;
    btns.forEach((el) => {el.disabled=false;
        el.innerText=""});
    score.innerHTML="";
    score.style="display:none; ";

    
}