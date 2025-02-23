document.addEventListener("DOMContentLoaded", function() {
  // Animate progress bars on page load
  const progressFills = document.querySelectorAll('.progress-fill');
  progressFills.forEach(fill => {
    const target = fill.getAttribute('data-target');
    // Animate to the target percentage
    fill.style.width = target + '%';
  });

  // Chart Modal Elements
  const chartModal = document.getElementById('chartModal');
  const closeChartBtn = document.getElementById('closeChart');
  const skillChartCanvas = document.getElementById('skillChart');
  let skillChart; // Holds the Chart.js instance

  // Dummy improvement data for demonstration (improvement over 5 months)
  const improvementData = {
    "HTML": { labels: ["Jan", "Feb", "Mar", "Apr", "May"], data: [60, 70, 80, 85, 90] },
    "CSS": { labels: ["Jan", "Feb", "Mar", "Apr", "May"], data: [55, 65, 75, 80, 85] },
    "JavaScript": { labels: ["Jan", "Feb", "Mar", "Apr", "May"], data: [50, 60, 70, 75, 80] },
    "Leadership": { labels: ["Jan", "Feb", "Mar", "Apr", "May"], data: [70, 75, 80, 90, 95] },
    "Communication": { labels: ["Jan", "Feb", "Mar", "Apr", "May"], data: [65, 70, 80, 85, 90] },
    "Teamwork": { labels: ["Jan", "Feb", "Mar", "Apr", "May"], data: [60, 65, 70, 80, 85] }
  };

  // Add event listeners for each chart button
  const chartButtons = document.querySelectorAll('.chart-btn');
  chartButtons.forEach(button => {
    button.addEventListener('click', function() {
      const skill = this.getAttribute('data-skill');
      openChartModal(skill);
    });
  });

  // Function to open the chart modal and render the chart for the selected skill
  function openChartModal(skill) {
    chartModal.classList.add('active');
    // Destroy any existing chart instance
    if (skillChart) {
      skillChart.destroy();
    }
    const ctx = skillChartCanvas.getContext('2d');
    const dataForSkill = improvementData[skill] || { labels: [], data: [] };

    // Initialize Chart.js line chart
    skillChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: dataForSkill.labels,
        datasets: [{
          label: skill + " Improvement Over Time",
          data: dataForSkill.data,
          backgroundColor: "rgba(0,255,255,0.2)",
          borderColor: "rgba(0,255,255,1)",
          borderWidth: 2,
          fill: true,
          tension: 0.3
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            max: 100
          }
        },
        animation: {
          duration: 1000,
          easing: 'easeInOutQuad'
        }
      }
    });
  }

  // Close the chart modal on button click
  closeChartBtn.addEventListener('click', function() {
    chartModal.classList.remove('active');
  });
});
