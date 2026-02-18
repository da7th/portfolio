tailwind.config = {
  theme: {
    extend: {
      colors: {
        "background-light": "#F3F3F3",
        "background-dark": "#1A1A1A",
        "text-light": "#000000",
        "text-dark": "#FFFFFF",
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
      },
    },
  },
};

function downloadCV() {
  const link = document.createElement("a");
  link.href = "curriculum.pdf";
  link.download = "Erick_Estanislau_Curriculum.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

document.addEventListener('DOMContentLoaded', function () {

  const autoSelectors = [
    'header h1', 'header p',
    '#home h1', '#home p',
    '#about .about-section',
    '.skill-card', '.project-card',
    '.about-section', '.contact-card', '.cta-section'
  ];
  autoSelectors.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => el.classList.add('reveal'));
  });

  const reveals = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    reveals.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const el = entry.target;
      if (entry.isIntersecting) {
        const delay = el.dataset.delay ? Number(el.dataset.delay) : 0;
        el.style.transitionDelay = `${delay}ms`;
        el.classList.add('is-visible');
        observer.unobserve(el); // remove to animate only once
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -10% 0px'
  });

  reveals.forEach(el => observer.observe(el));
});