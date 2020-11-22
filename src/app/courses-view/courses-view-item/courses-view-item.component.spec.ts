import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesViewItemComponent } from './courses-view-item.component';

describe('CoursesViewItemComponent', () => {
  let component: CoursesViewItemComponent;
  let fixture: ComponentFixture<CoursesViewItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesViewItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesViewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
