import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
  inputs: ['aChild2','child2UserName'],
  outputs:['addressEvent'],
  standalone: true
})
export class Child2Component {
  aChild2!: number 
  child2UserName!: string;
  userAddress:  string = 'knoxville';

  addressEvent = new EventEmitter()
  sendData(){
    this.addressEvent.emit(this.userAddress)
  }
}
