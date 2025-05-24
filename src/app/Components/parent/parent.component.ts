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
  styleUrl: './parent.component.css',
  standalone: true,
  
})
export class ParentComponent {
  a: number = 10;
  address_parent!: string

  receiveDataFromChild(addressDataFromChild : string){
    this.address_parent = addressDataFromChild
  }
}
