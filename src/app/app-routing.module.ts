import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HomePageComponent } from './homePage/homePage.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'addEmployee', component: AddEmployeeComponent },
  { path: 'deleteEmployee', component: DeleteEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
