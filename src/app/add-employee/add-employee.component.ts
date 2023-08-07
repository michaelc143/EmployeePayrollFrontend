import { Component } from '@angular/core';
import { EmployeeServiceService } from '../services/employee-service.service';
import { Employee } from '../Employee';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent {
  
  employee: Employee;
  
  constructor(private employeeService: EmployeeServiceService,
    private router: Router) {
    this.employee = new Employee();
  }

  ngOnInit() {
    this.employee = new Employee();
  }

  onSubmit() {
    this.employeeService.save(this.employee).subscribe(result => this.gotoEmployeeList());
  }

  gotoEmployeeList() {
    this.router.navigate(['/employees']);
  }

}
