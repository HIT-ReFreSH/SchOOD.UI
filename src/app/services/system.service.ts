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
export class SystemService {
  /**
   * 学期长度(周数)
   */
  public readonly SemesterLength = 18;


  /**
   * 学期开始
   */
  public readonly SemesterStart = new Date(2020, 8, 6);  // 月份为实际-1


  /**
   * 考试长度
   */
  public readonly ExamLength = 120;


  /**
   * 实验长度
   */
  public readonly ExperimentLength = 180;


  /**
   * 课程长度
   */
  public readonly ClassLength = 105;


  /**
   * 一上午、一下午课的长度
   */
  public readonly LongClassLength = 210;


  /**
   * 允许的起始时间误差
   */
  public readonly Deviation = 15;


  /**
   * 一般课程的上课时间
   */
  public readonly StartTimes = [
    new Date(0, 0, 0, 8, 0),
    new Date(0, 0, 0, 10, 0),
    new Date(0, 0, 0, 8, 0),
    new Date(0, 0, 0, 13, 45),
    new Date(0, 0, 0, 15, 45),
    new Date(0, 0, 0, 13, 45),
    new Date(0, 0, 0, 18, 30),
    new Date(0, 0, 0, 18, 30),
  ];


  /**
   * 实验课的上课时间
   */
  public readonly StartTimesExperiment = [
    new Date(0, 0, 0, 7, 20),
    new Date(0, 0, 0, 10, 0),
    new Date(0, 0, 0, 7, 20),
    new Date(0, 0, 0, 13, 0),
    new Date(0, 0, 0, 15, 40),
    new Date(0, 0, 0, 13, 0),
    new Date(0, 0, 0, 18, 30),
    new Date(0, 0, 0, 18, 30),
  ];


  /**
   * 考试的开始时间
   */
  public readonly StartTimesExam = [
    new Date(0, 0, 0, 8, 0),
    new Date(0, 0, 0, 10, 0),
    new Date(0, 0, 0, 8, 0),
    new Date(0, 0, 0, 13, 0),
    new Date(0, 0, 0, 15, 45),
    new Date(0, 0, 0, 13, 0),
    new Date(0, 0, 0, 18, 30),
    new Date(0, 0, 0, 18, 30),
  ];


  constructor() {

  }
}
