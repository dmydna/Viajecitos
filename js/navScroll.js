/* Variables Auxiliares */

let 
  header_nav = document.querySelector('.header_nav'),
  headerHeight = header_nav.clientHeight,
  HeaderContainer = document.querySelector('header'),
  headerContainerHeight = HeaderContainer.clientHeight,
  topDeScroll = document.documentElement.scrollTop
  document.body.classList.add("nav_fixed")


/* Navscroll up */


let prevScrollPos = window.pageYOffset;

const navbarScrollUp = () => {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.querySelector(".header_nav").style.top = "0";
  } else {
    document.querySelector(".header_nav").style.top = "-100px";
  }
  prevScrollPos = currentScrollPos;
}

const prev_navbar = () => {
  let currentScrollPos = window.pageYOffset;
  if(currentScrollPos > headerContainerHeight){
    navbarScrollUp() 
  } 
}


/* Nav-color */


const navbarColor = () => {
  topDeScroll = document.documentElement.scrollTop;
  if ( topDeScroll > 60) {
    document.body.classList.add("nav_js");
  }
  else{  
      document.body.classList.remove("nav_js")
  }
}