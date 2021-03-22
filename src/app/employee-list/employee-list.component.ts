import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {EmployeeService} from '../employee.service';
import {Router} from '@angular/router';
import { IEmployee } from '../employee';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css','../app.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees=[];
  // @Output() public currentEmployee= new EventEmitter<IEmployee>();
public currentEmployee;
  constructor(private _employeeService:EmployeeService, private router:Router) { }

  ngOnInit(): void {
    this._employeeService.getEmployees()
    .subscribe(data => this.employees = data);
  }

  showDetails(employee){
  this._employeeService.setSelectedEmployee(employee);
  this.router.navigate(['/employees', employee.Id]);
  }
  

}
