import { Component, inject } from '@angular/core';
import { MathService } from '../../services/math.service';

@Component({
  selector: 'app-math2',
  imports: [],
  templateUrl: './math2.component.html',
  styleUrl: './math2.component.css'
})
export class Math2Component {
  mathService = inject(MathService);

  ngOnInit(){
    console.log(this.mathService.sub(5 , 3));
    
  }

}
