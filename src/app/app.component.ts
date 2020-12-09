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
import {Component, OnInit} from '@angular/core';
import {User} from './models/user';
import {UserService} from './services/user.service';
import {MessageService} from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  public constructor(public userService: UserService,
                     public messageService: MessageService)
  {
  }

  title = 'SchOOD';
  user: User = {
    name: 'stu',
    id: '0',
    enableNotification: true,
    calendarUrl: 'https://cms.hit.edu.cn'
  };

  public altNotify(): void
  {
    const newUser = Object.assign({}, this.user);
    newUser.enableNotification = !newUser.enableNotification;
    this.userService.updateUser(newUser).subscribe(
      _ =>
      {
        this.user.enableNotification = !this.user.enableNotification;
        this.messageService.addOk();
      }
    );
  }

  ngOnInit(): void
  {
    this.userService.getUser()
      .subscribe(u => this.user = u);
  }
}
