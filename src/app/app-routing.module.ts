import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { StudentlistComponent } from './studentlist/studentlist.component';

const routes: Routes = [
  {path:'liststudent', component:StudentlistComponent},
  {path:'addstudent', component:AddstudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
