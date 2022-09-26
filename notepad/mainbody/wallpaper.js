let body = document.querySelector(".body");

let changeBG = document.querySelector(".changeBG");
changeBG.addEventListener("click", () => {
    let wallpaperLst = [
        "w1.jpg",
        "w2.png",
        "w3.jpg",
        "w4.png",
        "w5.jpg",
        "w6.jpg",
    ];
    let rndm = wallpaperLst[Math.floor(Math.random() * wallpaperLst.length)];

    body.style.background = `url("../assets/wallpapers/${rndm}")`;
    body.style.backgroundSize = "cover";
    body.style.height = "100vh";
    body.style.backgroundRepeat = "no-repeat";
});
