import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent {


  fase: 'loading' | 'logo' = 'loading';

constructor(private router: Router) {

  setTimeout(() => {
    this.fase = 'logo';

    setTimeout(() => {
      this.router.navigate(['/cliente/agendar']);
    }, 2000);

  }, 3000);
}
ngOnInit() {
  setTimeout(() => {
    this.router.navigate(['/cliente/agendar/servicos']);
  }, 5000);
}
}
