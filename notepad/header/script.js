let navbarBtn = document.querySelector(".navigationButton");
let navigationBar = document.querySelector(".navigation");

let isNavbarOpened = false;
navbarBtn.addEventListener("click", () => {
    if (isNavbarOpened == false) {
        navbarBtn.src = "../assets/cross.svg";
        isNavbarOpened = true;
    } else if (isNavbarOpened == true) {
        navbarBtn.src = "../assets/menu.svg";
        isNavbarOpened = false;
    }
    navigationBar.classList.toggle("toggleNavigation");
    navbarBtn.classList.toggle("toggleNavigationBtn");
});
