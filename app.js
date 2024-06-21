//myseq,userseq
let start=false;
let level=0;
let h4=document.querySelector("h4");
document.addEventListener("keypress",function()
{
    if(start==false)
        { start=true;
            console.log("game started");
            levelup();
            
        }

       
});
function levelup()
{
    userseq=[];
    level++;
    h4.innerText="Level"+level+`Highest score:${hs}`;
    generate();
}
let hs=0;
let c=["yellow","blue","green","red"];
let red=document.querySelector(".red");
let blue=document.querySelector(".blue");
let green=document.querySelector(".green");
let yellow=document.querySelector(".yellow");
let body=document.querySelector("body");
red.addEventListener("click",seqq);
green.addEventListener("click",seqq);
blue.addEventListener("click",seqq);
yellow.addEventListener("click",seqq);
let myseq=[];
let userseq=[];
let i=0;
let i1=0;
function check(l)
{
    
    console.log(l);
    if(userseq[l]==myseq[l])
        {
            console.log("same");
            if(level==l+1)
                {
                setTimeout(levelup,1000);
                }
        }
    else
    {
        if(level>hs)
            hs=level;
        h4.innerHTML=`GameOver!Your score was:  <b>${level}</b> ...<br>Press any key to start. HighestScore:${hs}`;
        reset();
    }

}
function seqq(event) //user
{
    let c=event.target.className;
    flash(c);
userseq.push(c);
console.log(userseq);
check(userseq.length-1);
/*if(userseq.length==level)
    {console.log("go check");
        check(level);
    }*/

}
function generate()//machine genrated
{
    let a=Math.floor(Math.random()*4);
    myseq.push(c[a]);
    console.log(myseq);
    flash(c[a]);
}
function flash(btn){
    btn="."+btn;
    let bttn=document.querySelector(btn);
 bttn.classList.add("white");
   setTimeout(function(){
    bttn.classList.remove("white");
},200);
    
};
function reset()
{
    

    console.log("reset");
    start=false;
    myseq=[];
    console.dir(body);
    body.classList.add("bgred");
    setTimeout(function(){
    body.classList.remove("bgred");
},500);
level=0;
}
