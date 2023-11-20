(function ($) {
  "use strict";

  // Form
})(jQuery);
let pubKey = "gHQj_lVGD2qBnsO7_";
let serviceId = "service_d3wtgf5";
let templateId = "template_8oi1vj9";
let forms = document.getElementById("contactForm");
emailjs.init(pubKey);
forms.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputFields = {
    from_name: document.getElementById("fullName").value,
    email: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
    subject: document.getElementById("subject").value,
  };
  emailjs.send(serviceId, templateId, inputFields).then(() => {
    if (
      document.getElementById("fullName").value != "" &&
      document.getElementById("email_id").value != "" &&
      document.getElementById("message").value != ""
    ) {
      swal("Good job!", "Done!", "success");
    }
   
  });
});
