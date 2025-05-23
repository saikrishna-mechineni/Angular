import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(employees: any[], searchText: string): any[] {
    if (!Array.isArray(employees)) return [];
    if (!searchText?.trim()) return employees;

    return employees.filter(emp =>
      emp.id.toString().includes(searchText)
    );
  }

}
