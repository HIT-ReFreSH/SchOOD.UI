import {Component, OnInit} from '@angular/core';
import {SystemService} from '../services/system.service';
import {EventType} from '../models/event-type.enum';
import {DatetimeService} from '../services/datetime.service';
import {SchoolTime} from '../models/school-time';
import {Event} from '../models/event';
import {CalendarTime} from '../models/calendar-time';
import {Location} from '@angular/common';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit
{
  readonly LAB = EventType.Experiment;
  readonly EXAM = EventType.Exam;
  readonly COURSE = EventType.Default;

  event: Event = {
    StartTime: new Date('18:00 2020/11/30'),
    Hidden: false,
    Teacher: 'Test-Teacher',
    EventId: 'aaa',
    Location: '正心34',
    CourseId: 'ccc',
    EventDuration: 120,
    Type: EventType.Default
  };


  constructor(public datetime: DatetimeService,
              private system: SystemService,
              public location: Location)
  {
  }

  schoolTime!: SchoolTime;
  calendarTime!: CalendarTime;

  ngOnInit(): void
  {
    this.schoolTime = new SchoolTime(this.event, this.datetime, this.system);
    this.calendarTime = new CalendarTime(this.event, this.datetime);

  }

}
