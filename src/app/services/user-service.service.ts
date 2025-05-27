import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserServiceService {
  private url = 'http://localhost:3000/employees'; 

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<any> {
    return this.http.get(this.url);
  }

  addEmployee(emp: any): Observable<any> {
    return this.http.post(this.url, emp);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

  updateEmployee(emp: any): Observable<any> {
    return this.http.put(`${this.url}/${emp.id}`, emp);
  }
}
