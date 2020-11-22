import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesViewContainerComponent } from './courses-view-container.component';

describe('CoursesViewContainerComponent', () => {
  let component: CoursesViewContainerComponent;
  let fixture: ComponentFixture<CoursesViewContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesViewContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesViewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
