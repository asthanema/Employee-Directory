import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {
  public currentEmployee;

  constructor(private _employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.currentEmployee=this._employeeService.selectedEmployee;
  }

}
