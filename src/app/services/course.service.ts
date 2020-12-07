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
import {Event} from '../models/event';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseService extends BaseService
{
  private courseUrl = '/Courses';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  public getCourse(id: string): Observable<Course>
  {
    const url = `${this.courseUrl}/${id}`;
    return this.http.get<Course>(url).pipe(
      catchError(this.handleError)
    );


  }

  public getCourseSummary(id: string): Observable<CourseSummary>
  {

    const url = `${this.courseUrl}/Summary/${id}`;
    return this.http.get<CourseSummary>(url).pipe(
      catchError(this.handleError)
    );

  }

  public getEvent(id: string): Observable<Event>
  {

    const url = `${this.courseUrl}/Event/${id}`;
    return this.http.get<Event>(url).pipe(
      catchError(this.handleError)
    );

  }

  public getCourses(): Observable<CourseSummary[]>
  {

    return this.http.get<CourseSummary[]>(this.courseUrl).pipe(
      catchError(this.handleError)
    );

  }

  public getHiddenCourses(): Observable<CourseSummary[]>
  {

    const url = `${this.courseUrl}/Hidden`;
    return this.http.get<CourseSummary[]>(url).pipe(
      catchError(this.handleError)
    );
    // throw new Error();
  }

  public getAllCourses(): Observable<CourseSummary[]>
  {

    const url = `${this.courseUrl}/All`;
    return this.http.get<CourseSummary[]>(url).pipe(
      catchError(this.handleError)
    );
    // throw new Error();
  }

  public getLinkedCourses(): Observable<CourseSummary[]>
  {

    const url = `${this.courseUrl}/Linked`;
    return this.http.get<CourseSummary[]>(url).pipe(
      catchError(this.handleError)
    );
    // throw new Error();
  }

  public getLocalCourses(): Observable<CourseSummary[]>
  {

    const url = `${this.courseUrl}/Local`;
    return this.http.get<CourseSummary[]>(url).pipe(
      catchError(this.handleError)
    );
    // throw new Error();
  }

  public peekCourse(id: string): Observable<string>
  {

    const url = `${this.courseUrl}/PeekCourse?id=${id}`;
    return this.http.get<string>(url).pipe(
      catchError(this.handleError)
    );
    // throw new Error();
  }

  public peekSchedule(id: string): Observable<string>
  {

    const url = `${this.courseUrl}/PeekSchedule?id=${id}`;
    return this.http.get<string>(url).pipe(
      catchError(this.handleError)
    );
    // throw new Error();
  }

  public updateCourse(course: Course): void
  {

    const url = `${this.courseUrl}/${course.Id}`;
    this.http.put(url, course, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  public updateEvent(event: Event): void
  {

    const url = `${this.courseUrl}/${event.Id}`;
    this.http.put(url, event, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  public linkCourse(id: string): void
  {

    const url = `${this.courseUrl}/LinkCourse`;
    this.http.post<Course>(url, id, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  public linkSchedule(id: string): void
  {

    const url = `${this.courseUrl}/LinkSchedule`;
    this.http.post<Course>(url, id, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  constructor(private http: HttpClient)
  {
    super();
  }
}
