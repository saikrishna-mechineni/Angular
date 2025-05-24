import { Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee-add.component.html',
  styleUrl: './employee-add.component.css',
  inputs: ['employeeToEdit', 'isEditMode'],
  outputs: ['addOrUpdateEvent']
})
export class EmployeeAddComponent {
  employeeToEdit: any = null;
  isEditMode = false;

  name = '';
  gender = '';
  salary: number | null = null;

  addOrUpdateEvent = new EventEmitter();

  ngOnChanges() {
    if (this.employeeToEdit) {
      this.name = this.employeeToEdit.name;
      this.gender = this.employeeToEdit.gender;
      this.salary = this.employeeToEdit.salary;
    }
  }

  submitForm() {
    if (this.name && this.gender && this.salary != null) {
      const emp = { name: this.name, gender: this.gender, salary: this.salary };
      this.addOrUpdateEvent.emit(emp);
      this.resetForm();
    }
  }

  resetForm() {
    this.name = '';
    this.gender = '';
    this.salary = null;
  }
}
