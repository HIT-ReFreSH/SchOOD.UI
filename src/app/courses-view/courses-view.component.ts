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
      Time: 'Test Time',
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


