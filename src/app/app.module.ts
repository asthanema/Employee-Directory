import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {EmployeeService} from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import {HomeComponent} from './home/home.component';
import { InfoComponent } from './employee-resume/resume-sub-components/info/info.component';
import { ProjectsComponent } from './employee-resume/resume-sub-components/projects/projects.component';
import { HobbiesComponent } from './employee-resume/resume-sub-components/hobbies/hobbies.component';
import { NotesComponent } from './employee-resume/resume-sub-components/notes/notes.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    routingComponents,
    InfoComponent,
    ProjectsComponent,
    HobbiesComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
