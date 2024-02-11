

const menu = document.querySelector(".nav__btn");
const menuList = document.querySelector(".nav__list");
const menuClose = document.querySelector(".menu-close");
const openModal = document.querySelector(".payment-top__btn");
const modalWindow = document.querySelector(".payment__modal");
const closeModal = document.querySelector(".close-modal");
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

openModal.addEventListener("click", () => {
    modalWindow.style.display = "block";
})

closeModal.addEventListener("click", () => {
    modalWindow.style.display = "none";
})


