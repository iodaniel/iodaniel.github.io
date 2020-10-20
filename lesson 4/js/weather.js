//function toggleMenu() {
//    document.getElementsByClassName("navbar_elements")[0].classList.toggle("responsive");
//}

const menu = document.querySelector(".hamburger");
const navbar = document.querySelector('.navbar_elements');

menu.addEventListener('click', () => {
   navbar.classList.toggle('change');
})
//const button = document.querySelector(".hamburger");
//const nav = document.querySelector(".navbar_elements");

//button.addEventListener('click', () => {nav.classList.toggle('responsive')}, false);
//window.onresize = () => {if (window.innerWidth > 760) nav.classList.remove('responsive')};



