import { Component } from '@angular/core';
//import { DatabindingComponent } from '../databinding/databinding.component';
import { EmployeeCrudComponent } from '../employee-crud/employee-crud.component';
import { PipesComponent } from '../pipes/pipes.component';
import { PipesOrdinalComponent } from '../pipes-ordinal/pipes-ordinal.component';
import { ParentComponent } from '../parent/parent.component';
import { EmployeeParentComponent } from '../employee-parent/employee-parent.component';
import { Math1Component } from '../math1/math1.component';
import { Math2Component } from '../math2/math2.component';


@Component({
  selector: 'app-body',
  imports: [
    EmployeeCrudComponent,
    PipesComponent,
    PipesOrdinalComponent,
    ParentComponent,
    EmployeeParentComponent,
    Math1Component,
    Math2Component
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
