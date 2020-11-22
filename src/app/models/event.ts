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

import {EventType} from './event-type.enum';
import {ClassIndex} from './class-index.enum';
import {WeekDay} from '@angular/common';

/**
 * 表示一次课/实验/考试
 */
export class Event
{

  /**
   *    课程的开始时间
   */
  public StartTime: Date = new Date();

  /**
   *    事件是否被隐藏
   */
  public Hidden = false;

  /**
   *    事件的老师，为空则没有
   */
  public Teacher: string | null = null;

  /**
   *    事件Id
   */
  public EventId = '';

  /**
   *    事件执行的地点，为空则没有
   */
  public Location: string | null = null;

  /**
   *    事件所属课程的Id
   */
  public CourseId = '';

  /**
   *    事件的长度
   */
  public EventDuration = 0;

  /**
   * 事件类型
   */
  public Type = EventType.Default;

  /**
   * 周数
   */
  public get WeekIndex(): number
  {
    // TODO
    return 0;
  }

  public set WeekIndex(v: number)
  {
    // TODO
  }
  /**
   * 节次
   */
  public get ClassIndex(): ClassIndex
  {
    return 0;
  }

  public set ClassIndex(v: ClassIndex)
  {
    // TODO
  }
  /**
   * 周几
   */
  public get WeekDay(): WeekDay
  {
    // TODO
    return 0;
  }

  public set WeekDay(v: WeekDay)
  {
    // TODO
  }
}
