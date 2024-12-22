document.getElementById("myForm").addEventListener("submit", (event) => {
  event.preventDefault();
  let errors = [];

  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (username.length < 3) {
    errors.push("Username must be at least 3 character long");
  }

  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    errors.push("Please enter a valid email address");
  }

  if (password.length < 6) {
    errors.push("Password must be at least 6 character long");
  }

  if (errors.length > 0) {
    document.getElementById("error").innerHTML = errors.join("<br>");
  } else {
    document.getElementById("error").innerHTML = "Form submitted successfully";
  }
});
