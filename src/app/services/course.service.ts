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
import {Injectable} from '@angular/core';
import {BaseService} from './base.service';
import {Course} from '../models/course';
import {CourseSummary} from '../models/course-summary';
import {Observable, of} from 'rxjs';
import {CourseSource} from '../models/course-source.enum';

@Injectable({
  providedIn: 'root'
})
export class CourseService extends BaseService
{
  public getCourse(id: string): Observable<Course>
  {
    // TODO
    throw new Error();
  }

  public getCourseSummary(id: string): Observable<CourseSummary>
  {
    // TODO
    throw new Error();
  }

  public getEvent(id: string): Observable<Event>
  {
    // TODO
    throw new Error();
  }

  public getCourses(): Observable<string[]>
  {
    // TODO
    throw new Error();
  }

  public getHiddenCourses(): Observable<string[]>
  {
    // TODO
    throw new Error();
  }

  public getAllCourses(): Observable<string[]>
  {
    // TODO
    throw new Error();
  }

  public getLinkedCourses(): Observable<string[]>
  {
    // TODO
    throw new Error();
  }

  public getLocalCourses(): Observable<string[]>
  {
    // TODO
    throw new Error();
  }

  public peekCourse(id: string): Observable<string>
  {
    // TODO
    throw new Error();
  }

  public peekSchedule(id: string): Observable<string>
  {
    // TODO
    throw new Error();
  }

  public updateCourse(course: Course): void
  {
    // TODO
  }

  public updateEvent(course: Event): void
  {
    // TODO
  }

  public linkCourse(id: string): void
  {
    // TODO
  }

  public linkSchedule(id: string): void
  {
    // TODO
  }

  constructor()
  {
    super();
  }
}
