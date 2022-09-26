let notePad = document.querySelector(".notePad");
let colorPicker = document.querySelector(".colorPicker");

setInterval(() => {
    notePad.style.color = colorPicker.value;
});