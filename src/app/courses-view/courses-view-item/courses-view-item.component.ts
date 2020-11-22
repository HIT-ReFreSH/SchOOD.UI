import {Component, OnInit, Input} from '@angular/core';
import {Course} from 'src/app/models/course';
import {CourseService} from '../../services/course.service';

@Component({
  selector: 'app-courses-view-item',
  templateUrl: './courses-view-item.component.html',
  styleUrls: ['./courses-view-item.component.css']
})
export class CoursesViewItemComponent implements OnInit
{
  @Input()
  courseId!: string;

  public Course: Course | undefined;

  constructor(public courseService: CourseService)
  {
  }

  ngOnInit(): void
  {
    this.courseService.getCourse(this.courseId)
      .subscribe(c => this.Course = c);
  }

}
