import { Component } from '@angular/core';
import { Child2Component } from '../child2/child2.component';
import { Child1Component } from '../child1/child1.component';

@Component({
  selector: 'app-parent',
  imports: [
    Child2Component,
    Child1Component
  ],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  a: string = 'Paraent class';

}
