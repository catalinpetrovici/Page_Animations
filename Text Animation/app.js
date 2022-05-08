const tl = gsap.timeline({
  defaults: { duration: 0.75, ease: 'Power3.easeOut' },
});

// prettier-ignore
tl.fromTo('.hero-img',{ scale: 1.05 },{  scale: 1,  delay: 0.35,  duration: 2.5,  ease: 'elastic.out(1.5,1)',});

// prettier-ignore
tl.fromTo('.cta1',{ x: "-100%", opacity: 0 },{ x: 0, opacity: 1, duration: 0.75 },'<20%');
// prettier-ignore
tl.fromTo('.cta2',{ y: "-100%", opacity: 0 },{ y: 0, opacity: 1, duration: 0.75 },'<20%');
// prettier-ignore
tl.fromTo('.cta3',{ x: "100%", opacity: 0 },{ x: 0, opacity: 1, duration: 0.75 },'<20%');

// prettier-ignore
tl.fromTo('.cta4',{ x: "-100%", opacity: 0 },{ x: 0, opacity: 1 },'<20%');
// prettier-ignore
tl.fromTo('.cta5',{ y: "-100%", opacity: 0 },{ y: 0, opacity: 1 },'<20%');
// prettier-ignore
tl.fromTo('.cta6',{ x: "100%", opacity: 0 },{ x: 0, opacity: 1 },'<20%');
// prettier-ignore
tl.fromTo('.cta-btn',{ y: 20, opacity: 0 },{ y: 0, opacity: 1 },'<');

// Split text alternative
const logo = document.querySelector('.logo');
const letters = logo.textContent.split('');

logo.textContent = '';

letters.forEach((letter) => {
  logo.innerHTML += `<span class="letter">${letter}</span>`;
});

gsap.set('.letter', { display: 'inline-block' });
gsap.fromTo(
  '.letter',
  { y: '100%' },
  { y: 0, delay: 1, stagger: 0.05, ease: 'back.out(3)' }
);
