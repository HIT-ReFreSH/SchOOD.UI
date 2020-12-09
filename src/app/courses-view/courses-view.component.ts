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
import {Component, NgZone, OnDestroy, OnInit} from '@angular/core';
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

  constructor(private route: ActivatedRoute,
              private router: Router,
              private courseService: CourseService)
  {
  }

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
  filter: string | null = 'Available';
  private routerSubscription!: Subscription;

  count = 0;

  location = window.location;

  ngOnDestroy(): void
  {
    this.routerSubscription.unsubscribe();
  }

  public Load(): void
  {

    this.filter = this.route.snapshot.paramMap.get('filter');
    this.router.onSameUrlNavigation = 'reload';
    switch (this.filter)
    {
      case 'Available':
        this.Courses$ = this.courseService.getCourses();
        break;
      case 'All':
        this.Courses$ = this.courseService.getAllCourses();
        break;
      case 'Local':
        this.Courses$ = this.courseService.getLocalCourses();
        break;
      case 'Hidden':
        this.Courses$ = this.courseService.getHiddenCourses();
        break;
      case 'Shared':
        this.Courses$ = this.courseService.getLinkedCourses();
        break;
      default:
        this.router.navigateByUrl('/Courses/Available');
        break;
    }
    this.Courses$.subscribe(c => this.count = c.length);
  }

  ngOnInit(): void
  {
    this.routerSubscription = this.router.events.subscribe((event) =>
    {
      if (event instanceof NavigationEnd)
      {
        window.location.reload();
      }
    });
    this.Load();
  }
}


