document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                alert("Thank you for submitting the form. We will respond within 48 hours.");
            } else {
                alert("nothing happened");
            }
        });

    }
});

//form functionality

//clear form with reset button

function clearForm() {
}


//email details on submit form and clear form
function submitForm() {
    // Get form values

}

// carousel functionality
// Activate the carousel
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("comSlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}