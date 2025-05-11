import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-databinding',
  imports: [
    FormsModule,
    NgClass,
    CommonModule
  ],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  userName: string = 'Sachin Tendulkar';
  img_url: string = 'https://media.gettyimages.com/id/110022215/photo/group-b-2011-icc-world-cup.jpg?s=612x612&w=gi&k=20&c=EE4JlD8exE33eH498PFA9hGxFmecnwbIy0MAGQn_toA=';

  myColSpanVal: number = 2;

  flag: boolean = false;
  f1() {
    alert("I am f1...")
  }

  num1: number = 1;
  num2: number = 1;

  addResult: number = 0;
  addition(val1: string | number, val2: string | number) {
    this.addResult = +val1 + +val2;
  }

  
   // Assignment 1
   showParagraph: boolean = true;
  togglePara() {
    this.showParagraph = !this.showParagraph;
  }
 
   // Assignment 2
   message: string = '';
 
   // Assignment 3
   states: string[] = ['Andhra Pradesh', 'Telangana', 'Karnataka', 'Tamil Nadu'];
   selectedState: string = '';
 
   // Assignment 4
   op1: number = 0;
   op2: number = 0;
   operator: string = '+';
   getResult(): number {
     switch (this.operator) {
       case '+': return this.op1 + this.op2;
       case '-': return this.op1 - this.op2;
       case '*': return this.op1 * this.op2;
       case '/': return this.op2 !== 0 ? this.op1 / this.op2 : 0;
       default: return 0;
     }
   }
 
   // Assignment 5
   showPassword: boolean = false;
 
   // Assignment 6
   counter: number = 0;
   increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  reset() {
   this.counter = 0;
  }

  isDarkTheme: boolean = false;

  toggleTheme() {
    document.body.classList.toggle('dark-theme');
  }

}
 

