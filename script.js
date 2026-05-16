// Scroll reveal — adds "visible" class when elements enter the viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const siblings = Array.from(el.parentElement.children);
      const delay = siblings.indexOf(el) * 100;
      setTimeout(() => el.classList.add('visible'), delay);
      observer.unobserve(el);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.observe').forEach(el => observer.observe(el));