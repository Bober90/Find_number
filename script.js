let a=0; b=1000;

let Title=document.querySelector("#Title");
let btnStart=document.querySelector("#btnStart");
let playBox=document.querySelector("#playBox");
let btnLess=document.querySelector("#btnLess");
let btnGreater=document.querySelector("#btnGreater");

btnStart.addEventListener('click', function(){
    btnStart.style.display='none';
    playBox.style.display="block";
    Title.innerHTML=parseInt((a+b)/2);
});

btnLess.addEventListener('click', function(){
    b=parseInt((a+b)/2);
    Title.innerHTML=parseInt((a+b)/2);
});

btnGreater.addEventListener('click', function(){
    a=parseInt((a+b)/2);
    Title.innerHTML=parseInt((a+b)/2);
});