import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {CourseService} from '../services/course.service';
import {Observable, of, Subscription} from 'rxjs';
import {CourseSummary} from '../models/course-summary';
import {CourseSource} from '../models/course-source.enum';

@Component({
  selector: 'app-courses-view',
  templateUrl: './courses-view.component.html',
  styleUrls: ['./courses-view.component.css']
})
export class CoursesViewComponent implements OnInit, OnDestroy
{

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
  private filter: string | null = 'Available';
  private routerSubscription!: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private courseService: CourseService)
  {
  }

  ngOnDestroy(): void
  {
    this.routerSubscription.unsubscribe();
  }


  public Load(): void
  {
    this.filter = this.route.snapshot.paramMap.get('filter');
    this.router.onSameUrlNavigation = 'reload';
    console.log('onload');
    console.log(this.filter);
    switch (this.filter)
    {
      case 'Available':

      case 'All':
      case 'Local':
      case 'Hidden':
      case 'Shared':
        break;
      default:
        const del = this.router.navigateByUrl('/Courses/Available');

        break;

    }
  }

  ngOnInit(): void
  {
    this.routerSubscription = this.router.events.subscribe((event) =>
    {
      if (event instanceof NavigationEnd)
      {
        this.Load();
      }
    });
    this.Load();
  }
}


