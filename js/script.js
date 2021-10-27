


  let pageloader = document.querySelector("#pageloader");
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


  if(pageloader){
      fake_load();
  }
  function fake_load(){
  setTimeout(function(){ pageLoader() }, 1500);

  //document.body.style.overflow = 'hidden'

  function pageLoader() { 
        pageloader.style.opacity = '0';                 
        setTimeout(function(){ 
          pageloader.style.display = 'none';}, 500);
          //document.body.style.overflow = 'unset'

    };  
  }



let burger = document.querySelector(".burger"),
    list_nav = document.querySelector("#nav_menu");


burger.addEventListener("click", function() {
      list_nav.classList.toggle('active');
      burger.classList.toggle('burger_active');
      document.body.classList.toggle('on_load');
      document.querySelector(".burger__line").classList.toggle('ln_black')
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
header_nav.classList.add("n_fixed")

function navbarColor(){
     let scroll_top = document.documentElement.scrollTop;
    if ( scroll_top > 58) {
        //scroll_top > headerCnHeight - 58
        header_nav.classList.add("nav_js");
      }
    else{  
        header_nav.classList.remove("nav_js")
    }
}


let card_top = ["","", "", "",""]  