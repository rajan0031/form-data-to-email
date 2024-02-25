function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "raykushwaha0031@gmail.com",
    Password: "07A67E2A49B3D54D87E80836208303E3ED0B",
    To: "raykushwaha0031@gmail.com",
    From: document.getElementById("email").value,
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
}
