let fontFamilies = document.querySelector(".fonts");
let notepad = document.querySelector(".notePad");
let fontSizes = document.querySelector(".size");

setInterval(() => {
    notepad.style.fontFamily = fontFamilies.value;
    notepad.style.fontSize = `${fontSizes.value}px`;
});

let reset = document.querySelector(".resetBtn");
reset.addEventListener("click", () => {
    fontFamilies.value = "Arial";
    fontSizes.value = "20";
    notepad.style.textDecoration = "none";
    notepad.style.fontStyle = "normal";
    notepad.style.fontWeight = "normal";
    colorPicker.value = "black";
});

let bold = document.querySelector(".boldBtn");
bold.addEventListener("click", () => {
    notepad.classList.toggle("boldText");
});

let italic = document.querySelector(".italicBtn");
italic.addEventListener("click", () => {
    notepad.classList.toggle("italicText");
});

let underline = document.querySelector(".underlineBtn");
underline.addEventListener("click", () => {
    notepad.classList.toggle("underlineText");
});

let clear = document.querySelector(".clearBtn");
clear.addEventListener("click", () => {
    notepad.value = "";
    console.log("weeeeeeeeeeeeeeeee")
});
