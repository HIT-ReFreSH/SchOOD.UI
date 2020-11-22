import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CoursesViewContainerComponent} from './courses-view/courses-view-container/courses-view-container.component';

const routes: Routes = [
  {path: '', redirectTo: '/Courses', pathMatch: 'full'},
  {path: 'Courses', component: CoursesViewContainerComponent},
  {path: 'Courses/:opt',  component: CoursesViewContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule
{
}
