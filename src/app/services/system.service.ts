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

@Injectable({
  providedIn: 'root'
})
/**
 * 系统设定
 */
export class SystemService
{
  /**
   * 学期开始
   */
  public get SemesterStart(): Date
  {
    return new Date(2020, 9, 6);
  }

  /**
   * 考试长度
   */
  public get ExamLength(): number
  {
    return 120;
  }

  /**
   * 实验长度
   */
  public get ExperimentLength(): number
  {
    return 180;
  }

  /**
   * 课程长度
   */
  public get ClassLength(): number
  {
    return 105;
  }

  /**
   * 一上午、一下午课的长度
   */
  public get LongClassLength(): number
  {
    return 210;
  }

  /**
   * 允许的起始时间误差
   */
  public get Deviation(): number
  {
    return 15;
  }

  /**
   * 一般课程的上课时间
   */
  public get StartTimes(): Date[]
  {
    return [
      new Date(0, 0, 0, 8, 0),
      new Date(0, 0, 0, 10, 0),
      new Date(0, 0, 0, 8, 0),
      new Date(0, 0, 0, 13, 45),
      new Date(0, 0, 0, 15, 45),
      new Date(0, 0, 0, 13, 45),
      new Date(0, 0, 0, 18, 30),
      new Date(0, 0, 0, 18, 30),
    ];
  }

  /**
   * 实验课的上课时间
   */
  public get StartTimesExperiment(): Date[]
  {
    return [
      new Date(0, 0, 0, 7, 20),
      new Date(0, 0, 0, 10, 0),
      new Date(0, 0, 0, 7, 20),
      new Date(0, 0, 0, 13, 0),
      new Date(0, 0, 0, 15, 40),
      new Date(0, 0, 0, 13, 0),
      new Date(0, 0, 0, 18, 30),
      new Date(0, 0, 0, 18, 30),
    ];
  }

  /**
   * 考试的开始时间
   */
  public get StartTimesExam(): Date[]
  {
    return [
      new Date(0, 0, 0, 8, 0),
      new Date(0, 0, 0, 10, 0),
      new Date(0, 0, 0, 8, 0),
      new Date(0, 0, 0, 13, 0),
      new Date(0, 0, 0, 15, 45),
      new Date(0, 0, 0, 13, 0),
      new Date(0, 0, 0, 18, 30),
      new Date(0, 0, 0, 18, 30),
    ];
  }

  constructor()
  {

  }
}
