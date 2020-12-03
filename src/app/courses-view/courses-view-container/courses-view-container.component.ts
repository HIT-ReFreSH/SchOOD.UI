import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable, of, Subscription} from 'rxjs';
import {CourseService} from 'src/app/services/course.service';
import {Course} from '../../models/course';
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
      Source: CourseSource.Local,
      Hidden: false,
      CourseName: 'Test',
      Teacher: 'Test Teacher',
      Location: '正心11',
      StartTime: 'Test Time',
      EnableNotification: false,
      Id: '0'
    }
  ]);

  constructor()
  {
  }

  ngOnInit(): void
  {

  }

}
