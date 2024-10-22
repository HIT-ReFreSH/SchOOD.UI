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

import {DatetimeService} from '../services/datetime.service';
import {Event} from './event';
import {SystemService} from '../services/system.service';

export class SchoolTime
{
  constructor(private event: Event, public datetime: DatetimeService, private system: SystemService)
  {
    this.weekIndex = this.datetime.getWeekIndex(this.event.startTime);
    this.weekDay = this.datetime.getWeekDay(this.event.startTime);
    this.classIndex = this.datetime.FormatClassIndex(
      this.datetime.getClassIndex(this.event.startTime, this.event.type, this.event.duration));
    this.weekDays = this.datetime.WeekDays();
    for (let i = 1; i <= this.system.SemesterLength; i++)
    {
      this.weeks.push(i);
    }
  }


  public weekIndex = 0;
  public weekDay = '';
  public weekDays: string[];
  public weeks: number[] = [];
  public classIndex = '';

  public Export(): Event
  {
    const weekday = this.weekDays.lastIndexOf(this.weekDay);
    const classIndex = this.datetime.ClassIndexString.lastIndexOf(this.classIndex);
    const event = Object.assign({}, this.event);
    event.startTime = this.datetime.FromSchoolFormat(this.weekIndex, weekday, classIndex, this.event.type).valueOf();
    event.duration = this.datetime.GetDuration(this.event.type, classIndex);
    return event;
  }
}
