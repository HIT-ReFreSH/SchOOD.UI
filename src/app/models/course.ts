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

import {CourseSource} from './course-source.enum';
import {Event} from './event';

/**
 * 表示一门课程, 它将包含普通的课堂、实验课以及考试。
 */
export interface Course
{
  /**
   *   课程的来源
   */
  source: CourseSource;

  /**
   *   课程包含事件的集合
   */
  events: Event[];

  /**
   *   课程是否被隐藏
   */
  hidden: boolean;

  /**
   *   是否启用本课程通知
   */
  enableNotification: boolean;


  /**
   *   课程名称
   */
  courseName: string;

  /**
   *   课程Id
   */
  id: string;
}
