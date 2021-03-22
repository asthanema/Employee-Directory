import { Injectable } from '@angular/core';
// import { HttpClientModule} from '@angular/common/http';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable,throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url='/assets/employee.json';
  public selectedEmployee;
  constructor(private http:HttpClient) { }
  
  getEmployees():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url)
    .pipe(
    catchError(this.errorHandler)
    );
  }

  setSelectedEmployee(employee:IEmployee){
    this.selectedEmployee=employee;
    
  }

  getSelectedEmployee(){
    return this.selectedEmployee;
  }


  errorHandler(err){
    let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = err.error.message;
        } else {
            // server-side error
            errorMessage = `Error Code: ${err.status}\nMessage: ${err.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    
  }
}
