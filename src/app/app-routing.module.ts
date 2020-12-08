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
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
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
