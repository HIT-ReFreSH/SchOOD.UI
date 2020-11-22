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
import {BaseService} from './base.service';
import {User} from '../models/user';
import {Observable} from 'rxjs';
import {Course} from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService
{
  public logout(): void
  {
    // TODO
  }

  public getUser(): Observable<User>
  {
    // TODO
    throw new Error();
  }

  public updateUser(user: User): void
  {
    // TODO
  }

  constructor()
  {
    super();
  }
}
