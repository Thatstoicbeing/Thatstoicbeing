document.addEventListener("DOMContentLoaded", function() {
    // Get modal elements
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const closeModalBtn = document.getElementById('closeModal');
  
    // Dummy project details data for demonstration
    const projectDetails = {
      ecommerce: {
        title: "E-commerce Website Development",
        description: "This project involved creating a fully responsive e-commerce platform with advanced features such as secure payment integration, dynamic product listings, and SEO optimization using React.js and Tailwind CSS.",
        technologies: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],
        challenges: "Balancing performance with dynamic content and ensuring cross-device compatibility.",
        outcomes: "Increased conversion rates and improved user experience significantly."
      },
      chatbot: {
        title: "AI-Powered Chatbot",
        description: "Developed an AI-driven chatbot that leverages NLP to automate customer support and improve engagement.",
        technologies: ["Python", "NLP", "Chatbot Framework", "AI"],
        challenges: "Maintaining conversational context and high accuracy in intent recognition.",
        outcomes: "Achieved 95% accuracy and enhanced customer support efficiency."
      },
      banking: {
        title: "Banking Database Model",
        description: "Engineered a secure, scalable MySQL-based database system to manage banking transactions and customer data.",
        technologies: ["MySQL", "Python", "Database Design"],
        challenges: "Ensuring data security while optimizing for performance.",
        outcomes: "Reduced transaction processing time by 25% and improved data integrity."
      }
    };
  
    // Add event listeners for detail buttons
    const detailButtons = document.querySelectorAll('.details-btn');
    detailButtons.forEach(button => {
      button.addEventListener('click', function() {
        const projectKey = this.getAttribute('data-project');
        openModal(projectKey);
      });
    });
  
    // Function to open modal with project details
    function openModal(projectKey) {
      const details = projectDetails[projectKey];
      if (details) {
        modalTitle.textContent = details.title;
        modalBody.innerHTML = `
          <p>${details.description}</p>
          <p><strong>Technologies:</strong> ${details.technologies.join(', ')}</p>
          <p><strong>Challenges:</strong> ${details.challenges}</p>
          <p><strong>Outcomes:</strong> ${details.outcomes}</p>
        `;
        modal.setAttribute('aria-hidden', 'false');
        modal.classList.add('active');
      }
    }
  
    // Close modal when close button is clicked
    closeModalBtn.addEventListener('click', function() {
      modal.setAttribute('aria-hidden', 'true');
      modal.classList.remove('active');
    });
  
    // Close modal when clicking outside modal content
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.setAttribute('aria-hidden', 'true');
        modal.classList.remove('active');
      }
    });
  });
  