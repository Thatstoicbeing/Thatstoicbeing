// Optional: Enhance details toggle with an animation effect when details are opened.
document.addEventListener("DOMContentLoaded", () => {
    const detailsElements = document.querySelectorAll("details.card-details");
  
    detailsElements.forEach(details => {
      details.addEventListener("toggle", () => {
        if (details.open) {
          details.style.animation = "fadeInSlide 0.5s ease-out";
        }
      });
    });
  });
  