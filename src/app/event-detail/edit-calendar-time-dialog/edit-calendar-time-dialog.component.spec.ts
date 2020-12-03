import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCalendarTimeDialogComponent } from './edit-calendar-time-dialog.component';

describe('EditCalendarTimeDialogComponent', () => {
  let component: EditCalendarTimeDialogComponent;
  let fixture: ComponentFixture<EditCalendarTimeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCalendarTimeDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCalendarTimeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
