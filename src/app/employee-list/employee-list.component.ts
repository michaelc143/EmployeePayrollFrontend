import { Component } from '@angular/core';
import { EmployeeServiceService } from '../services/employee-service.service';
import { Employee } from '../employee';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {

  employees: Employee[] = [];
  searchId: number;
  submittedEmployee: Employee;
  errorMsg: string = 'Cannot find user with that user id';
  errorBool: boolean = false;

  constructor(private employeeService: EmployeeServiceService) {
    this.searchId = 0;
    this.submittedEmployee = new Employee();
  }

  ngOnInit() {
    this.employeeService.findAll().subscribe(data => {
      this.employees = data;
    });
  }

  // Returns an employee object based on their id #
  onSubmit(id: number) {
    this.employeeService.findByIdNumber(id).subscribe(data => {
      this.submittedEmployee = data;
      this.errorBool = false;
    },
    err => {
      console.log(err);
      this.errorBool = true;
    });
  }
}
