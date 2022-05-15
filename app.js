const tl = gsap.timeline({
  defaults: { duration: 1 },
});
const tlContent = gsap.timeline({
  defaults: { duration: 10, ease: 'Power3.easeOut' },
});

const logo = document.querySelector('.logo');
let isRunning = false;
let isPageLoaded = false;

logo.addEventListener('mousemove', function () {
  if (!isRunning) {
    tl.to('.logo', { x: -100, duration: 0.5 });
    tl.to('.logo', { x: 0, duration: 0.5 });
    setTimeout(function () {
      isRunning = false;
    }, 2000);
  }
  isRunning = true;
});

tlContent.fromTo(
  '.text-animation',
  { y: 500, opacity: 0, duration: 2 },
  { y: 0, opacity: 1, duration: 2 }
);
tlContent.fromTo(
  '.form-link, .forms h2',
  { x: -100, opacity: 0, duration: 1 },
  { x: 0, opacity: 1, duration: 1 },
  '< 50%'
);

tlContent.fromTo(
  '.cookie-link, .cookie h2',
  { x: 100, opacity: 0, duration: 1 },
  { x: 0, opacity: 1, duration: 1 },
  '<'
);

tlContent.fromTo(
  '.page-link, .page h2',
  { x: -100, opacity: 0, duration: 1 },
  { x: 0, opacity: 1, duration: 1 },
  '<'
);
tlContent.fromTo(
  '.micro-link, .micro h2',
  { x: 100, opacity: 0, duration: 1 },
  { x: 0, opacity: 1, duration: 1 },
  '<'
);

setTimeout(function () {
  document.querySelectorAll('.link').forEach((link) => {
    link.addEventListener('mousemove', () => {
      console.log(this);
      gsap.to(link, {
        rotation: '2deg',
        scale: 1.1,
        duration: 1,
        delay: 0.2,
      });
    });
  });
}, 1000);
