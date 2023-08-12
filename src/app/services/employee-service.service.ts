import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
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

  public delete(id: number) { 
    return this.http.delete<Employee>(this.employeesUrl+"/"+id);
  }
}
