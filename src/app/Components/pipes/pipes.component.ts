import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RemainingPipe } from '../../pipes/remaining.pipe';


@Component({
  selector: 'app-pipes',
  imports: [
    CommonModule,
    FormsModule,
    RemainingPipe
  ],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
userName : string = "Sai Krishna";
salary : number = 1000;
today : Date = new Date();
user : object = {name : 'sai', age : 25}
numArr : number[] = [10,20,30,40,50]
msg : string ='';

}
