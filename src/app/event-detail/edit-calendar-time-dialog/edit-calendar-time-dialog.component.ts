import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CalendarTime} from '../../models/calendar-time';


@Component({
  selector: 'app-edit-calendar-time-dialog',
  templateUrl: './edit-calendar-time-dialog.component.html',
  styleUrls: ['./edit-calendar-time-dialog.component.css']
})
export class EditCalendarTimeDialogComponent implements OnInit
{
  @Input()
  public Time!: CalendarTime;
  @Input()
  public ComponentId!: string;
  @Output()
  public ValueSubmitted = new EventEmitter();

  constructor()
  {
  }

  public Submit(): void
  {
    this.Time.Export();
    this.ValueSubmitted.emit();
  }

  ngOnInit(): void
  {
  }

}
