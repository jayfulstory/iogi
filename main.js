const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const navMenu = document.querySelector('.nav--menu');
const logo = document.querySelector('.logo--rotate');
const overlay = document.querySelector('.overlay');

hamburger.addEventListener('click', () => {
  overlay.classList.remove('on');
  if (nav.classList.contains('open')) {
    nav.classList.add('close');
    // nav.classList.add('open');
    setTimeout(() => {
      nav.classList.remove('open');
      nav.classList.remove('close');
      // nav.style.display = 'none';
    }, 500);
    return;
  }
  // nav.style.display = 'block';
  nav.classList.add('open');
  overlay.classList.add('on');
});

overlay.addEventListener('click', () => {
  overlay.classList.remove('on');
  if (nav.classList.contains('open')) {
    nav.classList.add('close');
    // nav.classList.add('open');
    setTimeout(() => {
      nav.classList.remove('open');
      nav.classList.remove('close');
      // nav.style.display = 'none';
    }, 500);
    return;
  }
});

window.addEventListener('scroll', () => {
  logo.style.transform = `rotateY(-${scrollY / 4}deg)`;
  console.log(innerWidth);
  // if (innerWidth < 768) {
  //   logo.style.transform = `rotateY(-${scrollY / 2}deg)`;
  // } else {
  //   logo.style.transform = `rotateX(-${scrollY / 2}deg)`;
  // }
});
