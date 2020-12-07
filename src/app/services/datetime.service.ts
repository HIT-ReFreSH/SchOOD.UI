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
import {format, addDays, add, differenceInWeeks, set, closestIndexTo, toDate} from 'date-fns';
import {SystemService} from './system.service';
import {zhCN} from 'date-fns/locale';
import {EventType} from '../models/event-type.enum';
import {PureTime} from '../models/pure-time';
import {PureDate} from '../models/pure-date';




@Injectable({
  providedIn: 'root'
})
export class DatetimeService {
  constructor(public system: SystemService) {

  }

  public readonly ClassIndexString = [
    '一二节',
    '整个上午',
    '三四节',
    '五六节',
    '整个下午',
    '七八节',
    '九十节',
    '九,十,十一节'
  ];

  readonly baseline = new Date(2020, 11, 30);

  public GetDuration(eventType: EventType, classIndex: number): number {
    switch (eventType) {
      case EventType.Default:
        if (classIndex % 3 === 1) {
          return this.system.LongClassLength;
        }
        return this.system.ClassLength;
      case EventType.Exam:
        return this.system.ExamLength;
      case EventType.Experiment:
        return this.system.ExperimentLength;
    }
  }

  public FormatDate(date: Date): string {
    return format(date, 'yyyy-MM-dd HH:mm');
  }

  public FormatClassIndex(num: number): string {
    return this.ClassIndexString[num];
  }

  public getClassIndex(date: Date, eventType: EventType, length: number): number {
    const index = closestIndexTo(date, this.getStartArray(eventType).map(s => {
      return set(s, {
        year: date.getFullYear(),
        month: date.getMonth(),
        date: date.getDate()
      });
    }));
    return length > 200 ? index + 1 : index;
  }


  public getWeekDay(date: Date): string {
    return format(date, 'eeee', {locale: zhCN});
  }

  public getWeekIndex(date: Date): number {
    return differenceInWeeks(date, this.system.SemesterStart) + 1;
  }

  public getStartArray(eventType: EventType): Date[] {
    let startArr: Date[];
    switch (eventType) {
      case EventType.Default:
        startArr = this.system.StartTimes;
        break;
      case EventType.Exam:
        startArr = this.system.StartTimesExam;
        break;
      case EventType.Experiment:
        startArr = this.system.StartTimesExperiment;
        break;

    }
    return startArr;
  }

  public FromSchoolFormat(weekIndex: number, weekDay: number, classIndex: number, courseType: EventType): Date {
    const startArr = this.getStartArray(courseType);
    return add(this.system.SemesterStart,
      {
        days: 7 * (weekIndex - 1) + weekDay,
        hours: startArr[classIndex].getHours(),
        minutes: startArr[classIndex].getMinutes(),
      }
    );
  }

  public getDate(date: Date): PureDate {
    return {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate()
    };
  }

  public getTime(date: Date): PureTime {
    return {
      hour: date.getHours(),
      minute: date.getMinutes()
    };
  }


  public FromDateTimeFormat(date: PureDate, time: PureTime): Date {
    return toDate(new Date(
      date.year, date.month, date.day, time.hour, time.minute, 0
    ));
  }

  public FormatWeekDay(weekDay: number): string {
    return format(addDays(this.baseline, weekDay), 'eeee', {locale: zhCN});
  }

  public WeekDays(): string[] {
    const r: string[] = [];

    for (let i = 0; i < 7; i++) {
      r.push(format(addDays(this.baseline, i), 'eeee', {locale: zhCN}));
    }
    return r;
  }
}
