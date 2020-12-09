import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit
{
  @Input()
  Target!: string;
  @Input()
  Expression!: string;
  @Input()
  ComponentId!: string;
  @Output()
  public Confirmed = new EventEmitter();

  constructor()
  {
  }

  ngOnInit(): void
  {
  }

}
