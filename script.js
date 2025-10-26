

//HamBurger menu for header

  const hamburger = document.getElementById("hamburger");
  const navbar = document.getElementById("navbar");

  hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });



// Scroll animation
// Scroll Animation using Intersection Observer
const reveals = document.querySelectorAll('.reveal, .reveal-left');

const observer1 = new IntersectionObserver((entries, observer1) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer1.unobserve(entry.target); // run only once
    }
  });
}, { threshold: 0.2 });

reveals.forEach(el => observer1.observe(el));


 const project1 = document.getElementById('project1');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('closePopup');

    // Open popup
    project1.addEventListener('click', () => {
      popup.style.display = 'flex';
    });

    // Close popup
    closePopup.addEventListener('click', () => {
      popup.style.display = 'none';
    });

    // Close popup when clicking outside content
    window.addEventListener('click', (e) => {
      if (e.target === popup) popup.style.display = 'none';
    });