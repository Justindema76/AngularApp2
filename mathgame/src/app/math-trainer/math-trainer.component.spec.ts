import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathTrainerComponent } from './math-trainer.component';

describe('MathTrainerComponent', () => {
  let component: MathTrainerComponent;
  let fixture: ComponentFixture<MathTrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MathTrainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MathTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
