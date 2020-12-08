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


/**
 * 表示一次课/实验/考试
 */
export interface Event
{


  /**
   *    课程的开始时间
   */
  startTime: number;

  /**
   *    事件是否被隐藏
   */
  hidden: boolean;

  /**
   *    事件的老师，为空则没有
   */
  teacher: string | null;

  /**
   *    事件Id
   */
  id: string;

  /**
   *    事件执行的地点，为空则没有
   */
  location: string | null;
  /**
   *    事件的长度
   */
  duration: number;

  /**
   * 事件类型
   */
  type: EventType;


}
