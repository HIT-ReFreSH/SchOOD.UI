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

import {Event} from './event';
import {DatetimeService} from '../services/datetime.service';
import { PureDate } from './pure-date';
import { PureTime } from './pure-time';

export class CalendarTime {
  public pureDate: PureDate;
  public time: PureTime;
  public duration: number;

  constructor(private event: Event, private datetime: DatetimeService) {
    this.pureDate = this.datetime.getDate(this.event.startTime);
    this.time = this.datetime.getTime(this.event.startTime);
    this.duration = this.event.duration;
  }

  public Export(): Event {
    const event = Object.assign({}, this.event);
    event.startTime = this.datetime.FromDateTimeFormat(this.pureDate, this.time).valueOf();
    event.duration = this.duration;
    return event;
  }
}
