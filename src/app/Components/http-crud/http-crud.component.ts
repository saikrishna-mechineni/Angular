import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-http-crud',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './http-crud.component.html',
  styleUrls: ['./http-crud.component.css']
})
export class HttpCrudComponent implements OnInit {
  employees: any[] = [];
  newEmployee = { id: null, name: '', email: '' };
  editEmployee: any = null;
  loading = false;
  snackbarMessage = '';
  showSnackbar = false;

  constructor(private service: UserServiceService) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  showSnack(message: string) {
    this.snackbarMessage = message;
    this.showSnackbar = true;
    setTimeout(() => this.showSnackbar = false, 2000);
  }

  getEmployees() {
    this.loading = true;
    this.service.getEmployees().subscribe(data => {
      this.employees = data;
      this.loading = false;
    });
  }

  addEmployee() {
    if (this.newEmployee.id && this.newEmployee.name && this.newEmployee.email) {
      const exists = this.employees.some(e => e.id === this.newEmployee.id);
      if (exists) {
        this.showSnack('Employee ID already exists!');
        return;
      }

      this.service.addEmployee(this.newEmployee).subscribe(() => {
        this.newEmployee = { id: null, name: '', email: '' };
        this.getEmployees();
        this.showSnack('Employee added!');
      });
    }
  }

  deleteEmployee(id: number) {
    this.service.deleteEmployee(id).subscribe(() => {
      this.getEmployees();
      this.showSnack('Employee deleted!');
    });
  }

  startEdit(emp: any) {
    this.editEmployee = { ...emp };
  }

  updateEmployee() {
    if (this.editEmployee.name && this.editEmployee.email) {
      this.service.updateEmployee(this.editEmployee).subscribe(() => {
        this.editEmployee = null;
        this.getEmployees();
        this.showSnack('Employee updated!');
      });
    }
  }

  cancelEdit() {
    this.editEmployee = null;
  }
}
