import { Component } from '@angular/core';
import { faPlus, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeTableComponent } from '../employee-table/employee-table.component';

@Component({
  selector: 'app-employee-parent',
  standalone: true,
  imports: [CommonModule, FormsModule, FontAwesomeModule, EmployeeTableComponent],
  templateUrl: './employee-parent.component.html',
  styleUrl: './employee-parent.component.css',
})
export class EmployeeParentComponent {
  faPlus = faPlus;
  faEye = faEye;
  faTrash = faTrash;

  showModal = false;
  isReadOnly = false;
  selectedEmployeeIndex: number | null = null;

  formData = {
    id: 0,
    name: '',
    department: '',
    position: '',
    salary: 0,
    email: ''
  };

  employees = [
    { id: 1, name: 'Ravi', department: 'IT', position: 'Developer', salary: 60000, email: 'ravi@example.com' },
    { id: 2, name: 'Sneha', department: 'HR', position: 'Manager', salary: 65000, email: 'sneha@example.com' }
  ];

  openAddModal() {
    this.formData = { id: 0, name: '', department: '', position: '', salary: 0, email: '' };
    this.isReadOnly = false;
    this.selectedEmployeeIndex = null;
    this.showModal = true;
  }

  viewEmployee(emp: any) {
    this.formData = { ...emp };
    this.isReadOnly = true;
    this.showModal = true;
  }

  editEmployee(index: number) {
    this.formData = { ...this.employees[index] };
    this.selectedEmployeeIndex = index;
    this.isReadOnly = false;
    this.showModal = true;
  }

  saveEmployee() {
    if (this.selectedEmployeeIndex !== null) {
      this.employees[this.selectedEmployeeIndex] = { ...this.formData };
    } else {
      this.employees.push({ ...this.formData });
    }
    this.showModal = false;
  }

  deleteEmployee(index: number) {
    this.employees.splice(index, 1);
  }

  trackById(index: number, emp: any) {
    return emp.id;
  }
}
