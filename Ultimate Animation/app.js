// Example Code

// const tlIntro = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.first-page',
//     start: '0%',
//     end: '100%',
//     scrub: true,
//     markers: true,
//   },
// });

// tlIntro.fromTo('nav', { opacity: 1 }, { opacity: 0, duration: 1 });

////

// Pin the first page
const tlIntro = gsap.timeline({
  scrollTrigger: {
    trigger: '.first-page',
    start: '0%',
    end: '100%',
    pin: true,
    pinSpacing: false,
  },
});

// Highlight PAGE 2
const tlH = gsap.timeline({
  scrollTrigger: {
    trigger: '.second-page',
    markers: { startColor: 'white', endColor: 'white' },
    scrub: true,
    start: '-30%',
    end: '40%',
  },
});

tlH.fromTo(
  '.highlight',
  { color: 'rgba(255,255,255, 0.4' },
  { color: 'rgba(255,255,255, 1', stagger: 1 }
);

const tlHRemove = gsap.timeline({
  scrollTrigger: {
    trigger: '.second-page',
    markers: { startColor: 'pink', endColor: 'pink' },
    scrub: true,
    start: '-20%',
    end: '60%',
  },
});

tlHRemove.to(
  '.highlight',

  { color: 'rgba(255,255,255, 0', stagger: 1 }
);

// Page 3

const tlSplit = gsap.timeline({
  scrollTrigger: {
    trigger: '.third-page',
    start: '-25%',
    end: '30%',
    markers: true,
    scrub: true,
  },
});
tlSplit.fromTo(
  '.product-text-left',
  { x: 30, opacity: 0 },
  { x: -80, opacity: 1 }
),
  '<';
tlSplit.fromTo(
  '.product-text-right',
  { x: -30, opacity: 0 },
  { x: 80, opacity: 1 },
  '<'
);
tlSplit.fromTo('.large-phone', { x: '40%' }, { x: '20%' });
tlSplit.fromTo('.small-phone', { x: '-40%' }, { x: '-20%' }, '<');

const tlSplitPin = gsap.timeline({
  scrollTrigger: {
    trigger: '.third-page',
    pin: true,
    pinSpacing: false,
    start: '0%',
    end: '100%',
  },
});

// Carousel

const swatches = document.querySelectorAll('.swatches img');
const gallery = document.querySelector('.phone-gallery');
const slides = document.querySelectorAll('.phone-gallery-container');

let currentSwatch = 'blue';
let topIndex = 2;

swatches.forEach((swatch, index) => {
  const coord = slides[index].getBoundingClientRect().left;
  swatch.addEventListener('click', (e) => {
    let swatchName = e.target.getAttribute('swatch');
    let closeUp = document.querySelector('.' + swatchName);

    //Check if we are on the same swatch
    if (currentSwatch === swatchName) return;

    gsap.set(closeUp, { zIndex: topIndex });
    gsap.fromTo(
      closeUp,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
      }
    );
    //Gallery
    gsap.to(gallery, { x: -coord, duration: 1, ease: 'back.out(0.5)' });

    // Increment zIndex
    topIndex++;
    currentSwatch = swatchName;
  });
});
