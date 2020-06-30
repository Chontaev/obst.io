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
    sing.style="z-index:-11; opacity:0 "
    auto.style="display:block; z-index:100; position:absalute;"
}
cont.onclick =() =>{
    auto.style="display: none;z-index:100"
    sing.style="display:block; z-index:100;"
}


$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		slidesToShow:5,
		autoplay: false,
		autoplayTime:10000,
        speed:300,
        slidesToScroll: 1,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:3
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:3
				}
			}
		]
	});
});

