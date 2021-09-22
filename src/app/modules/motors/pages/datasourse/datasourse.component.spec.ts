import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasourseComponent } from './datasourse.component';

describe('DatasourseComponent', () => {
  let component: DatasourseComponent;
  let fixture: ComponentFixture<DatasourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatasourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
