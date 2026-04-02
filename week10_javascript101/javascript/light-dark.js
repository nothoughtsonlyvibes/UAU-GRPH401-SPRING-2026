function toggleDarkMode() {


//Togglethe dark-mode class on the body element//
const body = document.querySelector("body");

//Look at the BTN element//
const btn = document.querySelector("#toggleBtn");

//Change the body tag based on current state//
body.classList.toggle("dark-mode");

//Update button text based on the current mode//
if (body.classList.contains("dark-mode")) {
    btn.textContent = "Switch to Light Mode";
} else {
    btn.textContent = "Switch to Dark Mode";
}


}

