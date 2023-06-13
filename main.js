const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const logo = document.querySelector('.logo--rotate');

hamburger.addEventListener('click', () => {
  if (nav.classList.contains('open')) {
    nav.classList.add('close');
    nav.classList.add('open');
    setTimeout(() => {
      nav.classList.remove('open');
      nav.classList.remove('close');
    }, 500);
    return;
  }
  nav.classList.add('open');
});

window.addEventListener('scroll', () => {
  logo.style.transform = `rotateY(${scrollY / 2}deg)`;
});
