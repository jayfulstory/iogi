const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const navMenu = document.querySelector('.nav--menu');
const logo = document.querySelector('.logo--rotate');
const overlay = document.querySelector('.overlay');
const aElems = document.querySelectorAll('nav--menu a');

hamburger.addEventListener('click', () => {
  overlay.classList.remove('on');
  if (nav.classList.contains('open')) {
    nav.classList.add('close');
    setTimeout(() => {
      nav.classList.remove('open');
      nav.classList.remove('close');
    }, 600);
    return;
  }
  nav.classList.add('open');
  overlay.classList.add('on');
});

overlay.addEventListener('click', () => {
  if (nav.classList.contains('open')) {
    nav.classList.add('close');
    setTimeout(() => {
      overlay.classList.remove('on');
      nav.classList.remove('open');
      nav.classList.remove('close');
    }, 600);
    return;
  }
});

window.addEventListener('scroll', () => {
  logo.style.transform = `rotateY(-${scrollY / 4}deg)`;
});

aElems.forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    if (nav.classList.contains('open')) {
      nav.classList.add('close');
      setTimeout(() => {
        overlay.classList.remove('on');
        nav.classList.remove('open');
        nav.classList.remove('close');
      }, 600);
      return;
    }
  });
});
