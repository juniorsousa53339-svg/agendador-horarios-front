import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacaoPageComponent } from './confirmacao-page.component';

describe('ConfirmacaoPageComponent', () => {
  let component: ConfirmacaoPageComponent;
  let fixture: ComponentFixture<ConfirmacaoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmacaoPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmacaoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
