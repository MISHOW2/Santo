function showSlide(slideId) {
  const slides = document.querySelectorAll('.slide');
  slides.forEach(slide => {
    slide.style.display = 'none';
  });
  document.getElementById(slideId).style.display = 'grid';
}

// Example of setting the initial slide to be shown
document.addEventListener('DOMContentLoaded', () => {
  showSlide('rooms');
});



function sendMail() {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var message = document.getElementById("message").value.trim();
    var messageElement = document.querySelector(".js-message");

    if (name === "" || email === "" || phone === "" || message === "") {
        messageElement.textContent = "All fields are required.";
        messageElement.style.color = "red";
        return;
    }

    var params = {
        name: name,
        email: email,
        phone: phone,
        message: message,
    };

    const serviceID = "service_hc9jn4d";
    const templateID = "template_zkjjuvq";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            messageElement.textContent = "Your message sent successfully!!";
            messageElement.style.color = "green";
        })
        .catch(function (error) {
            console.error("Email could not be sent:", error);
            messageElement.textContent = "Oops! Something went wrong. Please try again later.";
            messageElement.style.color = "red";
        });
}



