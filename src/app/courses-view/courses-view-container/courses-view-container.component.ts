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
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable, of} from 'rxjs';
import {CourseSummary} from '../../models/course-summary';
import {CourseSource} from '../../models/course-source.enum';

@Component({
  selector: 'app-courses-view-container',
  templateUrl: './courses-view-container.component.html',
  styleUrls: ['./courses-view-container.component.css']
})
export class CoursesViewContainerComponent implements OnInit
{
  @Input()
  public Courses$: Observable<CourseSummary[]> = of([
    {
      source: CourseSource.Local,
      hidden: false,
      courseName: 'Test',
      teacher: 'Test Teacher',
      location: '正心11',
      startTime: 'Test Time',
      enableNotification: false,
      id: '0'
    }
  ]);

  @Output()
  Reload = new EventEmitter();

  public Courses: CourseSummary[] = [];

  constructor()
  {
  }

  ngOnInit(): void
  {
    this.Courses$.subscribe(c => this.Courses = c);
  }

}
