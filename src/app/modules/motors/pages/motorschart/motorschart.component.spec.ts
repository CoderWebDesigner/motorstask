import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorschartComponent } from './motorschart.component';

describe('MotorschartComponent', () => {
  let component: MotorschartComponent;
  let fixture: ComponentFixture<MotorschartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorschartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorschartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
