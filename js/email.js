// (function () {
//   emailjs.init("EZTggEHkDW0QlCThM");
// })();

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const serviceID = "service_lvueeix";
  const templateID = "template_18tk5j9";

  // send the email here
  emailjs.sendForm(serviceID, templateID, this).then(
    (response) => {
      console.log("SUCCESS!", response.status, response.text);
      alert("Thank you for your message \nWe will reply shortly!");
    },
    (error) => {
      console.log("FAILED...", error);
      alert("FAILED...", error);
    }
  );

  document.getElementById("myForm").reset();
});
