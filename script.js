// script.js

document.addEventListener("DOMContentLoaded", () => {
    /* =======================
       Dark/Light Mode Toggle with Persistence
       ======================= */
    const modeToggle = document.getElementById("modeToggle");
    const body = document.body;
  
    // Retrieve saved mode from localStorage or default to light-mode
    const savedMode = localStorage.getItem("siteMode") || "light-mode";
    body.classList.add(savedMode);
  
    modeToggle.addEventListener("click", () => {
      if (body.classList.contains("light-mode")) {
        body.classList.replace("light-mode", "dark-mode");
        localStorage.setItem("siteMode", "dark-mode");
      } else {
        body.classList.replace("dark-mode", "light-mode");
        localStorage.setItem("siteMode", "light-mode");
      }
    });
  
    /* =======================
       Smooth Scrolling for Navigation Links
       ======================= */
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  
    /* =======================
       Particle Animation using Canvas
       ======================= */
    const canvas = document.createElement("canvas");
    canvas.id = "particleCanvas";
    document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d");
    let particles = [];
    const particleCount = 100;
  
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
  
    function createParticles() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          dx: (Math.random() - 0.5) * 1,
          dy: (Math.random() - 0.5) * 1,
        });
      }
    }
  
    function drawParticles() {
      try {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = "#0ff";
          ctx.fill();
        });
      } catch (error) {
        console.error("Error drawing particles:", error);
      }
    }
  
    function updateParticles() {
      particles.forEach(p => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx = -p.dx;
        if (p.y < 0 || p.y > canvas.height) p.dy = -p.dy;
      });
    }
  
    function animateParticles() {
      drawParticles();
      updateParticles();
      requestAnimationFrame(animateParticles);
    }
  
    createParticles();
    animateParticles();
  
    /* =======================
       Contact Form Submission Handling
       ======================= */
    const contactForm = document.getElementById("contactForm");
    const formError = document.getElementById("formError");
  
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = contactForm.name.value.trim();
      const email = contactForm.email.value.trim();
      const message = contactForm.message.value.trim();
  
      // Basic validation
      if (!name || !email || !message) {
        formError.textContent = "All fields are required. Please fill out the form completely.";
        return;
      }
  
      // Clear error and simulate successful submission
      formError.textContent = "";
      console.log("Form submitted", { name, email, message });
      contactForm.reset();
      alert("Thank you for your message!");
    });
  });
  