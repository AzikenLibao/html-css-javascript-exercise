// ============================================================
// 1. Contact form submission handler
// ============================================================
// Get a reference to the <form> element by its id.
const contactForm = document.getElementById("contactForm");

// Listen for the "submit" event (fires when the Send button is
// clicked, or Enter is pressed inside the form).
contactForm.addEventListener("submit", function (event) {
  // Stop the browser's default behavior, which would reload the
  // page and wipe out our alert/inputs before we could see them.
  event.preventDefault();

  // Check all the form's validation rules at once (required fields,
  // and the email pattern). Returns false if anything is invalid.
  if (!contactForm.checkValidity()) {
    // Adds Bootstrap's "was-validated" class, which reveals the
    // red borders and .invalid-feedback messages on bad fields.
    contactForm.classList.add("was-validated");
    return; // stop here — don't show the success alert
  }

  // Read the value the user typed into the "name" field.
  const name = document.getElementById("name").value;

  // Show a simple confirmation. In a real project you'd send this
  // data to a server (e.g. with fetch()) instead of just alerting.
  alert("Thanks, " + name + "! Your message has been sent.");

  // Clear all the fields after "sending".
  contactForm.reset();
  contactForm.classList.remove("was-validated");
});

// ============================================================
// 2. Click a project title -> change the portfolio background
// ============================================================
// Soft tints that fit the site's color palette.
const colors = ["#F3F5F0", "#E7F0EA", "#FBF1DE", "#EFEAF6", "#E7EEF5"];

// Tracks which color is currently showing.
let colorIndex = 0;

function changeBackground() {
  // Move to the next color, looping back to the start at the end
  // of the array (the % is the modulo/remainder operator).
  colorIndex = (colorIndex + 1) % colors.length;

  // Apply it to the portfolio section.
  document.getElementById("portfolio").style.backgroundColor = colors[colorIndex];
}