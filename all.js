// Variables
let yearSpan = document.querySelector("#nowYear");
let phoneMenuBTN = document.querySelector("#phone-menu-btn");
let phoneMenu = document.querySelector("#header-menu");

// Phone menu Function()
phoneMenuBTN.addEventListener("click", () => {
    if(window.getComputedStyle(phoneMenu).display === "none") {
        phoneMenu.style.display = "block"
    } else {
        phoneMenu.style.display = "none"
    }
})

// Get year from Date()
let date = new Date();
yearSpan.innerHTML = date.getFullYear();