document.addEventListener('DOMContentLoaded', function(){
  // add active class to current nav based on URL
  const links = document.querySelectorAll('nav a');
  links.forEach(a=>{
    if(window.location.pathname.endsWith(a.getAttribute('href')) || (window.location.pathname.endsWith('/') && a.getAttribute('href')=='index.html')){
      a.classList.add('active');
    }
  });
});
