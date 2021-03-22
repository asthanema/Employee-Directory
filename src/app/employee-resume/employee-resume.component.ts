import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-resume',
  templateUrl: './employee-resume.component.html',
  styleUrls: ['./employee-resume.component.css']
})
export class EmployeeResumeComponent implements OnInit {
  public currentEmployee;

  constructor(private _employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.currentEmployee=this._employeeService.getSelectedEmployee();
  }

}
