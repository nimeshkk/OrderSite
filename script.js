// let navbar = document.querySelector('.header .navbar');

// document.querySelector('#menu-btn').onclick = () =>{
     
//     navbar.classList.add('.navbar:active');
// }

// document.querySelector('#nav-close').onclick = () =>
// {
//     n.classList.remove('active');
// }
// window.onscroll = () =>
// {
//     n.classList.remove('active');
// }

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }
