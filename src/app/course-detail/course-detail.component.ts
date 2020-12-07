/*
Copyright 2020 ReFreSH

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import {Component, OnInit} from '@angular/core';
import { Course } from '../models/course';
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
  course: Course = {
    Source: CourseSource.Local,
    Events: [
      {
        StartTime: new Date('18:00 2020/11/30'),
        Hidden: false,
        Teacher: 'Test-Teacher',
        Id: 'aaa',
        Location: '正心34',
        Duration: 120,
        Type: EventType.Default
      },
      {
        StartTime: new Date('18:00 2020/11/29'),
        Hidden: true,
        Teacher: 'Test-Teacher',
        Id: 'bbb',
        Location: '正心31',
        Duration: 120,
        Type: EventType.Default
      }
    ],
    Hidden: false,
    EnableNotification: false,
    CourseName: 'TestCourse',
    Id: 'ccc'
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
