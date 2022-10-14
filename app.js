let menuMobile = document.querySelector(".mobile-menu");
let menu = document.querySelector(".menu");

menuMobile.addEventListener("click",function(){
    menuMobile.classList.toggle("active-menu");
    if (menuMobile.classList.contains("active-menu")){
        menu.classList.add("active-menu");
    } else {
        menu.classList.remove("active-menu");
    }
});
