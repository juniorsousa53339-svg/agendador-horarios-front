import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div [@fade]="animationState">
      <router-outlet (activate)="onActivate()"></router-outlet>
    </div>
  `,
  animations: [
    trigger('fade', [
      transition('* => *', [
        style({ opacity: 0 }),
        animate('200ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class AppComponent {

  animationState = 0;

  // toda vez que muda de rota, força a animação
  onActivate() {
    this.animationState++;
  }

}
