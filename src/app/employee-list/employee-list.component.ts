import { Component } from '@angular/core';
import { EmployeeServiceService } from '../services/employee-service.service';
import { Employee } from '../Employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {

  employees: Employee[] = [];

  constructor(private employeeService: EmployeeServiceService) {
  }

  ngOnInit() {
    this.employeeService.findAll().subscribe(data => {
      this.employees = data;
    });
  }
}
