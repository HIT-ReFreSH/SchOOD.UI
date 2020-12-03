import {Component, OnInit} from '@angular/core';
import { Course } from '../models/course';
import { Event } from '../models/event';
import { CourseSource } from '../models/course-source.enum';
import { EventType } from '../models/event-type.enum';
import { DatetimeService } from '../services/datetime.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit
{

  LOCAL = CourseSource.Local;
  events: Event[] = [
    {
      StartTime: new Date('18:00 2020/11/30'),
      Hidden: false,
      Teacher: 'Test-Teacher',
      EventId: 'aaa',
      Location: '正心34',
      CourseId: 'ccc',
      EventDuration: 120,
      Type: EventType.Default
    },
    {
      StartTime: new Date('18:00 2020/11/29'),
      Hidden: true,
      Teacher: 'Test-Teacher',
      EventId: 'bbb',
      Location: '正心31',
      CourseId: 'ccc',
      EventDuration: 120,
      Type: EventType.Default
    }
  ];
  course: Course = {
    Source: CourseSource.Local,
    Events: ['aaa', 'bbb'],
    Hidden: false,
    EnableNotification: false,
    CourseName: 'TestCourse',
    CourseId: 'ccc'
  };

  public FormatType(type: EventType): string
  {
    switch (type)
    {
      case EventType.Default:
        return '课程';
      case EventType.Experiment:
        return '实验';
      case EventType.Exam:
        return '考试';
    }
  }

  public updateCourseName(newCourseName: string): void
  {
    this.course.CourseName = newCourseName;
  }

  constructor(public datetime: DatetimeService, public location: Location)
  {
  }

  ngOnInit(): void
  {
  }

}
