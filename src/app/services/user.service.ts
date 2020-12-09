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

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService
{
  private usersUrl = '/api/User';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  public logout(): Observable<any>
  {
    // sessionStorage.clear();
    return this.http.delete<User>(this.usersUrl, this.httpOptions).pipe(
      catchError(this.handleError<any>('登出失败'))
    );
  }

  public getUser(): Observable<User>
  {
    return this.http.get<User>(this.usersUrl)
      .pipe(
        catchError(this.handleError<User>('获取用户信息失败'))
      );
  }

  public updateUser(user: User): Observable<any>
  {
    return this.http.put(this.usersUrl, user, this.httpOptions).pipe(
      catchError(this.handleError<any>('更新用户信息失败'))
    );
  }

  constructor(private http: HttpClient, public messageService: MessageService)
  {
    super(messageService);
  }
}
