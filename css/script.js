// CONTACT FORM VALIDATION
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  if(contactForm){
    contactForm.addEventListener("submit", function(e) {
      const phone = document.getElementById("phone").value;
      if(phone.length !== 10) {
        alert("Phone number must be exactly 10 digits.");
        e.preventDefault();
      }
    });
  }

  // ENQUIRY FORM VALIDATION
  const enquiryForm = document.getElementById("enquiryForm");
  if(enquiryForm){
    enquiryForm.addEventListener("submit", function(e) {
      const email = document.getElementById("email").value;
      if(!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
        e.preventDefault();
      }
    });
  }

  // DYNAMIC EVENTS SECTION
  const container = document.getElementById("events");
  if(container){
    const events = ["Charity Drive", "Food Donation", "Volunteer Meetup"];
    events.forEach(e => {
      const item = document.createElement("p");
      item.textContent = e;
      container.appendChild(item);
    });
  }

  // ACCORDION INTERACTIVITY
  const acc = document.querySelectorAll(".accordion");
  acc.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
      const panel = btn.nextElementSibling;
      panel.style.display = panel.style.display === "block" ? "none" : "block";
    });
  });
});
function openLightbox(img) {
  document.getElementById("lightbox").style.display = "block";
  document.getElementById("lightbox-img").src = img.src;
}
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}
