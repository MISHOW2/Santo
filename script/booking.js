function sendBookingMail() {
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var phone = document.getElementById("phone").value.trim();
  var roomWithTV = document.querySelector('input[name="roomWithTV"]:checked');
  var roomWithoutTV = document.querySelector('input[name="roomWithoutTV"]:checked');
  var messageElement = document.querySelector(".js-message");

  if (name === "" || email === "" || phone === "") {
      messageElement.textContent = "All fields are required.";
      messageElement.style.color = "red";
      return;
  }

  var roomWithTVValue = roomWithTV ? roomWithTV.value : "None";
  var roomWithoutTVValue = roomWithoutTV ? roomWithoutTV.value : "None";

  var params = {
      name: name,
      email: email,
      phone: phone,
      roomWithTV: roomWithTVValue,
      roomWithoutTV: roomWithoutTVValue
  };

  const serviceID = "service_hc9jn4d";
  const templateID = "template_zkjjuvq";

  emailjs.send(serviceID, templateID, params)
      .then(res => {
          document.getElementById("bookingForm").reset();
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
