



  let pageLoaderHTML = `
<div id="pageloader">
  <div class="loading">
      <div class="loading-logo">
          <h1>Viajecitos</h1>
      </div>
      <div class="loading-dots">
          <div class="dot"></div>
          <div class="dot2"></div>
          <div class="dot3"></div>
      </div>
  </div>
</div>` ;


function page_load() {
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

function back_top(){
    document.body.scrollTop = '0';
    document.documentElement.scrollTop = '0';
}


/** Navscroll up */

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
  let btn_mas = document.querySelectorAll('.btn_mas'),
  hidden = document.querySelectorAll('.hidden');
  for (let i = 0; i < btn_mas.length; i++) {
       btn_mas[i].addEventListener('click', function(){    
       hidden[i].classList.toggle('toggle_hidden');
  });
  }
}

