import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-edit-string-dialog',
  templateUrl: './edit-string-dialog.component.html',
  styleUrls: ['./edit-string-dialog.component.css']
})
export class EditStringDialogComponent implements OnInit {

  @Input()
  DefaultValue!: string;
  @Input()
  ComponentId!: string;
  @Input()
  ValueTypeName!: string;
  @Output()
  public ValueSubmitted = new EventEmitter<string>();


  constructor() {
  }

  ngOnInit(): void {
  }

}
