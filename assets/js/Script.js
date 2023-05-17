$(document).ready(function () {
  var ColorStyle = localStorage.getItem("ColorStyle");

  if (ColorStyle == null) {
    localStorage.setItem("ColorStyle", "golden");
  }
});

// Get the saved color from localStorage
const savedColor = localStorage.getItem("ColorStyle");

// If a color is saved, update the stylesheet
if (savedColor) {
  const link = document.getElementById("option-color");

  // Remove the existing stylesheet
  link.parentNode.removeChild(link);

  // Create a new link tag with the selected color
  const newLink = document.createElement("link");
  newLink.rel = "stylesheet";
  newLink.href = `assets/colors/${savedColor}.css`;
  newLink.id = "option-color";

  // Insert the new link tag into the head
  document.head.appendChild(newLink);
}

const form = document.getElementById("contactForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  // Get the form data
  const formData = new FormData(form);

  const recipient = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("comments");

  // Send the email using the user's email client
  const emailLink = `mailto:${recipient}?subject=${subject} &body=${encodeURIComponent(
    message
  )}`;
  window.location.href = emailLink;

  form.reset();
});

function ChangeColor(color) {
  localStorage.setItem("ColorStyle", color);
}
