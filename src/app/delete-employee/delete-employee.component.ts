import { Component } from '@angular/core';
import { EmployeeServiceService } from '../services/employee-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.scss']
})
export class DeleteEmployeeComponent {

  id: number;
  
  constructor(private employeeService: EmployeeServiceService,
    private router: Router) {
      this.id = 0;
  }

  onSubmit() {
    this.employeeService.delete(this.id).subscribe(result => this.gotoEmployeeList());
  }

  gotoEmployeeList() {
    this.router.navigate(['/employees']);
  }
}
