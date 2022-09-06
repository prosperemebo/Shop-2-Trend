import barba from '@barba/core';
import gsap from 'gsap';
import animationEnter from './animations/animationEnter';
import './animations/compositionAnimation';

barba.init({
  transitions: [
    {
      once({ next }) {
        gsap.set('.header .text-head', {
          opacity: '0',
          y: '20%',
          onComplete: () => animationEnter(next.container),
        });
      },
    },
  ],
});
