import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataHorarioComponent } from './data-horario.component';

describe('DataHorarioComponent', () => {
  let component: DataHorarioComponent;
  let fixture: ComponentFixture<DataHorarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataHorarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
