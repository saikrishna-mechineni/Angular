import { Component } from '@angular/core';
//import { DatabindingComponent } from '../databinding/databinding.component';
import { EmployeeCrudComponent } from '../employee-crud/employee-crud.component';
import { PipesComponent } from '../pipes/pipes.component';
import { PipesOrdinalComponent } from '../pipes-ordinal/pipes-ordinal.component';


@Component({
  selector: 'app-body',
  imports: [
    EmployeeCrudComponent,
    PipesComponent,
    PipesOrdinalComponent
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
