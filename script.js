// Parallax efek untuk elemen tertentu
window.addEventListener("scroll", function () {
  document.querySelectorAll(".parallax-item").forEach(el => {
    const speed = parseFloat(el.dataset.speed);
    const y = window.scrollY * speed;
    el.style.transform = `translateY(${y}px)`;
  });
});

// Fade-in on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});
