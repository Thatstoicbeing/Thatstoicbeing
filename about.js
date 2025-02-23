// about.js - Fade in the About section when it scrolls into view
document.addEventListener("DOMContentLoaded", () => {
    const aboutSection = document.querySelector('.about-section');
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
  
    observer.observe(aboutSection);
  });
  