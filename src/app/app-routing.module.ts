import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeResumeComponent } from './employee-resume/employee-resume.component';
import { HobbiesComponent } from './employee-resume/resume-sub-components/hobbies/hobbies.component';
import { InfoComponent } from './employee-resume/resume-sub-components/info/info.component';
import { NotesComponent } from './employee-resume/resume-sub-components/notes/notes.component';
import { ProjectsComponent } from './employee-resume/resume-sub-components/projects/projects.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'employees', component:EmployeeListComponent},
  {path:'employees/:id', component:EmployeeDetailComponent},
  {path:'employees/resume/:id', 
  component:EmployeeResumeComponent,
  children:[  {path:'info', component:InfoComponent},
  {path:'projects', component:ProjectsComponent},
  {path:'hobbies', component:HobbiesComponent},
  {path:'notes', component:NotesComponent},
]},
  {path:"**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[EmployeeDetailComponent,EmployeeListComponent,PageNotFoundComponent,EmployeeResumeComponent];