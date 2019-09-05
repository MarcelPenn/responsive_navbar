const burgerMenu = document.querySelector('.burger');
burgerMenu.addEventListener('click', () => {
  let navlinks = document.querySelector('.nav-links');
  if(navlinks.style.transform != "translateX(0%)") {
      navlinks.style.transform = "translateX(0%)";
     } else {
      navlinks.style.transform = "translateX(100%)";
  }
})