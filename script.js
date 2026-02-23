// 1. Rotating Hero Highlights
const highlights = document.querySelectorAll(".highlight");
let current = 0;

if (highlights.length > 0) {
  setInterval(() => {
    highlights[current].classList.remove("active");
    current = (current + 1) % highlights.length;
    highlights[current].classList.add("active");
  }, 3000);
}

// 2. Elegant Scroll Reveal Animation
function reveal() {
  const reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 100; // triggers when element is 100px from viewport bottom

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

// Trigger reveal on scroll and on load
window.addEventListener("scroll", reveal);
document.addEventListener("DOMContentLoaded", reveal);

// 3. Form Submit Handler
const form = document.getElementById("contactForm");
if(form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      // Change button text to show feedback
      const btn = this.querySelector('button');
      const originalText = btn.innerText;
      btn.innerText = "Message Sent! ✓";
      btn.style.background = "#10b981"; // Success green color
      
      setTimeout(() => {
        alert("Thank you! Our recruitment team will contact you shortly.");
        this.reset();
        btn.innerText = originalText;
        btn.style.background = ""; // Reset to CSS default
      }, 500);
    });
}