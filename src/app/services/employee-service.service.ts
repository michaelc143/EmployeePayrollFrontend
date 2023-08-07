import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from 'src/app/Employee';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  private employeesUrl: string;
  constructor(private http: HttpClient) { 
    this.employeesUrl = 'http://localhost:8080/employees';
  }

  public findAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeesUrl);
  }

  public save(user: Employee) {
    return this.http.post<Employee>(this.employeesUrl, user);
  }

}
