document.addEventListener('DOMContentLoaded', () => {
  console.log('JS loaded and DOM ready');

  // Smooth scroll for nav links
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').slice(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Simple form submit alert (replace with real backend or email service)
  const form = document.querySelector('.contact-form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
    form.reset();
  });

  // Graphic design thumbnail slideshow
  let currentIndex = 0;
  const slides = document.querySelectorAll('.design-slide');

  function showNextSlide() {
    slides.forEach((slide, index) => {
      slide.classList.toggle('active', index === currentIndex);
    });
    currentIndex = (currentIndex + 1) % slides.length;
  }

  if (slides.length > 0) {
    showNextSlide(); // Show first slide
    setInterval(showNextSlide, 3000); // Change every 3 seconds
  }

  // Mobile Nav Toggle
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
  });

  // Smooth scroll for nav menu links (desktop and mobile)
  document.querySelectorAll('.nav-links a, .nav-menu a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').slice(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
        // Close mobile menu if open
        if (window.innerWidth < 768) {
          navMenu.classList.remove('active');
          navToggle.classList.remove('active');
        }
      }
    });
  });

  // GSAP Animations
  gsap.registerPlugin(ScrollTrigger);

  // Navbar links animation (slide down, fade in)
  gsap.from(".nav-menu li", {
    opacity: 0,
    y: -20,
    stagger: 0.1,
    duration: 0.6,
    ease: "power2.out",
    delay: 0.3
  });

  // Hero section animations
  gsap.from(".hero-text h1", {
    opacity: 0,
    x: -50,
    duration: 1,
    ease: "power3.out"
  });

  gsap.from(".hero-text p", {
    opacity: 0,
    x: -50,
    duration: 1,
    delay: 0.3,
    ease: "power3.out"
  });

  gsap.from(".btn-primary", {
    opacity: 0,
    scale: 0.8,
    duration: 0.6,
    delay: 0.6,
    ease: "back.out(1.7)"
  });

  // About section animation on scroll (staggered fade/slide)
  gsap.from("#about p", {
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    x: -60,
    stagger: 0.3,
    duration: 0.8,
    ease: "power2.out"
  });

  // Projects cards animation (scale & fade in stagger)
  gsap.from(".project-card", {
    scrollTrigger: {
      trigger: "#projects",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    scale: 0.85,
    stagger: 0.25,
    duration: 0.8,
    ease: "power2.out"
  });

  // Skills bars animate width on scroll
  gsap.utils.toArray('.skill-level').forEach(bar => {
    gsap.fromTo(bar, {
      width: '0%'
    }, {
      width: bar.style.width,
      scrollTrigger: {
        trigger: bar,
        start: "top 90%",
        toggleActions: "play none none none"
      },
      duration: 1.2,
      ease: "power3.out"
    });
  });

  // Contact form fields fade & slide up
  gsap.from("#contact input, #contact textarea, #contact button", {
    scrollTrigger: {
      trigger: "#contact",
      start: "top 85%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 30,
    stagger: 0.2,
    duration: 0.6,
    ease: "power2.out"
  });

  // Footer fade in
  gsap.from(".footer", {
    scrollTrigger: {
      trigger: ".footer",
      start: "top 95%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });

  // Hover animations on buttons
  document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('mouseenter', () => {
      gsap.to(button, { scale: 1.1, duration: 0.3, ease: "power1.out" });
    });
    button.addEventListener('mouseleave', () => {
      gsap.to(button, { scale: 1, duration: 0.3, ease: "power1.out" });
    });
  });

  // Hover animation on project cards
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, { scale: 1.03, boxShadow: "0 10px 20px rgba(76, 175, 80, 0.5)", duration: 0.4, ease: "power1.out" });
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { scale: 1, boxShadow: "0 0 12px rgba(0,0,0,0.5)", duration: 0.4, ease: "power1.out" });
    });
  });
});

