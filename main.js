const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const navMenu = document.querySelector('.nav--menu');
const overlay = document.querySelector('.overlay');
const aElems = document.querySelectorAll('.menu--item');
const logo = document.querySelector('.logo--rotate');

// MENU

function menuHandler() {
  if (nav.classList.contains('open')) {
    nav.classList.add('close');
    setTimeout(() => {
      overlay.classList.remove('on');
      nav.classList.remove('open');
      nav.classList.remove('close');
    }, 600);
    return;
  }
}

hamburger.addEventListener('click', () => {
  menuHandler();
  nav.classList.add('open');
  overlay.classList.add('on');
});

overlay.addEventListener('click', () => {
  menuHandler();
});

aElems.forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    menuHandler();
  });
});

// LOGO

window.addEventListener('scroll', () => {
  logo.style.transform = `rotateY(-${scrollY / 4}deg)`;
});
