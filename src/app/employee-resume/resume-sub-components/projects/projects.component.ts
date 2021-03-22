import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
 public currentEmployee;
  constructor(private _employeeService:EmployeeService) { }

  ngOnInit(): void {
  this.currentEmployee=this._employeeService.selectedEmployee;}

}
