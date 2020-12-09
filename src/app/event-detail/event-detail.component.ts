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
import {SystemService} from '../services/system.service';
import {EventType} from '../models/event-type.enum';
import {DatetimeService} from '../services/datetime.service';
import {SchoolTime} from '../models/school-time';
import {Event} from '../models/event';
import {CalendarTime} from '../models/calendar-time';
import {Location} from '@angular/common';
import {MessageService} from '../services/message.service';
import {CourseService} from '../services/course.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit, OnDestroy
{
  readonly LAB = EventType.Experiment;
  readonly EXAM = EventType.Exam;
  readonly COURSE = EventType.Default;
  private routerSubscription!: Subscription;

  event!: Event;


  constructor(public datetime: DatetimeService,
              private system: SystemService,
              public location: Location,
              private msg: MessageService,
              private route: ActivatedRoute,
              private router: Router,
              private courseService: CourseService)
  {
  }

  schoolTime!: SchoolTime;
  calendarTime!: CalendarTime;

  ngOnInit(): void
  {
    this.routerSubscription = this.router.events.subscribe((event) =>
    {
      if (event instanceof NavigationEnd)
      {
        window.location.reload();
      }
    });
    this.Load();
  }

  ngOnDestroy(): void
  {
    this.routerSubscription.unsubscribe();
  }


  toggleHidden(): void
  {
    const e = Object.assign({}, this.event);
    e.hidden = !e.hidden;
    this.courseService.updateEvent(e).subscribe(() =>
    {
      this.event = e;
      this.msg.addOk();
    });
  }

  public updateEvent(e: Event): void
  {
    this.courseService.updateEvent(e).subscribe(() =>
    {
      this.event = e;
      this.msg.addOk();
    });
  }

  public updateEventLocation(s: string): void
  {
    const e = Object.assign({}, this.event);
    e.location = s;
    this.updateEvent(e);

  }

  public updateEventTeacher(s: string): void
  {
    const e = Object.assign({}, this.event);
    e.teacher = s;
    this.updateEvent(e);

  }

  public Load(): void
  {
    const id = this.route.snapshot.paramMap.get('id');
    this.router.onSameUrlNavigation = 'reload';
    if (typeof id === 'string')
    {
      this.courseService.getEvent(id).subscribe(e =>
      {
        this.event = e;
        this.schoolTime = new SchoolTime(this.event, this.datetime, this.system);
        this.calendarTime = new CalendarTime(this.event, this.datetime);
      });
    }
  }
}
