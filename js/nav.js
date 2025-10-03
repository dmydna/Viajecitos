let prevScrollPos = window.scrollY;


const burger = document.querySelector(".burger") 

if(burger){
  burger.addEventListener("click", function() {
    document.body.classList.toggle('nav_active');
  });
}


const navScrollUp = () => {
  const currentScrollPos = window.scrollY;
  if (prevScrollPos > currentScrollPos) {
    document.querySelector(".header_nav").style.top = "0";
  } else {
    document.querySelector(".header_nav").style.top = "-100px";
  }
  prevScrollPos = currentScrollPos;
}

const prevNav = () => {
  const currentScrollPos = window.scrollY;
  const headerHeight = document.querySelector('header').clientHeight
  if(currentScrollPos > headerHeight){
    navScrollUp() 
  } 
}


/* Nav-color */


const navColor = () => {
  const currentScrollTop = document.documentElement.scrollTop;
  if ( currentScrollTop > 60) {
    document.body.classList.add("nav_js");
  }
  else{  
    document.body.classList.remove("nav_js")
  }
}


function navScroll(bool = false){
  if(!bool){
    return
  }
  document.querySelector("body").classList.add("nav_fixed")
  window.addEventListener("scroll", () => {
    prevNav(); 
    navColor();
  })
}



export default navScroll;