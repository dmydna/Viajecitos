import navScroll from "./nav.js"
import pageLoad from "./loader.js";


const currentPage =  window.location.pathname

switch(currentPage){
  case '/contacto.html': 
    navScroll(true); 
    pageLoad(true);
    break;
  case '/viajes.html': 
  case '/nosotros.html': 
  default: 
    navScroll(true);
    pageLoad(true);
}



/* btn back-top */

const btnBackTop = document.querySelector(".back_top") 

if(btnBackTop){
  backToTop(btnBackTop)
}

function backToTop(btn){
  window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  });
  btn.addEventListener("click", () => {
    document.body.scrollTop = '0';
    document.documentElement.scrollTop = '0';
  })  
}



/*? viajes.html */

if (currentPage == "/viajes.html"){

  const buttons = document.querySelectorAll('.show_more')
  const buttons_texts = document.querySelectorAll('.show_more p')
  const hidden_elems = document.querySelectorAll('.hidden');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {   
       const button = buttons[i] 
       const hidden_elem = hidden_elems[i]
       const button_text   = buttons_texts[i]

       hidden_elem.classList.toggle('toggle_hidden');
       button.classList.toggle('show_down');
       if (button_text.innerHTML == "ver menos"){
         button_text.innerHTML = "mostrar mas";
       } else {
         button_text.innerHTML = "ver menos";
       }
  });
  }
}


const slider = document.querySelector('.slideshow-container')

let slideIndex = 0

if (slider){
  setInterval(showSlides, 3500); 
  clickDot()
}

function showSlides() {  

  const slides = document.querySelectorAll(".slides");
  const dots = document.querySelectorAll(".dot");

  slides.forEach( (slide) => {
    slide.style.display = "none";  
  })
 
  dots.forEach((dot)=>{
    dot.className = dot.className.replace(" active", "")
  })


  slides[slideIndex].style.display = "block";  
  dots[slideIndex % dots.length].className += " active";

  slideIndex++;
  slideIndex = slideIndex % slides.length  
}

function clickDot(){
  const dots = document.querySelectorAll(".dot");
  if(!dots){
    return
  }
  dots.forEach((dot, index)=>{
    dot.addEventListener("click", () => {
      slideIndex = index;
      showSlides()
    })
  })
}



export default showSlides

