import {Component, OnInit, Input} from '@angular/core';
import {Course} from 'src/app/models/course';
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
    StartTime: 'Test Time',
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
