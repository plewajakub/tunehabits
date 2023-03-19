import { trigger, transition, style, animate } from '@angular/animations';

export const fadeInSlideRightAnimation = trigger('fadeInSlideRightComponent', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateX(-100%)'
    }),
    animate('1s ease-out', style({
      opacity: 1,
      transform: 'translateX(0%)'
    }))
  ]),
  transition(':leave', [
    animate('1s ease-in', style({
      opacity: 0,
      transform: 'translateX(-100%)'
    }))
  ])
]);