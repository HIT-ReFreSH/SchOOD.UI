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
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {CoursesViewContainerComponent} from './courses-view/courses-view-container/courses-view-container.component';
import {CoursesViewItemComponent} from './courses-view/courses-view-item/courses-view-item.component';
import {CourseDetailComponent} from './course-detail/course-detail.component';
import {EventDetailComponent} from './event-detail/event-detail.component';
import {LayoutModule} from '@angular/cdk/layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AddDialogComponent} from './shared/add-dialog/add-dialog.component';
import {ShareDialogComponent} from './shared/share-dialog/share-dialog.component';
import {EditStringDialogComponent} from './shared/edit-string-dialog/edit-string-dialog.component';
import {ExportDialogComponent} from './shared/export-dialog/export-dialog.component';
import {FormsModule} from '@angular/forms';
import {ClipboardModule} from 'ngx-clipboard';
import {EditSchoolTimeDialogComponent} from './event-detail/edit-school-time-dialog/edit-school-time-dialog.component';
import {EditCalendarTimeDialogComponent} from './event-detail/edit-calendar-time-dialog/edit-calendar-time-dialog.component';
import {NgbDatepickerModule, NgbTimepickerModule, NgbToastModule} from '@ng-bootstrap/ng-bootstrap';
import {CoursesViewComponent} from './courses-view/courses-view.component';
import {AboutComponent} from './about/about.component';
import { MessagesComponent } from './messages/messages.component';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import { ConfirmDialogComponent } from './shared/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesViewContainerComponent,
    CoursesViewItemComponent,
    CourseDetailComponent,
    EventDetailComponent,
    AddDialogComponent,
    ShareDialogComponent,
    EditStringDialogComponent,
    ExportDialogComponent,
    EditSchoolTimeDialogComponent,
    EditCalendarTimeDialogComponent,
    CoursesViewComponent,
    AboutComponent,
    MessagesComponent,
    ConfirmDialogComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    ClipboardModule,
    NgbTimepickerModule,
    NgbDatepickerModule,
    NgbToastModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule
{
}
