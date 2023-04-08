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
 
//dropdown

  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }

  var swiper = new Swiper(".swiper mySwiper", {
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });