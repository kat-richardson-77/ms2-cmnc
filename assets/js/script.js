// validate form

function validateForm() {
    if(document.comForm.yourname.value === "") {
        window.alert("Please enter your full name.");
        document.comForm.yourname.focus();
        return false;
    }
    if(document.comForm.phonenumber.value === "") {
        window.alert("Please enter your phone number.");
        document.comForm.phonenumber.focus();
        return false;
    }
    if(document.comForm.email.value === "") {
        window.alert("Please enter your email address.");
        document.comForm.email.focus();
        return false;
    }
  // checkbox validation
  //   if (document.comForm.)

    if(document.comForm.message.value === "") {
        window.alert("Please enter your message.");
        document.comForm.message.focus();
        return false;
    }
    return true;
}

// validate Email on form

function validateEmail () {
    let email = document.comForm.email.value;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        document.comForm.email.focus();
        return false;
    }
    return true;
}

// carousel functionality auto rotate
let slideIndex = 0;
showSlides();

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("comSlides");
        for (let i = 0; i < slides.length; i+=1) {
            slides[i].style.display = "none";
        }
        slideIndex +=1;
        if (slideIndex > slides.length) { slideIndex = 1; }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 4000); //4 seconds between slides
    }