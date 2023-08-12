import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Employee } from '../employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  private employeesUrl: string;
  reVal: Observable<Employee>;
  newUrl: string;
  constructor(private http: HttpClient) { 
    this.employeesUrl = 'http://localhost:8080/employees';
    this.newUrl = "";
    this.reVal = new Observable<Employee>();
  }

  public findAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeesUrl);
  }

  // Find employee by id #
  public findByIdNumber(id: number): Observable<Employee> {
    this.newUrl = this.employeesUrl + "/" + id;
    this.reVal = this.http.get<Employee>(this.newUrl).pipe(
      catchError(error => {
        // Handle the error and potentially notify the user.
        throw error; // Rethrow the error or return a default value
      })
    );
    return this.reVal;
  }

  public save(user: Employee) {
    return this.http.post<Employee>(this.employeesUrl, user);
  }

  public delete(id: number) { 
    return this.http.delete<Employee>(this.employeesUrl+"/"+id);
  }
}
