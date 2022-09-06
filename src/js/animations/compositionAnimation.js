import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const timeline = gsap.timeline({
  defaults: {
    duration: 4,
  },
});

timeline
  .to('.product-composition .left-composition', {
    xPercent: '60',
  })
  .to(
    '.product-composition .right-composition',
    {
      xPercent: '-60',
    },
    '-=4'
  );

ScrollTrigger.create({
  animation: timeline,
  trigger: '.product-composition',
  invalidateOnRefresh: true,
  scrub: true,
});
