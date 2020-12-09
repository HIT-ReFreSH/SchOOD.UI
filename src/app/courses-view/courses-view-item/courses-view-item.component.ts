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
import {CourseService} from '../../services/course.service';
import {CourseSummary} from '../../models/course-summary';
import {CourseSource} from '../../models/course-source.enum';
import {MessageService} from 'src/app/services/message.service';

@Component({
  selector: 'app-courses-view-item',
  templateUrl: './courses-view-item.component.html',
  styleUrls: ['./courses-view-item.component.css']
})
export class CoursesViewItemComponent implements OnInit
{
  LOCAL = CourseSource.Local;

  @Input()
  Course!: CourseSummary;
  @Output()
  Reload = new EventEmitter();

  constructor(public courseService: CourseService,
              private msg: MessageService)
  {
  }


  toggleHidden(): void
  {
    this.courseService.getCourse(this.Course.id)
      .subscribe(c =>
      {
        c.hidden = !c.hidden;
        this.courseService.updateCourse(c).subscribe(() =>
        {
          if (this.Course.source === CourseSource.Shared)
          {
            this.Reload.emit();
          } else
          {
            this.Course.hidden = !this.Course.hidden;
          }
          this.msg.addOk();
        });
      });
  }

  toggleNotify(): void
  {
    this.courseService.getCourse(this.Course.id)
      .subscribe(c =>
      {
        c.enableNotification = !c.enableNotification;
        this.courseService.updateCourse(c).subscribe(() =>
        {
          this.Course.enableNotification = !this.Course.enableNotification;
          this.msg.addOk();
        });
      });
  }

  ngOnInit(): void
  {

  }

}
