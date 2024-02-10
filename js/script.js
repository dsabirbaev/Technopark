

const menu = document.querySelector(".nav__btn");
const menuList = document.querySelector(".nav__list");
const menuClose = document.querySelector(".menu-close");

menu.addEventListener("click", () => {

    if (menuList.style.display === "block") { 
        menuList.style.display = "none";
    } else { 
        menuList.style.display = "flex";
        menuList.classList.add("menu-style");
    }
    
})


menuClose.addEventListener("click", () => {
    menuList.style.display = "none";
})