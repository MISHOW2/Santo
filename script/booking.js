function sendBookingMail() {
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var phone = document.getElementById("phone").value.trim();
  var roomType = document.querySelector('input[name="roomType"]:checked');
  var messageElement = document.querySelector(".js-message");

  if (name === "" || email === "" || phone === "" || !roomType) {
      messageElement.textContent = "All fields are required.";
      messageElement.style.color = "red";
      return;
  }

  var roomTypeValue = roomType.value;

  var params = {
      name: name,
      email: email,
      phone: phone,
      roomType: roomTypeValue
  };

  const serviceID = "service_hc9jn4d";  
  const templateID = "template_6xj1lrf"; 

  emailjs.send(serviceID, templateID, params)
      .then(res => {
          document.getElementById("bookingForm").reset();
          console.log(res);
          messageElement.textContent = "Thank you for booking our services! Your room will be ready, and we hope you have a wonderful stay. Please note that payment will be made at the site upon your arrival. If you need anything, please don't hesitate to ask. Enjoy your time with us";
          messageElement.style.color = "green";
      })
      .catch(function (error) {
          console.error("Email could not be sent:", error);
          messageElement.textContent = "Oops! Something went wrong. Please try again later.";
          messageElement.style.color = "red";
      });
}