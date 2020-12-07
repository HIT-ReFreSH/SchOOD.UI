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
import {Component, OnInit, Input} from '@angular/core';
import {CourseService} from '../../services/course.service';
import {CourseSummary} from '../../models/course-summary';
import {CourseSource} from '../../models/course-source.enum';

@Component({
  selector: 'app-courses-view-item',
  templateUrl: './courses-view-item.component.html',
  styleUrls: ['./courses-view-item.component.css']
})
export class CoursesViewItemComponent implements OnInit
{
  LOCAL = CourseSource.Local;

  @Input()
  Course: CourseSummary = {
    Source: CourseSource.Local,
    Hidden: false,
    CourseName: 'Test',
    Teacher: 'Test Teacher',
    Location: '正心11',
    Time: 'Test Time',
    EnableNotification: false,
    Id: '0'
  };

  constructor(public courseService: CourseService)
  {
  }

  ngOnInit(): void
  {

  }

}
