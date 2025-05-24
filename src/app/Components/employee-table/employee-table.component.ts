import { Component, EventEmitter } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-table',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.css',
  inputs: ['employees', 'faEye', 'faTrash'],
  outputs: ['editEvent', 'deleteEvent']
})
export class EmployeeTableComponent {
  employees: any[] = [];
  faEye: any;
  faTrash: any;

  editEvent = new EventEmitter<number>();
  deleteEvent = new EventEmitter<number>();

  trackById(index: number, emp: any): number {
    return emp.id;
  }
}
