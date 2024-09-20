const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropdownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function () {
    dropdownMenu.classList.toggle('open')
    const isOpen = dropdownMenu.classList.contains('open')

    //change icon depending on if menu is open
    toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
};


const themeText = document.querySelector('.color-theme');
const sliderButton = document.querySelector('.switch input');
const body = document.body; // Reference to the body

sliderButton.onclick = function() {
    const isChecked = sliderButton.checked;

    if (isChecked) {
        // Apply dark theme
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        themeText.innerHTML = "Dark theme"
    } else {
        // Apply light theme
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        themeText.innerHTML = "Light theme"
    }
};

var acc = document.getElementsByClassName("accordion-btn");//Code from W3 "How to create an Accordion"
var i;

for (i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = 30 + panel.scrollHeight + "px";
    } 
});
}