import {Event} from './event';
import {DatetimeService} from '../services/datetime.service';
import { PureDate } from './pure-date';
import { PureTime } from './pure-time';

export class CalendarTime {
  public pureDate: PureDate;
  public time: PureTime;
  public duration: number;

  constructor(private event: Event, private datetime: DatetimeService) {
    this.pureDate = this.datetime.getDate(this.event.StartTime);
    this.time = this.datetime.getTime(this.event.StartTime);
    this.duration = this.event.EventDuration;
  }

  public Export(): Event {
    this.event.StartTime = this.datetime.FromDateTimeFormat(this.pureDate, this.time);
    this.event.EventDuration = this.duration;
    return this.event;
  }
}
