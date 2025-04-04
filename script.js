// Import GSAP and ScrollTrigger
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Set current year in footer
// document.getElementById('current-year').textContent = new Date().getFullYear();

// Hero animations
gsap.fromTo(
  '.hero-content',
  { opacity: 0, y: 50 },
  { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
);

// Menu items animations
gsap.fromTo(
  '.menu-item',
  { opacity: 0, scale: 0.9 },
  {
    opacity: 1,
    scale: 1,
    duration: 0.6,
    stagger: 0.2,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: '.menu-section',
      start: 'top 70%',
    }
  }
);

// Reviews animations
gsap.fromTo(
  '.review-item',
  { opacity: 0, y: 30 },
  {
    opacity: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.2,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.reviews-section',
      start: 'top 75%',
    }
  }
);

// Gallery animations
gsap.fromTo(
  '.gallery-item',
  { opacity: 0, y: 30 },
  {
    opacity: 1,
    y: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.gallery-section',
      start: 'top 75%',
    }
  }
);

// Contact animations
gsap.fromTo(
  '.contact-content',
  { opacity: 0, y: 30 },
  {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.contact-section',
      start: 'top 80%',
    }
  }
);

// Badge animations
gsap.to('.badge', {
  rotation: 5,
  duration: 1,
  ease: 'elastic.out(1, 0.3)',
  yoyo: true,
  repeat: -1,
  transformOrigin: 'center center',
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});