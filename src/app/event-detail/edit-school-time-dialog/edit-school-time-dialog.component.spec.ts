import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSchoolTimeDialogComponent } from './edit-school-time-dialog.component';

describe('EditSchoolTimeDialogComponent', () => {
  let component: EditSchoolTimeDialogComponent;
  let fixture: ComponentFixture<EditSchoolTimeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSchoolTimeDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSchoolTimeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
