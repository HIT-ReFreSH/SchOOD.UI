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
import {MessageService} from './message.service';
import {Query} from '../models/query';

@Injectable({
  providedIn: 'root'
})
export class CourseService extends BaseService
{
  private coursesUrl = '/api/Courses';
  private courseUrl = '/api/Course';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  public getCourse(id: string): Observable<Course>
  {
    const url = `${this.courseUrl}/${id}`;
    return this.http.get<Course>(url).pipe(
      catchError(this.handleError<Course>('获取课程信息失败'))
    );
  }

  public getCourseSummary(id: string): Observable<CourseSummary>
  {
    const url = `${this.courseUrl}/Summary/${id}`;
    return this.http.get<CourseSummary>(url).pipe(
      catchError(this.handleError<CourseSummary>('获取课程信息失败'))
    );
  }

  public getEvent(id: string): Observable<Event>
  {
    const url = `${this.courseUrl}/Event/${id}`;
    return this.http.get<Event>(url).pipe(
      catchError(this.handleError<Event>('获取课程信息失败'))
    );
  }

  public getCourses(): Observable<CourseSummary[]>
  {
    return this.http.get<CourseSummary[]>(this.coursesUrl).pipe(
      catchError(this.handleError<CourseSummary[]>('获取课表信息失败'))
    );
  }

  public getHiddenCourses(): Observable<CourseSummary[]>
  {
    const url = `${this.coursesUrl}/Hidden`;
    return this.http.get<CourseSummary[]>(url).pipe(
      catchError(this.handleError<CourseSummary[]>('获取课表信息失败'))
    );
  }

  public getAllCourses(): Observable<CourseSummary[]>
  {
    const url = `${this.coursesUrl}/All`;
    return this.http.get<CourseSummary[]>(url).pipe(
      catchError(this.handleError<CourseSummary[]>('获取课表信息失败'))
    );
  }

  public getLinkedCourses(): Observable<CourseSummary[]>
  {
    const url = `${this.coursesUrl}/Linked`;
    return this.http.get<CourseSummary[]>(url).pipe(
      catchError(this.handleError<CourseSummary[]>('获取课表信息失败'))
    );
  }

  public getLocalCourses(): Observable<CourseSummary[]>
  {
    const url = `${this.coursesUrl}/Local`;
    return this.http.get<CourseSummary[]>(url).pipe(
      catchError(this.handleError<CourseSummary[]>('获取课表信息失败'))
    );
  }

  public peekCourse(id: string): Observable<Query>
  {
    const url = `${this.coursesUrl}/PeekCourse?id=${id}`;
    return this.http.get<Query>(url).pipe(
      catchError(this.handleError<Query>('获取课程信息失败'))
    );
  }

  public peekSchedule(id: string): Observable<Query>
  {

    const url = `${this.coursesUrl}/PeekSchedule?id=${id}`;
    return this.http.get<Query>(url).pipe(
      catchError(this.handleError<Query>('获取课表信息失败'))
    );
  }

  public updateCourse(course: Course): Observable<any>
  {

    const url = `${this.courseUrl}/${course.id}`;
    return this.http.put(url, course, this.httpOptions).pipe(
      catchError(this.handleError<any>('更新课程信息失败'))
    );
  }

  public updateEvent(event: Event): Observable<any>
  {
    const url = `${this.courseUrl}/Event/${event.id}`;

    return this.http.put(url, event, this.httpOptions).pipe(
      catchError(this.handleError<any>('更新课程信息失败'))
    )
      ;
  }

  public linkCourse(id: string): Observable<any>
  {
    const url = `${this.coursesUrl}/LinkCourse?id=${id}`;
    return this.http.get(url, this.httpOptions).pipe(
      catchError(this.handleError<any>('更新课程信息失败'))
    );
  }

  public linkSchedule(id: string): Observable<any>
  {

    const url = `${this.coursesUrl}/LinkSchedule?id=${id}`;
    return this.http.get(url, this.httpOptions).pipe(
      catchError(this.handleError<any>('更新课程信息失败'))
    );
  }

  constructor(private http: HttpClient, public messageService: MessageService)
  {

    super(messageService);
    if (typeof messageService === 'undefined')
    {
      console.log(messageService);
    }
  }
}
