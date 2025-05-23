import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salutation'
})
export class SalutationPipe implements PipeTransform {

  transform(name: string, gender: string): string {
    const title = gender === 'male' ? 'Mr.' : 'Miss.';
    return `${title} ${name}`;
  }

}
