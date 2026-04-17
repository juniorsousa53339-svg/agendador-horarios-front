import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading',
  standalone: true,
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss',
})
export class LoadingComponent implements OnInit {
  private readonly router = inject(Router);

  ngOnInit(): void {
    // Simulação de bootstrap inicial do app (futuro: preload real)
    setTimeout(() => {
      this.router.navigateByUrl('/agendar');
    }, 1200);
  }
}
