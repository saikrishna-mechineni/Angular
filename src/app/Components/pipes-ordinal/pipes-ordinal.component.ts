import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheckCircle, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pipes-ordinal',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule
  ],
  templateUrl: './pipes-ordinal.component.html',
  styleUrl: './pipes-ordinal.component.css'
})
export class PipesOrdinalComponent {
  // FontAwesome icons
  faCheckCircle = faCheckCircle;
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;

  // Inputs
  inputNumber: number | null = null;
  inputNumber2: number | null = null;
  dob: string = '';

  // Snackbar
  snackbarVisible = false;
  snackbarMessage = '';
  snackbarIcon: any = null;

  // Employees
  employees = [
    { name: 'Ravi Kumar', gender: 'male', position: 'Developer' },
    { name: 'Sneha Reddy', gender: 'female', position: 'Tester' }
  ];

  newEmployee = { name: '', gender: '', position: '' };
  isEditing = false;
  editIndex: number | null = null;

  // CRUD Operations
  addEmployee() {
    if (!this.newEmployee.name || !this.newEmployee.gender || !this.newEmployee.position) return;
    this.employees.push({ ...this.newEmployee });
    this.newEmployee = { name: '', gender: '', position: '' };
    this.showSnackbar('Employee added successfully!', this.faCheckCircle);
  }

  editEmployee(index: number) {
    this.isEditing = true;
    this.editIndex = index;
    this.newEmployee = { ...this.employees[index] };
  }

  updateEmployee() {
    if (this.editIndex !== null) {
      this.employees[this.editIndex] = { ...this.newEmployee };
      this.cancelEdit();
      this.showSnackbar('Employee updated successfully!', this.faEdit);
    }
  }

  deleteEmployee(index: number) {
    this.employees.splice(index, 1);
    this.showSnackbar('Employee deleted!', this.faTrashAlt);
  }

  cancelEdit() {
    this.isEditing = false;
    this.editIndex = null;
    this.newEmployee = { name: '', gender: '', position: '' };
  }

  // Helpers
  salutation(name: string, gender: string): string {
    const title = gender === 'male' ? 'Mr.' : 'Miss.';
    return `${title} ${name}`;
  }

  ordinal(value: number): string {
    if (isNaN(value)) return value as any;
    const suffixes = ['th', 'st', 'nd', 'rd'];
    const v = value % 100;
    const suffix = (v >= 11 && v <= 13) ? 'th' : suffixes[v % 10] || 'th';
    return `${value}${suffix}`;
  }

  roman(value: number): string {
    if (isNaN(value) || value <= 0 || value >= 4000) return 'Invalid';
    const map: { [key: number]: string } = {
      1000: 'M', 900: 'CM', 500: 'D', 400: 'CD',
      100: 'C', 90: 'XC', 50: 'L', 40: 'XL',
      10: 'X', 9: 'IX', 5: 'V', 4: 'IV', 1: 'I'
    };
    let result = '';
    for (const key of Object.keys(map).map(Number).sort((a, b) => b - a)) {
      while (value >= key) {
        result += map[key];
        value -= key;
      }
    }
    return result;
  }

  calculateAge(dateString: string): string {
    if (!dateString) return '';
    const birthDate = new Date(dateString);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    const d = today.getDate() - birthDate.getDate();
    if (m < 0 || (m === 0 && d < 0)) {
      age--;
    }
    return `${age} year${age !== 1 ? 's' : ''} old`;
  }

  // Snackbar
  showSnackbar(message: string, icon: any) {
    this.snackbarMessage = message;
    this.snackbarIcon = icon;
    this.snackbarVisible = true;
    setTimeout(() => this.snackbarVisible = false, 3000);
  }
}
