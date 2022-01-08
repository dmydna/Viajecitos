  let pageLoaderHTML = `
<div id="pageloader">
  <div class="loading">
      <div class="loading-logo">
          <img src="./img/Logo.png">
      </div>
      <div class="loading-dots">
          <div class="dot1"></div>
          <div class="dot2"></div>
          <div class="dot3"></div>
      </div>
  </div>
</div>`;


function page_load(){
  var page_con = document.body
  page_con.insertAdjacentHTML("afterbegin", pageLoaderHTML);
  document.body.classList.add('load_active')
  let pageloader = document.querySelector('#pageloader')
  if(pageloader){
    fake_load(pageloader)
  }
}

function fake_load(loader){
  setTimeout(function(){ pageLoader(loader) }, 1500)
  function pageLoader(page_loader) { 
        page_loader.style.opacity = '0';                 
        setTimeout(function(){ 
          pageloader.style.display = 'none';}, 500);
          document.body.classList.remove('load_active')

    };  
  }

page_load()
  
let burger = document.querySelector(".burger"),
    list_nav = document.querySelector("#nav_menu");

burger.addEventListener("click", function() {
      document.body.classList.toggle('nav_active');
});


/* btn back-top */

var back_top_btn = document.querySelector(".back_top");

window.onscroll = function () { scrollFunction() ,prev_navbar(), navbarColor() };

function scrollFunction() {
    if (document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20) {
        back_top_btn.style.display = "block";
    } else {
        back_top_btn.style.display = "none";
    }
}


/** Back_to_top **/


let back_top = document.querySelector('.back_top');

back_top.addEventListener("click", function(){
    document.body.scrollTop = '0';
    document.documentElement.scrollTop = '0';
});


/* Navscroll up */

var prevScrollpos = window.pageYOffset;

function prev_navbar(){ 
  var currentScrollPos = window.pageYOffset;
  if(currentScrollPos > headerCnHeight){
     navbar_scrollUp() 
    } 
  }

function navbar_scrollUp() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".header_nav").style.top = "0";
  } else {
    document.querySelector(".header_nav").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

/* Nav-color */

let header_nav = document.querySelector('.header_nav'),
    headerHeight = header_nav.clientHeight,
    HeaderCn = document.querySelector('header'),
    headerCnHeight = HeaderCn.clientHeight,
    altoDeScroll = document.documentElement.scrollTop;
    document.body.classList.add("nav_fixed")

function navbarColor(){
     let scroll_top = document.documentElement.scrollTop;
    if ( scroll_top > 58) {
        //scroll_top > headerCnHeight - 58
        document.body.classList.add("nav_js");
      }
    else{  
        document.body.classList.remove("nav_js")
    }
}

/*? viajes.html */

let page_viajes = document.querySelector('.page_viajes')
if (page_viajes){
  console.log('pagina de viajes')
  let btn_mas = document.querySelectorAll('.show_more'),
      btn_mas_p= document.querySelectorAll('.show_more p'),
  hidden = document.querySelectorAll('.hidden');
  for (let i = 0; i < btn_mas.length; i++) {
       btn_mas[i].addEventListener('click', function(){    
       hidden[i].classList.toggle('toggle_hidden');
       btn_mas[i].classList.toggle('show_down');

     if (btn_mas_p[i].innerHTML === "mostrar mas"){
      } else {
        btn_mas_p[i].innerHTML = "mostrar mas";6
      }
  });
  }
}


// SliderShow

var slideIndex = 0, 
    slider = document.querySelector('.slideshow-container')

if (slider){
  showSlides();
}

function showSlides() {  
  let i,
  slides = document.querySelectorAll(".slides"),
  dots = document.querySelectorAll(".dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3500); 
}




// Experimento


// ico = "ico";
// about_us = "nosotros_bg";
// plans = "verano_";
// destino = "destino_bg";
// recorridos = ""


// function IMG_constructor(a,b){
//   let id = document.querySelectorAll(a);
//   let img = b
//      for( let i=0 ; i < id.length ; i++){
//           id[i].classList.remove(`${img}${i}`);
//           // id[i].style.backgroundImage = `url(./img/${img[i]}.jpg)`;
//           // id[i].style.backgroundImage = `url(./img/${img}${i+1}.jpg)`
//      }
// }

// IMG_constructor('#section_end .card_ico',ico);
// IMG_constructor("#section_us .card_ico", about_us);
// IMG_constructor("#section_plans .card_ico", plans);

var styleElem = document.head.appendChild(document.createElement("style"));
styleElem.classList.add('css_viajecitos')
styleElem.innerHTML = `
.nav-footer {
  background-color: #00000045; 
}
.social-nav .fa-ico{
  background-color: #00000033;    
}
.social-nav .fa-ico:hover {
  background: var(--primary)!important;
  color: white;
}
`;








