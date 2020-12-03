import {DatetimeService} from '../services/datetime.service';
import {Event} from './event';
import {SystemService} from '../services/system.service';

export class SchoolTime {
  constructor(private event: Event, public datetime: DatetimeService, private system: SystemService) {
    this.weekIndex = this.datetime.getWeekIndex(this.event.StartTime);
    this.weekDay = this.datetime.getWeekDay(this.event.StartTime);
    this.classIndex = this.datetime.FormatClassIndex(
      this.datetime.getClassIndex(this.event.StartTime, this.event.Type, this.event.EventDuration));
    this.weekDays = this.datetime.WeekDays();
    for (let i = 1; i <= this.system.SemesterLength; i++) {
      this.weeks.push(i);
    }
  }


  public weekIndex = 0;
  public weekDay = '';
  public weekDays: string[];
  public weeks: number[] = [];
  public classIndex = '';

  public Export(): Event {
    const weekday = this.weekDays.lastIndexOf(this.weekDay);
    const classIndex = this.datetime.ClassIndexString.lastIndexOf(this.classIndex);
    this.event.StartTime = this.datetime.FromSchoolFormat(this.weekIndex, weekday, classIndex, this.event.Type);
    this.event.EventDuration = this.datetime.GetDuration(this.event.Type, classIndex);
    return this.event;
  }
}
