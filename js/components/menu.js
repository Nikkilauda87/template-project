const menuState = document.querySelector("#costum-menu-state");
const navigation = document.querySelector("nav");
const navigationUl = document.querySelector(".nav-ul");


menuState.onclick = toggleMenuClass;

function toggleMenuClass () {

    const menuClass = document.querySelectorAll(".costum-menu > i");
    for (let i = 0; menuClass.length; i++) {
        menuClass[i].classList.toggle("active");
        navigation.classList.toggle("nav-costum-menu");
        navigationUl.classList.toggle("nav-ul-costum-menu");
    }
          
}