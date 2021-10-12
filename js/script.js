

/*
  let pageloader = document.querySelector("#pageloader");
  if(pageloader){
      fake_load();
  }
  function fake_load(){
  setTimeout(function(){ pageLoader() }, 1500);

  document.body.style.overflow = 'hidden'

  function pageLoader() { 
        pageloader.style.opacity = '0';                 
        setTimeout(function(){ 
          pageloader.style.display = 'none';}, 500);
          document.body.style.overflow = 'unset'
    };  
  }
*/

let burger = document.querySelector(".burger"),
    list_nav = document.querySelector("#nav_menu");


burger.addEventListener("click", function() {
      list_nav.classList.toggle('active');
      document.body.classList.toggle('on_load');
      document.querySelector(".burger__line").classList.toggle('ln_black')
});


/* btn back-top */

var back_top_btn = document.querySelector(".back-top");

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
/* nav-color */

let header_nav = document.querySelector('.header_nav'),
    headerHeight = header_nav.clientHeight,
    HeaderCn = document.querySelector('header'),
    headerCnHeight = HeaderCn.clientHeight,
    altoDeScroll = document.documentElement.scrollTop;
header_nav.classList.add("n_fixed")

function navbarColor(){
     let scroll_top = document.documentElement.scrollTop;
    if ( scroll_top > headerCnHeight - 58) {
        header_nav.classList.add("nav_js");
      }
    else{  
        header_nav.classList.remove("nav_js")
    }
}
/** V2
 * 
 * 
 * 
 *  var header_nav = document.querySelector('.header_nav');
    var headerHeight = header_nav.clientHeight;
    var altoDeScroll = document.documentElement.scrollTop;
 * 
 * function navbarColor(){
    //var currenP = document.documentElement.clientHeight;
     var scroll_top = document.documentElement.scrollTop;
    if ( scroll_top > 0) {
        header_nav.style.backgroundColor = "white";
        header_nav.style.color = 'black';
        header_nav.style.boxShadow = '0 1px 3px rgb(0 0 0 / 12%), 0 1px 3px rgb(0 0 0 / 2%)';
        document.querySelector(".main-nav ").style.fontWeight = 'bolder';
        //console.log('backgroundColor : white');
      } else {
        header_nav.style.backgroundColor = "transparent";
        header_nav.style.color = "white";
        header_nav.style.boxShadow = 'none';
        document.querySelector(".main-nav ").style.fontWeight = '100';
        //console.log('backgroundColor : transparente')
      }
     //headerHeight = currentScrollPos;
}
 * 
 * 
 * 
 */


/* copia v1



function navbarColor(){
    //var currenP = document.documentElement.clientHeight;
     var currenP = document.documentElement.scrollTop;
    if ( currenP > 0) {
        document.querySelector(".header_nav").style.backgroundColor = "white";
        document.querySelector(".header_nav").style.color = 'black';
        document.querySelector(".header_nav").style.boxShadow = '0 1px 3px rgb(0 0 0 / 12%), 0 1px 3px rgb(0 0 0 / 2%)';
        document.querySelector(".main-nav ").style.fontWeight = 'bolder';
        console.log('backgroundColor : white');
      } else {
        document.querySelector(".header_nav").style.backgroundColor = "transparent";
        document.querySelector(".header_nav").style.color = "white";
        document.querySelector(".header_nav").style.boxShadow = 'none';
        document.querySelector(".main-nav ").style.fontWeight = '100';
        console.log('backgroundColor : transparente')
      }
     //headerHeight = currentScrollPos;
}



*/


