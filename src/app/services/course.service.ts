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
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Course } from '../models/course';
import { CourseSummary } from '../models/course-summary';
import { Observable, of } from 'rxjs';
import { CourseSource } from '../models/course-source.enum';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CourseService extends BaseService {
  private courseUrl = '/Courses';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private id = '';
  private itemid = '';
  public getCourse(id: string): Observable<Course> {
    // TODO
    this.id = id;
    const url = `${this.courseUrl}/${id}`;
    return this.http.get<Course>(url).pipe(
      catchError(this.handleError)
    );

    // // throw new Error();
  }

  public getCourseSummary(id: string): Observable<CourseSummary> {
    // TODO
    const url = `${this.courseUrl}/Summary/${id}`;
    return this.http.get<CourseSummary>(url).pipe(
      catchError(this.handleError)
    );
    // // throw new Error();
  }

  public getEvent(id: string): Observable<Event> {
    // TODO
    this.itemid = id;
    const url = `${this.courseUrl}/Event/${this.itemid}`;
    return this.http.get<Event>(url).pipe(
      catchError(this.handleError)
    );
    // // throw new Error();
  }

  public getCourses(): Observable<string[]> {
    // TODO
    return this.http.get<string[]>(this.courseUrl).pipe(
      catchError(this.handleError)
    );
    // // throw new Error();
  }

  public getHiddenCourses(): Observable<string[]> {
    // TODO
    const url = `${this.courseUrl}/Hidden`;
    return this.http.get<string[]>(url).pipe(
      catchError(this.handleError)
    );
    // throw new Error();
  }

  public getAllCourses(): Observable<string[]> {
    // TODO
    const url = `${this.courseUrl}/All`;
    return this.http.get<string[]>(url).pipe(
      catchError(this.handleError)
    );
    // throw new Error();
  }

  public getLinkedCourses(): Observable<string[]> {
    // TODO
    const url = `${this.courseUrl}/Linked`;
    return this.http.get<string[]>(url).pipe(
      catchError(this.handleError)
    );
    // throw new Error();
  }

  public getLocalCourses(): Observable<string[]> {
    // TODO
    const url = `${this.courseUrl}/Local`;
    return this.http.get<string[]>(url).pipe(
      catchError(this.handleError)
    );
    // throw new Error();
  }

  public peekCourse(id: string): Observable<string> {
    // TODO
    const url = `${this.courseUrl}/PeekCourse?id=${id}`;
    return this.http.get<string>(url).pipe(
      catchError(this.handleError)
    );
    // throw new Error();
  }

  public peekSchedule(id: string): Observable<string> {
    // TODO
    const url = `${this.courseUrl}/PeekSchedule?id=${id}`;
    return this.http.get<string>(url).pipe(
      catchError(this.handleError)
    );
    // throw new Error();
  }

  public updateCourse(course: Course): void {
    // TODO
    const url = `${this.courseUrl}/${this.id}`;
    this.http.put(url, course, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  public updateEvent(event: Event): void {
    // TODO
    const url = `${this.courseUrl}/${this.itemid}`;
    this.http.put(url, event, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  public linkCourse(id: string): void {
    // TODO
    const url=`${this.courseUrl}/LinkCourse`;
   this.http.post<Course>(url, id, this.httpOptions).pipe(
      
      catchError(this.handleError)
    );
  }

  public linkSchedule(id: string): void {
    // TODO
    const url=`${this.courseUrl}/LinkSchedule`;
   this.http.post<Course>(url, id, this.httpOptions).pipe(
      
      catchError(this.handleError)
    );
  }

  constructor(private http: HttpClient) {
    super();
  }
}
