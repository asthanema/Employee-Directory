import { Component, OnInit,Input } from '@angular/core';
import {EmployeeService} from '../employee.service';
import { IEmployee } from '../employee';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  public currentEmployee;
  public selectedID;

  constructor(private _employeeService:EmployeeService,private router:Router) { 
  
  }

  ngOnInit(): void {
    this.currentEmployee=this._employeeService.getSelectedEmployee();

  }
  flipToResume(){
    this._employeeService.setSelectedEmployee(this.currentEmployee);
    this.router.navigate(['employees/resume',this.currentEmployee.Id]);

  }
}
