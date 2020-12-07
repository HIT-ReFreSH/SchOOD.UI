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
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SchoolTime} from '../../models/school-time';

@Component({
  selector: 'app-edit-school-time-dialog',
  templateUrl: './edit-school-time-dialog.component.html',
  styleUrls: ['./edit-school-time-dialog.component.css']
})
export class EditSchoolTimeDialogComponent implements OnInit {
  @Input()
  public Time!: SchoolTime;
  @Input()
  public ComponentId!: string;
  @Output()
  public ValueSubmitted = new EventEmitter();

  public Submit(): void
  {
    this.Time.Export();
    this.ValueSubmitted.emit();
  }
  constructor() {
  }

  ngOnInit(): void {
  }

}
