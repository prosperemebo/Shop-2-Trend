import gsap from 'gsap';

const animationEnter = (container) => {
  const headText = container.querySelector('.text-head');
  const cols = container.querySelectorAll('.overview .col');

  const timeline = gsap.timeline({
    defaults: {
      duration: 1.8,
      ease: 'power4.out',
    },
  });

  timeline
    .from(cols, {
      opacity: '0',
      y: '20%',
      stagger: 0.15,
      duration: 1.2,
    })
    .to(
      headText,
      {
        opacity: '1',
        y: '%',
      },
      '-=.8'
    );
};

export default animationEnter;
