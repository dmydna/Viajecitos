

const pageLoaderHTML = `
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
  




function runPageLoader(pageLoaderElem){
  document.body.insertAdjacentHTML("afterbegin", pageLoaderElem);
  const loader = document.body.querySelector('#pageloader')
  if(!loader){
    return
  }
  setTimeout(() => { 
    loader.style.opacity = '0'; 
    loader.style.display = 'none';
    document.body.classList.remove('load_active') 
  }, 1500)

}


function pageLoad(bool = true){
  if(pageLoaderHTML && bool){
    runPageLoader(pageLoaderHTML)
  }
}


export default pageLoad;