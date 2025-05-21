import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash, faPlus, faEye } from '@fortawesome/free-solid-svg-icons';
import Snackbar from 'awesome-snackbar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-crud',
  standalone: true,
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  templateUrl: './employee-crud.component.html',
  styleUrl: './employee-crud.component.css'
})
export class EmployeeCrudComponent {
  faTrash = faTrash;
  faPlus = faPlus;
  faEye = faEye;

  showModal = false;
  isReadOnly = false;

  formData = this.resetForm();

  employees = [
    {
      id: 1,
      name: "Rahul Sharma",
      department: "Engineering",
      position: "Backend Developer",
      salary: 90000,
      email: "rahul.sharma@example.in"
    },
    {
      id: 2,
      name: "Priya Mehta",
      department: "HR",
      position: "HR Manager",
      salary: 70000,
      email: "priya.mehta@example.in"
    },
    {
      id: 3,
      name: "Amit Verma",
      department: "Marketing",
      position: "Digital Marketer",
      salary: 65000,
      email: "amit.verma@example.in"
    },
    {
      id: 4,
      name: "Sneha Iyer",
      department: "Finance",
      position: "Accountant",
      salary: 75000,
      email: "sneha.iyer@example.in"
    }
  ];

  openAddModal() {
    this.formData = this.resetForm();
    this.isReadOnly = false;
    this.showModal = true;
  }

  viewEmployee(emp: any) {
    this.formData = { ...emp };
    this.isReadOnly = true;
    this.showModal = true;
  }

  saveEmployee() {
    const exists = this.employees.some(e => e.id === this.formData.id);
    if (exists) {
      new Snackbar('Employee with this ID already exists.');
      return;
    }
    this.employees.push({ ...this.formData });
    new Snackbar('Employee Added Successfully!');
    this.showModal = false;
  }

  deleteEmployee(id: number) {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to delete this employee?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete",
      cancelButtonText: "Cancel"
    }).then(result => {
      if (result.isConfirmed) {
        this.employees = this.employees.filter(e => e.id !== id);
        Swal.fire("Deleted!", "Employee has been removed.", "success");
      }
    });
  }

  resetForm() {
    return {
      id: 0,
      name: '',
      department: '',
      position: '',
      salary: 0,
      email: ''
    };
  }
}
