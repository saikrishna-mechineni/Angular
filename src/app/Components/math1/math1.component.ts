import { Component } from '@angular/core';
import { MathService } from '../../services/math.service';

@Component({
  selector: 'app-math1',
  imports: [],
  templateUrl: './math1.component.html',
  styleUrl: './math1.component.css'
})
export class Math1Component {
  constructor(private mathService: MathService){

  }

  ngOnInit(){
    console.log(this.mathService.add(10,20));
    
  }
}
