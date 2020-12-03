import { Component } from '@angular/core';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'SchOOD';
  user: User = {
    Name: 'stu',
    Id: '0',
    EnableNotification: true,
    CalendarUrl: 'https://cms.hit.edu.cn'
  };
}
