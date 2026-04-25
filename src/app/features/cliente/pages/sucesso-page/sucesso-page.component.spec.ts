import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessoPageComponent } from './sucesso-page.component';

describe('SucessoPageComponent', () => {
  let component: SucessoPageComponent;
  let fixture: ComponentFixture<SucessoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SucessoPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SucessoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
