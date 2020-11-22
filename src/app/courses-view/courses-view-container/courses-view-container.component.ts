import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {CourseService} from 'src/app/services/course.service';
import {Course} from '../../models/course';

@Component({
  selector: 'app-courses-view-container',
  templateUrl: './courses-view-container.component.html',
  styleUrls: ['./courses-view-container.component.css']
})
export class CoursesViewContainerComponent implements OnInit
{
  public courses: string[] | undefined;

  constructor(
    private route: ActivatedRoute,
    public courseService: CourseService
  )
  {
  }

  ngOnInit(): void
  {
    const opt = this.route.snapshot.paramMap.get('opt');
    console.log(typeof opt === 'string' ? opt : 'null');

    switch (opt)
    {
      case 'All':
        this.courseService.getAllCourses().subscribe(c => this.courses = c);
        break;
      case 'Linked':
        this.courseService.getLinkedCourses().subscribe(c => this.courses = c);
        break;
      case 'Local':
        this.courseService.getLocalCourses().subscribe(c => this.courses = c);
        break;
      case 'Hidden':
        this.courseService.getHiddenCourses().subscribe(c => this.courses = c);
        break;
      case null:
      default:
        this.courseService.getCourses().subscribe(c => this.courses = c);
        break;
    }
  }

}
