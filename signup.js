var emails = [];
var passwords = [];

var form = document.getElementsByTagName("form")[0];
var inputs = document.getElementsByTagName("input");
var messageBox = document.getElementById("messageBox");

form.onsubmit = function(event) {
  event.preventDefault();

  var email = inputs[2].value;
  var password = inputs[3].value;
  var confirmPassword = inputs[4].value;

  messageBox.innerHTML = "";
  messageBox.style.color = "green";

  if (password !== confirmPassword) {
    messageBox.innerHTML = "Passwords do not match.";
    messageBox.style.color = "red";
    return;
  }

  var exists = false;
  for (var i = 0; i < emails.length; i++) {
    if (emails[i] === email && passwords[i] === password) {
      exists = true;
      break;
    }
  }

  if (exists) {
    alert("This email and password already exist.");
  } else {
    emails[emails.length] = email;
    passwords[passwords.length] = password;
    messageBox.innerHTML = "Signup successful!";

    
    for (var j = 0; j < inputs.length; j++) {
      if (inputs[j].type !== "checkbox") {
        inputs[j].value = "";
      } else {
        inputs[j].checked = false;
      }
    }
  }
};
