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
import {User} from '../models/user';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {MessageService} from './message.service';
import {JsonPipe} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService
{
  private usersUrl = '/api/User';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  public logout(): void
  {

    sessionStorage.clear();
    this.http.delete<User>(this.usersUrl, this.httpOptions).pipe(
      catchError(this.handleError)
    );

  }

  public getUser(): Observable<User>
  {
    const r = this.http.get<User>(this.usersUrl)
      .pipe(
        catchError(this.handleError)
      );
    r.subscribe(c => console.log(c));
    return r;


    // throw new Error();
  }

  public updateUser(user: User): void
  {

    this.http.put(this.usersUrl, user, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  constructor(private http: HttpClient, public messageService: MessageService)
  {
    super(messageService);
  }
}
