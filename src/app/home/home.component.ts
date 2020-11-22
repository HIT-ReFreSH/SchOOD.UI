import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit
{

  public sidebarStatus = false;

  constructor()
  {
  }

  ngOnInit(): void
  {
  }

  changeSidebarStatus(): void
  {
    this.sidebarStatus = !this.sidebarStatus;
  }
}
