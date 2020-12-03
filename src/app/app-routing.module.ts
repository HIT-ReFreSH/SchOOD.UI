import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CoursesViewContainerComponent} from './courses-view/courses-view-container/courses-view-container.component';
import {HomeComponent} from './home/home.component';
import {CourseDetailComponent} from './course-detail/course-detail.component';
import {AboutComponent} from './about/about.component';
import {CoursesViewComponent} from './courses-view/courses-view.component';
import {EventDetailComponent} from './event-detail/event-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/Home', pathMatch: 'full'},
  {path: 'Home', component: HomeComponent},
  {path: 'About', component: AboutComponent},

  {path: 'Courses', redirectTo: '/Courses/Available', pathMatch: 'full'},
  {path: 'Courses/:filter', component: CoursesViewComponent},
  {path: 'Course/:id', component: CourseDetailComponent},
  {path: 'Event/:id', component: EventDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule
{
}
