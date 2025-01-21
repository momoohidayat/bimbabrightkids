// menu toggle
const menuToggle = document.getElementById('menu-toggle');
const mainMenu = document.getElementById('mobile-main-menu');

menuToggle.addEventListener('click', (e) => {
  e.preventDefault();
  if (mainMenu.classList.contains('show')) {
    mainMenu.classList.remove('show');
  } else {
    mainMenu.classList.add('show');
  }
});

// Carousel
const carouselItems = document.querySelectorAll('.carousel-item');
const carouselIndicatorItems = document.querySelectorAll('.carousel-indicator-item');
const carouselNav = document.querySelectorAll('.carousel-nav span');

// current carousel index
let i = 0;

// Promise Sleep
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Carousel Runner
const runCarouselAutoSlide = () => {
  setNextItem();
  animateCarousel();
};

// Carousel Pager
const setNextItem = () => {
  if (i + 1 < carouselItems.length) {
    i++;
    return;
  }

  i = 0;
};

const setPrevItem = () => {
  if (i <= 0) {
    i = carouselItems.length;
  }

  i--;
};

var carouselTimer = setInterval(runCarouselAutoSlide, 5000);

// Carousel Nav
carouselNav.forEach((nav) => {
  nav.addEventListener('click', (e) => {
    e.preventDefault();
    clearInterval(carouselTimer);

    let navType = e.target.getAttribute('data-nav');
    if (navType == null) {
      navType = e.target.parentElement.getAttribute('data-nav');
    }

    if (navType == 'next') {
      setNextItem();
    } else {
      setPrevItem();
    }

    animateCarousel();
    carouselTimer = setInterval(runCarouselAutoSlide, 5000);
  });
});

// Carousel Indicator
carouselIndicatorItems.forEach((indicatorItem) => {
  indicatorItem.addEventListener('click', (e) => {
    e.preventDefault();
    clearInterval(carouselTimer);

    let index = Number(e.target.getAttribute('data-carousel-index'));
    i = index;

    animateCarousel();
    carouselTimer = setInterval(runCarouselAutoSlide, 5000);
  });
});

// Carousel Animation
const animateCarousel = () => {
  Array.from(carouselItems).forEach((item, index) => {
    if (i < carouselItems.length) {
      item.style.transform = `translateX(-${i * 100}%)`;
    }
  });

  Array.from(carouselIndicatorItems).forEach((item, index) => {
    if (index == i) {
      item.classList.replace('bg-slate-200', 'bg-slate-400');
    } else {
      item.classList.replace('bg-slate-400', 'bg-slate-200');
    }
  });
};

// Accordion
const faqTitle = document.querySelectorAll('.faq-title');

// Animate JS
const animationObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-show');
    } else {
      entry.target.classList.remove('animate-show');
    }
  });
});

const animateScaleIn = document.querySelectorAll('.animate');
animateScaleIn.forEach((el) => animationObserver.observe(el));
