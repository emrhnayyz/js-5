const baslik = document.querySelector("h1")

baslik.style.marginLeft="35rem"
baslik.style.color="red"

const aslan1 = document.querySelector(".container")

const aslan2 = document.querySelector(".i2")

const phone1 = document.querySelector(".i3")

const phone2 = document.querySelector(".i4")

const phone3 = document.querySelector(".i5")

aslan1.onmouseover = ()=>{
    aslan2.style.zIndex="3"

}

aslan1.onmouseout = ()=>{
    aslan2.style.zIndex="0"

}

const araBtn = document.querySelector(".btn1")
const baglanBtn = document.querySelector(".btn2")
const konusBtn = document.querySelector(".btn3")

araBtn.onclick=()=>{
    makeSound();
    phone1.style.zIndex="4"
    phone2.style.zIndex="0"
    phone3.style.zIndex="0"

    baglanBtn.onclick = ()=> {
        phone1.style.zIndex="0"
        phone2.style.zIndex="4"
        phone3.style.zIndex="0"
        ring1.pause();
        ring1.currentTime=0;
    }
    
}
let ring1 = new Audio("sounds/mixkit-old-telephone-ring-1357.wav")

function makeSound(){
    
    ring1.play();
    
}

baglanBtn.onclick = ()=> {
    phone2.style.zIndex="5"
    ring1.pause();
    ring1.currentTime=0;
}

konusBtn.onclick=()=>{
    phone1.style.zIndex="0"
    phone3.style.zIndex="3"
    phone2.style.zIndex="0"
}

document.querySelector("*").onclick=()=>{
    aslan1.style.zIndex="4"
}