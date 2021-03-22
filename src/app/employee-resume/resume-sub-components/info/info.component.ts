import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
 public currentEmployee;
  constructor(private _employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.currentEmployee=this._employeeService.selectedEmployee;
  }

}
