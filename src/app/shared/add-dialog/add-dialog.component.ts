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
import {MessageService} from 'src/app/services/message.service';
import {QueryResult} from '../../models/query-result.enum';

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
        switch (s.result)
        {
          case QueryResult.Available:
            this.courseSummaryError = false;
            this.courseSummary = s.value;
            break;
          case QueryResult.Forbidden:
            this.courseSummaryError = true;
            this.courseSummary = '该课程已经被禁用';
            this.messageService.addError('查询失败：课程已禁用');
            break;
          case QueryResult.NotFound:
            this.courseSummaryError = true;
            this.courseSummary = '未找到该课程';
            this.messageService.addError('查询失败：课程未找到');
            break;
        }
      }
    );
  }

  public getScheduleSummary(): void
  {
    this.courseService.peekSchedule(this.scheduleId).subscribe(
      s =>
      {
        switch (s.result)
        {
          case QueryResult.Available:
            this.scheduleSummaryError = false;
            this.scheduleSummary = s.value;
            break;
          case QueryResult.Forbidden:
            this.scheduleSummaryError = true;
            this.scheduleSummary = '该课表已经被禁用';
            this.messageService.addError('查询失败：课表已禁用');
            break;
          case QueryResult.NotFound:
            this.scheduleSummaryError = true;
            this.scheduleSummary = '未找到该课表';
            this.messageService.addError('查询失败：课表未找到');
            break;
        }
      }
    );
  }

  public addCourse(): void
  {
    this.courseService.linkCourse(this.courseId).subscribe(() =>
    {
      this.messageService.addOk(`成功添加课程: ${this.courseId}`);
      this.Added.emit();
    });
  }

  public addSchedule(): void
  {
    this.courseService.linkSchedule(this.scheduleId).subscribe(() =>
    {
      this.messageService.addOk(`成功添加课表: ${this.scheduleId}`);
      this.Added.emit();
    });
  }

  constructor(private courseService: CourseService, private messageService: MessageService)
  {
  }

  ngOnInit(): void
  {
  }

}
