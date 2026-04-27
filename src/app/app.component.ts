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

      // 🔥 animação melhorada (fade + leve movimento)
      transition('* <=> *', [
        style({ opacity: 0, transform: 'translateY(10px)' }),

        animate(
          '250ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        )
      ])

    ])
  ]
})
export class AppComponent {

  animationState = 0;

  onActivate() {
    this.animationState++;
  }

}
