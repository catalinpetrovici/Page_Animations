const tl = gsap.timeline({
  default: { duration: 0.35, ease: 'Power2.easeOut' },
});

const home = document.querySelector('.home');
const notifications = document.querySelector('.notification');
const messages = document.querySelector('.messages');

// Home Animation
gsap.set('.feather', { scale: 0, transformOrigin: 'center' });
home.addEventListener('click', () => {
  // prettier-ignore
  gsap.fromTo('.home-svg', {scale: 1}, {scale: 0.9, yoyo: true, repeat:1})
  // prettier-ignore
  gsap.fromTo('.feather',{ y: -5, scale: 0 },{ y: 20, scale: 1.5, duration: 1, stagger: 0.3});
  gsap.fromTo('.right-feather', { x: 0 }, { x: 5 });
});

// Notification Animation
gsap.set('.bell', { transformOrigin: 'top center' });
gsap.set('.ringer', { transformOrigin: 'top center' });
gsap.set('.wave', { opacity: 0, transformOrigin: 'bottom' });
notifications.addEventListener('click', () => {
  // prettier-ignore
  gsap.fromTo('.bell',{ rotation: -5 },{ rotation: 0, duration: 2, ease: 'elastic.out(5, 0.2)' });
  // prettier-ignore
  gsap.fromTo('.ringer',{ rotation: -3, x:0.5 },{ rotation: 0,x:0, duration: 1, ease: 'elastic.out(5, 0.2)' });
  // prettier-ignore
  gsap.fromTo('.wave',{ scale: 0, opacity: 1},{ scale: 1.3, opacity: 0, duration: 1});
});

// Messages Animation
gsap.set('.flap', { transformOrigin: 'top' });

messages.addEventListener('click', () => {
  tl.fromTo('.messages-svg', { scale: 1 }, { scale: 0.9 });
  tl.fromTo('.flap', { scale: 1 }, { scale: -1 }, '<50%');
  tl.fromTo('.messages-svg', { scale: 0.9 }, { scale: 1 }, '<50%');
  // prettier-ignore

  tl.fromTo('.note',{ y: 0, opacity: 1 },{ y: -40, opacity: 0, duration: 0.75 });
  tl.to('.flap', { scale: 1 }, '<50%');
});
