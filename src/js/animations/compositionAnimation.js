import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const timeline = gsap.timeline({
  defaults: {
    duration: 2,
    // ease: 'power1.out',
  },
});

timeline
  .to('.product-composition .left-composition', {
    xPercent: '40',
  })
  .to(
    '.product-composition .right-composition',
    {
      xPercent: '-40',
    },
    '-=2'
  );

ScrollTrigger.create({
  animation: timeline,
  trigger: '.product-composition',
  invalidateOnRefresh: true,
  scrub: true,
});
