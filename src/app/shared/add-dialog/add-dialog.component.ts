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
import {CourseService} from 'src/app/services/course.service';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent implements OnInit
{
  @Input()
  ComponentId!: string;
  courseId = '';
  courseSummary = '点击输入框右侧按钮可以查看摘要哦~';
  courseSummaryError = true;
  scheduleId = '';
  scheduleSummary = '点击输入框右侧按钮可以查看摘要哦~';
  scheduleSummaryError = true;

  @Output()
  public Added = new EventEmitter();

  public getCourseSummary(): void
  {
    this.courseService.peekCourse(this.courseId).subscribe(
      s =>
      {
        if (s === '')
        {
          this.courseSummaryError = true;
          this.courseSummary = '无法获取课程信息。';
        } else
        {
          this.courseSummaryError = false;
          this.courseSummary = s;
        }
      }
    );
  }

  public getScheduleSummary(): void
  {
    this.courseService.peekSchedule(this.scheduleId).subscribe(
      s =>
      {
        if (s === '')
        {
          this.scheduleSummaryError = true;
          this.scheduleSummary = '无法获取课表信息。';
        } else
        {
          this.scheduleSummaryError = false;
          this.scheduleSummary = s;
        }
      }
    );
  }


  constructor(private courseService: CourseService)
  {
  }

  ngOnInit(): void
  {
  }

}
