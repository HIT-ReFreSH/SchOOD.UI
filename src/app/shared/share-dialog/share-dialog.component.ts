import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-share-dialog',
  templateUrl: './share-dialog.component.html',
  styleUrls: ['./share-dialog.component.css']
})
export class ShareDialogComponent implements OnInit {
  @Input()
  ComponentId!: string;
  @Input()
  TargetId!: string;
  @Input()
  ShareType!: string;

  constructor() {
  }



  ngOnInit(): void {
  }

}
