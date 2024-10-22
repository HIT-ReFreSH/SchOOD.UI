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

/**
 * 课程信息摘要
 */
export interface CourseSummary
{
  /**
   * 课程的来源
   */
  source: CourseSource;

  /**
   * 课程是否被隐藏
   */
  hidden: boolean;

  /**
   * 是否启用本课程通知
   */
  enableNotification: boolean;

  /**
   * 课程的开始时间摘要, 为空则没有
   */
  startTime: string | null;

  /**
   * 课程老师摘要，为空则没有
   */
  teacher: string | null;


  /**
   * 课程地点摘要，为空则没有
   */
  location: string | null;


  /**
   * 课程名称
   */
  courseName: string;

  /**
   * 课程Id
   */
  id: string;

}
