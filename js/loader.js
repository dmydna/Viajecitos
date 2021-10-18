let pageloader = document.querySelector("#pageloader");
  if(pageloader){
      fake_load();
  }
  function fake_load(){
  setTimeout(function(){ pageLoader() }, 500);

  document.body.style.overflow = 'hidden'

  function pageLoader() { 
        pageloader.style.opacity = '0';                 
        setTimeout(function(){ 
          pageloader.style.display = 'none';}, 500);
          document.body.style.overflow = 'unset'
    };  
  }