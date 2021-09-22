import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorsCategoriesComponent } from './motors-categories.component';

describe('MotorsCategoriesComponent', () => {
  let component: MotorsCategoriesComponent;
  let fixture: ComponentFixture<MotorsCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorsCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorsCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
