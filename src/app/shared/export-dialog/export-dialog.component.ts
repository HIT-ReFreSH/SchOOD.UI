import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-export-dialog',
  templateUrl: './export-dialog.component.html',
  styleUrls: ['./export-dialog.component.css']
})
export class ExportDialogComponent implements OnInit {
  @Input()
  ComponentId!: string;
  @Input()
  TargetUrl!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
