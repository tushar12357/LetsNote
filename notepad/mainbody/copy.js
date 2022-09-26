let copyBtn = document.querySelector(".copyBtn");
let textArea = document.querySelector(".notePad");

let notification = document.querySelector(".notification");

copyBtn.addEventListener("click", () => {
    textArea.select();
    document.execCommand("Copy");
    notification.classList.toggle("notificationToggle");
});