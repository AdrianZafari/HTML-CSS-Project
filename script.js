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
const body = document.body; 

sliderButton.onclick = function() {
    const isChecked = sliderButton.checked;

    if (isChecked) {
        // Apply dark theme
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        themeText.innerHTML = "Dark Mode"
    } else {
        // Apply light theme
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        themeText.innerHTML = "Light Mode"
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

//The image swap for the accordion in FAQ section when toggling 
function changeImage(button) {

    var lightImage = button.querySelector(".light-show.toggle-img");
    var darkImage = button.querySelector(".dark-show.toggle-img");

    // Since JS doesn't care about what is being shown/hidden and only accesses the DOM, we can just simplify the code here and switch both now. 
    if (lightImage.src.endsWith("next-btn.svg")) {
        //image size a little off, it'll have to do or be edited externally to be in line with resolution of untoggled images
        lightImage.src = "images/FAQ_icons/accordion_toggled.svg"; 
        darkImage.src = "images/FAQ_icons/accordion_toggled.svg"; 
    } else {
        // Switch back to untoggled image
        lightImage.src = "images/ManageAll_phone/next-btn.svg";
        darkImage.src = "images/ManageAll_phone/dark/chevron.svg";
    }
}

}