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
import {Component, Input, OnInit} from '@angular/core';
import {MessageService} from 'src/app/services/message.service';


@Component({
  selector: 'app-share-dialog',
  templateUrl: './share-dialog.component.html',
  styleUrls: ['./share-dialog.component.css']
})
export class ShareDialogComponent implements OnInit
{
  @Input()
  ComponentId!: string;
  @Input()
  TargetId!: string;
  @Input()
  ShareType!: string;

  constructor(public msg: MessageService)
  {
  }


  ngOnInit(): void
  {
  }

}
