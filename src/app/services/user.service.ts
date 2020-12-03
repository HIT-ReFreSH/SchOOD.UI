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
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { Course } from '../models/course';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {
    private usersUrl = '/User';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  public logout(): void {
    // TODO
    sessionStorage.clear();
    this.http.delete<User>(this.usersUrl,this.httpOptions).pipe(
      catchError(this.handleError)
    );

  }

  public getUser(): Observable<User> {
    // TODO
    return this.http.get<User>(this.usersUrl)
      .pipe(
        catchError(this.handleError)
      );


    // throw new Error();
  }

  public updateUser(user: User): void {
    // TODO
    this.http.put(this.usersUrl,user,this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  constructor(private http: HttpClient) {
    super();
  }
}
