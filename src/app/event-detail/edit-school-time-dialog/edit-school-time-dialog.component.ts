import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SchoolTime} from '../../models/school-time';

@Component({
  selector: 'app-edit-school-time-dialog',
  templateUrl: './edit-school-time-dialog.component.html',
  styleUrls: ['./edit-school-time-dialog.component.css']
})
export class EditSchoolTimeDialogComponent implements OnInit {
  @Input()
  public Time!: SchoolTime;
  @Input()
  public ComponentId!: string;
  @Output()
  public ValueSubmitted = new EventEmitter();

  public Submit(): void
  {
    this.Time.Export();
    this.ValueSubmitted.emit();
  }
  constructor() {
  }

  ngOnInit(): void {
  }

}
