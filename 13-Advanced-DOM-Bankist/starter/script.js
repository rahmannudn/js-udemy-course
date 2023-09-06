'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
const allButton = document.getElementsByClassName('btn');
const allButtons = document.querySelectorAll('button');
const message = document.createElement('div');
const section1 = document.querySelector('#section--1');
const btnScrollTo = document.querySelector('.btn--scroll-to');

// const navLinks = document.querySelectorAll('.nav__link');
const navLinkContainer = document.querySelector('.nav__links');

const nav = document.querySelector('.nav');
const navItems = document.querySelectorAll('.nav__item');
const navLinks = document.querySelectorAll('nav__link');

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

const dotsContainer = document.querySelector('.dots');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// --- selecting, creating and deleting elements ---
// selecting element
// console.log(document.documentElement);
// console.log(document.head);

// document.getElementById('section--1');
// document.getElementsByTagName('button');
// console.log(allButton);
// console.log(allButtons);

// creating and inserting elements
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookied for improved functionality and analytics. <button class="btn btn--close-cokie">Got It!</button>';
// header.prepend(message);
// header.append(message.cloneNode(true));
// header.before(message);
header.after(message);
const btnCookie = document.querySelector('.btn--close-cokie');
// delete elements
btnCookie.addEventListener('click', function () {
  message.remove();
  // message.parentElement.removeChild(message);
});
// --- end of selecting, creating and deleting elements ---

// --- styles,attributes and classes ---
message.style.backgroundColor = '#37383d';
message.style.padding = '1rem';
message.style.width = '100%';
message.style.margin = '0 auto';
// header.style.height = '93vh';

// console.log(message.style.width);
// console.log(getComputedStyle(btnCookie).backgroundColor);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

header.style.height =
  Number.parseInt(getComputedStyle(header).height, 10) - 100 + 'px';

// set
// document.documentElement.style.setProperty('--color-primary', '#8867bf');
// document.documentElement.style.setProperty('--color-primary-darker', '#6b41af');
// --- end of styles,attributes and classes ---

// -- styles, atributes and classes ---
message.style.backgroundColor = '#37383d';
message.style.width = '100%';

// console.log(message.style.color); // its not working because color doesnt declare with inline css
// console.log(message.style.backgroundColor);

// console.log(getComputedStyle(message).color);
message.style.height = parseInt(getComputedStyle(message).height) + 30 + 'px';
// console.log(getComputedStyle(message).height);

// changing the value of css variable
// document.documentElement.style.setProperty('--color-primary', '#109aeb');
const logo = document.querySelector('.nav__logo');
logo.alt = 'logo designed by aman jago';
// console.log(logo.alt);
// console.log(logo.getAttribute('alt'));
// console.log(logo.src);
// console.log(logo.createdBy);
// console.log(logo.getAttribute('createdBy'));

// dataAttributes
// console.log(logo.dataset.createdBy);

// classes
// logo.classList.add();
// logo.classList.remove();
// logo.classList.toggle();
// logo.classList.contains();
// -- end of styles, atributes and classes ---

// --- implementing smooth scrolling ---

btnScrollTo.addEventListener('click', function (e) {
  const secion1Coordinate = section1.getBoundingClientRect();
  // console.log(section1.getBoundingClientRect());
  // console.log(e.target.getBoundingClientRect()); //btnScroolTo Coordinate

  // console.log('current scroll (X/Y)', window.pageXOffset, window.pageYOffset); // a distance from the beginning of page
  // console.log(
  //   'height/width viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  // scrolling
  // window.scrollTo(
  //   window.pageXOffset + secion1Coordinate.left,
  //   window.pageYOffset + secion1Coordinate.top
  // );

  // window.scrollTo({
  //   left: window.pageXOffset + secion1Coordinate.left,
  //   top: window.pageYOffset + secion1Coordinate.top,
  //   behavior: 'smooth',
  // });
  section1.scrollIntoView({ behavior: 'smooth' });
});
// --- end of implementing smooth scrolling ---

// --- types of event and event handler ---
// const h1 = document.querySelector('h1');
// const alertH1 = function () {
//   alert('Mouseenter event with addeventlistener');

//   h1.removeEventListener('mouseenter', alertH1);
// };

// h1.addEventListener('mouseenter', alertH1);

// h1.onmouseenter = function () {
//   alert('Mouseenter event');
// };
// --- end of types of event and event handler ---

// --- event propagation in practice ---
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector('.nav__item').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log(getComputedStyle(this).backgroundColor);
//   // e.cancelBubble = 'true';
//   // e.stopPropagation();
//   console.log('item', e.target);
// });
// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('nav', e.target);
//   },
//   true //activating the capturing event
// );
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   this.style.padding = '20px';
//   console.log('container', e.target);
// });

// --- end of event propagation in practice ---

// --- event delegation ---

// not efficient way
// navLinks.forEach(el =>
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     // e.scrollIntoView({ behavior: 'smooth' });
//     // console.log(this.getAttribute('href'));
//     const id = this.getAttribute('href');
//     if (id !== '#') {
//       const sectionTarget = document.querySelector(id);
//       sectionTarget.scrollIntoView({ behavior: 'smooth' });
//     }
//     // console.log(sectionTarget);
//   })
// );

// efficient way (using event deligation techinique)
// 1. add event listener to common parent element
// 2. determine what element originated the event

// navLinkContainer.addEventListener('click', function (e) {
//   e.preventDefault();
//   // console.log(e.target);

//   // matching strategy
//   if (e.target.classList.contains('nav__link')) {
//     // console.log(e.target);
//     const id = e.target.getAttribute('href');
//     if (id !== '#') {
//       const sectionTarget = document.querySelector(id);
//       sectionTarget.scrollIntoView({ behavior: 'smooth' });
//     }
//   }
// });

// --- end of event delegation ---
// --- dom traversing ---
// const h1 = document.querySelector('h1');

// going downwards : child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';

// goind upwards : parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)';

// going sideways : siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);
// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(el => {
//   if (el !== h1) el.style.transform = 'scale(.5)';
// });
// --- end of dom traversing ---
// --- tabbed componnent ---

tabsContainer.addEventListener('click', function (e) {
  // const clicked = e.target.classList.contains('btn')
  //   ? e.target
  //   : e.target.parentElement;

  const clicked = e.target.closest('.operations__tab');

  // guard clause
  if (!clicked) return;

  // looping to remove active classes
  tabs.forEach(el => el.classList.remove('operations__tab--active'));
  tabsContent.forEach(el => el.classList.remove('operations__content--active'));

  // activating div
  clicked.classList.add('operations__tab--active');

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');

  // dom traversy way
  //   clicked.parentElement.parentElement
  //     .querySelector(`.operations__content--${clicked.dataset.tab}`)
  //     .classList.add('operations__content--active');
});

// --- end of tabbed componnent ---
// --- passing arguments to event handlers ---

// refactoring
const handlerHover = function (e) {
  const target = e.target;
  if (target.classList.contains('nav__link')) {
    const siblings = target.closest('.nav').querySelectorAll('.nav__link');
    const logo = target.closest('.nav').querySelector('#logo');

    siblings.forEach(el => {
      if (el !== target) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handlerHover.bind(0.5));

nav.addEventListener('mouseout', handlerHover.bind(1));
// --- end of passing arguments to event handlers ---

// --- implementing a sticky navigation ---
// window.addEventListener('scroll', function (e) {
//   const initialCoords = section1.getBoundingClientRect();
//   if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });
// --- end of implementing a sticky navigation ---

// --- stiky nav using intersection observer API ---
// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };
// const obsOptions = {
//   root: null,
//   thresshold: [0, 0.2],
// };
// const observer = new IntersectionObserver(obsOptions, obsCallback);
// observer.observe(section1);
// console.log(observer);

const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.intersectionRatio) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

// --- end of stiky nav using intersection observer API ---
// --- reveal section ---

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.2,
});

allSections.forEach(el => {
  sectionObserver.observe(el);
  el.classList.add('section--hidden');
});

// --- end of reveal section ---

// --- lazy loading image ---
const lazyImages = document.querySelectorAll('img[data-src]');

const lazyImageLoading = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const lazyImageObsever = new IntersectionObserver(lazyImageLoading, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

lazyImages.forEach(img => lazyImageObsever.observe(img));

// --- end of lazy loading image ---

// --- building slider component ---
const slider = function () {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const btnSlideRight = document.querySelector('.slider__btn--right');
  const btnSlideLeft = document.querySelector('.slider__btn--left');

  let curSlide = 0;

  const goToSlide = function (slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = slides.length - 1;
    } else curSlide--;

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const nextSlide = function () {
    if (curSlide === slides.length - 1) {
      curSlide = 0;
    } else curSlide++;

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  btnSlideLeft.addEventListener('click', prevSlide);

  btnSlideRight.addEventListener('click', nextSlide);

  // console.log(slides);
  // --- end of building slider component ---

  // --- building a slider component part : 2 ---
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  });

  const btnsDot = document.querySelectorAll('.dots__dot');
  const createDots = function () {
    slides.forEach((_, i) => {
      dotsContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide='${i}'><button>`
      );
    });
    document.querySelector('.dots__dot').classList.add('dots__dot--active');
  };

  const init = function () {
    goToSlide(0);
    createDots();
  };
  init();

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));
    document
      .querySelector(`.dots__dot[data-slide='${slide}']`)
      .classList.add('dots__dot--active');
  };

  dotsContainer.addEventListener('click', function (e) {
    const target = e.target;
    btnsDot.forEach(btn => btn.classList.remove('dots__dot--active'));
    if (target.classList.contains('dots__dot')) {
      const { slide } = target.dataset;
      target.classList.add('dots__dot--active');
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();
// --- end of building a slider component part : 2 ---
