import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent implements OnInit {
  @Input()
  ComponentId!: string;
  courseId = '';
  courseSummary = '点击输入框右侧按钮可以查看摘要哦~';
  courseSummaryError = false;
  scheduleId = '';
  scheduleSummary = '点击输入框右侧按钮可以查看摘要哦~';
  scheduleSummaryError = false;

  @Output()
  public Added = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
