let crntinput= document.querySelector('.crntinput');
let ansscrn=document.querySelector('.ansscrn');
let erase=document.querySelector('#remove');
let clearbtn=document.querySelector('#clear');
let buttons=document.querySelectorAll('button');
let evaluate =document.querySelector('#evaluate');
let realTimeScreenV=[]

 clearbtn.addEventListener("click", () =>{
     realTimeScreenV=[''];
     ansscrn.innerHTML= 0;
     crntinput.className='crntinput';
     ansscrn.className='ansscrn';
     ansscrn.style.color= "rgba(150,150,150, 0.08)";
 })

 buttons.forEach((btn) => {
    btn.addEventListener("click", () =>{
        //when btn is not erased btn
        if(!btn.id.match('remove')) { 
            //disply value on screen when btn press
            realTimeScreenV.push(btn.value)
            console.log(realTimeScreenV)
            crntinput.innerHTML=realTimeScreenV.join('');
            //to eval anss in realtime
        if(btn.classList.contains('num-btn')){
            if((eval(realTimeScreenV.join(''))).toString().length > 8){
                ansscrn.innerHTML = (eval(realTimeScreenV.join(''))).toFixed(5);
            }
            else{
                console.log((eval(realTimeScreenV.join(''))).toString().length)
                ansscrn.innerHTML = eval(realTimeScreenV.join(''));
            }
          }
        }
        //when erased btn is click
        if(btn.id.match('remove')){
            realTimeScreenV.pop();
            crntinput.innerHTML = realTimeScreenV.join('');
            ansscrn.innerHTML = eval(realTimeScreenV.join(''));
        }

        if(btn.id.match('evaluate')){
            crntinput.className = 'ansscrn';
            ansscrn.className ='crntinput';
            ansscrn.style.color="white"
        }

        if(typeof eval(realTimeScreenV.join('')) == 'undefined'){
            ansscrn.innerHTML=0;
        }
    });
 });