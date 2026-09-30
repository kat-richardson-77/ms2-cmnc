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
    if(document.comForm.position.length > 0) {
        let isChecked = false;
        for(let i = 0; i < document.comForm.position.length; i+= 1) {
            if(document.comForm.position[i].checked) {
                isChecked = true;
                break;
            }
        }
        if(!isChecked) {
            window.alert("Please select one or more positions.");
            return false;
        }
    }
    if(document.comForm.message.value === "") {
        window.alert("Please enter your message.");
        document.comForm.message.focus();
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