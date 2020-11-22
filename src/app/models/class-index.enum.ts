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

/**
 * 表示一节课是第几节
 */
export enum ClassIndex {
  /**
   * 上午一二节
   */
  Default1,
  /**
   * 一上午的课
   */
  Default1Extend,
  /**
   * 上午三四节
   */
  Default2,
  /**
   * 下午一二节
   */
  Default3,
  /**
   * 一下午
   */
  Default3Extend,
  /**
   * 下午三四节
   */
  Default4,
  /**
   * 晚上的课(两节)
   */
  Default5,
  /**
   * 晚上的课(三节)
   */
  Default5Extend
}
