import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {CoursesViewContainerComponent} from './courses-view/courses-view-container/courses-view-container.component';
import {CoursesViewItemComponent} from './courses-view/courses-view-item/courses-view-item.component';
import {CourseDetailComponent} from './shared/course-detail/course-detail.component';
import {EventDetailComponent} from './shared/event-detail/event-detail.component';
import {ShareComponent} from './shared/share/share.component';
import {AddComponent} from './shared/add/add.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LayoutModule } from '@angular/cdk/layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesViewContainerComponent,
    CoursesViewItemComponent,
    CourseDetailComponent,
    EventDetailComponent,
    ShareComponent,
    AddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule
{
}
