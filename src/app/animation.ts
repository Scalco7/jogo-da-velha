import { trigger, state, style, animate, transition} from '@angular/animations';

export const showButtonGrande =

trigger('showButtonGrande', [
  state('little', style({
    width: '100%',
    height: '100%',
    border: '2px solid var(--branco)',
  })),

  state('big', style({
    width: '115%',
    height: '115%',
    border: 'none',
  })),

  transition('little => big', animate('400ms ease-out')),
  transition('big => little', animate('400ms ease-in')),
])
