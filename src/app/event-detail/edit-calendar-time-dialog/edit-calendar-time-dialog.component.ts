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
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CalendarTime} from '../../models/calendar-time';


@Component({
  selector: 'app-edit-calendar-time-dialog',
  templateUrl: './edit-calendar-time-dialog.component.html',
  styleUrls: ['./edit-calendar-time-dialog.component.css']
})
export class EditCalendarTimeDialogComponent implements OnInit
{
  @Input()
  public Time!: CalendarTime;
  @Input()
  public ComponentId!: string;
  @Output()
  public ValueSubmitted = new EventEmitter();

  constructor()
  {
  }

  public Submit(): void
  {
    this.Time.Export();
    this.ValueSubmitted.emit();
  }

  ngOnInit(): void
  {
  }

}
