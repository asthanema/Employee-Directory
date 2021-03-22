import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  public currentEmployee;

  constructor(private _employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.currentEmployee=this._employeeService.selectedEmployee;
  }

}
