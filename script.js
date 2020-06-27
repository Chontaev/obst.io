const sector = document.querySelector('.sector');
const open1 = document.querySelector('.menu-btn');
const close1 = document.querySelector('.menu_close');
const sing = document.querySelector('.sing')
const auto = document.querySelector('.auto')
const cont = document.querySelector('.auto_btn')
const inside = document.getElementById('inside')
const slider = document.getElementById('slider')
const colons = document.getElementsByClassName('colons')
const next = document.getElementById('next')
const back = document.getElementById('back')
open1.onclick = () =>{
  sector.style = "transform: translateX(0); transition: 0.8s";
  close1.style.opacity = "1";
  close1.style.zIndex = "99";
}
close1.onclick = function func(){
  sector.style.transform = "translateX(-115%)";
  sector.style.transition = "0.8s";
  close1.style.opacity = "0"
  close1.style.zIndex = "0"
}
sing.onclick = () =>{
    sing.style="display: none; transition: 1s;"
    auto.style="display:block; z-index:99; transition: 1s;"
}
cont.onclick =() =>{
    auto.style="display: none; transition: 2s;"
    sing.style="display:block; z-index:99; transition: 2s;"
}


let insideWidth = inside.offsetWidth
let sliderWidth = slider.offsetWidth
let colonWidth = colons[0].offsetWidth
let betw = insideWidth-sliderWidth
var temp=0

next.onclick = ()=>{
		if(temp > betw){
			temp = -colonWidth
		}
		temp+=2*colonWidth+35
		inside.style.transform=`translateX(${-temp}px)`
}
back.onclick = ()=>{
		if(temp < 0){
			temp = betw+colonWidth
		}
		temp-=2*colonWidth+35
		inside.style.transform=`translateX(${-temp}px)`
}
