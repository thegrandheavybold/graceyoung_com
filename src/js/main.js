//JS Support check and touch screen check
var html = document.querySelector("html");
  html.classList.remove("no-js");
  html.classList.add("js");

function is_touch_device() {
  return !!('ontouchstart' in window);
}

  if(is_touch_device()) {
    html.classList.add("touch");
  }
  else {
    html.classList.remove("touch");
  }

import 'navigation.js'

//Shrinking Header on Scroll
window.addEventListener('scroll', function(){

  const target = document.querySelector('header');
    var sticky = target.offsetTop + 100;

    if (window.pageYOffset > sticky) {
      target.classList.add('sticky');
    } else {
       target.classList.remove('sticky');
    }

});

//Scroll & Parallax Function
window.addEventListener('scroll', function() {

  const target = document.querySelector('.lax');

  var scrolled = window.pageYOffset;
  var rate = scrolled * .35;

    if (target){
      target.style.transform = 'translate3D(0px, '+rate+'px, 0px)';
    }

});


//Smooth Scroll to Top function
document.querySelector('.scrollUp').addEventListener('click', function(){
  scrollTo(0, 0);
});

//Arrow Scroll +150px function
document.addEventListener('DOMContentLoaded', function() {
  const scrollDown = document.getElementById('scrollDown');
  
  scrollDown.addEventListener('click', function() {
    // Calculate the new scroll position and scroll
    const introSection = document.getElementById('intro');
    if (introSection) {
      const newPosition = introSection.offsetTop + 15;
      window.scrollTo({
        top: newPosition
      });
    }
  });
});

//Fade in when in view Function
const inViewport = (entries) => {
  entries.forEach(entry => {
    entry.target.classList.toggle("is_inview", entry.isIntersecting);
  });
};


const Obs = new IntersectionObserver(inViewport);
const obsOptions = {
  threshold: 1
};

// Attach observer to every [data-inview] element:
const ELs_inViewport = document.querySelectorAll('[data]');
ELs_inViewport.forEach(EL => {
  Obs.observe(EL, obsOptions);
});


import  gsap  from 'gsap';
import  ScrollTrigger  from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

//gsap outofview fadeUp
const oov = gsap.utils.toArray('.oov');
  oov.forEach(oov => {
    gsap.from(oov, {
    y: 150,
    opacity: 0,
      scrollTrigger: {
        trigger: oov,
        scrub: 2,
        end: "bottom 90%"
      }
    })
});

//Paralax
gsap.to(".para", {
  scrollTrigger: {
    scrub: true
  }, 
  y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
  ease: "none"
});

//Swiper js Sliders
import 'swiper-sliders.js'




