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
import {Component, OnDestroy, OnInit} from '@angular/core';
import {Course} from '../models/course';
import {CourseSource} from '../models/course-source.enum';
import {EventType} from '../models/event-type.enum';
import {DatetimeService} from '../services/datetime.service';
import {Location} from '@angular/common';
import {CourseService} from '../services/course.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit, OnDestroy
{


  LOCAL = CourseSource.Local;
  course: Course = {
    source: CourseSource.Local,
    events: [
      {
        startTime: new Date('18:00 2020/11/30').valueOf(),
        hidden: false,
        teacher: 'Test-Teacher',
        id: 'aaa',
        location: '正心34',
        duration: 120,
        type: EventType.Default
      },
      {
        startTime: new Date('18:00 2020/11/29').valueOf(),
        hidden: true,
        teacher: 'Test-Teacher',
        id: 'bbb',
        location: '正心31',
        duration: 120,
        type: EventType.Default
      }
    ],
    hidden: false,
    enableNotification: false,
    courseName: 'TestCourse',
    id: 'ccc'
  };
  private routerSubscription!: Subscription;

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
    this.course.courseName = newCourseName;
  }

  constructor(public datetime: DatetimeService,
              public location: Location,
              public courseService: CourseService,
              private route: ActivatedRoute,
              private router: Router)
  {
  }

  public Load(): void
  {
    // @ts-ignore
    const id = this.route.snapshot.paramMap.get('id');
    this.router.onSameUrlNavigation = 'reload';
    if (typeof id === 'string')
    {
      this.courseService.getCourse(id).subscribe(c => this.course = c);
    }


  }

  ngOnInit(): void
  {
    this.routerSubscription = this.router.events.subscribe((event) =>
    {
      if (event instanceof NavigationEnd)
      {
        this.Load();
      }
    });
    this.Load();
  }

  ngOnDestroy(): void
  {
    this.routerSubscription.unsubscribe();
  }

}
